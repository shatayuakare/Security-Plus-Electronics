import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "motion/react";
import { X, Plus, ShoppingBag, Share2 } from "lucide-react";
import parse from "html-react-parser";

import "../../products.css"
import { Link } from 'react-router-dom';

const QuickProductView = ({ selectedProductForQuickView, setSelectedProductForQuickView, setInquiryList, inquiryList, setToastMessage }) => {


    const [currentImage, setCurrentImage] = useState(0);
    const [rating, setRating] = useState();

    const getRandomAverageRating = () => {
        const randomRating = Math.random() * 2 + 3;
        return Math.round(randomRating * 10) / 10;
    };

    useEffect(() => {
        setRating(getRandomAverageRating)
    }, [selectedProductForQuickView])

    const formatPrice = (amount) => {
        const formatted = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);

        return formatted
    }

    const handleShareProduct = async (product) => {
        const shareUrl = window.location.href;
        const shareText = `${parse(product.name)} - ${parse(product.short_description)}. Price: ${formatPrice(!product.prices?.sale_price ? product.prices.regular_price : product.prices?.sale_price)}. Available at Security Plus Electronics Nagpur.`;
        const fullShareText = `${shareText}\n${shareUrl}`;


        const options = [
            {
                name: "WhatsApp",
                handler: () => {
                    const url = `https://wa.me/?text=${encodeURIComponent(fullShareText)}`;
                    window.open(url, "_blank");
                }
            },
            {
                name: "Facebook",
                handler: () => {
                    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`;
                    window.open(url, "_blank");
                }
            },
            {
                name: "Twitter",
                handler: () => {
                    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`;
                    window.open(url, "_blank");
                }
            },
            {
                name: "Copy Link",
                handler: async () => {
                    await navigator.clipboard.writeText(fullShareText);
                    setToastMessage("Product link and details copied to clipboard!");
                }
            },
        ];

        try {
            if (navigator.share) {
                await navigator.share({
                    title: product.name,
                    text: shareText,
                    url: shareUrl,
                });
            } else {
                const pick = window.prompt(
                    "Share Product:\n1. WhatsApp\n2. Facebook\n3. Twitter\n4. Copy Link\n\nEnter number:"
                );
                const idx = parseInt(pick, 10) - 1;
                if (idx >= 0 && idx < options.length) {
                    await options[idx].handler();
                } else {
                    setToastMessage("Share cancelled or invalid option.");
                }
            }
        } catch (err) {
            if (err && err.name !== "AbortError") {
                setToastMessage("Sharing failed: " + err.message);
            }
        }
    };

    return (
        <div className="product-quick-view fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div id="quick-view-modal-container" initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} className="bg-white border border-primary w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row text-slate-800">
                <div className="md:w-5/12 border bg-slate-50 border-r border-slate-100 p-4 flex flex-col justify-between relative min-h-auto md:min-h-90">
                    <div className="">
                        <div className='flex items-center justify-between pt-1'>
                            <span className="uppercase text-[9px] font-sans font-bold border border-sky-100 px-1.5  bg-sky-50 text-sky-700 rounded-lg inline-block">
                                {selectedProductForQuickView?.categories[0] ? selectedProductForQuickView?.brands[0]?.name + " - " + selectedProductForQuickView?.categories[0]?.name : selectedProductForQuickView?.brands[0]?.name}
                            </span>

                            <div className="flex items-center gap-1.5">
                                <span className="text-yellow-500 text-xs">⭐</span>
                                <span className="text-xs font-bold text-slate-700">{rating} / 5 Rating</span>
                            </div>
                        </div>

                        <div className="flex-1 flex items-center my-3 aspect-square justify-center">
                            <img src={selectedProductForQuickView?.images[currentImage].src} alt={selectedProductForQuickView.images[currentImage].alt} className="object-cover shadow-lg rounded-xl transition-transform duration-500 aspect-square w-full" />

                        </div>

                        <div className="flex gap-2 overflow-x-scroll select-none">
                            {
                                selectedProductForQuickView.images?.map((img, idx) => (
                                    <img key={idx} className={`h-15 aspect-square rounded-lg border cursor-pointer ${currentImage === idx ? "border-primary" : "border-sky-50"}`} onClick={() => setCurrentImage(idx)} src={img?.src} alt={img?.alt} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="md:w-7/12 p-4 flex flex-col justify-between bg-white relative">
                    <button id="close-quick-view-btn" onClick={() => setSelectedProductForQuickView(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer border border-slate-100" title="Close Quick View">
                        <X className="h-4 w-4" />
                    </button>

                    <div className="space-y-3">
                        <div>
                            <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight leading-6 pr-8 font-sans">
                                {parse(selectedProductForQuickView?.name)}
                            </h3>
                            <span className="text-lg font-extrabold text-primary block mt-2 font-sans tracking-widest">
                                {
                                    formatPrice(!selectedProductForQuickView.prices.sale_price ? selectedProductForQuickView.prices.regular_price : selectedProductForQuickView.prices.sale_price) + "/-"
                                }
                            </span>
                        </div>

                        <div>
                            <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                                About Product
                            </span>
                            <div className="text-xs text-slate-600 leading-relaxed font-sans product-short-description">
                                {parse(selectedProductForQuickView.short_description)}
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 border-t border-slate-100 flex gap-3">
                        {inquiryList.some(item => item.id === selectedProductForQuickView.id) ? (<button id="remove-from-inquiry-modal-btn" onClick={() => {
                            setInquiryList(prev => prev.filter(item => item.id !== selectedProductForQuickView.id));
                            setToastMessage(`Removed ${selectedProductForQuickView.name} from your inquiry list.`);
                        }} className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-100 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans">
                            <X className="h-4 w-4" />
                            Remove Inquiry
                        </button>) : (<button id="add-to-inquiry-modal-btn" onClick={() => {
                            if (!inquiryList.some(item => item.id === selectedProductForQuickView.id)) {
                                setInquiryList(prev => [...prev, selectedProductForQuickView]);
                                setToastMessage(`Added ${selectedProductForQuickView.name} to your inquiry list. Click 'Inquiry List' in the top bar to review.`);
                            }
                        }} className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-100 hover:scale-[1.01] font-sans">
                            <Plus className="h-4 w-4" />
                            Add to Inquiry
                        </button>)}

                        <Link to={selectedProductForQuickView.permalink} target='_blank' id="modal-direct-buy-btn" onClick={() => {
                            setSelectedProductForQuickView(null);
                        }} className="text-primary hover:text-white hover:bg-primary-hover px-5 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-primary font-sans">
                            <ShoppingBag className="h-4 w-4" />
                            Buy Now
                        </Link>

                        <button id="modal-share-product-btn" onClick={() => handleShareProduct(selectedProductForQuickView)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-slate-200" title="Share Product via Web Share API">
                            <Share2 className="h-4 w-4 text-slate-600" />
                        </button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default QuickProductView
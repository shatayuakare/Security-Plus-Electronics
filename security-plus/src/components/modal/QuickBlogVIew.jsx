import React from 'react'
import { motion } from 'motion/react';
import { Facebook, Link, Linkedin, Share2, Twitter, X } from 'lucide-react';
import { toast } from 'react-toastify';

const QuickBlogVIew = ({ setSelectedBlog, selectedBlog, setToastMessage }) => {
    return (
        <div className="product-quick-view fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">

            <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                className="bg-white border border-sky-5z`00 w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative text-slate-800 flex flex-col"
            >

                <div className="px-5 py-3 border-b border-slate-100 bg-slate-50 flex justify-between items-start shrink-0">

                    <div className="min-w-0 pr-4">

                        <div className="flex items-center gap-2">

                            <span className="uppercase text-[9px] font-bold border border-sky-100 px-2 py-1 bg-sky-50 text-sky-700 rounded-lg">
                                {selectedBlog.category}
                            </span>

                            <span className="text-[9px] text-slate-400 uppercase tracking-wider font-sans">
                                • {selectedBlog.readTime}
                            </span>

                        </div>

                        <h3 className="text-lg md:text-2xl font-bold text-slate-900 uppercase tracking-tight leading-tight font-sans">
                            {selectedBlog.title}
                        </h3>

                    </div>

                    <button
                        onClick={() => setSelectedBlog(null)}
                        className="text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer border border-slate-100 shrink-0"
                        title="Close Article"
                    >
                        <X className="h-4 w-4" />
                    </button>

                </div>

                <div className="px-5 md:px-7  overflow-y-auto font-sans text-xs text-slate-600 leading-relaxed">

                    <div className="flex my-4 items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl">

                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm uppercase shrink-0">
                            {selectedBlog.author.slice(0, 2)}
                        </div>

                        <div className="min-w-0">

                            <span className="text-slate-900 text-xs font-bold block uppercase truncate">
                                {selectedBlog.author}
                            </span>

                            <span className="text-[9px] text-slate-400 uppercase block mt-0.5">
                                {selectedBlog.authorRole}
                            </span>

                        </div>

                        <div className="ml-auto text-right text-[9px] text-slate-400 uppercase shrink-0">

                            <span>Published</span>

                            <span className="text-slate-700 font-bold block mt-0.5">
                                {selectedBlog.date}
                            </span>

                        </div>

                    </div>


                    <div className="space-y-4 whitespace-pre-line text-slate-600 leading-relaxed">
                        {selectedBlog.content}
                    </div>

                    {selectedBlog?.tags && (
                        <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2 items-center">

                            <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                                Tags:
                            </span>

                            {selectedBlog.tags.map((tag, idx) => (
                                <span
                                    key={idx}
                                    className="text-[9px] bg-sky-50 border border-sky-100 px-2.5 py-1 text-sky-700 uppercase font-bold rounded-lg"
                                >
                                    #{tag}
                                </span>
                            ))}

                        </div>
                    )}


                    <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">

                        <div className="flex items-center gap-2">

                            <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                                Share Article:
                            </span>

                            <div className="flex items-center gap-1.5">

                                {/* X */}
                                <button
                                    onClick={() => {
                                        const url = encodeURIComponent(window.location.href);
                                        const text = encodeURIComponent(
                                            `Check out this security insight: ${selectedBlog.title}`
                                        );

                                        window.open(
                                            `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
                                            "_blank"
                                        );
                                    }}
                                    className="p-2 border border-slate-200 hover:border-primary hover:bg-sky-50 text-slate-400 hover:text-primary transition-all rounded-xl cursor-pointer flex items-center justify-center"
                                    title="Share on X"
                                >
                                    <Twitter className="h-3.5 w-3.5" />
                                </button>

                                <button
                                    onClick={() => {
                                        const url = encodeURIComponent(window.location.href);

                                        window.open(
                                            `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
                                            "_blank"
                                        );
                                    }}
                                    className="p-2 border border-slate-200 hover:border-primary hover:bg-sky-50 text-slate-400 hover:text-primary transition-all rounded-xl cursor-pointer flex items-center justify-center"
                                    title="Share on LinkedIn"
                                >
                                    <Linkedin className="h-3.5 w-3.5" />
                                </button>

                                <button
                                    onClick={() => {
                                        const url = encodeURIComponent(window.location.href);

                                        window.open(
                                            `https://www.facebook.com/sharer/sharer.php?u=${url}`,
                                            "_blank"
                                        );
                                    }}
                                    className="p-2 border border-slate-200 hover:border-primary hover:bg-sky-50 text-slate-400 hover:text-primary transition-all rounded-xl cursor-pointer flex items-center justify-center"
                                    title="Share on Facebook"
                                >
                                    <Facebook className="h-3.5 w-3.5" />
                                </button>

                                <button
                                    onClick={() => {
                                        const url = encodeURIComponent(window.location.href);
                                        const text = encodeURIComponent(
                                            `Read "${selectedBlog.title}" at Security Plus Electronics`
                                        );

                                        window.open(
                                            `https://api.whatsapp.com/send?text=${text}%20${url}`,
                                            "_blank"
                                        );
                                    }}
                                    className="p-2 border border-slate-200 hover:border-primary hover:bg-sky-50 text-slate-400 hover:text-primary transition-all rounded-xl cursor-pointer flex items-center justify-center"
                                    title="Share on WhatsApp"
                                >
                                    <Share2 className="h-3.5 w-3.5" />
                                </button>

                            </div>

                        </div>


                        <button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    `${window.location.origin}/blog/${selectedBlog.id || "article"}`
                                );

                                setToastMessage("Secure link copied to clipboard.");
                            }}
                            className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 hover:border-primary text-slate-500 hover:text-primary hover:bg-sky-50 transition-all text-[10px] font-bold tracking-wider uppercase rounded-xl cursor-pointer self-start sm:self-auto"
                        >
                            <Link className="h-3 w-3" />
                            Copy Secure Link
                        </button>

                    </div>

                </div>


                <div className="p-4 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row justify-end gap-2.5 font-sans shrink-0">

                    <button
                        onClick={() => setSelectedBlog(null)}
                        className="px-5 py-2.5 border border-slate-200 bg-white hover:bg-slate-100 text-slate-600 text-[10px] font-bold tracking-wider uppercase transition-all rounded-xl cursor-pointer"
                    >
                        Close Article
                    </button>


                    <button
                        onClick={() => setToastMessage("Contact Details not available")}
                        className="bg-primary hover:bg-primary text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-primary transition-all rounded-xl cursor-pointer shadow-md shadow-sky-100"
                    >
                        Discuss with Advisor
                    </button>

                </div>

            </motion.div>
        </div>
    )
}

export default QuickBlogVIew
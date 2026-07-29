import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import "../products.css"
import { ShoppingBag, ExternalLink, Heart, Video, Cpu, LockKeyhole, HardDrive, Router, BatteryCharging, Eye } from "lucide-react";
import BrandCarousel from "./BrandCarousel";
import { BlurUpImage, getProductImageUrls } from "./BlurUpImage";
import PRODUCTS from "../json/wooProducts.json"
import parse from "html-react-parser";
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12
    }
  },
  viewport: { once: true, margin: "-100px" }
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};
export function ProductsCatalog({ products, productCategories, customerUser, wishlist, toggleWishlist, setToastMessage, setSelectedProductForQuickView }) {



  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");
  const [productSortOption, setProductSortOption] = useState("default");

  useEffect(() => {
    console.log(PRODUCTS[0])
  })
  function htmlToText(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="py-16 px-8 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto text-sans">
          <div className="text-center mb-12">
            <span className="font-sans font-bold text-[10px] tracking-widest text-sky-600 bg-sky-50 px-3.5 py-1.5 border border-sky-100 rounded-full inline-block mb-4">
              Woston Security Hardware Catalog
            </span>
            <h1 className="text-3xl md:text-5xl font-sans font-extrabold text-slate-900 tracking-tight uppercase">
              Professional Surveillance &amp; Infrastructure
            </h1>
            <p className="text-sm text-slate-500 max-w-2xl mx-auto mt-4 leading-relaxed">
              We deal directly with industrial-grade hardware. Browse our active catalogue or connect to our dedicated B2B e-commerce store for wholesale orders and stock telemetry.
            </p>

            {/* External Store Banner */}
            <div className="mt-8 p-6 bg-white border border-slate-200/80 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left rounded-2xl shadow-sm">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-sky-600" />
                  WOSTON ONLINE SALES PORTAL
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-lg leading-relaxed">
                  Our primary secure digital storefront is hosting live stock data, delivery estimates for Nagpur, Pune, and Mumbai regions, and direct credit card merchant channels.
                </p>
              </div>
              <button onClick={() => window.open("https://woston.in", "_blank")} className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-bold text-[10px] tracking-widest uppercase border border-sky-600 hover:border-sky-700 transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-sm">
                <span>GO TO WOSTON STORE</span>
                <ExternalLink className="h-3 w-3" />
              </button>
            </div>
          </div>

          <div className="mb-12">
            <BrandCarousel />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 mb-10 bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
              {["All", ...productCategories].map((cat) => (<button key={cat} onClick={() => setBlogCategoryFilter(cat)} className={`text-[10px] uppercase tracking-wider px-4.5 py-2.5 border transition-all rounded-full font-bold cursor-pointer ${blogCategoryFilter === cat
                ? "bg-sky-600 border-sky-600 text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {cat}
              </button>))}
            </div>

            <div className="flex items-center gap-2.5 w-full lg:w-auto self-stretch lg:self-auto shrink-0 justify-end">
              <span className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider whitespace-nowrap">
                SORT BY:
              </span>
              <select value={productSortOption} onChange={(e) => setProductSortOption(e.target.value)} className="bg-white border border-slate-200 hover:border-sky-500 text-slate-800 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans cursor-pointer transition-colors shadow-sm w-full lg:w-auto min-w-45">
                <option value="default">Recommended (Original)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: Highest First</option>
              </select>
            </div>
          </div>

          <motion.div key={`${blogCategoryFilter}-${productSortOption}`} variants={staggerContainer} initial="initial" animate="whileInView" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* {(() => {
              const filtered = products.filter(p => {
                if (blogCategoryFilter === "All")
                  return true;
                return p.category === blogCategoryFilter;
              });

              const sorted = [...filtered].sort((a, b) => {
                if (productSortOption === "price-asc" || productSortOption === "price-desc") {
                  const priceA = parseFloat(a.price.replace(/[^\d.]/g, "")) || 0;
                  const priceB = parseFloat(b.price.replace(/[^\d.]/g, "")) || 0;
                  return productSortOption === "price-asc" ? priceA - priceB : priceB - priceA;
                }
                else if (productSortOption === "rating-desc") {
                  return b.rating - a.rating;
                }
                return 0;
              });
              return sorted.map((product) => (<motion.div layout variants={staggerItem} key={product.id} whileHover={{
                scale: 1.02,
                borderColor: "#0284C7",
                boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.1)"
              }} className="bg-white border border-slate-200/80 flex flex-col justify-between p-6 relative rounded-2xl group cursor-pointer transition-all duration-300 shadow-sm">
                <div>
                  <div className="flex justify-between items-center mb-4 text-[9px] text-slate-500 font-bold">
                    <span className="uppercase border border-sky-100 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg">
                      {product.category}
                    </span>
                    <span className="flex items-center gap-1">
                      ⭐ {product.rating}
                    </span>
                  </div>

                  <div className="aspect-video bg-slate-100 border border-slate-100 rounded-xl mb-4 relative group-hover:border-sky-200 transition-colors overflow-hidden flex items-center justify-center">
                    {(() => {
                      const urls = getProductImageUrls(product.image);
                      return (<BlurUpImage src={urls.high} placeholderSrc={urls.low} alt={product.name} className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110" containerClassName="absolute inset-0 w-full h-full" />);
                    })()}

                    <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />

                    {product.isBestseller && (<span className="absolute top-2.5 left-2.5 text-[8px] font-extrabold bg-[#FF5A00] text-white px-2.5 py-1 rounded-md uppercase tracking-wider z-20 shadow-sm">
                      ★ Bestseller
                    </span>)}
                    {product.isNewArrival && (<span className="absolute top-2.5 left-2.5 text-[8px] font-extrabold bg-sky-600 text-white px-2.5 py-1 rounded-md uppercase tracking-wider z-20 shadow-sm">
                      New Arrival
                    </span>)}

                    <button id={`wishlist-toggle-${product.id}`} onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }} className="absolute top-2.5 right-2.5 z-20 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full border border-slate-100 shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer" title={wishlist.includes(product.id) ? "Remove from wishlist" : "Save to wishlist"}>
                      <Heart className={`h-3.5 w-3.5 transition-colors duration-300 ${wishlist.includes(product.id)
                        ? "fill-rose-500 text-rose-500"
                        : "text-slate-500 hover:text-rose-500"}`} />
                    </button>

                    <div className="absolute bottom-2 left-2 p-1.5 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-slate-800 z-20 flex items-center justify-center">
                      {product.image === "cctv" && <Video className="h-4 w-4 text-sky-400" />}
                      {product.image === "ptz" && <Cpu className="h-4 w-4 text-sky-400" />}
                      {product.image === "locks" && <LockKeyhole className="h-4 w-4 text-sky-400" />}
                      {product.image === "storage" && <HardDrive className="h-4 w-4 text-sky-400" />}
                      {product.image === "router" && <Router className="h-4 w-4 text-sky-400" />}
                      {product.image === "battery" && <BatteryCharging className="h-4 w-4 text-sky-400" />}
                    </div>

                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px] z-10">
                      <button id={`quick-view-btn-img-${product.id}`} onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProductForQuickView(product);
                      }} className="bg-white text-slate-900 hover:bg-sky-600 hover:text-white px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-300 z-20">
                        <Eye className="h-3.5 w-3.5" />
                        Quick View
                      </button>
                    </div>

                    <div className="absolute bottom-2 right-2 text-[8px] font-bold text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-1 border border-slate-800 rounded z-20">
                      WOSTON SE-HARDWARE
                    </div>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 uppercase group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {product.desc}
                  </p>

                  <div className="mt-4 border-t border-slate-100 pt-3 space-y-1.5">
                    {product.specs.map((s, idx) => (<div key={idx} className="flex justify-between text-[9px] text-slate-500 font-bold">
                      <span className="uppercase text-slate-400">{s.label}:</span>
                      <span className="text-slate-700 truncate max-w-[150px]">{s.value}</span>
                    </div>))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center z-20">
                  <span className="text-base font-extrabold text-slate-900">{product.price}</span>
                  <div className="flex gap-1.5">
                    <button id={`quick-view-btn-footer-${product.id}`} onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProductForQuickView(product);
                    }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-100/50 px-3 py-1.5 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center gap-1 cursor-pointer">
                      <Eye className="h-3.5 w-3.5 text-sky-600" />
                      Quick View
                    </button>
                    <button id={`purchase-btn-${product.id}`} onClick={(e) => {
                      e.stopPropagation();
                      window.open("https://woston.in", "_blank");
                    }} className="bg-slate-50 hover:bg-sky-600 border border-slate-200 hover:border-sky-600 text-slate-700 hover:text-white px-3 py-1.5 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center gap-1 cursor-pointer shadow-sm">
                      <ShoppingBag className="h-3.5 w-3.5 text-sky-600 hover:text-white" />
                      Purchase
                    </button>
                  </div>
                </div>
              </motion.div>));
            })()} */}


            {
              PRODUCTS.map((product) =>
                <motion.div layout variants={staggerItem} key={product.id} whileHover={{
                  scale: 1.02,
                  borderColor: "#0284C7",
                  boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.1)"
                }} className="bg-white border border-slate-200/80 flex flex-col justify-between p-6 relative rounded-2xl group cursor-pointer transition-all duration-300 shadow-sm">
                  <div>
                    <div className="flex justify-between items-center mb-4 text-[9px] text-slate-500 font-bold">
                      <span className="uppercase border border-sky-100 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg">
                        {/* {product.categories[0]} */}
                      </span>
                      <span className="flex items-center gap-1">
                        ⭐ {product.rating}
                      </span>
                    </div>

                    <div className="aspect-video bg-slate-100 border border-slate-100 rounded-xl mb-4 relative group-hover:border-sky-200 transition-colors overflow-hidden flex items-center justify-center">
                      {/* {(() => {
                        const urls = getProductImageUrls(product.images[0]);
                        return (<BlurUpImage src={product.images[0]} placeholderSrc={urls.low} alt={product.name} className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110" containerClassName="absolute inset-0 w-full h-full" />);
                      })()} */}
                      <img src={product.images[0].src} alt={product.images[0].alt} className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110" />

                      <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />

                      {product.isBestseller && (<span className="absolute top-2.5 left-2.5 text-[8px] font-extrabold bg-[#FF5A00] text-white px-2.5 py-1 rounded-md uppercase tracking-wider z-20 shadow-sm">
                        ★ Bestseller
                      </span>)}
                      {product.isNewArrival && (<span className="absolute top-2.5 left-2.5 text-[8px] font-extrabold bg-sky-600 text-white px-2.5 py-1 rounded-md uppercase tracking-wider z-20 shadow-sm">
                        New Arrival
                      </span>)}

                      <button id={`wishlist-toggle-${product.id}`} onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }} className="absolute top-2.5 right-2.5 z-20 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full border border-slate-100 shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer" title={wishlist.includes(product.id) ? "Remove from wishlist" : "Save to wishlist"}>
                        <Heart className={`h-3.5 w-3.5 transition-colors duration-300 ${wishlist.includes(product.id)
                          ? "fill-rose-500 text-rose-500"
                          : "text-slate-500 hover:text-rose-500"}`} />
                      </button>

                      <div className="absolute bottom-2 left-2 p-1.5 bg-slate-950/80 backdrop-blur-sm rounded-lg border border-slate-800 z-20 flex items-center justify-center">
                        {product.images[0] === "cctv" && <Video className="h-4 w-4 text-sky-400" />}
                        {product.images[1] === "ptz" && <Cpu className="h-4 w-4 text-sky-400" />}
                        {product.images[2] === "locks" && <LockKeyhole className="h-4 w-4 text-sky-400" />}
                        {product.images[0] === "storage" && <HardDrive className="h-4 w-4 text-sky-400" />}
                        {product.images[1] === "router" && <Router className="h-4 w-4 text-sky-400" />}
                        {product.images[2] === "battery" && <BatteryCharging className="h-4 w-4 text-sky-400" />}
                      </div>

                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px] z-10">
                        <button id={`quick-view-btn-img-${product.id}`} onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProductForQuickView(product);
                        }} className="bg-white text-slate-900 hover:bg-sky-600 hover:text-white px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-300 z-20">
                          <Eye className="h-3.5 w-3.5" />
                          Quick View
                        </button>
                      </div>

                      <div className="absolute bottom-2 right-2 text-[8px] font-bold text-slate-300 bg-slate-950/80 backdrop-blur-sm px-2 py-1 border border-slate-800 uppercase rounded z-20">
                        {/* WOSTON SE-HARDWARE */}
                        {product.sku}
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 uppercase group-hover:text-sky-600 transition-colors">
                      {product.name}
                    </h3>

                    <div className="product-short-description">
                      {parse(product.short_description)}
                    </div>

                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center z-20">
                    <span className="text-base font-extrabold text-slate-900">{product.price}</span>
                    <div className="flex gap-1.5">
                      <button id={`quick-view-btn-footer-${product.id}`} onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProductForQuickView(product);
                      }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-100/50 px-3 py-1.5 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center gap-1 cursor-pointer">
                        <Eye className="h-3.5 w-3.5 text-sky-600" />
                        Quick View
                      </button>
                      <button id={`purchase-btn-${product.id}`} onClick={(e) => {
                        e.stopPropagation();
                        window.open(product.permalink, "_blank");
                      }} className="bg-slate-50 hover:bg-sky-600 border border-slate-200 hover:border-sky-600 text-slate-700 hover:text-white px-3 py-1.5 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center gap-1 cursor-pointer shadow-sm">
                        <ShoppingBag className="h-3.5 w-3.5 text-sky-600 hover:text-white" />
                        Purchase
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            }
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

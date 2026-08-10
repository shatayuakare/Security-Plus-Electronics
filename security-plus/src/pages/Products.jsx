import React, { useEffect, useState } from "react";
import "../products.css"
import { motion } from "motion/react";
import { ShoppingBag, ExternalLink, Heart, Video, Cpu, LockKeyhole, HardDrive, Router, BatteryCharging, Eye } from "lucide-react";
import BrandCarousel from "../components/BrandCarousel";
import { BlurUpImage, getProductImageUrls } from "../components/BlurUpImage";
import PRODUCTS from "../json/wooProducts.json"
import parse from "html-react-parser";
import { Link } from "react-router-dom";

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


export default function Products({ products, productCategories, customerUser, wishlist, toggleWishlist, setToastMessage, setSelectedProductForQuickView }) {

  const [currentPage, setCurrentPage] = useState(1);
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");
  const [productSortOption, setProductSortOption] = useState("default");

  const getCategory = (product) => {
    for (let elem of product.categories) {
      if (/camera/i.test(elem.name)) {
        return "CCTV Camera";
      } else if (/nvr/i.test(elem.name) || /dvr/i.test(elem.name)) {
        return "Video Recorder";
      } else if (/cable/i.test(elem.name)) {
        return "Cables";
      }
    }
    return product.categories[0]?.name || "Other";
  }


  useEffect(() => {

    const fetchProducts = async () => {

      try {

        const response = await fetch(
          `https://woston.in/wp-json/wc/store/v1/products?per_page=12&page=${currentPage}`, { mode: "no-cors" }
        );

        console.log(response)
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log(data)
        setProducts(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchProducts();

  }, [currentPage]);
  // const formattedPrice = new Intl.NumberFormat('en-IN', {
  //   style: 'currency',
  //   currency: 'INR'
  // }).format(price);

  const formatPrice = (amount) => {
    const formatted = new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0 // Removes paisa (.00)
    }).format(amount);

    return formatted

  }
  // console.log(products[3])
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="py-16 px-8 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto text-sans">
          <div className="text-center mb-12">
            <span className="font-sans font-bold text-[10px] tracking-widest text-primary bg-sky-50 px-3.5 py-1.5 border border-sky-100 rounded-full inline-block mb-4">
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
                  <ShoppingBag className="h-4 w-4 text-primary" />
                  WOSTON ONLINE SALES PORTAL
                </h3>
                <p className="text-xs text-slate-500 mt-1 max-w-lg leading-relaxed">
                  Our primary secure digital storefront is hosting live stock data, delivery estimates for Nagpur, Pune, and Mumbai regions, and direct credit card merchant channels.
                </p>
              </div>
              <button onClick={() => window.open("https://woston.in", "_blank")} className="bg-primary hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-bold text-[10px] tracking-widest uppercase border border-primary hover:border-sky-700 transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-sm">
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
                ? "bg-primary border-primary text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"}`}>
                {cat}
              </button>))}
            </div>

            <div className="flex items-center gap-2.5 w-full lg:w-auto self-stretch lg:self-auto shrink-0 justify-end">
              <span className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider whitespace-nowrap">
                SORT BY:
              </span>
              <select value={productSortOption} onChange={(e) => setProductSortOption(e.target.value)} className="bg-white border border-slate-200 hover:border-primary text-slate-800 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary font-sans cursor-pointer transition-colors shadow-sm w-full lg:w-auto min-w-45">
                <option value="default">Recommended (Original)</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating-desc">Rating: Highest First</option>
              </select>
            </div>
          </div>

          <motion.div key={`${blogCategoryFilter}-${productSortOption}`} variants={staggerContainer} initial="initial" animate="whileInView" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
              products.map((product) =>
                <motion.div layout variants={staggerItem} key={product.id} whileHover={{
                  scale: 1.02,
                  borderColor: "#0284C7",
                  boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.1)"
                }} className="bg-white border border-slate-200/80 flex flex-col justify-between p-4 relative rounded-2xl group cursor-pointer transition-all duration-300 shadow">
                  <div>
                    <div className="flex justify-between items-center mb-2 text-[9px] text-slate-500 font-bold">
                      <span className="uppercase border border-sky-100 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg">
                        {getCategory(product)}
                      </span>
                      <span className="flex pt-1 items-center uppercase gap-1">
                        {product.brands[0].name}
                      </span>
                    </div>

                    <div className="aspect-square bg-slate-100 border border-slate-100 rounded-xl mb-4 relative group-hover:border-sky-200 transition-colors overflow-hidden flex items-center justify-center">

                      <img src={product.images[0].src} alt={product.images[0].alt} className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110" />

                      <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />

                      <span className="absolute top-2.5 left-2.5 text-xs bg-primary text-white px-2.5 pt-2 pb-1 rounded-md uppercase tracking-wider z-20">
                        {product.on_sale && "★ Bestseller"}
                        {!product.on_sale && "Sale"}
                      </span>

                      <button id={`wishlist-toggle-${product.id}`} onClick={(e) => {
                        e.stopPropagation();
                        toggleWishlist(product.id);
                      }} className="absolute top-2.5 right-2.5 z-20 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full border border-slate-100 shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer" title={wishlist.includes(product.id) ? "Remove from wishlist" : "Save to wishlist"}>
                        <Heart className={`h-3.5 w-3.5 transition-colors duration-300 ${wishlist.includes(product.id)
                          ? "fill-rose-500 text-rose-500"
                          : "text-slate-500 hover:text-rose-500"}`} />
                      </button>

                      <div className="absolute bottom-2 left-2 p-1.5 bg-white backdrop-blur-sm rounded-lg z-20 flex items-center justify-center">
                        {true && <Video className="h-4 w-4 text-sky-400" />}
                        {product.images[1] === "ptz" && <Cpu className="h-4 w-4 text-sky-800" />}
                        {product.images[2] === "locks" && <LockKeyhole className="h-4 w-4 text-sky-400" />}
                        {product.images[0] === "storage" && <HardDrive className="h-4 w-4 text-sky-400" />}
                        {product.images[1] === "router" && <Router className="h-4 w-4 text-sky-400" />}
                        {product.images[2] === "battery" && <BatteryCharging className="h-4 w-4 text-sky-400" />}
                      </div>

                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px] z-10">
                        <button id={`quick-view-btn-img-${product.id}`} onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProductForQuickView(product);
                        }} className="bg-white text-slate-900 hover:bg-primary hover:text-white px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-300 z-20">
                          <Eye className="h-3.5 w-3.5" />
                          Quick View
                        </button>
                      </div>

                      <div className="absolute bottom-2 right-2 text-[8px] font-bold bg-white text-primary  backdrop-blur-sm px-2 py-1 uppercase rounded z-20">
                        {product.sku ? product.sku : product.brands[0].name}
                      </div>
                    </div>

                    <h3 className="text-sm font-bold text-slate-900 uppercase group-hover:text-primary transition-colors line-clamp-2">
                      {parse(product.name)}
                    </h3>

                    <div className="product-short-description text-xs line-clamp-3 mt-4">
                      {parse(product.short_description)}
                    </div>

                  </div>

                  <div className="mt-2 pt-4 border-t border-slate-100 flex justify-between items-center z-20">
                    <span className="text-base font-extrabold text-slate-900">
                      {
                        formatPrice(!product.prices.sale_price ? product.prices.regular_price : product.prices.sale_price)
                      }
                    </span>
                    <div className="flex gap-1.5">
                      <button id={`quick-view-btn-footer-${product.id}`} onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProductForQuickView(product);
                      }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-100/50 px-3 py-1.5 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center gap-1 cursor-pointer">
                        <Eye className="h-3.5 w-3.5 text-primary" />
                        Quick View
                      </button>

                      <Link to={product.permalink} target={"_blank"} id={`purchase-btn-${product.id}`} className="bg-slate-50 group-hover:bg-primary border border-primary text-slate-700 group-hover:text-slate-50 px-3 py-1  text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center justify-center gap-1 cursor-pointer ">
                        <ShoppingBag className="h-3.5 w-3.5  text-primary duration-300 group-hover:text-sky-50" />
                        Purchase
                      </Link>
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

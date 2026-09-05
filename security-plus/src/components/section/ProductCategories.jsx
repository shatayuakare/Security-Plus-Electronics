import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import PRODUCT_CATEGORIES from "../../json/productCategories.json"
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 }
  }
};



const ProductCategories = ({ loadedImages, setLoadedImages }) => {

  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");

  return (<section className="py-24 px-8 relative z-20 border-b border-slate-100 bg-white">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="font-sans font-extrabold text-[10px] text-primary tracking-widest uppercase block mb-3">
          HARDWARE CATALOG
        </span>
        <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
          Product Categories
        </h2>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
          Explore Central India's most comprehensive inventory of security hardware. From F1.0 starlight optics to Layer 2 isolated backbones, we secure high-risk infrastructure.
        </p>
      </motion.div>

      <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCT_CATEGORIES.map((category) => (
          <motion.div key={category.id} variants={staggerItem} whileHover={{
            scale: 1.025,
            y: -8,
            borderColor: "#0284C7",
            boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.15)"
          }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white border border-slate-200 flex flex-col justify-between p-0 relative rounded-2xl group transition-all duration-100 overflow-hidden shadow-sm ">
            <div className="absolute rounded-t-2xl top-0 left-0 right-0 h-6 group-hover:border-t-6 bg-transparent group-hover:border-primary transition-all duration-200 z-30"></div>

            <div className="relative h-64 overflow-hidden border-b border-slate-100">
              <div className="absolute inset-0 bg-linear-to-t from-white/0 via-transparent z-10"></div>

              <span className="absolute top-4 left-4 z-20 font-sans text-[9px] bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-lg tracking-wider uppercase font-bold">
                {category.stats}
              </span>
              {!loadedImages[category.id] && (<div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
              </div>)}
              <img src={new URL(`../../assets/images/categories/${category.image}`, import.meta.url).href} alt={category.title} loading="lazy" onLoad={() => setLoadedImages(prev => ({ ...prev, [category.id]: true }))} className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loadedImages[category.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} referrerPolicy="no-referrer" />
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="mb-3">
                  <h3 className="font-sans font-bold text-base text-slate-900 uppercase">
                    {category.title}
                  </h3>
                  <div className="flex gap-1.5 my-2">
                    {category.highlights.map((brand, bIdx) => (<span key={bIdx} className="text-slate-500 border border-sky-200 px-2 py-0.5 text-xs bg-sky-100 rounded">
                      {brand}
                    </span>))}
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  {category.description}
                </p>

                <div className="space-y-2  border-t border-b border-slate-100 py-4">
                  <span className="text-[9px] font-bold text-primary uppercase tracking-widest  mb-1">
                    KEY SPECIFICATIONS
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {category.features.map((feature, fIdx) => (<div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </div>))}
                  </div>
                </div>
              </div>

              <Link to={"/products"} onClick={() => {
                setBlogCategoryFilter(category.filterValue);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} className="w-full py-3 bg-slate-50 hover:bg-primary text-primary hover:text-[#ffffff] border border-slate-200 hover:border-primary text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer shadow flex items-center justify-center gap-2 hover:gap-6">
                <span>EXPLORE PRODUCTS</span>
                <ArrowRight className="h-4.5 w-4.5 -mt-1 font-bold" />
              </Link>

            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>);
};

export default ProductCategories

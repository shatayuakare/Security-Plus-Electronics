import React, { useState } from "react";
import { motion } from "motion/react";
import { Terminal, ShieldCheck, Video } from "lucide-react";
export function GallerySection({ setLightboxIndex, galleryItems }) {
  const [galleryFilter, setGalleryFilter] = useState("all");
  const filteredGalleryItems = galleryItems.filter(item => {
    if (galleryFilter === "all" || !["showroom", "culture", "technical"].includes(galleryFilter)) {
      return true;
    }
    return item.category === galleryFilter;
  });
  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className="py-16 px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12 font-sans">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="font-sans font-extrabold text-[10px] text-primary tracking-widest uppercase block mb-3">
            [ SPE PUBLIC LEDGER // PHOTO ARCHIVES ]
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
            Our Showroom &amp; Culture
          </h2>
          <p className="text-slate-500 text-sm leading-relaxed">
            A visual catalog of Central India's largest security showroom, our active corporate workspaces, specialized training academies, and real-world infrastructure deployments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 border-b border-slate-200 pb-6">
          {["all", "showroom", "culture", "technical"].map((filter) => (<button key={filter} onClick={() => setGalleryFilter(filter)} className={`px-5 py-2.5 rounded-lg font-sans font-bold text-[10px] tracking-widest uppercase transition-all cursor-pointer ${galleryFilter === filter
            ? "bg-primary text-white border border-primary shadow-sm"
            : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"}`}>
            {filter === "all" ? "All Photos" : filter === "showroom" ? "Showroom Tour" : filter === "culture" ? "Company Culture" : "Technical Setup"}
          </button>))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredGalleryItems.map((item, index) => (<motion.div key={item.id} layout whileHover={{ y: -6 }} onClick={() => {
            // Find index in parent array or pass correct index
            const originalIndex = galleryItems.findIndex(g => g.id === item.id);
            if (originalIndex !== -1) {
              setLightboxIndex(originalIndex);
            }
          }} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm flex flex-col group cursor-pointer">
            <div className="relative h-64 overflow-hidden bg-slate-100 flex items-center justify-center">
              {item.isPlaceholder ? (<div className={`w-full h-full flex items-center justify-center p-8 bg-gradient-to-br ${item.bgColor} relative`}>
                <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                {item.iconName === "Terminal" && <Terminal className="h-16 w-16 text-primary/30 animate-pulse" />}
                {item.iconName === "ShieldCheck" && <ShieldCheck className="h-16 w-16 text-indigo-500/30 animate-pulse" />}
                {item.iconName === "Video" && <Video className="h-16 w-16 text-emerald-500/30 animate-pulse" />}
              </div>) : (<img src={item.src} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />)}
              <span className="absolute top-4 left-4 text-[8px] font-bold bg-slate-900/90 text-white border border-slate-800 px-2.5 py-1 uppercase tracking-wider rounded-md">
                {item.category}
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase group-hover:text-primary transition-colors font-sans">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-1 font-sans">{item.desc}</p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-[9px] font-bold uppercase text-slate-400">
                <span>[ Verified Log ]</span>
                <span className="text-primary">{item.id}</span>
              </div>
            </div>
          </motion.div>))}
        </div>
      </div>
    </section>
  </motion.div>);
}

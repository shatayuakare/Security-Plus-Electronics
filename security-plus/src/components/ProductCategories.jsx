import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import cctvCategoryImg from "../assets/images/cctv_category_1782647476026.jpg";
import biometricCategoryImg from "../assets/images/biometric_category_1782647490902.jpg";
import nvrCategoryImg from "../assets/images/nvr_category_1782647503434.jpg";
import networkCategoryImg from "../assets/images/network_category_1782647515140.jpg";
import vdpCategoryImg from "../assets/images/vdp_category_1782647530140.jpg";
import powerCategoryImg from "../assets/images/power_category_1782647544185.jpg";
export const PRODUCT_CATEGORIES = [
    {
        id: "cctv-cameras",
        title: "CCTV Cameras",
        filterValue: "CCTV Cameras",
        image: cctvCategoryImg,
        description: "4K UHD cameras with Starlight low-light capturing, full color in 0 Lux, smart AI patrol, and intrusion detection tracking.",
        features: ["Aperture F1.0 ColorVu", "4MP & 4K Resolution", "EXIR Smart IR Technology", "Vandal-Resistant Housing"],
        stats: "2,500+ INSTALLED",
        highlights: ["Hikvision", "Dahua", "CP Plus"]
    },
    {
        id: "biometric-access",
        title: "Biometric Access",
        filterValue: "Biometric Access",
        image: biometricCategoryImg,
        description: "Facial recognition access controls, high-speed fingerprint scanners, electromagnetic door latch integration, and software SDK logs.",
        features: ["<0.2s Sensing Speed", "1,500+ Face Capacity", "USB/TCP-IP Reports Export", "WiFi Connectivity Control"],
        stats: "800+ SYSTEM GRIDS",
        highlights: ["Realtime", "Matrix", "eSSL"]
    },
    {
        id: "nvr-storage",
        title: "NVR Storage",
        filterValue: "NVR Storage",
        image: nvrCategoryImg,
        description: "Enterprise multi-channel network video recorders with H.265+ high encoding compression, RAID support, and secure remote cloud streaming.",
        features: ["4K Real-time Sync Playback", "SATA Storage slots up to 20TB", "RAID 0/1/5 Redundancy", "H.265+ High Compression"],
        stats: "1,200+ DEPLOYED",
        highlights: ["Seagate SkyHawk", "Western Digital"]
    },
    {
        id: "networking-backbone",
        title: "Networking Backbone",
        filterValue: "Networking Backbone",
        image: networkCategoryImg,
        description: "Industrial-grade PoE network switches with gigabit fiber uplinks, 250m long-distance cabling, and auto-rebooting camera watchdogs.",
        features: ["250m Long-Distance Link", "One-key Port Isolation VLAN", "6KV Lighting Surge Shield", "Intelligent PoE Budget"],
        stats: "3,100+ NODES SECURED",
        highlights: ["D-Link", "TP-Link", "Cisco"]
    },
    {
        id: "video-door-phones",
        title: "Video Door Phones",
        filterValue: "Biometric Access",
        image: vdpCategoryImg,
        description: "High-fidelity digital video door phones with 7-inch inside monitors, two-way hands-free audio, snapshot visitor log memory, and smart door release.",
        features: ["7-inch TFT LCD Display", "120° Wide Field of View", "Snapshot Memory Slot", "Electromagnetic Lock Relay"],
        stats: "950+ UNITS ACTIVE",
        highlights: ["Panasonic", "Honeywell", "Commax"]
    },
    {
        id: "cables-power",
        title: "Power Backup & Cables",
        filterValue: "Power Backup",
        image: powerCategoryImg,
        description: "99.99% pure solid copper 3+1 coaxial cables and central multi-channel power distribution boxes with PTC glass fuse protection boards.",
        features: ["99.99% Oxygen-Free Copper", "Regulated 12V DC Supply Box", "PTC Glass Fuses Protection", "95% Coverage Coax Braiding"],
        stats: "450KM+ LINE TOTAL",
        highlights: ["Finolex", "D-Link Coaxial", "SPE Custom"]
    }
];
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
export const ProductCategories = ({ loadedImages, setLoadedImages, setBlogCategoryFilter, setActiveTab, }) => {
    return (<section className="py-24 px-8 relative z-20 border-b border-slate-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="font-sans font-extrabold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
            [ HARDWARE CATALOG ]
          </span>
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
            Product Categories
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Explore Central India's most comprehensive inventory of security hardware. From F1.0 starlight optics to Layer 2 isolated backbones, we secure high-risk infrastructure.
          </p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCT_CATEGORIES.map((category) => (<motion.div key={category.id} variants={staggerItem} whileHover={{
                scale: 1.025,
                y: -8,
                borderColor: "#0284C7",
                boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.15)"
            }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white border border-slate-200 flex flex-col justify-between p-0 relative rounded-2xl group transition-all duration-300 overflow-hidden shadow-sm">
              {/* Top Cyber Laser Glow Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-sky-600 transition-all duration-300 z-30"></div>

              {/* Image Frame */}
              <div className="relative h-56 overflow-hidden border-b border-slate-100">
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-black/20 z-10"></div>
                {/* Status tag */}
                <span className="absolute top-4 left-4 z-20 font-sans text-[9px] bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-lg tracking-wider uppercase font-bold">
                  {category.stats}
                </span>
                {!loadedImages[category.id] && (<div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                    <div className="w-8 h-8 border-2 border-sky-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>)}
                <img src={category.image} alt={category.title} loading="lazy" onLoad={() => setLoadedImages(prev => ({ ...prev, [category.id]: true }))} className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loadedImages[category.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} referrerPolicy="no-referrer"/>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-sans font-bold text-base text-slate-900 uppercase">
                      {category.title}
                    </h3>
                    <div className="flex gap-1.5">
                      {category.highlights.map((brand, bIdx) => (<span key={bIdx} className="text-[9px] text-slate-500 border border-slate-200 px-2 py-0.5 bg-slate-50 rounded">
                          {brand}
                        </span>))}
                    </div>
                  </div>
                  
                  <p className="text-xs text-slate-500 leading-relaxed mb-6">
                    {category.description}
                  </p>

                  <div className="space-y-2 mb-6 border-t border-b border-slate-100 py-4">
                    <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                      [ KEY SPECIFICATIONS ]
                    </span>
                    <div className="grid grid-cols-1 gap-1">
                      {category.features.map((feature, fIdx) => (<div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                          <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                          <span>{feature}</span>
                        </div>))}
                    </div>
                  </div>
                </div>

                <button onClick={() => {
                setBlogCategoryFilter(category.filterValue);
                setActiveTab("products");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }} className="w-full py-3 bg-slate-50 hover:bg-sky-600 text-sky-600 hover:text-white border border-slate-200 hover:border-sky-600 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer flex items-center justify-center gap-2">
                  <span>EXPLORE PRODUCTS</span>
                  <ArrowRight className="h-3.5 w-3.5"/>
                </button>
              </div>
            </motion.div>))}
        </motion.div>
      </div>
    </section>);
};

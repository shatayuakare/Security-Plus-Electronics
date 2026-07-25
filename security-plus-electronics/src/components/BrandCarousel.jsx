import React from "react";
import { Video, Eye, Shield, Server, Tv, Zap, Activity, Cpu, Wifi, Network, LockKeyhole, Fingerprint } from "lucide-react";
export default function BrandCarousel() {
    const brands = [
        {
            name: "Hikvision",
            category: "Video Surveillance",
            icon: <Video className="h-4.5 w-4.5 text-sky-600"/>
        },
        {
            name: "Dahua Technology",
            category: "AI CCTV & Thermal",
            icon: <Eye className="h-4.5 w-4.5 text-indigo-600"/>
        },
        {
            name: "CP Plus",
            category: "Smart Shield Security",
            icon: <Shield className="h-4.5 w-4.5 text-blue-600"/>
        },
        {
            name: "Woston",
            category: "Elite Enterprise Servers",
            icon: <Server className="h-4.5 w-4.5 text-emerald-600"/>
        },
        {
            name: "Axis Communications",
            category: "IP Network Video",
            icon: <Tv className="h-4.5 w-4.5 text-teal-600"/>
        },
        {
            name: "Bosch Security",
            category: "Industrial Intrusion",
            icon: <Zap className="h-4.5 w-4.5 text-amber-600"/>
        },
        {
            name: "Honeywell",
            category: "Commercial Fire & Access",
            icon: <Activity className="h-4.5 w-4.5 text-rose-600"/>
        },
        {
            name: "Sony Electronics",
            category: "Ultra-Starlight Optics",
            icon: <Cpu className="h-4.5 w-4.5 text-cyan-600"/>
        },
        {
            name: "Ubiquiti",
            category: "UniFi High-Capacity Wireless",
            icon: <Wifi className="h-4.5 w-4.5 text-sky-500"/>
        },
        {
            name: "Cisco Systems",
            category: "Core Network Isolation",
            icon: <Network className="h-4.5 w-4.5 text-violet-600"/>
        },
        {
            name: "Yale Smart Locks",
            category: "Intelligent Access Hardware",
            icon: <LockKeyhole className="h-4.5 w-4.5 text-amber-500"/>
        },
        {
            name: "Godrej Solutions",
            category: "Physical Vault Deposits",
            icon: <Fingerprint className="h-4.5 w-4.5 text-emerald-700"/>
        }
    ];
    // Double the list to support seamless infinite loop animation
    const scrollingBrands = [...brands, ...brands];
    return (<div className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-end">
        <div>
          <span className="font-sans font-extrabold text-[9px] text-sky-600 tracking-widest uppercase block mb-1">
            [ CERTIFIED ELITE PARTNERS ]
          </span>
          <h3 className="font-sans text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider">
            Premium Brands We Integrate & Maintain
          </h3>
        </div>
        <span className="hidden sm:inline-block text-[10px] text-slate-400 font-mono">
          // INFINITE ORBITAL ROTATION
        </span>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center py-2 bg-slate-50/50">
        {/* Left and Right Fade Gradients for visual depth */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee animate-marquee-hover-pause flex items-center gap-6">
          {scrollingBrands.map((brand, index) => (<div key={index} className="flex items-center gap-3 bg-white border border-slate-200/80 px-5 py-3 rounded-xl shadow-sm hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/5 transition-all duration-300 shrink-0 select-none group cursor-pointer">
              <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-sky-50 transition-all duration-300">
                {brand.icon}
              </div>
              <div className="flex flex-col text-left">
                <span className="font-sans font-bold text-xs text-slate-800 tracking-wide group-hover:text-sky-600 transition-colors duration-200">
                  {brand.name}
                </span>
                <span className="font-mono text-[9px] text-slate-400 tracking-tight">
                  {brand.category}
                </span>
              </div>
            </div>))}
        </div>
      </div>
    </div>);
}

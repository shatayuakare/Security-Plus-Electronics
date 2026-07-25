import brands from "../json/brands.json";


const BrandCarousel = () => {
  // const brands = [
  //   {
  //     name: "Hikvision",
  //     category: "Video Surveillance",
  //     icon: "hikvision.png"
  //   },
  //   {
  //     name: "Dahua Technology",
  //     category: "AI CCTV & Thermal",
  //     icon: "dahua.png"
  //   },
  //   {
  //     name: "CP Plus",
  //     category: "Smart Shield Security",
  //     icon: "cpplus.png"
  //   },
  //   {
  //     name: "Woston",
  //     category: "Elite Enterprise Servers",
  //     icon: "woston.png"
  //   },
  //   {
  //     name: "Honeywell",
  //     category: "Commercial Fire & Access",
  //     icon: "honeywell.png"
  //   },
  //   {
  //     name: "Lapcare",
  //     category: "IT Device and Accessories",
  //     icon: "lapcare.png"
  //   },
  //   {
  //     name: "Zebion",
  //     category: "IT Device and Accessories",
  //     icon: "zebion.png"
  //   },
  //   {
  //     name: "LG Corporation",
  //     category: "Television & Entertainment",
  //     icon: "lg.png"
  //   },
  //   {
  //     name: "Zebronics",
  //     category: "CCTV Accessories & IT Devices",
  //     icon: "zebronics.png"
  //   },
  //   {
  //     name: "Cofe",
  //     category: "CCTV Cameras",
  //     icon: "cofe.png"
  //   },
  //   {
  //     name: "Secureye",
  //     category: "CCTV Camera and Accessories",
  //     icon: "secureye.png"
  //   },
  //   {
  //     name: "TP-Link",
  //     category: "CCTV Camera and Accessories",
  //     icon: "tplink.png"
  //   },
  //   {
  //     name: "D-Link",
  //     category: "Networking Accessories",
  //     icon: "dlink.png"
  //   },
  //   {
  //     name: "Microtek",
  //     category: "Power Solution",
  //     icon: "microtek.png"
  //   },
  //   {
  //     name: "Daichi",
  //     category: "CCTV Camera, Accessories and Storage",
  //     icon: "daichi.png"
  //   },
  //   {
  //     name: "Otek",
  //     category: "Projector",
  //     icon: "otek.png"
  //   },
  //   {
  //     name: "Dell",
  //     category: "Peripheral Devices",
  //     icon: "dell.png"
  //   }
  //   ,
  //   {
  //     name: "HP",
  //     category: "Peripheral Devices",
  //     icon: "hp.png"
  //   }
  //   ,
  //   {
  //     name: "Lenovo",
  //     category: "Peripheral Devices",
  //     icon: "lenovo.png"
  //   }
  //   ,
  //   {
  //     name: "Enter",
  //     category: "Computer Accessories",
  //     icon: "enter.png"
  //   }
  //   ,
  //   {
  //     name: "Logitech",
  //     category: "Peripheral Devices",
  //     icon: "logitech.png"
  //   }
  //   ,
  //   {
  //     name: "Western Digital",
  //     category: "Storage Devices",
  //     icon: "wd.png"
  //   }
  //   ,
  //   {
  //     name: "trueview",
  //     category: "CCTV Camera",
  //     icon: "trueview.png"
  //   }
  //   ,
  //   {
  //     name: "TVS Electronics",
  //     category: "Computer Accessories",
  //     icon: "tvs.png"
  //   }
  //   ,
  //   {
  //     name: "MORX Mivantra",
  //     category: "Home Security Devices",
  //     icon: "mivantra.png"
  //   }
  //   ,
  //   {
  //     name: "Beetal",
  //     category: "Tele-Communication",
  //     icon: "beetal.png"
  //   }

  //   ,
  //   {
  //     name: "Consistent",
  //     category: "Storage Devices",
  //     icon: "consistent.png"
  //   }
  //   ,
  //   {
  //     name: "Aver-tek",
  //     category: "Storage Devices",
  //     icon: "avertek.png"
  //   }
  //   ,
  //   {
  //     name: "Prama",
  //     category: "CCTV Camera",
  //     icon: "prama.png"
  //   }
  //   ,
  //   {
  //     name: "Letstrack",
  //     category: "GPS Tracking Devices",
  //     icon: "letstrack.png"
  //   }
  //   ,
  //   {
  //     name: "Tapo",
  //     category: "Smart Home and Wi-Fi",
  //     icon: "tapo.png"
  //   }
  //   ,
  //   {
  //     name: "Seagate",
  //     category: "Storage Devices",
  //     icon: "seagate.png"
  //   }
  //   ,
  //   {
  //     name: "Toshiba",
  //     category: "Storage Devices",
  //     icon: "toshiba.png"
  //   }
  //   ,
  //   {
  //     name: "Foxin",
  //     category: "Monitors and Accessories",
  //     icon: "foxin.png"
  //   }
  //   ,
  //   {
  //     name: "Geonix",
  //     category: "Storage Devices",
  //     icon: "geonix.png"
  //   }
  // ];

  const scrollingBrands = [...brands, ...brands];
  return (
    <div className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-end">
        <div>
          <span className="font-sans font-extrabold text-[9px] text-sky-600 tracking-widest uppercase block mb-1">
            CERTIFIED ELITE PARTNERS
          </span>
          <h3 className="font-sans text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider">
            Premium Brands We Integrate & Maintain
          </h3>
        </div>
        <span className="hidden uppercase sm:inline-block text-[10px] text-slate-400 font-mono">
          We Have 40+ Brands
        </span>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-2 bg-slate-50/50">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee animate-marquee-hover-pause flex items-center gap-6">
          {scrollingBrands.map((brand, index) => (<div key={index} className="flex items-center gap-3 bg-white border border-slate-200/80 px-3 py-2 rounded-xl shadow-sm hover:border-sky-400 hover:shadow-md hover:shadow-sky-500/5 transition-all duration-300 shrink-0 select-none group cursor-pointer">
            <div className="p-1.5 bg-slate-50 rounded-lg group-hover:bg-sky-50 transition-all duration-300">
              <img className="h-12 w-12 rounded-full object-contain" src={new URL(`../assets/brands/${brand.icon}`, import.meta.url).href} alt={`${brand.name} logo`} />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-sm text-slate-800 tracking-wide group-hover:text-sky-600 transition-colors duration-200">
                {brand.name}
              </span>
              <span className="font-mono text-xs text-slate-400 tracking-tight">
                {brand.category}
              </span>
            </div>
          </div>))}
        </div>
      </div>
    </div>);
}


export default BrandCarousel
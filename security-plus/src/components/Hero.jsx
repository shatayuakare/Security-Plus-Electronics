import { Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import cctvHeroBg from "../assets/images/sky_blue_hero_bg_1782755439624.jpg";


const Hero = ({ heroSlideIndex, setHeroSlideIndex, setActiveTab, setBookingConfirmed, setBookingForm, setShowroomModalOpen, }) => {
  const triggerShowroomModal = () => {
    setBookingConfirmed(false);
    setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
    setShowroomModalOpen(true);
  };
  return (<header className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden border-b border-slate-900 bg-[#070913]">
    <div className="absolute inset-0 z-0 select-none overflow-hidden">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-[0.12] object-center scale-105 pointer-events-none" poster={cctvHeroBg}>
        <source src="https://assets.mixkit.co/videos/preview/mixkit-security-cameras-in-a-control-room-41712-large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-linear-to-b from-[#070913]/98 via-[#070913]/85 to-[#070913]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.1)_0%,transparent_70%)]"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,132,199,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.01)_1px,transparent_1px)] bg-[length:3rem_3rem]"></div>
    </div>

    <div className="relative z-20 container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center">
      <div className="relative min-h-[460px] md:min-h-[420px] lg:min-h-[440px] flex items-center">
        <AnimatePresence mode="wait">
          {heroSlideIndex === 0 && (<motion.div key="slide-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
              <div className="bg-sky-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-sky-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></div>
                <span className="font-sans font-bold text-[9px] text-sky-300 tracking-wider uppercase">NAGPUR HQ EXPERIENCE MALL</span>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Central India's Biggest<br />
                <span className="text-sky-400">CCTV Mall</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Explore 20+ years of security excellence with Nagpur's largest live experience center. Professional 4K security installations, on-site live testing, and expert system sizing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-sky-500/20">
                  EXPLORE SOLUTIONS
                </button>
                <button onClick={triggerShowroomModal} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                  <Calendar className="h-4 w-4 text-sky-400" />
                  VISIT SHOWROOM
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_65%)]"></div>

                <svg className="w-48 h-48 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="1, 4" className="animate-spin [animation-duration:40s]" />
                  <circle cx="50" cy="50" r="35" fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="50" cy="50" r="25" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3, 3" className="animate-spin [animation-duration:15s]" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke="#0ea5e9" strokeWidth="0.25" opacity="0.4" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke="#0ea5e9" strokeWidth="0.25" opacity="0.4" />

                  <circle cx="50" cy="50" r="8" fill="#0ea5e9" fillOpacity="0.2" className="animate-pulse" />
                  <circle cx="50" cy="50" r="3" fill="#0ea5e9" />

                  <circle cx="25" cy="25" r="2" fill="#22c55e" />
                  <path d="M25 21 L25 25 L29 25" fill="none" stroke="#22c55e" strokeWidth="0.5" />
                  <circle cx="75" cy="25" r="2" fill="#38bdf8" />
                  <circle cx="75" cy="75" r="2" fill="#ef4444" className="animate-ping" />
                  <circle cx="75" cy="75" r="1.5" fill="#ef4444" />
                  <circle cx="25" cy="75" r="2" fill="#eab308" />
                </svg>

                <p className="font-sans font-bold text-[10px] text-sky-400 uppercase tracking-widest text-center mt-6">
                  LIVE EXPERIENCE DEMO ROOM
                </p>
              </div>
            </div>
          </motion.div>)}

          {heroSlideIndex === 1 && (<motion.div key="slide-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

            <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
              <div className="bg-emerald-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-emerald-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="font-sans font-bold text-[9px] text-emerald-300 tracking-wider uppercase">IP SURVEILLANCE // ACTIVE INTUITION</span>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Smarter Security<br />
                <span className="text-emerald-400">With AI Optics</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Next-generation 4K IP cameras featuring active human & vehicle detection, ultra-dark starlight color night vision, and instant remote notifications on any device.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-emerald-500/20">
                  VIEW CAMERA RANGE
                </button>
                <button onClick={triggerShowroomModal} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                  <Calendar className="h-4 w-4 text-emerald-400" />
                  VISIT EXPERIENCE MALL
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_65%)]"></div>

                <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="2" />
                  <circle cx="50" cy="50" r="22" fill="#090d16" stroke="#10b981" strokeWidth="1" />
                  <circle cx="50" cy="50" r="14" fill="#040711" stroke="#34d399" strokeWidth="2" />
                  <circle cx="47" cy="47" r="4" fill="#34d399" opacity="0.7" />

                  <circle cx="50" cy="50" r="2" fill="#ef4444" className="animate-pulse" />

                  <path d="M20 50 H10" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M90 50 H80" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M50 20 V10" stroke="#10b981" strokeWidth="1.5" />
                  <path d="M50 90 V80" stroke="#10b981" strokeWidth="1.5" />

                  <rect x="15" y="15" width="28" height="20" fill="none" stroke="#10b981" strokeWidth="0.75" strokeDasharray="2, 2" />
                  <text x="18" y="27" fill="#10b981" fontSize="5" fontFamily="monospace" fontWeight="bold">HUMAN: 99.1%</text>
                </svg>

                <p className="font-sans font-bold text-[10px] text-emerald-400 uppercase tracking-widest text-center mt-6">
                  ACTIVE TARGET DETECTION
                </p>
              </div>
            </div>
          </motion.div>)}

          {heroSlideIndex === 2 && (<motion.div key="slide-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Text Content */}
            <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
              <div className="bg-indigo-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-indigo-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
                <span className="font-sans font-bold text-[9px] text-indigo-300 tracking-wider uppercase">BIOMETRICS // ZERO TRUST SHIELD</span>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Touchless Access<br />
                <span className="text-indigo-400">Face attendance</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Highly secure enterprise access controls with lightning-fast face recognition, biometric time logging, and automated cloud sync for modern workforces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-indigo-500/20">
                  EXPLORE ACCESS BIOMETRICS
                </button>
                <button onClick={triggerShowroomModal} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                  <Calendar className="h-4 w-4 text-indigo-400" />
                  SCHEDULE SYSTEM DEMO
                </button>
              </div>
            </div>

            {/* Visual representation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_65%)]"></div>

                {/* Glowing biometric scan grid design */}
                <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]" viewBox="0 0 100 100">
                  {/* Biometric Shield Icon outline */}
                  <path d="M50 15 L20 25 V50 C20 70, 50 85, 50 85 C50 85, 80 70, 80 50 V25 L50 15 Z" fill="none" stroke="#6366f1" strokeWidth="1.5" />

                  {/* Scanning line moving up and down */}
                  <line x1="25" y1="45" x2="75" y2="45" stroke="#818cf8" strokeWidth="2" className="animate-pulse" />

                  {/* Fingerprint ridges schematic vector */}
                  <path d="M40 40 C43 35, 57 35, 60 40 M35 48 C40 40, 60 40, 65 48 M45 55 C48 50, 52 50, 55 55" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <circle cx="50" cy="48" r="1.5" fill="#22c55e" />
                </svg>

                <p className="font-sans font-bold text-[10px] text-indigo-400 uppercase tracking-widest text-center mt-6">
                  SECURE SYSTEM SCANNER
                </p>
              </div>
            </div>
          </motion.div>)}

          {heroSlideIndex === 3 && (<motion.div key="slide-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            {/* Text Content */}
            <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
              <div className="bg-amber-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-amber-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="font-sans font-bold text-[9px] text-amber-300 tracking-wider uppercase">NETWORK INFRA // SECURE CONNECTIVITY</span>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                High-Performance<br />
                <span className="text-amber-400">Network bridges</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Enterprise networking designed for zero-dropout camera feeds. Long-range wireless link bridges up to 10km+, smart PoE switches, and robust outdoor routers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-amber-500/20">
                  EXPLORE NETWORKING RANGE
                </button>
                <button onClick={triggerShowroomModal} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                  <Calendar className="h-4 w-4 text-amber-400" />
                  REQUEST NETWORK AUDIT
                </button>
              </div>
            </div>

            {/* Visual representation */}
            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_65%)]"></div>

                {/* Glowing network topology map schematic */}
                <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" viewBox="0 0 100 100">
                  {/* Central Switch/Router node */}
                  <rect x="42" y="42" width="16" height="16" rx="4" fill="#090d16" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="50" cy="50" r="2.5" fill="#f59e0b" className="animate-ping" />

                  {/* Surrounding topology branch lines */}
                  <line x1="50" y1="25" x2="50" y2="42" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />
                  <line x1="50" y1="58" x2="50" y2="75" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />
                  <line x1="25" y1="50" x2="42" y2="50" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />
                  <line x1="58" y1="50" x2="75" y2="50" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />

                  {/* End nodes */}
                  <circle cx="50" cy="25" r="4" fill="#fbbf24" />
                  <circle cx="50" cy="75" r="4" fill="#fbbf24" />
                  <circle cx="25" cy="50" r="4" fill="#fbbf24" />
                  <circle cx="75" cy="50" r="4" fill="#fbbf24" />

                  {/* Signal concentric rings */}
                  <circle cx="50" cy="50" r="32" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.25" className="animate-pulse" />
                </svg>

                <p className="font-sans font-bold text-[10px] text-amber-400 uppercase tracking-widest text-center mt-6">
                  ACTIVE GIGABIT PATHWAYS
                </p>
              </div>
            </div>
          </motion.div>)}

          {heroSlideIndex === 4 && (<motion.div key="slide-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">

            <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
              <div className="bg-rose-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-rose-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></div>
                <span className="font-sans font-bold text-[9px] text-rose-300 tracking-wider uppercase">VDP & SMART HOME // INTERCONNECTED RESIDENCE</span>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Smart Intercoms<br />
                <span className="text-rose-400">& Digital Locks</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Premium high-definition video door phones coupled with biometric digital smart locks. Identify, communicate, and grant keyless secure access from anywhere in the world.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-rose-500/20">
                  VIEW ACCESS SYSTEMS
                </button>
                <button onClick={triggerShowroomModal} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                  <Calendar className="h-4 w-4 text-rose-400" />
                  SCHEDULE VISIT DEMO
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15)_0%,transparent_65%)]"></div>

                {/* Smart Door Phone SVG */}
                <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]" viewBox="0 0 100 100">
                  {/* Video Screen Frame */}
                  <rect x="25" y="15" width="50" height="40" rx="4" fill="#090d16" stroke="#f43f5e" strokeWidth="1.5" />
                  {/* Inner Screen Camera View */}
                  <rect x="29" y="19" width="42" height="32" rx="2" fill="#05070e" />
                  <circle cx="50" cy="35" r="8" fill="none" stroke="#f43f5e" strokeWidth="0.5" className="animate-pulse" />
                  <circle cx="50" cy="35" r="4" fill="#fb7185" />
                  {/* Status scanline */}
                  <line x1="30" y1="28" x2="70" y2="28" stroke="#f43f5e" strokeWidth="1" opacity="0.6" className="animate-bounce" />

                  {/* Speaker & Mic dots under screen */}
                  <circle cx="35" cy="62" r="1" fill="#f43f5e" />
                  <circle cx="40" cy="62" r="1" fill="#f43f5e" />
                  <circle cx="45" cy="62" r="1" fill="#f43f5e" />

                  {/* Smart lock symbol beside */}
                  <path d="M57 65 C57 60, 67 60, 67 65 V72 H57 Z" fill="none" stroke="#fb7185" strokeWidth="1.2" />
                  <rect x="53" y="72" width="18" height="13" rx="2" fill="#090d16" stroke="#f43f5e" strokeWidth="1" />
                  <circle cx="62" cy="78" r="2" fill="#22c55e" />
                </svg>

                <p className="font-sans font-bold text-[10px] text-rose-400 uppercase tracking-widest text-center mt-6">
                  INTERCONNECTED HOME LINK
                </p>
              </div>
            </div>
          </motion.div>)}

          {heroSlideIndex === 5 && (<motion.div key="slide-5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
              <div className="bg-cyan-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-cyan-500/20 rounded-full">
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="font-sans font-bold text-[9px] text-cyan-300 tracking-wider uppercase">POWER BACKUP // ZERO BLANK-OUT GUARANTEE</span>
              </div>
              <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                Continuous Power<br />
                <span className="text-cyan-400">& Pro Cables</span>
              </h1>
              <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                Ensure uninterrupted surveillance feeds even during major electrical failures. Industrial grade heavy duty 3+1 CCTV copper cabling paired with pure sine-wave UPS system configurations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-cyan-500/20">
                  EXPLORE POWER INVENTORY
                </button>
                <button onClick={triggerShowroomModal} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                  <Calendar className="h-4 w-4 text-cyan-400" />
                  REQUEST BACKUP AUDIT
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center items-center">
              <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_65%)]"></div>

                <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" viewBox="0 0 100 100">
                  <rect x="25" y="30" width="50" height="34" rx="4" fill="#090d16" stroke="#06b6d4" strokeWidth="1.5" />

                  <rect x="31" y="36" width="8" height="22" fill="#06b6d4" />
                  <rect x="42" y="36" width="8" height="22" fill="#06b6d4" />
                  <rect x="53" y="36" width="8" height="22" fill="#06b6d4" />
                  <rect x="64" y="36" width="8" height="22" fill="#06b6d4" className="animate-pulse" />

                  <rect x="45" y="24" width="10" height="6" fill="#06b6d4" />

                  <path d="M50 40 L44 49 H49 L47 58 L55 49 H50 L52 40 Z" fill="#22c55e" stroke="#22c55e" strokeWidth="1" />
                </svg>

                <p className="font-sans font-bold text-[10px] text-cyan-400 uppercase tracking-widest text-center mt-6">
                  PURE SINE WAVE CONTINUOUS
                </p>
              </div>
            </div>
          </motion.div>)}
        </AnimatePresence>
      </div>

      <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-900/60 max-w-5xl mx-auto w-full">

        <div className="flex gap-2.5">
          {[0, 1, 2, 3, 4, 5].map((idx) => (<button key={idx} onClick={() => setHeroSlideIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${heroSlideIndex === idx
            ? "w-8 bg-sky-500"
            : "w-2.5 bg-slate-800 hover:bg-slate-700"}`} title={`Go to slide ${idx + 1}`} />))}
        </div>

        {/* <div className="text-right font-mono text-[9px] text-slate-500">
          <span className="text-sky-400 font-semibold uppercase">AUTO CYCLE ACTIVE</span> // SLIDE {heroSlideIndex + 1} OF 6
        </div> */}

      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-sky-50/95 backdrop-blur-md border border-sky-100 w-full max-w-5xl divide-y md:divide-y-0 md:divide-x divide-sky-100 rounded-2xl shadow-lg mt-16 mx-auto">
        <div className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
          <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">20+</span>
          <span className="font-sans font-semibold text-[10px] text-sky-900/80 tracking-wider uppercase">Years of Excellence</span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group">
          <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">40+</span>
          <span className="font-sans font-semibold text-[10px] text-sky-900/80 tracking-wider uppercase">Premium Brands</span>
        </div>
        <div className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
          <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">5000+</span>
          <span className="font-sans font-semibold text-[10px] text-sky-900/80 tracking-wider uppercase">Happy Customers</span>
        </div>
      </div>

    </div>
  </header>);
};


export default Hero;
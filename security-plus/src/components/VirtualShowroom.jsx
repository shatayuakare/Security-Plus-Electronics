import React from "react";
import { Loader2, Scan, Terminal, Eye, Calendar } from "lucide-react";
import { motion } from "motion/react";
import speShowroomTour from "../assets/images/spe_showroom_tour_1782789590181.jpg";
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};
export const VirtualShowroom = ({ loadedImages, setLoadedImages, showroomScanStatus, setShowroomScanStatus, setToastMessage, setBookingConfirmed, setBookingForm, setShowroomModalOpen, }) => {
  const triggerGuidedTour = () => {
    setBookingConfirmed(false);
    setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
    setShowroomModalOpen(true);
  };
  return (<section className="py-24 px-8 border-b border-slate-100 bg-slate-50 relative z-20">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="font-sans font-extrabold text-[10px] text-primary tracking-widest uppercase block mb-3">
          VIRTUAL TOUR COMPONENT
        </span>
        <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
          Explore Nagpur Showroom
        </h2>
        <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
          Audit physical layout configurations and hardware systems directly from our live Nagpur mall viewport. Click on active hotspots to launch optical specifications, telemetry streams, and product diagnostics.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Panoramic Tour Viewer Frame */}
        <div className="lg:col-span-8 bg-white p-6 border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden">

          {/* Diagnostic bar */}
          <div className="flex flex-wrap justify-between items-center gap-2 mb-4 font-mono text-[10px] text-slate-500 uppercase border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
              <span className="font-bold text-slate-700">PANORAMIC NODE_01 ACTIVE</span>
            </div>
            <div className="flex gap-4">
              <span>RESOLUTION: 4K ULTRA UHD</span>
              <span>FOCAL: 2.8MM WIDE</span>
            </div>
          </div>

          {/* Interactive Image Frame */}
          <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-inner group">
            {/* Panoramic Viewport Image */}
            {!loadedImages["speShowroomTour"] && (<div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>)}
            <img src={speShowroomTour} alt="SPE Nagpur Showroom Panoramic Virtual Tour" loading="lazy" onLoad={() => setLoadedImages(prev => ({ ...prev, speShowroomTour: true }))} className={`w-full h-full object-cover transition-all duration-700 select-none scale-[1.05] ${loadedImages["speShowroomTour"] ? "opacity-100" : "opacity-0"}`} />

            {/* Laser scanning visual indicator */}
            {showroomScanStatus === "scanning" && (<div className="absolute inset-0 z-20 pointer-events-none bg-primary/5">
              <motion.div initial={{ top: "0%" }} animate={{ top: "100%" }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }} className="absolute left-0 right-0 h-1 bg-primary shadow-[0_0_15px_rgba(2,132,199,0.8)]" />
            </div>)}

            {/* Hotspot 1: CCTV Camera Dome */}
            <button onClick={() => {
              setToastMessage("Auditing CCTV Camera Dome on Nagpur Showroom Board #1.");
            }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "35%", left: "28%" }} title="AI PTZ Speed Dome Camera">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 animate-ping"></span>
              <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${true === "h1" ? "bg-primary scale-125" : "bg-primary hover:bg-primary"}`}>
                1
              </span>
              {/* Hotspot Name Overlay on Hover */}
              <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                AI PTZ Camera Dome
              </span>
            </button>

            {/* Hotspot 2: Biometric Facial Gateway */}
            <button onClick={() => {
              setToastMessage("Auditing Smart Biometric Face Latch at Showroom Entry Lane.");
            }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "58%", left: "45%" }} title="Biometric Facial Gateway">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 animate-ping"></span>
              <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h2" ? "bg-primary scale-125" : "bg-primary hover:bg-primary"}`}>
                2
              </span>
              <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                Facial Access Gate
              </span>
            </button>

            {/* Hotspot 3: NVR Stack Rack */}
            <button onClick={() => {
              setActiveShowroomHotspot("h3");
              setToastMessage("Auditing CCTV Storage Network Video Recorder Units.");
            }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "42%", left: "68%" }} title="Enterprise NVR Storage Rack">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 animate-ping"></span>
              <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h3" ? "bg-primary scale-125" : "bg-primary hover:bg-primary"}`}>
                3
              </span>
              <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                Enterprise NVR Stack
              </span>
            </button>

            {/* Hotspot 4: Fiber Ring PoE Switch */}
            <button onClick={() => {
              setActiveShowroomHotspot("h4");
              setToastMessage("Auditing High-Power Coaxial/Fiber Backbone Switch.");
            }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "54%", left: "82%" }} title="Fiber Ring PoE Switch">
              <span className="absolute inline-flex h-8 w-8 rounded-full bg-primary/30 animate-ping"></span>
              <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h4" ? "bg-primary scale-125" : "bg-primary hover:bg-primary"}`}>
                4
              </span>
              <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                Fiber Ring PoE Switch
              </span>
            </button>

            {/* Scanning State Overlay */}
            {showroomScanStatus === "scanning" && (<div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center z-20">
              <div className="bg-slate-900/90 border border-slate-700 text-white p-4 rounded-xl flex items-center gap-3 font-mono text-xs">
                <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
                <span>LASER RADAR SEARCH ACTIVE - MAPPING DISPLAY NODES...</span>
              </div>
            </div>)}
          </div>

          {/* Quick controls panel */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
            <p className="text-slate-500 text-xs font-semibold uppercase font-sans">
              [ Tip: Hover over hotspot node markers or click them to audit specifications. ]
            </p>

            <div className="flex gap-3">
              <button onClick={() => {
                setShowroomScanStatus("scanning");
                setActiveShowroomHotspot(null);
                setTimeout(() => {
                  setShowroomScanStatus("ready");
                  setActiveShowroomHotspot("h1");
                  setToastMessage("Laser radar complete! Found 4 display components configured on SPE terminal.");
                }, 3500);
              }} className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-sky-200 transition-all cursor-pointer flex items-center gap-1.5">
                <Scan className="h-3.5 w-3.5 animate-pulse" />
                RUN AUTOSCAN SYSTEM
              </button>
              <button onClick={() => {
                setActiveShowroomHotspot(null);
                setShowroomScanStatus("idle");
              }} className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 transition-all cursor-pointer">
                RESET PORT
              </button>
            </div>
          </div>
        </div>

        {/* Hotspot Audit Detail Panel */}
        <div className="lg:col-span-4 bg-white p-6 border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
              <Terminal className="h-4 w-4 text-primary shrink-0" />
              <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-tight">
                Component Diagnostic Unit
              </h3>
            </div>

            {!activeShowroomHotspot ? (<div className="h-64 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
              <Eye className="h-10 w-10 text-slate-300 mb-3 animate-pulse" />
              <span className="text-slate-700 text-xs font-bold block uppercase mb-1">NO ACTIVE NODE SELECTED</span>
              <p className="text-slate-400 text-[10px] uppercase leading-relaxed font-semibold max-w-xs">
                Select a node on the virtual viewport map to establish direct data link and display specifications.
              </p>
            </div>) : (<motion.div key={activeShowroomHotspot} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
              {activeShowroomHotspot === "h1" && (<>
                <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                  <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ DISPLAY BOARD 1 - DOME OPTICS ]</span>
                  <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">AI PTZ Speed Dome Camera</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">
                    Our elite flagship camera on display board. Featuring 45x high focal magnification, smart AI human patrol sweeps, laser infrared targeting, and auto-tracking.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">RESOLUTION</span>
                      <span className="font-bold text-slate-800">4K Ultra HD (8MP)</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">NIGHT VISION</span>
                      <span className="font-bold text-slate-800">150m Laser Color</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">ZOOM SPEED</span>
                      <span className="font-bold text-slate-800">45x Optical Motor</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                      <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                  <div>&gt; cctv_node_1: sync successful</div>
                  <div>&gt; stream: H.265+ compress, 8192kbps</div>
                  <div>&gt; pan_angle: 182.4° // tilt: -12.5°</div>
                </div>
              </>)}

              {activeShowroomHotspot === "h2" && (<>
                <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                  <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ SHOWROOM ENTRY - BIOMETRIC LATCH ]</span>
                  <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">Facial Access Gate</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">
                    Secure high-speed facial recognition terminal with integrated mask audit compliance, anti-spoofing dual camera lens, and direct lock trigger interface.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">SENSING SPEED</span>
                      <span className="font-bold text-slate-800">&lt; 0.2 Seconds</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">CAPACITY</span>
                      <span className="font-bold text-slate-800">3,000 Faces</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">AUTH TYPE</span>
                      <span className="font-bold text-slate-800">Dual IR Stereo Lenses</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                      <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                  <div>&gt; biometric_entry_gateway: online</div>
                  <div>&gt; db_sync: 3,000 index keys verified</div>
                  <div>&gt; latch_relay: 12V solid-state OK</div>
                </div>
              </>)}

              {activeShowroomHotspot === "h3" && (<>
                <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                  <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ STORAGE CABINET - NVR STACKS ]</span>
                  <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">Enterprise NVR Stack</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">
                    Central 64-channel enterprise NVR recording engine. Supporting multi-SATA HDD redundancy arrays, hot-swapping drives, and intelligent backup triggers.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">CHANNELS</span>
                      <span className="font-bold text-slate-800">64 Live Camera Feeds</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">SATA STORAGE</span>
                      <span className="font-bold text-slate-800">Up to 80TB (8 Bays)</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">ENCODING</span>
                      <span className="font-bold text-slate-800">H.265+ Smart Codec</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                      <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                  <div>&gt; nvr_ch_stack_03: online</div>
                  <div>&gt; raid_5_state: healthy, disk_write active</div>
                  <div>&gt; thermal: 41.5°C // fans: high_speed</div>
                </div>
              </>)}

              {activeShowroomHotspot === "h4" && (<>
                <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                  <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ POWER CABINET - GIGABIT BACKBONE ]</span>
                  <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">Fiber Ring PoE Switch</h4>
                  <p className="text-slate-500 text-xs leading-relaxed mt-2">
                    High-capacity Layer 2 managed PoE switch providing stable power and fast gigabit transmission across Nagpur fiber rings, complete with 6KV surge protection.
                  </p>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                  <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">UPLINKS</span>
                      <span className="font-bold text-slate-800">2x 10G SFP+ Fiber</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">POE BUDGET</span>
                      <span className="font-bold text-slate-800">380W (Max 30W/port)</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">SURGE GUARD</span>
                      <span className="font-bold text-slate-800">6KV Lighting Protection</span>
                    </div>
                    <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                      <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                      <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                  <div>&gt; fiber_ring_sw_12: active</div>
                  <div>&gt; trunk_ports: link speed 1000Mbps</div>
                  <div>&gt; vlan_status: isolated ports active</div>
                </div>
              </>)}
            </motion.div>)}
          </div>

          <div className="pt-6 border-t border-slate-100">
            <button onClick={triggerGuidedTour} className="w-full py-3 bg-primary hover:bg-sky-700 text-white border border-primary text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-sm">
              <Calendar className="h-4 w-4" />
              BOOK LIVE IN-PERSON GUIDED TOUR
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>);
};

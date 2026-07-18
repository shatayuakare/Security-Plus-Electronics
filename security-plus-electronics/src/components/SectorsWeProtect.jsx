import React from "react";
import { Home, Building, HeartPulse, Briefcase, Factory, Check, ShieldCheck, Calculator } from "lucide-react";
import { motion } from "motion/react";
import { SECTORS_DATA } from "../data";
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
export const SectorsWeProtect = ({ selectedSector, setSelectedSector, setCalcInput, }) => {
    return (<section className="py-24 px-8 relative z-20 border-b border-[#2A2A2A] bg-[#0A0E1A]/40">
      <div className="max-w-7xl mx-auto">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 font-mono">[ 04 // SECTORBLUEPRINTS ]</span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Sectors We Protect</h2>
          <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">We custom-engineer protection models tailored to specific operational risks. Select a sector below to explore architectural details and real case-studies.</p>
        </motion.div>

        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-[#0F0F0F] border border-[#2A2A2A] mb-12">
          {SECTORS_DATA.map((sector, idx) => (<motion.div key={sector.id} variants={staggerItem} whileHover={{ y: -6 }} onClick={() => setSelectedSector(sector)} className="p-5 lg:p-6 flex flex-col items-center text-center hover:bg-[#121212] transition-all duration-300 group cursor-pointer border border-[#2A2A2A] relative animate-none">
              <span className="absolute top-2 left-2 text-[9px] font-mono text-[#888888]">[ 0{idx + 1} ]</span>
              <div className="p-3 bg-[#121212] border border-[#2A2A2A] mb-3 group-hover:border-[#FF5A00] transition-all">
                {sector.id === "residential" && <Home className="h-6 w-6 text-[#FF5A00]"/>}
                {sector.id === "commercial" && <Building className="h-6 w-6 text-[#FF5A00]"/>}
                {sector.id === "healthcare" && <HeartPulse className="h-6 w-6 text-[#FF5A00]"/>}
                {sector.id === "banking" && <Briefcase className="h-6 w-6 text-[#FF5A00]"/>}
                {sector.id === "industrial" && <Factory className="h-6 w-6 text-[#FF5A00]"/>}
              </div>
              <span className="font-headline font-bold text-xs uppercase tracking-wider text-white mb-1">{sector.title}</span>
              <span className="text-[10px] font-mono text-[#FF5A00] opacity-70">RISK: {sector.threatLevel.toUpperCase()}</span>
            </motion.div>))}
        </motion.div>

        {/* Expanded sector details frame */}
        <div className="bg-[#121212] p-8 border border-[#2A2A2A] max-w-5xl mx-auto rounded-none">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/3">
              <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase block mb-2 font-mono">[ ACTIVE ARCHITECTURE ]</span>
              <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-wider">
                {selectedSector ? selectedSector.title : "Sectors Safety Architecture"}
              </h3>
              <div className="p-4 bg-[#0F0F0F] border border-[#2A2A2A] mb-4 rounded-none">
                <div className="flex justify-between items-center mb-2 font-mono text-[11px]">
                  <span className="text-[#888888] uppercase">SLA Timeline</span>
                  <span className="font-semibold text-white">{selectedSector ? selectedSector.implementationTimeline : "N/A"}</span>
                </div>
                <div className="flex justify-between items-center font-mono text-[11px]">
                  <span className="text-[#888888] uppercase">Vulnerability</span>
                  <span className={`font-bold px-2 py-0.5 rounded-none ${selectedSector?.threatLevel === "Critical" ? "bg-red-950/40 text-red-400 border border-red-900" :
            selectedSector?.threatLevel === "High" ? "bg-orange-950/40 text-orange-400 border border-orange-900" : "bg-orange-950/20 text-[#FF5A00] border border-orange-900/50"}`}>
                    {selectedSector ? selectedSector.threatLevel.toUpperCase() : "STANDARD"}
                  </span>
                </div>
              </div>
              <button onClick={() => {
            if (selectedSector) {
                setCalcInput(prev => ({ ...prev, premisesType: selectedSector.id }));
            }
            const target = document.getElementById("planner-wizard");
            if (target)
                target.scrollIntoView({ behavior: "smooth" });
        }} className="w-full bg-[#FF5A00] hover:bg-[#E04E00] text-white font-headline font-bold text-[10px] tracking-widest uppercase py-3 border border-[#FF5A00] transition-all flex items-center justify-center gap-2 font-mono rounded-none cursor-pointer">
                <Calculator className="h-4 w-4"/>
                LOAD IN PLANNER
              </button>
            </div>

            <div className="w-full lg:w-2/3 border-t lg:border-t-0 lg:border-l border-[#2A2A2A] pt-6 lg:pt-0 lg:pl-8">
              <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-3 font-mono">[ SOLUTIONS BLUEPRINT ]</h4>
              <p className="text-sm text-white font-medium mb-4">{selectedSector ? selectedSector.focusTitle : "Select any sector above to load standard layouts."}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                <div>
                  <h5 className="text-[11px] font-headline font-bold text-[#FF5A00] uppercase tracking-wider mb-2">[ REQUIREMENTS ]</h5>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    {(selectedSector || SECTORS_DATA[0]).keyRequirements.map((req, idx) => (<li key={idx} className="flex items-start gap-2 font-mono">
                        <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5"/>
                        <span>{req}</span>
                      </li>))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-[11px] font-headline font-bold text-[#FF5A00] uppercase tracking-wider mb-2">[ ARCHITECTURES ]</h5>
                  <ul className="space-y-2 text-xs text-on-surface-variant">
                    {(selectedSector || SECTORS_DATA[0]).architectures.map((arch, idx) => (<li key={idx} className="flex items-start gap-2 font-mono">
                        <ShieldCheck className="h-3.5 w-3.5 text-white shrink-0 mt-0.5"/>
                        <span>{arch}</span>
                      </li>))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
};

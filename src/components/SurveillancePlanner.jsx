import React, { useEffect } from "react";
import { Video, Network, HardDrive, Zap, CheckCircle2, Printer, Calculator, ShieldCheck, AlertTriangle } from "lucide-react";
import { motion } from "motion/react";
const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" }
};
export const SurveillancePlanner = ({ calcInput, setCalcInput, calcResult, setCalcResult, setBookingConfirmed, setBookingForm, setShowroomModalOpen, }) => {
  useEffect(() => {
    const cams = calcInput.indoorCams + calcInput.outdoorCams;
    if (cams <= 0) {
      setCalcResult(null);
      return;
    }
    // NVR channels is next power of 2 from (4, 8, 16, 32, 64)
    let nvr = 4;
    if (cams > 4)
      nvr = 8;
    if (cams > 8)
      nvr = 16;
    if (cams > 16)
      nvr = 32;
    if (cams > 32)
      nvr = 64;
    // Storage:
    // 1080p camera = ~15GB per day continuous
    // 4K camera = ~45GB per day continuous
    const ratePerCamGB = calcInput.resolution === "1080p" ? 15 : 45;
    let totalGB = cams * ratePerCamGB * calcInput.retentionDays;
    // If motion-triggered (not continuous), storage reduces by ~60%
    if (!calcInput.continuousRecording) {
      totalGB = totalGB * 0.4;
    }
    const storageTB = parseFloat((totalGB / 1024).toFixed(2));
    const hddCount = Math.ceil(storageTB / 4); // assume 4TB surveillance HDDs
    const recommendedHDD = `${hddCount}x 4TB Western Digital Purple Surveillance HDD (Total: ${hddCount * 4}TB)`;
    // Power backup UPS sizing: ~15W per IP PoE Cam, 40W for NVR + Switch
    const wattLoad = (cams * 15) + 40;
    // VA rating assumes power factor of 0.7, plus a 40% headroom buffer
    const upsVA = Math.ceil((wattLoad / 0.7) * 1.4 * (calcInput.retentionDays > 0 ? 1.2 : 1));
    // Approximate metrics
    const cables = cams * 25; // 25 meters per camera CAT6 cable
    const labor = Math.ceil(cams / 2); // 2 cameras per day labor estimate
    const specs = [
      `Secure Layer 2 PoE Switch with ${nvr} Gigabit ethernet ports`,
      `Cat6 Shielded Solid Copper network cables with RJ45 weatherproofing boots`,
      `Surveillance-grade heavy-duty outdoor camera junction boxes`,
      `Smart mobile application setup on up to 5 smartphones with remote live view authorization`,
      `AI motion tracking and smart zone alerts configuration`
    ];
    setCalcResult({
      recommendedCameras: cams,
      nvrChannels: nvr,
      storageRequiredTB: storageTB,
      recommendedStorageHDD: recommendedHDD,
      backupUpsRatingVA: upsVA,
      estimatedCablesMeters: cables,
      estimatedLaborDays: labor,
      recommendedSpecs: specs
    });
  }, [calcInput, setCalcResult]);
  return (<section id="planner-wizard" className="py-24 px-8 bg-[#08090C] relative z-20 border-b border-[#2A2A2A]">
    <div className="max-w-7xl mx-auto">
      <motion.div {...fadeInUp} className="text-center mb-16">
        <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 font-mono">[ 05 // SURVEILLANCEPLANNER ]</span>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Surveillance Planner</h2>
        <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">Configure your building layout, coverage requirements, and quality parameters. Our engine automatically calculates complete hardware specifications, storage arrays, UPS backup requirements, and estimated labor timelines.</p>
      </motion.div>

      <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
        {/* Input Form Column */}
        <div className="lg:col-span-5 bg-[#121212] p-6 border border-[#2A2A2A] space-y-5 rounded-none">
          <h3 className="font-headline font-bold text-sm text-white pb-3 border-b border-[#2A2A2A] flex items-center gap-2 uppercase tracking-wider font-mono">
            <Calculator className="h-4 w-4 text-[#FF5A00]" />
            [ PREMISES CONFIG ]
          </h3>

          <div className="space-y-1.5">
            <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Premises Type ]</label>
            <select value={calcInput.premisesType} onChange={(e) => setCalcInput(prev => ({ ...prev, premisesType: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5A00] font-mono">
              <option value="home">Residential (Home/Apartment)</option>
              <option value="office">Commercial Office Building</option>
              <option value="retail">Retail Shop / Showroom</option>
              <option value="warehouse">Industrial Warehouse</option>
              <option value="industrial">Heavy Machinery Manufacturing Facility</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Indoor Cams ]</label>
              <input type="number" min="0" max="128" value={calcInput.indoorCams} onChange={(e) => setCalcInput(prev => ({ ...prev, indoorCams: Math.max(0, parseInt(e.target.value) || 0) }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] font-mono" />
            </div>
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Outdoor Cams ]</label>
              <input type="number" min="0" max="128" value={calcInput.outdoorCams} onChange={(e) => setCalcInput(prev => ({ ...prev, outdoorCams: Math.max(0, parseInt(e.target.value) || 0) }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] font-mono" />
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Area Size ]</label>
              <span className="text-xs text-[#FF5A00] font-bold font-mono">{calcInput.areaSizeSqFt.toLocaleString()} SQFT</span>
            </div>
            <input type="range" min="500" max="50000" step="500" value={calcInput.areaSizeSqFt} onChange={(e) => setCalcInput(prev => ({ ...prev, areaSizeSqFt: parseInt(e.target.value) }))} className="w-full accent-[#FF5A00] bg-[#0F0F0F] h-1.5 cursor-pointer" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Stream Resolution ]</label>
              <div className="flex bg-[#0F0F0F] p-1 border border-[#2A2A2A] rounded-none">
                <button onClick={() => setCalcInput(prev => ({ ...prev, resolution: "1080p" }))} className={`flex-1 text-[10px] py-1.5 rounded-none font-bold font-mono transition-all uppercase tracking-wider cursor-pointer ${calcInput.resolution === "1080p" ? "bg-[#FF5A00] text-white" : "text-on-surface-variant hover:text-white"}`}>
                  1080P FHD
                </button>
                <button onClick={() => setCalcInput(prev => ({ ...prev, resolution: "4K" }))} className={`flex-1 text-[10px] py-1.5 rounded-none font-bold font-mono transition-all uppercase tracking-wider cursor-pointer ${calcInput.resolution === "4K" ? "bg-[#FF5A00] text-white" : "text-on-surface-variant hover:text-white"}`}>
                  4K UHD
                </button>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Storage Retention ]</label>
              <select value={calcInput.retentionDays} onChange={(e) => setCalcInput(prev => ({ ...prev, retentionDays: parseInt(e.target.value) }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-2 py-2 text-xs text-white focus:outline-none font-mono">
                <option value="7">7 Days Logging</option>
                <option value="15">15 Days Logging</option>
                <option value="30">30 Days Logging</option>
                <option value="60">60 Days Logging</option>
                <option value="95">90 Days Enterprise</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between p-3.5 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none">
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">[ Continuous Recording ]</span>
              <span className="text-[9px] text-on-surface-variant font-mono uppercase">Saves 24/7 continuous log feeds.</span>
            </div>
            <input type="checkbox" checked={calcInput.continuousRecording} onChange={(e) => setCalcInput(prev => ({ ...prev, continuousRecording: e.target.checked }))} className="w-4 h-4 text-[#FF5A00] bg-gray-100 border-gray-300 rounded-none accent-[#FF5A00] cursor-pointer" />
          </div>
        </div>

        {/* Results Column */}
        <div className="lg:col-span-7 space-y-4">
          {calcResult ? (<div className="bg-[#121212] p-6 border border-[#2A2A2A] rounded-none">
            <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A] mb-6">
              <h3 className="font-headline font-bold text-sm text-[#FF5A00] flex items-center gap-2 uppercase tracking-wider font-mono">
                <ShieldCheck className="h-4 w-4 text-[#FF5A00]" />
                [ CALCULATED SECURITY PROPOSAL ]
              </h3>
              <span className="font-mono text-[9px] text-[#888888]">[ PLAN_ID: SPE-{(calcInput.areaSizeSqFt * (calcInput.indoorCams + calcInput.outdoorCams)).toString().slice(0, 4)} ]</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-[#0F0F0F] border border-[#2A2A2A] divide-x divide-[#2A2A2A]">
              <div className="p-4 text-center">
                <Video className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ TOTAL CAMS ]</span>
                <span className="text-xl font-bold font-mono text-white">{calcResult.recommendedCameras}</span>
              </div>
              <div className="p-4 text-center">
                <Network className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ NVR SIZING ]</span>
                <span className="text-xl font-bold font-mono text-white">{calcResult.nvrChannels} CH</span>
              </div>
              <div className="p-4 text-center">
                <HardDrive className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ STORAGE ]</span>
                <span className="text-xl font-bold font-mono text-white">{calcResult.storageRequiredTB} TB</span>
              </div>
              <div className="p-4 text-center">
                <Zap className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ UPS VA ]</span>
                <span className="text-xl font-bold font-mono text-white">{calcResult.backupUpsRatingVA} VA</span>
              </div>
            </div>

            {/* Recommendations detailed list */}
            <div className="space-y-4 mb-6 mt-6">
              <div>
                <h4 className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono mb-2">[ Recommended HDD Configuration ]</h4>
                <p className="text-xs text-white bg-[#0F0F0F] p-3 border border-[#2A2A2A] flex items-center gap-2 font-mono">
                  <HardDrive className="h-4 w-4 text-[#FF5A00] shrink-0" />
                  {calcResult.recommendedStorageHDD}
                </p>
              </div>

              <div>
                <h4 className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono mb-2">[ Included Installation Hardware BOM ]</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-on-surface-variant font-mono">
                  {calcResult.recommendedSpecs.map((spec, idx) => (<div key={idx} className="flex items-start gap-2 bg-[#0F0F0F] p-2.5 border border-[#2A2A2A]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A00] mt-0.5 shrink-0" />
                    <span>{spec}</span>
                  </div>))}
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-[#2A2A2A]">
              <div className="flex gap-4 text-xs font-mono text-on-surface-variant">
                <div>
                  <span className="block text-[8px] uppercase text-[#888888] font-bold">[ Network Cabling ]</span>
                  <span className="text-white font-bold">{calcResult.estimatedCablesMeters} M CAT6</span>
                </div>
                <div>
                  <span className="block text-[8px] uppercase text-[#888888] font-bold">[ Deploy Timeline ]</span>
                  <span className="text-white font-bold">{calcResult.estimatedLaborDays} Days Labor</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <button onClick={() => {
                  window.print();
                }} className="px-5 py-3 border border-primary hover:border-sky-700 bg-sky-50 text-sky-700 hover:bg-sky-100 font-headline font-bold text-[10px] tracking-widest uppercase transition-all duration-300 font-mono rounded-none cursor-pointer flex items-center gap-2" title="Print Proposal and Equipment Details">
                  <Printer className="h-3.5 w-3.5 text-primary" />
                  PRINT QUOTE
                </button>

                <button onClick={() => {
                  setBookingConfirmed(false);
                  setBookingForm(prev => ({
                    ...prev,
                    sector: calcInput.premisesType
                  }));
                  setShowroomModalOpen(true);
                }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white font-headline font-bold text-[10px] tracking-widest uppercase px-6 py-3 border border-[#FF5A00] transition-all duration-300 font-mono rounded-none cursor-pointer">
                  BOOK ASSESSMENT
                </button>
              </div>
            </div>
          </div>) : (<div className="bg-[#121212] p-12 text-center border border-[#2A2A2A] flex flex-col items-center justify-center h-full rounded-none">
            <AlertTriangle className="h-8 w-8 text-orange-400 mb-4" />
            <h3 className="font-headline font-bold text-sm text-white mb-2 uppercase tracking-wider font-mono">[ Configure Camera Sizing ]</h3>
            <p className="text-[11px] text-on-surface-variant max-w-sm font-mono">Please set at least 1 indoor or 1 outdoor camera to dynamically generate your security topology and bill-of-materials.</p>
          </div>)}
        </div>
      </motion.div>
    </div>
  </section>);
};

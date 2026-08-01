import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, CheckCircle2, HelpCircle, ChevronDown } from "lucide-react";
import BrandCarousel from "./BrandCarousel";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};


export function AboutUs() {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const faqs = [
    {
      question: "What is your typical security system installation process?",
      answer: "Our deployment process is rigorous and systematic:\n\n1. **Onsite Vulnerability Audit:** We map out all structural blind spots, calculate necessary cable routing paths, and identify direct solar glare zones.\n2. **Engineering Schematic & Power Budgets:** We compile active power budgets for all PoE devices and size appropriate battery banks or redundant online UPS units.\n3. **Precision Infrastructure Wiring & Deployment:** We route high-grade Cat6 or fiber-optic lines inside thick, impact-resistant PVC conduits.\n4. **Handover & Fine-Tuning Calibration:** We adjust camera lenses, frame the exact fields of view, configure secure custom subnets to shield against outside intrusions, and calibrate motion-detection loops."
    },
    {
      question: "What are your equipment warranty terms and support SLA policies?",
      answer: "All authorized security equipment we distribute (including Hikvision, Dahua, Uniview, CP Plus) includes an official **2-Year Manufacturer Replacement Warranty** for physical hardware failure.\n\nAdditionally, Security Plus Electronics offers an **unconditional 1-Year Onsite System Support SLA**. For our registered corporate and commercial SLA clients in Nagpur, we commit to a **2-Hour Onsite Emergency Technical SLA**. If any core camera stream or access lock fails, a field technician is guaranteed to arrive within 120 minutes."
    },
    {
      question: "Which regions and suburbs do you service around Nagpur?",
      answer: "Our primary rapid-response service grid covers the entire **Nagpur Metropolitan Region**, including major commercial, residential, and industrial nodes:\n\n- **Nagpur Suburbs:** Dharampeth, Sadar, Wardhaman Nagar, Manish Nagar, Besa, Ramdaspeth, and Laxmi Nagar.\n- **Industrial Zones:** Hingna MIDC, Butibori Industrial Estate, and MIHAN Special Economic Zone.\n- **Outlying Districts:** We regularly execute enterprise deployments and structured support frameworks in nearby cities like Wardha, Chandrapur, Amravati, Bhandara, and Gondia."
    },
    {
      question: "Can you integrate our existing analog cameras with a new IP system?",
      answer: "Absolutely. We specialize in hybrid ecosystem engineering. We do not force you to scrap previous working equipment. Using multi-format Hybrid DVRs or dedicated network transceivers, we can bridge your existing legacy analog or coaxial cameras with modern 4K/8MP IP surveillance streams, routing them under a unified, secure central network console."
    },
    {
      question: "Do you provide custom maintenance schedules for industrial plants and banks?",
      answer: "Yes, we structure dedicated **Annual Maintenance Contracts (AMC)** customized for high-security environments like banking vaults, hospital wards, and manufacturing warehouses. Our AMCs include quarterly preventive audits, automated network diagnostics, diagnostic backup UPS battery load tests, lens cleaning, and firmware hotfixes to seal critical software vulnerabilities."
    }
  ];


  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="py-16 px-8 bg-slate-50 min-h-screen">
        <div className="max-w-6xl mx-auto space-y-16">

          {/* Visual grid story */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" id="spe-about-story-grid">
            <div className="space-y-6">
              <span className="font-sans text-[10px] text-sky-600 tracking-widest uppercase block font-semibold">BRAND STORY </span>
              <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">Nagpur's Landmark Security Mall</h2>
              <div className="h-0.5 w-24 bg-sky-600"></div>
              <p className="text-xs text-sky-600 font-bold uppercase leading-relaxed">THE CORE SECURITY SOURCE</p>

              <p className="text-sm text-slate-600 leading-relaxed">
                Founded in 2005 in Nagpur, Maharashtra, <strong>Security Plus Electronics (SPE)</strong> has grown from a specialized hardware supplier to Central India's biggest physical CCTV and Automation Mall. We stand as a beacon of trust, helping government institutes, financial entities, healthcare providers, and high-net-worth individuals protect assets.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                We do not believe in simple &quot;box-pushing.&quot; True security is a factor of robust component integration, proper fiber-optic backbone architecture, cyber-isolated VLAN switches, and redundant online power backup sizing.
              </p>
            </div>

            <div className="bg-white border border-slate-200 space-y-4 rounded-2xl shadow-sm relative">

              <img className="h-full w-full" src={new URL("../assets/certificate.png", import.meta.url).href} alt="" />

              {/* <div className="absolute top-3 left-4 text-[8px] text-slate-400 font-bold">[ SYSTEM CERTIFICATE // SEC_PLUS_05 ]</div>

              <div className="p-6 bg-slate-50 border border-slate-100 text-center space-y-3 rounded-xl">
                <ShieldCheck className="h-10 w-10 text-sky-600 mx-auto animate-pulse" />
                <h3 className="font-sans font-bold text-xs text-slate-900 uppercase tracking-wider">CERTIFIED INTEGRITY</h3>
                <p className="text-[9px] text-slate-500 max-w-xs mx-auto uppercase leading-relaxed font-semibold">Official Elite Gold Partner for Hikvision, Dahua Authorized Solutions Integrator, and CP Plus Central Distributor.</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-slate-50 p-3.5 border border-slate-100 text-center rounded-xl">
                  <span className="text-slate-900 font-extrabold block text-base">20+ YRS</span>
                  <span className="text-[8px] uppercase font-bold text-slate-400">Operations</span>
                </div>
                <div className="bg-slate-50 p-3.5 border border-slate-100 text-center rounded-xl">
                  <span className="text-slate-900 font-extrabold block text-base">2 HR SLA</span>
                  <span className="text-[8px] uppercase font-bold text-slate-400">Support Guarantee</span>
                </div>
              </div> */}
            </div>
          </div>

          {/* SLA quality details */}
          <div className="bg-white p-8 border border-slate-200 rounded-2xl shadow-sm" id="spe-about-sla-details">
            <span className="text-[9px] font-bold text-sky-600 uppercase tracking-widest block mb-1">THE TWO-HOUR FIELD RESOLUTION GUARANTEE</span>
            <h3 className="font-sans text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider">Our SLA Guarantees</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-500">
              <div className="bg-slate-50 p-4 border border-slate-100 space-y-2 rounded-xl">
                <div className="flex items-center gap-2 text-sky-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-bold uppercase tracking-wider">2 Hour Onsite Support</span>
                </div>
                <p className="text-[11px] leading-relaxed">For emergency enterprise banking or healthcare outages, we dispatch field specialists to Nagpur perimeters within 120 minutes of logging.</p>
              </div>
              <div className="bg-slate-50 p-4 border border-slate-100 space-y-2 rounded-xl">
                <div className="flex items-center gap-2 text-sky-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-bold uppercase tracking-wider">Zero Blind-Spot Promise</span>
                </div>
                <p className="text-[11px] leading-relaxed">We custom-engineer camera layouts with overlapping fields of view, ensuring high-value money vaults or safes stay monitored continuously.</p>
              </div>
              <div className="bg-slate-50 p-4 border border-slate-100 space-y-2 rounded-xl">
                <div className="flex items-center gap-2 text-sky-600">
                  <CheckCircle2 className="h-4 w-4" />
                  <span className="font-bold uppercase tracking-wider">Redundancy Assured</span>
                </div>
                <p className="text-[11px] leading-relaxed">All designs incorporate dual-converting online UPS battery packs, guarding IP channels against power brownouts and summer heat drops.</p>
              </div>
            </div>
          </div>

          {/* Collapsible FAQ Section */}
          <div className="space-y-8 pt-8 border-t border-slate-200" id="spe-about-faq-sec">
            <div className="text-center">
              <span className="font-sans font-bold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
                [ SERVICE OPERATIONS // CLIENT INTELLIGENCE ]
              </span>
              <h3 className="font-sans text-xl md:text-2xl font-extrabold text-slate-900 uppercase">
                Deployment &amp; Support FAQs
              </h3>
              <p className="text-xs text-slate-500 max-w-xl mx-auto mt-2 uppercase font-bold tracking-wider">
                Addressing common engineering queries about our physical installation processes, SLA warranties, and Nagpur fleet coverage.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (<div key={idx} className={`border transition-all duration-300 rounded-2xl bg-white ${isOpen ? "border-sky-500 shadow-md shadow-sky-50" : "border-slate-200 hover:border-slate-300"}`}>
                  <button onClick={() => setOpenFaqIndex(isOpen ? null : idx)} className="w-full text-left p-5 flex items-center justify-between font-bold text-xs text-slate-800 tracking-wide cursor-pointer select-none">
                    <span className="flex items-center gap-3">
                      <HelpCircle className={`h-4 w-4 shrink-0 transition-colors ${isOpen ? "text-sky-600" : "text-slate-400"}`} />
                      {faq.question}
                    </span>
                    <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-sky-600" : "text-slate-400"}`} />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25, ease: "easeInOut" }} className="overflow-hidden">
                      <div className="px-5 pb-5 pt-1 text-xs text-slate-500 leading-relaxed border-t border-slate-100 space-y-3 font-sans">
                        {faq.answer.split("\n\n").map((para, pIdx) => {
                          const parts = para.split(/(\*\*.*?\*\*)/g);
                          return (<p key={pIdx}>
                            {parts.map((part, partIdx) => {
                              if (part.startsWith("**") && part.endsWith("**")) {
                                return (<strong key={partIdx} className="text-slate-800 font-extrabold">
                                  {part.slice(2, -2)}
                                </strong>);
                              }
                              return part;
                            })}
                          </p>);
                        })}
                      </div>
                    </motion.div>)}
                  </AnimatePresence>
                </div>);
              })}
            </div>
          </div>

          <BrandCarousel />
        </div>
      </section>
    </motion.div>
  );
}

import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const FAQSection = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const faqs = [
        {
            q: "Do you provide on-site installation and hardware warranty in Nagpur?",
            a: "Yes. We handle end-to-end physical on-site installation, structured cabling, configuration, and testing. Every premium brand like Hikvision, Dahua, or Woston includes 1 to 2 years of official hardware replacement warranty, backed by SPE's physical service depot in Nagpur."
        },
        {
            q: "Can I monitor my camera footage remotely on multiple mobile phones?",
            a: "Absolutely. We configure secure WAN port forwarding or cloud P2P bridges allowing high-definition remote surveillance. You can watch live feeds, control motorized PTZ sweeps, and access playback securely from authorized iOS or Android mobile applications."
        },
        {
            q: "What happens during a power blackout? Do the cameras stop recording?",
            a: "No, if a proper backup power source is installed. We design and integrate Pure Sine Wave Online UPS systems and smart solar power backup modules. This ensures that NVR hard drives and network PoE switches stay fully functional through Nagpur's electricity sags and blackouts, guaranteeing 100% uptime."
        },
        {
            q: "How many days of camera recording can be retained in NVR storage?",
            a: "This depends entirely on hard drive storage capacity, the number of connected cameras, recording resolution (1080p vs. 4K), frame-per-second settings, and compression codecs. By using smart H.265+ codecs, you can save up to 80% on storage space. Typically, our standard storage packages are sized for 15, 30, or 60 days of continuous high-fidelity video archiving."
        },
        {
            q: "How can I calculate my camera power, storage, and lens specifications?",
            a: "You can utilize our professional Surveillance Planner & Storage Sizing wizard located inside the 'Products' page, or consult our automated SPE Sentinel AI Assistant in the bottom-right corner for instant calculations."
        }
    ];

    return (<section className="py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    CLEAR ANSWERS TO CORE SECURITY PARADIGMS
                </span>
                <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-500 mt-2 text-sm">
                    Everything you need to know about corporate and residential surveillance in Nagpur.
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, idx) => (<div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-400 transition-colors duration-200">
                    <button type='button' id='faqBtn' aria-label="FAQ Button" onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex justify-between items-center p-6 text-left font-sans font-semibold text-slate-800 text-sm md:text-base focus:outline-none cursor-pointer">
                        <span>{faq.q}</span>
                        <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-primary" : ""}`} />
                    </button>

                    <AnimatePresence initial={false}>
                        {openIndex === idx && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
                            <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-sans bg-slate-50/40">
                                {faq.a}
                            </div>
                        </motion.div>)}
                    </AnimatePresence>
                </div>))}
            </div>
        </div>
    </section>);
};

export default FAQSection
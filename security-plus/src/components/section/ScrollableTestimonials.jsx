import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import TESTIMONIALS_DATA from "../../json/testimonials.json";

const ScrollableTestimonials = () => {
    const [scrollIndex, setScrollIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const nextSlide = () => {
        setScrollIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    };
    const prevSlide = () => {
        setScrollIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
    };
    useEffect(() => {
        if (isPaused)
            return;
        const timer = setInterval(() => {
            nextSlide();
        }, 5500);
        return () => clearInterval(timer);
    }, [isPaused]);
    return (<section className="py-24 px-6 md:px-12 bg-white relative overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                <div>
                    <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                        CLIENT ADVOCACY & TRUST
                    </span>
                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
                        Enterprise Success Stories
                    </h2>
                    <p className="text-slate-500 mt-2 text-sm max-w-xl font-sans">
                        See how Security Plus Electronics (SPE) implements zero-downtime protection for Central India's leading organizations.
                    </p>
                </div>

                <div className="flex items-center gap-4">

                    <div className="flex gap-3">
                        <button type='button' id='prevBtn' aria-label="Previous Button" onClick={prevSlide} className="p-3 border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer" aria-label="Previous Testimonial">
                            <ArrowLeft className="h-4 w-4" />
                        </button>
                        <button type='button' id='nextBtn' aria-label="Next Button" onClick={nextSlide} className="p-3 border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer" aria-label="Next Testimonial">
                            <ArrowRight className="h-4 w-4" />
                        </button>
                    </div>
                </div>
            </div>

            <div onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="relative min-h-[320px] md:min-h-[260px] flex items-center cursor-pointer" title="Hover to pause autoplay">
                <AnimatePresence mode="wait">
                    <motion.div key={scrollIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.4 }} className="w-full bg-slate-50 border border-slate-100 p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-8 rounded-2xl items-center">
                        <div className="md:col-span-3 flex flex-col justify-between">
                            <div>
                                <div className="flex gap-1 mb-4">
                                    {[...Array(TESTIMONIALS_DATA[scrollIndex].rating)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-primary text-primary" />))}
                                </div>
                                <p className="text-slate-700 text-base md:text-lg italic font-sans leading-relaxed mb-6">
                                    "{TESTIMONIALS_DATA[scrollIndex].content}"
                                </p>
                            </div>
                            <div>
                                <h4 className="font-sans font-bold text-slate-900 text-base">
                                    {TESTIMONIALS_DATA[scrollIndex].clientName}
                                </h4>
                                <p className="text-xs text-slate-500">
                                    {TESTIMONIALS_DATA[scrollIndex].designation} &mdash; <span className="text-primary font-semibold">{TESTIMONIALS_DATA[scrollIndex].organization}</span>
                                </p>
                            </div>
                        </div>

                        <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center">
                            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">Installed Deployment</span>
                            <div className="text-slate-800 font-sans font-semibold text-sm mb-4">
                                {TESTIMONIALS_DATA[scrollIndex].systemInstalled}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-[10px] bg-sky-50 text-sky-700 font-bold font-mono px-2 py-0.5 rounded border border-sky-100">
                                    VERIFIED SECURE
                                </span>
                                <span className="text-[10px] text-slate-400 font-mono">{TESTIMONIALS_DATA[scrollIndex].date}</span>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center gap-2 mt-8">
                {TESTIMONIALS_DATA.map((_, idx) => (<button type='button' id='testimonialBtn' aria-label="Testimonial Button" key={idx} onClick={() => setScrollIndex(idx)} className={`h-2 transition-all rounded-full cursor-pointer ${idx === scrollIndex ? "w-6 bg-primary" : "w-2 bg-slate-300"}`} aria-label={`Go to slide ${idx + 1}`} />))}
            </div>
        </div>
    </section>);
};
export default ScrollableTestimonials
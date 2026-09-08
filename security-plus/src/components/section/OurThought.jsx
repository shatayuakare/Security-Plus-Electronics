import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OurThought = () => {
    const thoughts = [
        {
            icon: ShieldAlert,
            tag: "Surveillance Strategy",
            title: "Edge AI vs Cloud Compute in CCTV Architectures",
            desc: "An executive analysis on optimizing bandwidth. Discover why hybrid deployments with on-camera localized person/vehicle metadata extraction are superior for real-time response."
        },
        {
            icon: Landmark,
            tag: "Critical Infrastructure",
            title: "Hardening Banking Vaults with Smart Access Control",
            desc: "Exploring multi-factor biometric checks, isolated PoE door locking controllers, and overlapping anti-tampering CCTV surveillance grids for high-risk cash depots."
        },
        {
            icon: Award,
            tag: "Best Practices",
            title: "Optics Physics: Why True Optical Zoom Matters More Than Megapixels",
            desc: "A masterclass on lens resolution. We explain how premium physical motorized varifocal lenses extract crystal-clear face credentials at 100 meters, surpassing digital cropping."
        }
    ];

    return (<section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    SYSTEM INTEGRITY INSIGHTS
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
                    Our Thought Leadership
                </h2>
                <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                    Accenture & Google style technology briefings explaining security paradigms in simple, actionable terms.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {thoughts.map((thought, idx) => {
                    const IconComponent = thought.icon;
                    return (<div key={idx} className="bg-white border border-slate-200 p-8 hover:border-primary hover:shadow-lg transition-all duration-300 rounded-2xl flex flex-col justify-between group">
                        <div>
                            <div className="w-12 h-12 rounded-xl bg-sky-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <IconComponent className="h-6 w-6" />
                            </div>
                            <span className="font-mono text-[10px] font-bold text-primary tracking-wider uppercase block mb-2">
                                {thought.tag}
                            </span>
                            <h3 className="text-lg font-sans font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                                {thought.title}
                            </h3>
                            <p className="text-slate-500 text-xs leading-relaxed mb-6">
                                {thought.desc}
                            </p>
                        </div>
                        <div className="flex items-center gap-1 text-xs font-bold text-primary font-mono hover:text-sky-700 transition-colors cursor-pointer pt-4 border-t border-slate-100">
                            <span>READ BRIEFING</span>
                            <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>);
                })}
            </div>
            <div className="flex justify-center mt-12">
                <Link to={"/blogs"} className="group bg-primary hover:bg-sky-700 text-white font-bold font-sans py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                    <span>BROWSE ALL ARTICLES</span>
                    <ArrowRight className="h-4 w-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    </section>);
};
export default OurThought
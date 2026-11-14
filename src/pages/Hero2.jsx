import { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import heroSlide from "../json/heroSlide.json";

const SLIDE_MS = 5000; // keep in sync with the interval in App.jsx

const stats = [
    { value: 20, suffix: "+", label: "Years in security" },
    { value: 40, suffix: "+", label: "Brands in store" },
    { value: 5000, suffix: "+", label: "Customers served" },
];

// The slide JSON stores HTML snippets. Render them as plain text instead of injecting HTML.
const strip = (html = "") => html.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
const titleLines = (html = "") => html.split(/<br\s*\/?>/i).map(strip).filter(Boolean);
const sentence = (s = "") => (s === s.toUpperCase() ? s.charAt(0) + s.slice(1).toLowerCase() : s);
// Use the optimised .webp copies that already exist in src/assets/slide.
const slideSrc = (image) =>
    new URL(`../assets/slide/${image.replace(/\.png$/i, ".webp")}`, import.meta.url).href;

function CountUp({ target, suffix, duration = 1400 }) {
    const [n, setN] = useState(0);
    useEffect(() => {
        let raf, t0;
        const step = (t) => {
            t0 ??= t;
            const p = Math.min((t - t0) / duration, 1);
            setN(Math.round(p * target));
            if (p < 1) raf = requestAnimationFrame(step);
        };
        raf = requestAnimationFrame(step);
        return () => cancelAnimationFrame(raf);
    }, [target, duration]);
    return <>{n.toLocaleString("en-IN")}{suffix}</>;
}

function Clock() {
    const [now, setNow] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(id);
    }, []);
    return <>{now.toLocaleDateString("en-GB")} &nbsp; {now.toLocaleTimeString("en-GB")}</>;
}

const Corner = ({ pos }) => (
    <span aria-hidden className={`absolute h-6 w-6 border-white/70 ${pos}`} />
);

const Hero = ({ heroSlideIndex, setHeroSlideIndex, setShowroomModalOpen }) => {
    const reduce = useReducedMotion();
    const slide = heroSlide[heroSlideIndex] ?? heroSlide[0];
    const lines = titleLines(slide.title);

    return (
        <section className="relative overflow-hidden bg-[#0a1220] text-white min-h-[100vh] content-center">
            <div className="mx-auto grid min-h-[88vh] max-w-7xl lg:grid-cols-[1fr_1.05fr]">
                {/* Text */}
                <div className="relative z-10 flex flex-col justify-center px-6 pb-10 pt-28 lg:pb-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={slide.id}
                            initial={reduce ? false : { opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduce ? undefined : { opacity: 0, y: -10 }}
                            transition={{ duration: 0.35 }}
                        >
                            <p className="text-sm font-medium text-sky-300 uppercase px-4 py-1.5 inline-flex items-center gap-2 border border-primary/20 rounded-full" style={
                                slide.category?.includes("EMERALD")
                                    ? { backgroundColor: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.2)" }
                                    : slide.category?.includes("BIOMETRICS")
                                        ?
                                        { backgroundColor: "rgba(99,102,241,0.1)", borderColor: "rgba(99,102,241,0.2)" }
                                        : slide.category?.includes("NETWORK")
                                            ?
                                            { backgroundColor: "rgba(245,158,11,0.1)", borderColor: "rgba(245,158,11,0.2)" }
                                            : slide.category?.includes("SMART HOME")
                                                ?
                                                { backgroundColor: "rgba(244,63,94,0.1)", borderColor: "rgba(244,63,94,0.2)" }
                                                : slide.category?.includes("POWER")
                                                    ? { backgroundColor: "rgba(6,182,212,0.1)", borderColor: "rgba(6,182,212,0.2)" }
                                                    : undefined
                            }>{sentence(strip(slide.category))}</p>

                            <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl" dangerouslySetInnerHTML={{ __html: slide.title }} />
                            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300">{slide.description}</p>

                            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                                {slide.btnLink && slide.btnLink !== "none" && (
                                    <Link
                                        to={slide.btnLink}
                                        className="rounded-lg bg-primary px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                                    >
                                        {sentence(slide.btnText)}
                                    </Link>
                                )}
                                {slide.btnText2 && (
                                    <button
                                        id="bookBtn"
                                        onClick={() => setShowroomModalOpen(true)}
                                        className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
                                    >
                                        <Calendar className="h-4 w-4 text-sky-300" />
                                        {sentence(slide.btnText2)}
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-6">
                        {stats.map((s) => (
                            <div key={s.label}>
                                <dd className="text-2xl font-extrabold sm:text-3xl"><CountUp target={s.value} suffix={s.suffix} /></dd>
                                <dt className="mt-1 text-xs text-slate-400">{s.label}</dt>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Photo, shown as a camera feed */}
                <div className="relative order-first min-h-[320px] lg:order-none lg:min-h-0">
                    <AnimatePresence initial={false}>
                        <motion.img
                            key={slide.id}
                            src={slideSrc(slide.image)}
                            alt={strip(slide.title)}
                            className="absolute inset-0 h-full w-full object-cover"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: reduce ? 0 : 0.7 }}
                            fetchPriority={heroSlideIndex === 0 ? "high" : "auto"}
                            decoding="async"
                        />
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1220]/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0a1220] lg:via-[#0a1220]/10 lg:to-transparent" />
                    <div className="absolute inset-4 hidden sm:block lg:inset-8">
                        <Corner pos="left-0 top-0 border-l-2 border-t-2" />
                        <Corner pos="right-0 top-0 border-r-2 border-t-2" />
                        <Corner pos="bottom-0 left-0 border-b-2 border-l-2" />
                        <Corner pos="bottom-0 right-0 border-b-2 border-r-2" />
                    </div>
                    <div className="absolute left-6 top-6 flex items-center gap-2 font-mono text-xs text-white sm:left-10 sm:top-10 lg:left-14 lg:top-12">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-red-500 motion-reduce:animate-none" />
                        CAM {String(heroSlideIndex + 1).padStart(2, "0")}
                    </div>
                    <div className="absolute bottom-6 right-6 font-mono text-xs text-white sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-14">
                        <Clock />
                    </div>
                </div>
            </div>

            {/* Slide controls with timer */}
            <div className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-7xl gap-2 px-6 pb-4 lg:max-w-none lg:px-0 lg:pb-0">
                {heroSlide.map((s, i) => (
                    <button
                        key={s.id}
                        aria-label={`Go to slide ${i + 1}: ${strip(s.title)}`}
                        aria-current={i === heroSlideIndex}
                        onClick={() => setHeroSlideIndex(i)}
                        className="group relative h-6 flex-1 cursor-pointer focus-visible:outline-2 focus-visible:outline-sky-300"
                    >
                        <span className="absolute inset-x-0 bottom-0 h-1 bg-white/15 group-hover:bg-white/30" />
                        {i === heroSlideIndex && (
                            <motion.span
                                key={`fill-${heroSlideIndex}`}
                                className="absolute bottom-0 left-0 h-1 bg-primary"
                                initial={{ width: reduce ? "100%" : "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: reduce ? 0 : SLIDE_MS / 1000, ease: "linear" }}
                            />
                        )}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default Hero;

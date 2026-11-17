import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
    ArrowRight,
    Award,
    Landmark,
    ShieldAlert,
    LoaderCircle,
    BookOpen,
} from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const BLOG_API =
    "https://woston.in/?rest_route=%2Fwp%2Fv2%2Fposts";

const ICONS = [ShieldAlert, Landmark, Award, BookOpen];

const OurThought = () => {

    const [thoughts, setThoughts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const controller = new AbortController();

        const fetchThoughts = async () => {
            try {
                const response = await axios.get(BLOG_API, {
                    params: {
                        per_page: 4,
                        page: 1,
                        status: "publish",
                        _embed: true,
                    },
                    signal: controller.signal,
                });

                setThoughts(
                    Array.isArray(response.data)
                        ? response.data.slice(0, 4)
                        : []
                );

            } catch (error) {
                if (!axios.isCancel(error)) {
                    console.error("Blog fetching error:", error);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchThoughts();

        return () => controller.abort();
    }, []);

    const getImage = (post) => {
        return (
            post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
            post?.content?.rendered?.match(/<img[^>]+src=["']([^"']+)/i)?.[1] ||
            null
        );
    };

    const getDescription = (post) => {
        const excerpt = post?.excerpt?.rendered || "";

        const text = excerpt
            .replace(/<[^>]*>/g, "")
            .replace(/&nbsp;/g, " ")
            .replace(/&amp;/g, "&")
            .replace(/&#8217;/g, "'")
            .replace(/&#8211;/g, "-")
            .replace(/&#8230;/g, "...");

        return text.trim() || "Explore the latest insights, technical updates and industry perspectives.";
    };

    const getDate = (date) => {
        if (!date) return "";

        return new Date(date).toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    return (
        <section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100">

            <div className="max-w-7xl mx-auto">

                {/* SECTION HEADER */}

                <div className="text-center mb-16">

                    <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                        SYSTEM INTEGRITY INSIGHTS
                    </span>

                    <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
                        Our Thought Leadership
                    </h2>

                    <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                        Technology briefings, industry perspectives and
                        actionable insights shaping the future of
                        security and infrastructure.
                    </p>

                </div>

                {/* BLOG GRID */}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {loading ? (

                        Array.from({ length: 4 }).map((_, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-200 p-6 rounded-2xl animate-pulse"
                            >
                                <div className="h-40 bg-slate-100 rounded-xl mb-5" />
                                <div className="h-3 bg-slate-100 rounded w-1/3 mb-4" />
                                <div className="h-5 bg-slate-100 rounded mb-3" />
                                <div className="h-3 bg-slate-100 rounded mb-2" />
                                <div className="h-3 bg-slate-100 rounded w-4/5" />
                                <div className="mt-8 pt-4 border-t border-slate-100">
                                    <div className="h-4 bg-slate-100 rounded w-1/2" />
                                </div>
                            </div>
                        ))

                    ) : thoughts.length > 0 ? (

                        thoughts.map((thought, idx) => {

                            const IconComponent = ICONS[idx % ICONS.length];
                            const image = getImage(thought);

                            return (
                                <motion.div
                                    key={thought.id}
                                    initial={{ opacity: 0, y: 25 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.5,
                                        delay: idx * 0.1,
                                    }}
                                    className="bg-white border border-slate-200 hover:border-primary hover:shadow-lg transition-all duration-300 rounded-2xl flex flex-col justify-between group overflow-hidden"
                                >

                                    <div>

                                        {/* FEATURED IMAGE */}

                                        <div className="relative aspect-square bg-slate-100 overflow-hidden">

                                            {image ? (
                                                <img
                                                    src={image}
                                                    alt={thought.title?.rendered || "Blog image"}
                                                    loading="lazy"
                                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    <IconComponent className="h-12 w-12 text-slate-300" />
                                                </div>
                                            )}

                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />

                                            {/* <span className="absolute bottom-3 left-4 text-[10px] font-bold text-white uppercase tracking-widest">
                                                INSIGHT / 0{idx + 1}
                                            </span> */}

                                        </div>

                                        {/* BLOG CONTENT */}

                                        <div className="p-4">

                                            <h3 className="text-base font-sans font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-3">
                                                {thought.title?.rendered
                                                    ?.replace(/<[^>]*>/g, "")}
                                            </h3>

                                            <p className="text-slate-500 text-xs leading-relaxed line-clamp-4">
                                                {getDescription(thought)}
                                            </p>

                                        </div>

                                    </div>

                                    {/* FIXED BOTTOM FOOTER */}

                                    <div className="px-6 pb-6 mt-auto">

                                        <div className="pt-0 border-t border-slate-100 flex items-center justify-between gap-2">

                                            <span className="text-[9px] text-slate-500 font-mono uppercase">
                                                {getDate(thought.date)}
                                            </span>

                                            <Link
                                                to={`/blogs/`}
                                                // to={`/blogs/${thought.slug}`}
                                                className="flex items-center gap-1 text-xs font-bold text-primary font-mono hover:text-sky-700 transition-colors"
                                            >
                                                READ ARTICLE
                                                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                                            </Link>

                                        </div>

                                    </div>

                                </motion.div>
                            );
                        })

                    ) : (

                        <div className="col-span-full text-center py-12">
                            <BookOpen className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                            <p className="text-sm text-slate-500">
                                No articles available at the moment.
                            </p>
                        </div>

                    )}

                </div>

                {/* VIEW ALL ARTICLES */}

                <div className="flex justify-center mt-12">

                    <Link
                        to="/blogs"
                        className="group bg-primary hover:bg-sky-700 text-white font-bold font-sans py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        <span>BROWSE ALL ARTICLES</span>

                        <ArrowRight className="h-4 w-4 inline-block ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default OurThought;
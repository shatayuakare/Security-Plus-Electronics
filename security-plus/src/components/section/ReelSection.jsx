import { useState, useEffect, useRef } from 'react'
import { motion } from "motion/react";
import { Eye, Heart, Volume2, VolumeX, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react'

import reelsData from "../../assets/reels/reels.json"
import reel1 from "../../assets/reels/1.mp4"
import reel2 from "../../assets/reels/2.mp4"
import reel3 from "../../assets/reels/3.mp4"
import reel4 from "../../assets/reels/4.mp4"
import reel5 from "../../assets/reels/5.mp4"
import reel6 from "../../assets/reels/6.mp4"

const localVideos = {
    "reel-1": reel1,
    "reel-2": reel2,
    "reel-3": reel3,
    "reel-4": reel4,
    "reel-5": reel5,
    "reel-6": reel6
};

const ReelCard = ({
    reel,
    activeReelId,
    setActiveReelId,
    isMuted,
    onToggleMute,
    onLike,
    onVideoEnded,
    fadeInUp
}) => {
    const videoRef = useRef(null);
    const isPlaying = activeReelId === reel.id;

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        if (isPlaying) {
            if (video.paused) {
                video.play().catch((err) => console.log("Playback failed:", err));
            }
        } else {
            if (!video.paused) {
                video.pause();
            }
        }
    }, [isPlaying]);

    const handleMouseEnter = () => {
        setActiveReelId(reel.id);
    };



    const togglePlay = (e) => {
        e.stopPropagation();
        if (isPlaying) {
            setActiveReelId(null);
        } else {
            setActiveReelId(reel.id);
        }
    };

    return (
        <motion.div
            {...fadeInUp}
            onMouseEnter={handleMouseEnter}
            className="relative aspect-9/16 bg-slate-950 border border-slate-200/80 rounded-3xl overflow-hidden group shadow-md hover:shadow-xl hover:border-sky-500 transition-all duration-300 w-full"
        >
            <video
                ref={videoRef}
                src={localVideos[reel.id] || reel.videoUrl}
                className="absolute inset-0 w-full h-full object-cover z-0"
                playsInline
                muted={isMuted}
                onEnded={() => onVideoEnded(reel.id)}
                onClick={togglePlay}
            />

            <div className="absolute top-0 left-0 right-0 p-5 bg-linear-to-b from-black/80 via-black/40 to-transparent z-10 text-white pointer-events-none">
                <span className="font-sans text-[9px] bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-md tracking-wider uppercase font-bold">
                    {reel.category}
                </span>
                <h4 className="font-sans font-bold text-sm tracking-tight mt-2.5 drop-shadow">
                    {reel.title}
                </h4>
            </div>

            <div onClick={togglePlay} className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: isPlaying ? 1 : 1.1,
                        opacity: isPlaying ? 0 : 1
                    }}
                    whileHover={{ scale: 1.2, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all shadow-lg"
                >
                    {isPlaying ? <Pause className="h-6 w-6 text-white fill-white" /> : <Play className="h-6 w-6 text-white fill-white translate-x-0.5" />}
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/90 via-black/40 to-transparent z-20 flex flex-col gap-3 pointer-events-none">
                <div className="flex justify-between items-center text-white/90 font-mono text-[10px]">
                    <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5 text-sky-400" />
                        <span>{reel.views} views</span>
                    </div>
                    <button
                        className="pointer-events-auto flex items-center gap-1 hover:text-rose-400 transition-colors cursor-pointer"
                        onClick={(e) => {
                            e.stopPropagation();
                            onLike(reel.id);
                        }}
                    >
                        <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                        <span>{reel.likes}</span>
                    </button>
                </div>

                <div className="flex justify-start items-center pt-2 border-t border-white/10">
                    <button
                        onClick={togglePlay}
                        className="pointer-events-auto w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center transition-all cursor-pointer shadow"
                    >
                        {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
                    </button>
                </div>
            </div>

            {isPlaying && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onToggleMute(reel.id);
                    }}
                    className="absolute bottom-4 right-5 z-30 pointer-events-auto w-9 h-9 rounded-full bg-slate-950/90 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-xl"
                    title={isMuted ? "Unmute Video" : "Mute Video"}
                >
                    {isMuted ? <VolumeX className="h-5 w-5 text-rose-400" /> : <Volume2 className="h-5 w-5 text-sky-400" />}
                </button>
            )}
        </motion.div>
    );
};

const ReelSection = ({ fadeInUp }) => {
    const [reels, setReels] = useState(reelsData);
    const [activeReelId, setActiveReelId] = useState(null);
    const [mutedReels, setMutedReels] = useState({});
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    useEffect(() => {
        const updateVisibleCount = () => {
            if (window.innerWidth < 640) {
                setVisibleCount(1);
            } else if (window.innerWidth < 1024) {
                setVisibleCount(2);
            } else {
                setVisibleCount(4);
            }
        };
        updateVisibleCount();
        window.addEventListener("resize", updateVisibleCount);
        return () => window.removeEventListener("resize", updateVisibleCount);
    }, []);

    const maxStartIndex = Math.max(0, reels.length - visibleCount);

    useEffect(() => {
        setStartIndex(prev => Math.min(prev, maxStartIndex));
    }, [visibleCount, maxStartIndex]);

    const handleToggleMute = (reelId) => {
        setMutedReels(prev => ({ ...prev, [reelId]: !prev[reelId] }));
    };

    const handleLike = (reelId) => {
        setReels(prev => prev.map(r => r.id === reelId ? { ...r, likes: r.likes + 1 } : r));
    };

    const handleVideoEnded = (finishedReelId) => {
        const currentIndex = reels.findIndex(r => r.id === finishedReelId);
        const nextIndex = (currentIndex + 1) % reels.length;
        const nextReel = reels[nextIndex];

        if (nextIndex < startIndex || nextIndex >= startIndex + visibleCount) {
            if (nextIndex === 0) {
                setStartIndex(0);
            } else if (nextIndex > startIndex) {
                setStartIndex(Math.min(nextIndex, maxStartIndex));
            } else {
                setStartIndex(nextIndex);
            }
        }
        setActiveReelId(nextReel.id);
    };

    const scrollPrev = () => {
        setStartIndex(prev => Math.max(prev - 1, 0));
    };

    const scrollNext = () => {
        setStartIndex(prev => Math.min(prev + 1, maxStartIndex));
    };

    return (
        <section className="py-24 px-8 relative z-20 border-b border-slate-100 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto relative">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <span className="font-sans font-extrabold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
                        EXPLORE SURVEILLANCE IN ACTION
                    </span>
                    <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
                        Live Demo Reels
                    </h2>
                    <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                        Watch our latest hardware installations, intelligent AI tracking, and enterprise security configurations in action.
                    </p>
                </motion.div>

                <div className="relative group/carousel">
                    {startIndex > 0 && (
                        <button
                            onClick={scrollPrev}
                            className="absolute -left-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 flex items-center justify-center text-slate-600 cursor-pointer transition-all"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    )}

                    {startIndex < maxStartIndex && (
                        <button
                            onClick={scrollNext}
                            className="absolute -right-5 top-1/2 -translate-y-1/2 z-30 w-10 h-10 rounded-full bg-white border border-slate-200 shadow-md hover:bg-slate-50 flex items-center justify-center text-slate-600 cursor-pointer transition-all"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    )}

                    <div className="overflow-hidden w-full">
                        <div
                            className="flex transition-transform duration-500 ease-in-out gap-6"
                            style={{ transform: `translateX(calc(-${startIndex} * (100% + 24px) / ${visibleCount}))` }}
                        >
                            {reels.map((reel) => (
                                <div
                                    key={reel.id}
                                    className="shrink-0"
                                    style={{ width: `calc((100% - ${24 * (visibleCount - 1)}px) / ${visibleCount})` }}
                                >
                                    <ReelCard
                                        reel={reel}
                                        activeReelId={activeReelId}
                                        setActiveReelId={setActiveReelId}
                                        isMuted={mutedReels[reel.id] !== false}
                                        onToggleMute={handleToggleMute}
                                        onLike={handleLike}
                                        onVideoEnded={handleVideoEnded}
                                        fadeInUp={fadeInUp}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ReelSection
import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const NotFound = () => {
    return (
        <div className="min-h-[90vh] flex items-center justify-center px-6 py-12">
            <div className="max-w-lg w-full mx-auto bg-white/5 backdrop-blur-xl border border-slate-100/10 rounded-2xl shadow-2xl flex flex-col items-center gap-7 p-10 relative">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded font-mono text-primary text-xs font-bold uppercase tracking-widest mb-1">
                    <Sparkles className="w-4 h-4 animate-pulse text-primary" />
                    404 Error
                </span>
                <h1 className="text-4xl md:text-5xl font-black font-sans text-slate-900 uppercase text-center tracking-tight">
                    Page Not Found
                </h1>
                <p className="text-slate-600 text-center text-base md:text-lg leading-relaxed">
                    Sorry, the page you are looking for doesn't exist,<br /> was moved, or removed.
                </p>
                <Link
                    to="/"
                    className="mt-2 inline-block px-6 py-3 rounded-2xl bg-primary text-white font-semibold font-sans shadow-lg hover:bg-primary/90 transition focus:outline-none focus:ring-2 focus:ring-primary/60"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
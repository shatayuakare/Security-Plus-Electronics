import { MapPin, Globe } from 'lucide-react'
import { Link } from 'react-router-dom';

const Footer = ({ logoData }) => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">

            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-5 md:px-8 py-12 md:py-14">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

                    {/* =========================================================
                COMPANY
            ========================================================= */}
                    <div className="lg:col-span-5">

                        <div className="max-w-md">

                            {/* Brand */}
                            <div className="mb-5">

                                <h2 className="text-xl md:text-2xl font-extrabold text-white uppercase tracking-tight font-sans">
                                    {logoData.companyName}
                                </h2>

                                {logoData.companySuffix && (
                                    <div className="flex items-center gap-2 mt-2">

                                        <span className="h-px w-6 bg-sky-500"></span>

                                        <span className="text-[9px] font-bold text-sky-400 uppercase tracking-[0.2em] font-sans">
                                            {logoData.companySuffix}
                                        </span>

                                    </div>
                                )}

                            </div>


                            {/* Description */}
                            <p className="text-sm text-slate-400 leading-6 font-sans max-w-lg">
                                Central India's premier destination for enterprise-grade
                                security systems, advanced surveillance optics, and
                                technology infrastructure.
                            </p>


                            {/* Location */}
                            <div className="flex items-center gap-2 mt-6">

                                <div className="w-7 h-7 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                                </div>

                                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">
                                    {logoData.companySuffix?.toUpperCase()}, MAHARASHTRA, INDIA
                                </span>

                            </div>

                        </div>

                    </div>


                    {/* =========================================================
                NAVIGATION
            ========================================================= */}
                    <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">

                        {/* Solutions */}
                        <div>

                            <h3 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-sans mb-5">
                                Solutions
                            </h3>

                            <div className="flex flex-col gap-3">

                                <a
                                    href="#ecosystem"
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Surveillance Systems
                                </a>

                                <a
                                    href="#ecosystem"
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Biometric Locking
                                </a>

                                <a
                                    href="#ecosystem"
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Backup Grids
                                </a>

                            </div>

                        </div>


                        {/* Company */}
                        <div>

                            <h3 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-sans mb-5">
                                Company
                            </h3>

                            <div className="flex flex-col gap-3">

                                <Link
                                    to="about"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                    }}
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    About Us
                                </Link>

                                <Link
                                    to="gallary"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                    }}
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Gallery
                                </Link>

                                <Link
                                    to="career"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                    }}
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Careers
                                </Link>

                                <Link
                                    to="blogs"
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth"
                                        });
                                    }}
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors cursor-pointer font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Safety Blog
                                </Link>

                            </div>

                        </div>


                        {/* Legal */}
                        <div>

                            <h3 className="text-[10px] font-bold text-sky-400 uppercase tracking-widest font-sans mb-5">
                                Legal
                            </h3>

                            <div className="flex flex-col gap-3">

                                <Link
                                    to="/termandcondition"
                                    onClick={() => {
                                        window.scrollTo(0, 0);
                                    }}
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    Terms of Service
                                </Link>

                                <a
                                    href="#"
                                    className="group flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors font-sans"
                                >
                                    <span className="w-0 group-hover:w-2 h-px bg-sky-400 transition-all duration-200"></span>
                                    SLA Agreements
                                </a>

                            </div>

                        </div>

                    </div>

                </div>


                {/* =========================================================
            DIVIDER
        ========================================================= */}
                <div className="mt-12 border-t border-slate-800"></div>


                {/* =========================================================
            BOTTOM BAR
        ========================================================= */}
                <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    {/* Copyright */}
                    <p
                        onClick={() => {

                            const now = Date.now();

                            const isAuthAdmin =
                                customerUser &&
                                adminEmails
                                    .map(e => e.toLowerCase())
                                    .includes(customerUser.email.toLowerCase());

                            if (!isAuthAdmin) {
                                return;
                            }

                            if (now - secretLastClick < 2500) {

                                const newCount = secretClickCount + 1;

                                setSecretClickCount(newCount);

                                if (newCount >= 2) {

                                    setAdminLoginOpen(true);
                                    setAdminError("");
                                    setAdminPasscode("");
                                    setSecretClickCount(0);

                                }

                            } else {

                                setSecretClickCount(1);

                            }

                            setSecretLastClick(now);

                        }}
                        className="text-center md:text-left text-[9px] text-slate-500 hover:text-slate-300 transition-colors cursor-pointer select-none font-sans"
                    >
                        © 2026{" "}
                        {(
                            logoData.companyName &&
                                logoData.companySuffix
                                ? `${logoData.companyName} ${logoData.companySuffix}`
                                : "SECURITY PLUS ELECTRONICS"
                        )?.toUpperCase()}
                        . ALL RIGHTS RESERVED.
                    </p>


                    {/* Status */}
                    <div className="flex items-center gap-3">

                        <div className="flex items-center gap-2">

                            <span className="relative flex h-2 w-2">

                                <span className="absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-50 animate-ping"></span>

                                <span className="relative inline-flex h-2 w-2 rounded-full bg-sky-500"></span>

                            </span>

                            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-sans">
                                System Online
                            </span>

                        </div>

                        <span className="text-slate-700">|</span>

                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-sans">
                            Powered by System Integrity
                        </span>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer
import { MapPin, Globe } from 'lucide-react'

const Footer = ({ logoData }) => {
    return (
        <footer className="bg-[#121212] w-full mt-24 border-t border-[#2A2A2A] px-8 py-16 relative z-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold text-white tracking-widest uppercase font-headline">{logoData.companyName}</span>
                    <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
                        Central India's premier destination for enterprise-grade security systems, advanced surveillance optics, and technology infrastructure.
                    </p>
                    <div className="flex items-start gap-2.5 mt-2">
                        <MapPin className="h-4 w-4 text-[#FF5A00] mt-0.5 shrink-0" />
                        <span className="font-headline text-[10px] font-semibold tracking-wider text-on-surface-variant uppercase">{logoData.companySuffix?.toUpperCase()}, MAHARASHTRA, INDIA</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase font-mono">Solutions</span>
                        <a href="#ecosystem" className="text-xs text-on-surface-variant hover:text-white transition-colors">Surveillance Systems</a>
                        <a href="#ecosystem" className="text-xs text-on-surface-variant hover:text-white transition-colors">Biometric Locking</a>
                        <a href="#ecosystem" className="text-xs text-on-surface-variant hover:text-white transition-colors">Backup Grids</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase font-mono">Company</span>
                        <button onClick={() => { setActiveTab("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
                            About Us
                        </button>
                        <button onClick={() => { setActiveTab("gallery"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
                            Gallery
                        </button>
                        <button onClick={() => { setActiveTab("careers"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
                            Careers
                        </button>
                        <button onClick={() => { setActiveTab("blog"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
                            Safety Blog
                        </button>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase font-mono">Legal</span>
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-on-surface-variant hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-on-surface-variant hover:text-white transition-colors">SLA Agreements</a>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant">
                <p onClick={() => {
                    const now = Date.now();
                    const isAuthAdmin = customerUser && adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase());
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
                    }
                    else {
                        setSecretClickCount(1);
                    }
                    setSecretLastClick(now);
                }} className="opacity-70 text-center md:text-left font-mono text-[10px] cursor-pointer select-none hover:text-white transition-all duration-300">
                    © 2026 {(logoData.companyName && logoData.companySuffix ? `${logoData.companyName} ${logoData.companySuffix}` : "SECURITY PLUS ELECTRONICS")?.toUpperCase()}. ALL RIGHTS RESERVED. POWERED BY SYSTEM INTEGRITY.
                </p>
            </div>
        </footer >
    )
}

export default Footer
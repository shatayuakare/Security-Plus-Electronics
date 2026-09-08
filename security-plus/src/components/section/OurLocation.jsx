import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { lazy } from "react";
import { Link } from "react-router-dom";
const CorporateContactForm = lazy(() => import("./CorporateContactForm"));

const OurLocation = ({ contactData }) => {
    // const displayPhone = contactData?.phone || "08048102415";
    const displayEmail = contactData?.email || "info@securityplus.in";
    const displayAddress = contactData?.address || "Sitabuldi, Nagpur, Maharashtra 440012";
    const displayHours = contactData?.officeHours || "Monday — Saturday: 10:00 AM — 8:30 PM\nSunday: Closed (Available for emergency SLA supports)";
    const mapAddress = contactData?.mapAddress || "SECURITY PLUS ELECTRONICS (CCTV MALL) NAGPUR";
    const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2593.55808883996!2d79.08766245280425!3d21.14463636083844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c11c7803d3b5%3A0xa9e24cf23ec1d907!2sSECURITY%20PLUS%20ELECTRONICS%20(CCTV%20MALL)!5e0!3m2!1sen!2sin!4v1785138807628!5m2!1sen!2sin";
    return (<section className="py-24 px-6 md:px-12 bg-slate-50 relative border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    Visit Our Flagship Experience Mall
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
                    Our Experience Center
                </h2>
                <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                    Come visit SPE CCTV Mall in Dharampeth, Nagpur. Get live hands-on staging of 4K starlight sensors and biometric vaults.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
                <div className="lg:col-span-2 h-[450px] border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white relative">
                    <iframe title={mapAddress} src={mapSrc} className="w-full h-full border-0" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer" />
                </div>

                <div className="bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col justify-between">
                    <div className="space-y-8">
                        <h3 className="font-sans font-bold text-slate-900 text-lg border-b border-slate-100 pb-3">
                            Experience Center HQ
                        </h3>

                        <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-sky-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                    Physical Address
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-sans whitespace-pre-line">
                                    {displayAddress}
                                </p>
                            </div>
                        </div>

                        {/* WhatsApp Support Row */}
                        <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                                <MessageSquare className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                                    WhatsApp 24/7 Support
                                    <span className="bg-emerald-100 text-emerald-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">24/7 SUPPORT</span>
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                                    <Link to={"https://wa.me/919373456746"} target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1">
                                        +91 9373456746
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-sky-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                    On-Call Support
                                </h4>
                                <p className="text-xs text-slate-700 font-mono font-bold leading-relaxed">
                                    +91 9373456746
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                                <Phone className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                    Contact for Inquiry (IVR)
                                </h4>
                                <p className="text-xs text-slate-700 font-mono font-bold">
                                    <Link to={"tel:08048102415"} className="hover:underline hover:text-orange-600">
                                        08048102415
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-sky-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                    System Support Mail
                                </h4>
                                <p className="text-xs text-primary leading-relaxed font-mono font-medium">
                                    {displayEmail}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3.5">
                            <div className="w-9 h-9 rounded-lg bg-sky-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                                <Clock className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                                    Operating Hours
                                </h4>
                                <p className="text-xs text-slate-500 leading-relaxed font-sans whitespace-pre-line">
                                    {displayHours}
                                </p>
                            </div>
                        </div>
                    </div>

                    <button type='button' id='bookBtn' aria-label="Book Button" onClick={() => {
                        alert("This function is underprocess")
                    }} className="w-full mt-8 py-3 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer text-center">
                        BOOK TECHNICAL APPOINTMENT
                    </button>
                    {/* <button type='button' id='bookBtn' aria-label="Book Button" onClick={() => {
            document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" });
          }} className="w-full mt-8 py-3 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer text-center">
            BOOK TECHNICAL APPOINTMENT
          </button> */}
                </div>
            </div>
        </div>
        <CorporateContactForm />
    </section>);
};

export default OurLocation
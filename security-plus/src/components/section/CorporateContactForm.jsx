import axios from "axios";
import { CheckCircle2, Send } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const CorporateContactForm = ({ setToastMessage }) => {
    const [submitted, setSubmitted] = useState(false);
    const [quationEnquiryForm, setQuationEnquiryForm] = useState({
        name: "",
        org: "",
        phone: "",
        email: "",
        segment: "Corporate",
        message: ""
    });
    const [errors, setErrors] = useState({
        phone: "",
        email: ""
    });
    const validateEmail = (emailStr) => {
        if (!emailStr)
            return "Email address is required";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailStr)) {
            return "Please enter a valid corporate email address (e.g., name@company.com)";
        }
        return "";
    };
    const validatePhone = (phoneStr) => {
        if (!phoneStr)
            return "Mobile number is required";
        const digits = phoneStr.replace(/\D/g, "");
        if (digits.length < 10 || digits.length > 13) {
            return "Please enter a valid 10-12 digit mobile number";
        }
        return "";
    };


    const handleInquirySubmit = async (e) => {
        e.preventDefault();
        const phoneErr = validatePhone(quationEnquiryForm.phone);
        const emailErr = validateEmail(quationEnquiryForm.email);
        if (phoneErr || emailErr) {
            setErrors({ phone: phoneErr, email: emailErr });
            return;
        }
        const fields = new URLSearchParams();

        fields.append("full_name", quationEnquiryForm.name);
        fields.append("phone", quationEnquiryForm.phone);
        fields.append("email", quationEnquiryForm.email);
        fields.append("company", quationEnquiryForm.org);
        fields.append("project", quationEnquiryForm.segment);
        fields.append("description", quationEnquiryForm.message);

        const formData = new FormData();

        formData.append("action", "fluentform_submit");
        formData.append("form_id", "5");
        formData.append("data", fields.toString());

        try {
            const response = await axios.post(
                "https://woston.in/wp-admin/admin-ajax.php",
                formData
            );

            if (response.data.success) {
                // this is to store multiple quationa enquiries
                // setQuationEnquiryForm(prev => [...prev, quationEnquiryForm])
                setQuationEnquiryForm({
                    name: "",
                    org: "",
                    phone: "",
                    email: "",
                    segment: "Corporate",
                    message: ""
                });
                setToastMessage(`Hii! ${quationEnquiryForm.name}! Thank you for your message. We will get in touch with you shortly`)
            } else {
                setToastMessage("Submission failed check field IDs or CORS settings.")
            }

        } catch (error) {
            console.log("ERROR:", error);
            console.log("STATUS:", error.response?.status);
            console.log("RESPONSE:", error.response?.data);
            console.log("HEADERS:", error.response?.headers);
        }
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setQuationEnquiryForm({ name: "", org: "", phone: "", email: "", segment: "Corporate", message: "" });
            setErrors({ phone: "", email: "" });
        }, 1500);
    };
    return (<section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100" id="contact-form-section">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-sans text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    Corporate Consultation Desk
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
                    Initiate System Integration
                </h2>
                <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                    Ready to secure your premises? Submit your technical specifications, and our design consultants will draft a tailored blueprint.
                </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm">
                {submitted ? (<motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-sky-50 text-primary flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="h-10 w-10 animate-pulse" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 font-sans">Corporate Inquiry Logged</h3>
                    <p className="text-slate-500 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="text-primary font-semibold">{quationEnquiryForm.name}</span>. An SPE Senior Network & surveillance engineer has been assigned. We will reach out via <span className="text-slate-950 font-medium">{quationEnquiryForm.email}</span> within 4 business hours.
                    </p>
                    <span className="text-[10px] font-mono text-slate-400 uppercase mt-4 block">
                        TICKET ID: SPE-{Math.floor(100000 + Math.random() * 900000)}
                    </span>
                </motion.div>) : (<form onSubmit={handleInquirySubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                                Your Full Name *
                            </label>
                            <input type="text" required placeholder="Enter your name" value={quationEnquiryForm.name} onChange={(e) => setQuationEnquiryForm({ ...quationEnquiryForm, name: e.target.value })} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors" />
                        </div>
                        <div>
                            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                                Company / Organization
                            </label>
                            <input type="text" placeholder="Enter company name" value={quationEnquiryForm.org} onChange={(e) => setQuationEnquiryForm({ ...quationEnquiryForm, org: e.target.value })} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">
                                    Mobile Number *
                                </label>
                                {errors.phone ? (<span className="text-[9px] text-red-500 font-bold font-sans">{errors.phone}</span>) : !errors.phone ? (<span className="text-[9px] text-emerald-600 font-bold font-sans">✓ Verified Format</span>) : null}
                            </div>
                            <input type="tel" required placeholder="+91 XXXXX XXXXX" value={quationEnquiryForm.phone} onChange={(e) => setQuationEnquiryForm({ ...quationEnquiryForm, phone: e.target.value })} className={`w-full bg-white border px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${errors.phone
                                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                                : !errors.phone
                                    ? "border-emerald-500 focus:border-emerald-500 bg-emerald-50/10"
                                    : "border-slate-200 focus:border-primary"}`} />
                        </div>
                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">
                                    Email Address *
                                </label>
                                {errors.email ? (<span className="text-[9px] text-red-500 font-bold font-sans">{errors.email}</span>) : !errors.email ? (<span className="text-[9px] text-emerald-600 font-bold font-sans">✓ Verified Format</span>) : null}
                            </div>
                            <input type="email" required placeholder="name@company.com" value={quationEnquiryForm.email} onChange={(e) => setQuationEnquiryForm({ ...quationEnquiryForm, email: e.target.value })} className={`w-full bg-white border px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${errors.email
                                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                                : !errors.email
                                    ? "border-emerald-500 focus:border-emerald-500 bg-emerald-50/10"
                                    : "border-slate-200 focus:border-primary"}`} />
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                            Project Segment / Sector Scope *
                        </label>
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                            {["Corporate", "Residential", "Industrial", "Healthcare", "Banking"].map((sec) => (<button id='segmentBtn' aria-label="Segment Button" key={sec} type="button" onClick={() => setQuationEnquiryForm({ ...quationEnquiryForm, segment: sec })} className={`py-2 px-3 border text-[10px] font-bold font-mono tracking-wider uppercase transition-all rounded-lg cursor-pointer ${quationEnquiryForm.segment === sec ? "border-primary bg-sky-50 text-sky-700 font-bold" : "border-slate-200 bg-white text-slate-600"}`}>
                                {sec}
                            </button>))}
                        </div>
                    </div>

                    <div>
                        <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                            Describe Security Requirements (Camera count, Storage duration, etc.) *
                        </label>
                        <textarea required rows={4} placeholder="Tell us about your requirements (e.g. 16 full-color IP bullet cameras, 200m fiber cabling, PTZ tracking on main shipping yard, etc.)..." value={quationEnquiryForm.message} onChange={(e) => setQuationEnquiryForm({ ...quationEnquiryForm, message: e.target.value })} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors" />
                    </div>

                    <button id='submitBtn' aria-label="Submit Button" type="submit" className="w-full bg-primary hover:bg-sky-700 text-white font-mono font-bold text-xs tracking-widest uppercase py-4 rounded-xl border border-primary transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer">
                        <Send className="h-4 w-4" />
                        <span>SEND INQUIRY</span>
                    </button>
                </form>)}
            </div>
        </div>
    </section>);
};

export default CorporateContactForm
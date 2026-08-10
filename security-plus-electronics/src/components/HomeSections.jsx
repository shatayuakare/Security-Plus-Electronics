import React, { useState } from "react";
import { ChevronDown, Send, CheckCircle2, MapPin, Phone, Mail, Clock, Star, ArrowRight, ArrowLeft, Landmark, ShieldAlert, Award, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TESTIMONIALS_DATA, BLOGS_DATA } from "../data";
// ==========================================
// 1. SCROLLABLE TESTIMONIALS COMPONENT
// ==========================================
export const ScrollableTestimonials = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const nextSlide = () => {
    setScrollIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };
  const prevSlide = () => {
    setScrollIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };
  React.useEffect(() => {
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
            [ CLIENT ADVOCACY & TRUST ]
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
            Enterprise Success Stories
          </h2>
          <p className="text-slate-500 mt-2 text-sm max-w-xl font-sans">
            See how Security Plus Electronics (SPE) implements zero-downtime protection for Central India's leading organizations.
          </p>
        </div>

        <div className="flex items-center gap-4">
          {!isPaused ? (<span className="hidden sm:inline-block text-[9px] font-mono text-emerald-600 font-bold tracking-wider animate-pulse uppercase bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
            ● AUTOPLAY ACTIVE
          </span>) : (<span className="hidden sm:inline-block text-[9px] font-mono text-amber-600 font-bold tracking-wider uppercase bg-amber-50 px-2 py-1 rounded border border-amber-100">
            ■ AUTOPLAY PAUSED
          </span>)}
          <div className="flex gap-3">
            <button onClick={prevSlide} className="p-3 border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer" aria-label="Previous Testimonial">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button onClick={nextSlide} className="p-3 border border-slate-200 text-slate-600 hover:text-primary hover:border-primary transition-all rounded-full bg-white shadow-sm flex items-center justify-center cursor-pointer" aria-label="Next Testimonial">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Slide Area with Framer Motion for premium transition */}
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

      {/* Indicator dots */}
      <div className="flex justify-center gap-2 mt-8">
        {TESTIMONIALS_DATA.map((_, idx) => (<button key={idx} onClick={() => setScrollIndex(idx)} className={`h-2 transition-all rounded-full cursor-pointer ${idx === scrollIndex ? "w-6 bg-primary" : "w-2 bg-slate-200"}`} aria-label={`Go to slide ${idx + 1}`} />))}
      </div>
    </div>
  </section>);
};
// ==========================================
// 2. OUR THOUGHT (THOUGHT LEADERSHIP/INSIGHTS)
// ==========================================
export const OurThought = () => {
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
          [ SYSTEM INTEGRITY INSIGHTS ]
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
    </div>
  </section>);
};
// ==========================================
// 3. OUR BLOGS SECTION
// ==========================================
export const OurBlogs = () => {
  return (<section className="py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
          [ RECENT INDUSTRY NEWS & SECURITY GUIDES ]
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
          Security &amp; Technology Blog
        </h2>
        <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
          Stay informed with system engineering breakdowns, camera sensor reviews, and infrastructure advice from our expert staff.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {BLOGS_DATA.slice(0, 3).map((blog) => (<div key={blog.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-primary transition-all duration-300 flex flex-col justify-between">
          <div>
            <div className="h-48 bg-sky-100 relative overflow-hidden flex items-center justify-center">
              {/* Decorative background visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-primary opacity-80"></div>
              <div className="absolute inset-0 grid-pattern opacity-30"></div>
              <div className="relative z-10 text-white font-mono p-6">
                <span className="text-[10px] bg-white/20 backdrop-blur-sm border border-white/30 px-2 py-0.5 rounded block w-fit mb-3">
                  {blog.category}
                </span>
                <h4 className="font-bold text-sm tracking-tight line-clamp-2 uppercase">
                  {blog.title}
                </h4>
              </div>
            </div>

            <div className="p-6">
              <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-3">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                {blog.excerpt}
              </p>
            </div>
          </div>

          <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
            <div>
              <div className="text-xs font-bold text-slate-900">{blog.author}</div>
              <div className="text-[10px] text-slate-400">{blog.authorRole}</div>
            </div>
            <span className="text-xs font-mono font-bold text-primary hover:text-sky-700 flex items-center gap-1 cursor-pointer">
              <span>READ</span>
              <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>))}
      </div>
    </div>
  </section>);
};
// ==========================================
// 4. CAREERS SECTION
// ==========================================
export const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phone: "",
    resumeLink: "",
    message: ""
  });
  const jobs = [
    {
      id: "j1",
      title: "Senior CCTV Integration Engineer",
      type: "Full-Time (Nagpur HQ)",
      experience: "3+ Years",
      desc: "Lead hardware staging, network setup, and direct on-site camera alignments for premium banking and commercial sector setups."
    },
    {
      id: "j2",
      title: "Network Systems Specialist (PoE/Fiber)",
      type: "Full-Time (Nagpur)",
      experience: "2+ Years",
      desc: "Configure isolated VLANs, deploy Layer 3 switches, configure optical transceivers, and secure remote VPN router configurations."
    },
    {
      id: "j3",
      title: "Support Technician / Repair Specialist",
      type: "Full-Time / On-Site",
      experience: "1+ Years",
      desc: "Perform client support, handle diagnostic repair of PTZ cameras, resolve NVR storage allocation errors, and execute firmware upgrades."
    }
  ];
  const benefits = [
    "Competitive salary packages matching top industrial grades.",
    "Comprehensive Medical Insurance, PF, and annual performance bonuses.",
    "Funded training & certifications (Hikvision HCSA/HCSP, Dahua DHSA, etc.).",
    "Clean, supportive corporate workspace with state-of-the-art repair labs.",
    "Active career progression with fast-track promotion paths."
  ];
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedJob(null);
      setCareerForm({ name: "", email: "", phone: "", resumeLink: "", message: "" });
    }, 4000);
  };
  return (<section className="py-24 px-6 md:px-12 bg-white border-b border-slate-100" id="careers-section">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
          [ GLOBAL CAREERS & TALENT ACQUISITION ]
        </span>
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tight">
          Careers at SPE Security
        </h2>
        <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
          Join Central India's leading security system integrator. We provide an advanced, high-tech engineering work environment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Active Job Openings */}
        <div>
          <h3 className="text-lg font-bold text-slate-900 mb-6 font-sans border-b border-slate-200 pb-2">
            Active Corporate Openings
          </h3>

          <div className="space-y-4">
            {jobs.map((job) => (<div key={job.id} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-primary hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                <div>
                  <h4 className="text-base font-bold text-slate-900 font-sans">{job.title}</h4>
                  <span className="text-xs font-mono text-primary block mt-0.5">{job.type}</span>
                </div>
                <span className="text-[10px] font-bold font-mono bg-sky-50 text-sky-700 px-2 py-0.5 border border-sky-100 rounded w-fit shrink-0">
                  EXP: {job.experience}
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {job.desc}
              </p>
              <button onClick={() => {
                setSelectedJob(job.title);
                document.getElementById("career-application-box")?.scrollIntoView({ behavior: "smooth" });
              }} className="px-4 py-2 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer">
                APPLY FOR POSITION
              </button>
            </div>))}
          </div>
        </div>

        {/* Benefits Grid & Application Form */}
        <div className="space-y-8" id="career-application-box">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-6 font-sans border-b border-slate-200 pb-2">
              Why Join Our Engineering Team?
            </h3>
            <ul className="space-y-3">
              {benefits.map((benefit, idx) => (<li key={idx} className="flex gap-2.5 items-start text-xs text-slate-600 font-sans">
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>))}
            </ul>
          </div>

          {/* Application Form Drawer/Modal Container */}
          <AnimatePresence>
            {selectedJob && (<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="bg-slate-50 border-2 border-primary p-6 rounded-2xl shadow-xl relative">
              <h4 className="text-sm font-bold text-slate-900 mb-4 font-sans uppercase">
                Applying for: <span className="text-primary">{selectedJob}</span>
              </h4>

              {formSubmitted ? (<div className="text-center py-8">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto mb-3 animate-bounce" />
                <h5 className="font-sans font-bold text-slate-900 text-sm">Application Sent Successfully!</h5>
                <p className="text-xs text-slate-500 mt-1">Our HR department will review your credentials and contact you within 48 business hours.</p>
              </div>) : (<form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wide block mb-1">Full Name</label>
                    <input type="text" required placeholder="John Doe" value={careerForm.name} onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wide block mb-1">Email Address</label>
                    <input type="email" required placeholder="john@example.com" value={careerForm.email} onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary text-slate-900" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wide block mb-1">Contact Phone</label>
                    <input type="tel" required placeholder="+91 98765 43210" value={careerForm.phone} onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary text-slate-900" />
                  </div>
                  <div>
                    <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wide block mb-1">Resume Link (PDF/Google Drive)</label>
                    <input type="url" required placeholder="https://drive.google.com/..." value={careerForm.resumeLink} onChange={(e) => setCareerForm({ ...careerForm, resumeLink: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary text-slate-900" />
                  </div>
                </div>
                <div>
                  <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wide block mb-1">Cover Note / Project Experience</label>
                  <textarea rows={3} placeholder="Briefly describe your experience with Hikvision, Dahua, networking, or cameras..." value={careerForm.message} onChange={(e) => setCareerForm({ ...careerForm, message: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-primary text-slate-900" />
                </div>
                <div className="flex gap-2">
                  <button type="submit" className="flex-1 py-2.5 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                    <Send className="h-3 w-3" />
                    <span>SUBMIT CREDENTIALS</span>
                  </button>
                  <button type="button" onClick={() => setSelectedJob(null)} className="px-4 py-2.5 border border-slate-200 hover:bg-slate-100 text-slate-600 font-mono text-[10px] font-bold uppercase rounded-lg cursor-pointer">
                    CANCEL
                  </button>
                </div>
              </form>)}
            </motion.div>)}
          </AnimatePresence>
        </div>
      </div>
    </div>
  </section>);
};
// ==========================================
// 5. FAQ SECTION
// ==========================================
export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    {
      q: "Do you provide on-site installation and hardware warranty in Nagpur?",
      a: "Yes. We handle end-to-end physical on-site installation, structured cabling, configuration, and testing. Every premium brand like Hikvision, Dahua, or Woston includes 1 to 2 years of official hardware replacement warranty, backed by SPE's physical service depot in Nagpur."
    },
    {
      q: "Can I monitor my camera footage remotely on multiple mobile phones?",
      a: "Absolutely. We configure secure WAN port forwarding or cloud P2P bridges allowing high-definition remote surveillance. You can watch live feeds, control motorized PTZ sweeps, and access playback securely from authorized iOS or Android mobile applications."
    },
    {
      q: "What happens during a power blackout? Do the cameras stop recording?",
      a: "No, if a proper backup power source is installed. We design and integrate Pure Sine Wave Online UPS systems and smart solar power backup modules. This ensures that NVR hard drives and network PoE switches stay fully functional through Nagpur's electricity sags and blackouts, guaranteeing 100% uptime."
    },
    {
      q: "How many days of camera recording can be retained in NVR storage?",
      a: "This depends entirely on hard drive storage capacity, the number of connected cameras, recording resolution (1080p vs. 4K), frame-per-second settings, and compression codecs. By using smart H.265+ codecs, you can save up to 80% on storage space. Typically, our standard storage packages are sized for 15, 30, or 60 days of continuous high-fidelity video archiving."
    },
    {
      q: "How can I calculate my camera power, storage, and lens specifications?",
      a: "You can utilize our professional Surveillance Planner & Storage Sizing wizard located inside the 'Products' page, or consult our automated SPE Sentinel AI Assistant in the bottom-right corner for instant calculations."
    }
  ];
  return (<section className="py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
          [ CLEAR ANSWERS TO CORE SECURITY PARADIGMS ]
        </span>
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-slate-900 tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-500 mt-2 text-sm">
          Everything you need to know about corporate and residential surveillance in Nagpur.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (<div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-sky-400 transition-colors duration-200">
          <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex justify-between items-center p-6 text-left font-sans font-semibold text-slate-800 text-sm md:text-base focus:outline-none cursor-pointer">
            <span>{faq.q}</span>
            <ChevronDown className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${openIndex === idx ? "rotate-180 text-primary" : ""}`} />
          </button>

          <AnimatePresence initial={false}>
            {openIndex === idx && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
              <div className="px-6 pb-6 pt-1 text-xs md:text-sm text-slate-500 leading-relaxed border-t border-slate-100 font-sans bg-slate-50/40">
                {faq.a}
              </div>
            </motion.div>)}
          </AnimatePresence>
        </div>))}
      </div>
    </div>
  </section>);
};
// ==========================================
// 6. CORPORATE CONTACT US FORM
// ==========================================
export const CorporateContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
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
  const [touched, setTouched] = useState({
    phone: false,
    email: false
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
  const handlePhoneChange = (val) => {
    setFormData((prev) => ({ ...prev, phone: val }));
    if (touched.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(val) }));
    }
  };
  const handleEmailChange = (val) => {
    setFormData((prev) => ({ ...prev, email: val }));
    if (touched.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
    }
  };
  const handlePhoneBlur = () => {
    setTouched((prev) => ({ ...prev, phone: true }));
    setErrors((prev) => ({ ...prev, phone: validatePhone(formData.phone) }));
  };
  const handleEmailBlur = () => {
    setTouched((prev) => ({ ...prev, email: true }));
    setErrors((prev) => ({ ...prev, email: validateEmail(formData.email) }));
  };
  const handleInquirySubmit = (e) => {
    e.preventDefault();
    // Mark both as touched
    setTouched({ phone: true, email: true });
    const phoneErr = validatePhone(formData.phone);
    const emailErr = validateEmail(formData.email);
    if (phoneErr || emailErr) {
      setErrors({ phone: phoneErr, email: emailErr });
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", org: "", phone: "", email: "", segment: "Corporate", message: "" });
      setErrors({ phone: "", email: "" });
      setTouched({ phone: false, email: false });
    }, 4500);
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
            Thank you, <span className="text-primary font-semibold">{formData.name}</span>. An SPE Senior Network & surveillance engineer has been assigned. We will reach out via <span className="text-slate-950 font-medium">{formData.email}</span> within 4 business hours.
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
              <input type="text" required placeholder="Enter your name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors" />
            </div>
            <div>
              <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
                Company / Organization
              </label>
              <input type="text" placeholder="Enter company name" value={formData.org} onChange={(e) => setFormData({ ...formData, org: e.target.value })} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">
                  Mobile Number *
                </label>
                {touched.phone && errors.phone ? (<span className="text-[9px] text-red-500 font-bold font-sans">{errors.phone}</span>) : touched.phone && !errors.phone ? (<span className="text-[9px] text-emerald-600 font-bold font-sans">✓ Verified Format</span>) : null}
              </div>
              <input type="tel" required placeholder="+91 XXXXX XXXXX" value={formData.phone} onChange={(e) => handlePhoneChange(e.target.value)} onBlur={handlePhoneBlur} className={`w-full bg-white border px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${touched.phone && errors.phone
                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                : touched.phone && !errors.phone
                  ? "border-emerald-500 focus:border-emerald-500 bg-emerald-50/10"
                  : "border-slate-200 focus:border-primary"}`} />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block">
                  Email Address *
                </label>
                {touched.email && errors.email ? (<span className="text-[9px] text-red-500 font-bold font-sans">{errors.email}</span>) : touched.email && !errors.email ? (<span className="text-[9px] text-emerald-600 font-bold font-sans">✓ Verified Format</span>) : null}
              </div>
              <input type="email" required placeholder="name@company.com" value={formData.email} onChange={(e) => handleEmailChange(e.target.value)} onBlur={handleEmailBlur} className={`w-full bg-white border px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none transition-colors ${touched.email && errors.email
                ? "border-red-500 focus:border-red-500 bg-red-50/20"
                : touched.email && !errors.email
                  ? "border-emerald-500 focus:border-emerald-500 bg-emerald-50/10"
                  : "border-slate-200 focus:border-primary"}`} />
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
              Project Segment / Sector Scope *
            </label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
              {["Corporate", "Residential", "Industrial", "Healthcare", "Banking"].map((sec) => (<button key={sec} type="button" onClick={() => setFormData({ ...formData, segment: sec })} className={`py-2 px-3 border text-[10px] font-bold font-mono tracking-wider uppercase transition-all rounded-lg cursor-pointer ${formData.segment === sec ? "border-primary bg-sky-50 text-sky-700 font-bold" : "border-slate-200 bg-white text-slate-600"}`}>
                {sec}
              </button>))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-slate-600 uppercase tracking-wider block mb-2">
              Describe Security Requirements (Camera count, Storage duration, etc.) *
            </label>
            <textarea required rows={4} placeholder="Tell us about your requirements (e.g. 16 full-color IP bullet cameras, 200m fiber cabling, PTZ tracking on main shipping yard, etc.)..." value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full bg-white border border-slate-200 px-4 py-3 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-primary transition-colors" />
          </div>

          <button type="submit" className="w-full bg-primary hover:bg-sky-700 text-white font-mono font-bold text-xs tracking-widest uppercase py-4 rounded-xl border border-primary transition-all flex items-center justify-center gap-2.5 shadow-md cursor-pointer">
            <Send className="h-4 w-4" />
            <span>SUBMIT CORPORATE INQUIRY</span>
          </button>
        </form>)}
      </div>
    </div>
  </section>);
};
export const OurLocation = ({ contactData }) => {
  const displayPhone = contactData?.phone || "+91 98230 40500 / +91 712 2544100";
  const displayEmail = contactData?.email || "inquiries@spe-security.in";
  const displayAddress = contactData?.address || "SPE CCTV Mall, West High Court Road, Opposite Dharampeth Metro Station, Dharampeth, Nagpur, Maharashtra - 440010";
  const displayHours = contactData?.officeHours || "Monday — Saturday: 10:00 AM — 8:30 PM\nSunday: Closed (Available for emergency SLA supports)";
  const mapQuery = contactData?.mapAddress || "West High Court Road, Dharampeth, Nagpur";
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
        {/* Map display */}
        <div className="lg:col-span-2 h-[450px] border border-slate-200 rounded-3xl overflow-hidden shadow-sm bg-white relative">
          <iframe title="SPE CCTV Mall Nagpur Location Map" src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&t=&z=16&ie=UTF8&iwloc=&output=embed`} className="w-full h-full border-0" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer" />
        </div>

        {/* Contact Cards Info */}
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
                  <a href="https://wa.me/919373456746" target="_blank" rel="noopener noreferrer" className="font-mono font-bold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1">
                    +91 9373456746
                  </a>
                </p>
              </div>
            </div>

            {/* On-Call Support Row */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-sky-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  On-Call Support
                </h4>
                <p className="text-xs text-slate-700 font-mono font-bold leading-relaxed">
                  +91 7020320794<br />
                  +91 9284522248
                </p>
              </div>
            </div>

            {/* Contact for Inquiry Row */}
            <div className="flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center shrink-0 mt-0.5">
                <Phone className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-1">
                  Contact for Inquiry (IVR)
                </h4>
                <p className="text-xs text-slate-700 font-mono font-bold">
                  <a href="tel:08048102415" className="hover:underline hover:text-orange-600">
                    08048102415
                  </a>
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

          <button onClick={() => {
            document.getElementById("contact-form-section")?.scrollIntoView({ behavior: "smooth" });
          }} className="w-full mt-8 py-3 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer text-center">
            BOOK TECHNICAL APPOINTMENT
          </button>
        </div>
      </div>
    </div>
  </section>);
};

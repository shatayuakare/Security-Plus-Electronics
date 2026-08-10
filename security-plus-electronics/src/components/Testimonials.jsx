import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, CheckCircle2 } from "lucide-react";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12
    }
  },
  viewport: { once: true, margin: "-100px" }
};
const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};
export function Testimonials({ testimonials, setTestimonials, setToastMessage }) {
  const [testimonialFilter, setTestimonialFilter] = useState("all");
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    clientName: "",
    designation: "",
    organization: "",
    category: "commercial",
    rating: 5,
    content: "",
    systemInstalled: ""
  });
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (!newFeedback.clientName || !newFeedback.content || !newFeedback.systemInstalled) {
      setToastMessage("Please fill out all required fields.");
      return;
    }
    const item = {
      id: `spe-testi-${Math.floor(1000 + Math.random() * 9000)}`,
      clientName: newFeedback.clientName,
      designation: newFeedback.designation || "Executive",
      organization: newFeedback.organization || "Private Entity",
      category: newFeedback.category,
      rating: newFeedback.rating,
      content: newFeedback.content,
      systemInstalled: newFeedback.systemInstalled,
      date: new Date().toISOString().split("T")[0]
    };
    setTestimonials(prev => [item, ...prev]);
    setFeedbackSuccess(true);
    setToastMessage("Testimonial compiled under active database index.");
  };
  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className="py-16 px-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto font-sans">

        {/* Header */}
        <motion.div {...fadeInUp} className="text-center mb-12">
          <span className="font-sans font-bold text-[10px] text-primary tracking-widest uppercase block mb-3">[ REFERENCE GRID // CLIENT VOICE ]</span>
          <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">Nagpur Trust Testimonials</h2>
          <p className="text-slate-500 mt-3 text-sm max-w-2xl mx-auto leading-relaxed">
            See how Security Plus Electronics secures Nagpur's top metro grids, jewelers, medical centers, and luxury residential estates.
          </p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div {...fadeInUp} className="flex flex-wrap justify-center gap-2 mb-12 max-w-3xl mx-auto">
          {["all", "residential", "commercial", "banking", "healthcare", "industrial"].map(cat => (<button key={cat} onClick={() => setTestimonialFilter(cat)} className={`text-[10px] px-4 py-2 border uppercase font-bold tracking-wider transition-all duration-300 rounded-full cursor-pointer ${testimonialFilter === cat ? "bg-primary text-white border-primary shadow-sm" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}>
            {cat}
          </button>))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials
            .filter(t => testimonialFilter === "all" || t.category === testimonialFilter)
            .map((item) => (<motion.div key={item.id} variants={staggerItem} whileHover={{ y: -5, borderColor: "#0284C7", boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.08)" }} className="bg-white p-6 border border-slate-200 flex flex-col justify-between hover:border-primary transition-all duration-300 rounded-2xl relative shadow-sm">
              <span className="absolute top-4 right-4 text-[8px] font-bold bg-green-50 border border-green-100 text-green-700 px-2.5 py-1 rounded-lg uppercase tracking-wider">
                Verified Client
              </span>

              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (<span key={i} className={`text-sm ${i < item.rating ? "text-amber-400" : "text-slate-200"}`}>★</span>))}
                </div>

                <p className="text-xs text-slate-600 leading-relaxed italic">
                  &quot;{item.content}&quot;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-2">
                <div className="text-[10px]">
                  <span className="text-slate-400 uppercase block text-[8px] font-bold">[ System Deployed ]</span>
                  <span className="text-primary font-bold block truncate">{item.systemInstalled}</span>
                </div>

                <div className="flex justify-between items-end pt-1">
                  <div>
                    <span className="text-slate-900 text-xs font-bold block">{item.clientName}</span>
                    <span className="text-[9px] text-slate-500 block uppercase truncate max-w-[150px] font-semibold">{item.designation}, {item.organization}</span>
                  </div>
                  <span className="text-[8px] text-slate-400">{item.date}</span>
                </div>
              </div>
            </motion.div>))}
        </motion.div>

        {/* Feedback submission Workspace form */}
        <div className="bg-white border border-slate-200 p-8 max-w-3xl mx-auto rounded-2xl shadow-sm">
          <div className="border-b border-slate-100 pb-4 mb-6">
            <h3 className="font-sans font-extrabold text-sm text-primary uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              SUBMIT YOUR INSTALLATION FEEDBACK
            </h3>
            <p className="text-[10px] text-slate-400 uppercase mt-1 font-semibold">Help us constantly refine our Central India integration standards.</p>
          </div>

          {feedbackSuccess ? (<div className="bg-emerald-50 border border-emerald-100 p-6 text-center text-xs text-emerald-700 space-y-2 rounded-xl">
            <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto animate-bounce" />
            <span className="font-bold block uppercase tracking-wider">FEEDBACK COMPILED SUCCESSFULLY</span>
            <p className="text-emerald-600/90 leading-relaxed">Thank you for submitting! Your testimonial has been authorized and mounted instantly on our public reference ledger grid.</p>
            <button type="button" onClick={() => setFeedbackSuccess(false)} className="mt-2 py-1.5 px-4 bg-emerald-600 text-white text-[9px] tracking-widest uppercase font-mono rounded font-bold hover:bg-emerald-700 cursor-pointer">
              SUBMIT ANOTHER FEEDBACK
            </button>
          </div>) : (<form onSubmit={handleSubmitFeedback} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Your Full Name ]</label>
                <input type="text" required placeholder="e.g. Anand Deshpande" value={newFeedback.clientName} onChange={(e) => setNewFeedback(prev => ({ ...prev, clientName: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ System Model Installed ]</label>
                <input type="text" placeholder="e.g. 4-Cam ColorVu Array & Biometric Locks" value={newFeedback.systemInstalled} onChange={(e) => setNewFeedback(prev => ({ ...prev, systemInstalled: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Designation ]</label>
                <input type="text" placeholder="e.g. Managing Director" value={newFeedback.designation} onChange={(e) => setNewFeedback(prev => ({ ...prev, designation: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Organization Name ]</label>
                <input type="text" placeholder="e.g. Orange Trade Center" value={newFeedback.organization} onChange={(e) => setNewFeedback(prev => ({ ...prev, organization: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Rating Score ]</label>
                <select value={newFeedback.rating} onChange={(e) => setNewFeedback(prev => ({ ...prev, rating: parseInt(e.target.value) }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl transition-all">
                  <option value="5">★★★★★ Outstanding (5/5)</option>
                  <option value="4">★★★★ High Quality (4/5)</option>
                  <option value="3">★★★ Average Setup (3/5)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Sector Category ]</label>
              <select value={newFeedback.category} onChange={(e) => setNewFeedback(prev => ({ ...prev, category: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl transition-all">
                <option value="commercial">Commercial Space</option>
                <option value="residential">Residential Home</option>
                <option value="banking">Banking &amp; Financial Vault</option>
                <option value="healthcare">Healthcare &amp; Hospital</option>
                <option value="industrial">Industrial Site</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Write Review Content ]</label>
              <textarea required rows={4} placeholder="Provide descriptive feedback about installation timelines, optics clarity, network stability, and staff service..." value={newFeedback.content} onChange={(e) => setNewFeedback(prev => ({ ...prev, content: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-sky-700 text-white font-bold text-[10px] uppercase tracking-widest py-3.5 border border-primary rounded-xl transition-all cursor-pointer shadow-sm">
              SUBMIT VERIFIED CLIENT TESTIMONIAL
            </button>
          </form>)}
        </div>
      </div>
    </section>
  </motion.div>);
}

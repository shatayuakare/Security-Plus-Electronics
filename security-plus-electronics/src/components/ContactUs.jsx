import React, { useState } from "react";
import { motion } from "motion/react";
import { MessageSquare, ExternalLink, Phone, Building, MapPin, Mail, Clock, CheckCircle2 } from "lucide-react";
export function ContactUs({ logoData, setSupportTickets, setToastMessage }) {
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: "sales",
    message: ""
  });
  const [contactTicket, setContactTicket] = useState(null);
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message) {
      setToastMessage("Please fill out all required fields.");
      return;
    }
    const newTicket = {
      id: `SPE-TKT-${Math.floor(100000 + Math.random() * 900000)}`,
      name: contactForm.name,
      company: contactForm.company || "Direct Individual",
      email: contactForm.email,
      phone: contactForm.phone || "No Number",
      department: contactForm.department,
      message: contactForm.message,
      date: new Date().toISOString().split("T")[0],
      status: "Open",
      assignedTo: "Sandeep Agnihotri",
      notes: ["Ticket generated on public contact form submission."]
    };
    setSupportTickets(prev => [newTicket, ...prev]);
    setContactTicket({ success: true });
    setToastMessage("Support Ticket Compiled and Logged. Engineers dispatching soon!");
  };
  return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
    <section className="py-16 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Clean, Non-Technical Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contact Our Nagpur Team
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed font-sans">
            We are here to answer your questions and help you design the ultimate security structure for your premises. Get in touch with our team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto" id="spe-contact-panels-grid">

          {/* Left Column: Direct Reach Contact Channels */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">

            {/* Primary Support: WhatsApp */}
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex items-start gap-4 transition-all hover:border-emerald-300">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-wider block">PRIMARY SUPPORT CONTACT</span>
                  <span className="bg-emerald-100 text-emerald-800 text-[8px] font-extrabold px-1.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">24/7 SUPPORT</span>
                </div>
                <h4 className="text-base font-extrabold text-slate-950 font-sans">WhatsApp Chat</h4>
                <p className="text-xs text-slate-500 font-sans">Connect 24/7 for immediate hardware queries, stock availability, and instant tech support.</p>
                <a href="https://wa.me/919373456746" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 font-mono text-sm font-bold text-emerald-600 hover:text-emerald-700 hover:underline mt-1">
                  +91 9373456746
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>

            {/* Voice Support: On-Call */}
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex items-start gap-4 transition-all hover:border-sky-300">
              <div className="w-10 h-10 rounded-xl bg-sky-50 text-primary flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-primary uppercase tracking-wider block">ON-CALL TELEPHONY SUPPORT</span>
                <h4 className="text-base font-extrabold text-slate-950 font-sans">Direct Calling Lines</h4>
                <p className="text-xs text-slate-500 font-sans">Speak directly with our support desk or schedule technician dispatches.</p>
                <div className="space-y-1 pt-1 font-mono text-sm font-bold text-slate-800">
                  <a href="tel:+917020320794" className="block hover:text-primary transition-colors">+91 7020320794</a>
                  <a href="tel:+919284522248" className="block hover:text-primary transition-colors">+91 9284522248</a>
                </div>
              </div>
            </div>

            {/* Inquiry Hotline: IVR */}
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm flex items-start gap-4 transition-all hover:border-orange-300">
              <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center shrink-0">
                <Building className="h-5 w-5" />
              </div>
              <div className="space-y-1.5">
                <span className="text-[9px] font-bold text-orange-600 uppercase tracking-wider block">SHOWROOM & SALES HOTLINE</span>
                <h4 className="text-base font-extrabold text-slate-950 font-sans">Inquiry Channel (IVR)</h4>
                <p className="text-xs text-slate-500 font-sans">Call to request custom pricing quotes, bulk orders, or arrange corporate visits.</p>
                <a href="tel:08048102415" className="inline-block font-mono text-sm font-bold text-orange-600 hover:text-orange-700 hover:underline mt-1">
                  08048102415
                </a>
              </div>
            </div>

            {/* Nagpur HQ Location Details */}
            <div className="bg-white p-6 border border-slate-200 rounded-2xl shadow-sm space-y-3.5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">Nagpur HQ Experience Center</h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  SPE CCTV Mall, West High Court Road, Opposite Dharampeth Metro Station, Dharampeth, Nagpur, Maharashtra - 440010
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Mail className="h-3.5 w-3.5 text-slate-400" />
                  <a href="mailto:info@securityplus.in" className="hover:underline hover:text-primary font-mono">info@securityplus.in</a>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span>Mon - Sat: 10:00 AM - 08:30 PM (Sun: Closed)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean, Minimalist Callback / Message Form */}
          <div className="lg:col-span-7 bg-white p-8 border border-slate-200 rounded-2xl shadow-sm flex flex-col justify-between" id="spe-contact-form-card">
            <div>
              <h3 className="font-sans font-extrabold text-sm text-slate-900 pb-3 border-b border-slate-100 uppercase tracking-wider">
                Send us a message
              </h3>

              {contactTicket ? (<div className="mt-8 space-y-6">
                <div className="bg-sky-50 border border-sky-100 p-8 text-center space-y-4 rounded-xl">
                  <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                  <h4 className="font-bold text-slate-900 text-lg font-sans">Message Sent Successfully</h4>
                  <p className="text-xs text-slate-600 leading-relaxed max-w-sm mx-auto font-sans">
                    Thank you, <span className="font-semibold text-slate-900">{contactForm.name}</span>. We have received your inquiry. A representative will contact you shortly on your details.
                  </p>
                </div>

                <button onClick={() => setContactTicket(null)} className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer font-sans">
                  Send Another Message
                </button>
              </div>) : (<form onSubmit={handleContactSubmit} className="space-y-5 mt-6">
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  Fill out the form below with your requirements, and our engineering desk will get back to you with custom catalog recommendations.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Your Name</label>
                    <input type="text" required placeholder="Anand Patil" value={contactForm.name} onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Organization / Company</label>
                    <input type="text" placeholder="Nagpur Enterprises" value={contactForm.company} onChange={(e) => setContactForm(prev => ({ ...prev, company: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all font-sans" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Email Address</label>
                    <input type="email" required placeholder="anand@company.com" value={contactForm.email} onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Phone Number</label>
                    <input type="tel" placeholder="+91 90000 00000" value={contactForm.phone} onChange={(e) => setContactForm(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all font-sans" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Select Department</label>
                  <select value={contactForm.department} onChange={(e) => setContactForm(prev => ({ ...prev, department: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl transition-all font-sans font-semibold">
                    <option value="sales">Showroom Sales &amp; Sizing Quotations</option>
                    <option value="technical">Technical Support &amp; Network Audits</option>
                    <option value="sla">Emergency Maintenance &amp; Repair</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider font-sans">Message Details</label>
                  <textarea required rows={3} placeholder="Describe your security requirements or systems inquiries in detail..." value={contactForm.message} onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))} className="w-full bg-slate-50 border border-slate-200 px-4 py-3 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all font-sans"></textarea>
                </div>

                <button type="submit" className="w-full bg-primary hover:bg-sky-700 text-white font-bold text-xs uppercase tracking-widest py-4 border border-primary rounded-xl transition-all cursor-pointer shadow-md shadow-sky-50 font-sans">
                  Send Message
                </button>
              </form>)}
            </div>
          </div>

        </div>

        {/* Flagship Showroom Real Map Coordinates section */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 max-w-6xl mx-auto overflow-hidden">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center pb-4 border-b border-slate-100 gap-4 mb-6">
            <div>
              <h4 className="text-sm font-extrabold text-slate-900 font-sans uppercase">Our Flagship Experience Center Address Map</h4>
              <p className="text-xs text-slate-500 mt-1 font-sans">West High Court Road, Opposite Dharampeth Metro Station, Dharampeth, Nagpur</p>
            </div>
            <a href="https://maps.google.com/?q=SPE+CCTV+Mall,+West+High+Court+Road,+Dharampeth,+Nagpur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs px-4 py-2.5 rounded-xl font-sans font-bold uppercase transition-colors shrink-0">
              <MapPin className="h-3.5 w-3.5 text-sky-400" />
              Get Directions
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>

          <div className="h-[380px] w-full rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-100">
            <iframe title="SPE CCTV Mall Nagpur Flagship Showroom Address Map" src="https://maps.google.com/maps?q=SPE%20CCTV%20Mall,%20West%20High%20Court%20Road,%20Dharampeth,%20Nagpur&t=&z=16&ie=UTF8&iwloc=&output=embed" className="w-full h-full border-0" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer" />
          </div>
        </div>

      </div>
    </section>
  </motion.div>);
}

import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Briefcase, Terminal, CheckCircle2 } from "lucide-react";
export function Careers({ careerApplications, setCareerApplications, setToastMessage }) {
    const [contactTicket, setContactTicket] = useState(null);
    const handleApplicationSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("candidateName");
        const email = formData.get("candidateEmail");
        const phone = formData.get("candidatePhone");
        const option = formData.get("candidateOption");
        const bio = formData.get("candidateBio");
        const resume = formData.get("candidateResume");
        if (!name || !email || !phone || !option) {
            setToastMessage("Please fill out all required fields.");
            return;
        }
        const newApplication = {
            id: `SPE-APP-${Math.floor(10000 + Math.random() * 90000)}`,
            name,
            email,
            phone,
            selectedOption: option,
            experience: bio,
            resumeUrl: resume || "No Link Provided",
            date: new Date().toISOString().split('T')[0],
            status: "Pending Review"
        };
        setCareerApplications(prev => [newApplication, ...prev]);
        setContactTicket({ success: true });
        setToastMessage("SPE application portal synchronized. Application ledger entry successful.");
    };
    return (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="py-16 px-8 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="font-sans font-extrabold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
              [ SPE CAREERS & TECHNOLOGY ACADEMY ]
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
              Careers &amp; Training
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              Join Central India's leading security systems integrator. We recruit experienced professionals, and provide fully funded, 100% free technical classes to train freshers, students, and active employees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="spe-careers-grid">
            {/* Left Column: Academy Classes and Open Positions */}
            <div className="lg:col-span-8 space-y-12">
              {/* Academy Section */}
              <div className="bg-white p-6 md:p-8 border border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-sky-600"/>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 uppercase tracking-tight">
                    Free Training Academies
                  </h3>
                </div>
                
                <p className="text-slate-500 text-xs leading-relaxed uppercase font-semibold">
                  [ Our classes are 100% free of charge and open for active employees, freshers, and college students looking for hands-on core hardware experience. ]
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Class 1 */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-sky-500 transition-colors">
                    <div className="space-y-2">
                      <span className="bg-emerald-100 text-emerald-800 text-[9px] font-bold px-2 py-0.5 border border-emerald-200 rounded font-mono uppercase tracking-wider">
                        Open to: Students &amp; Freshers
                      </span>
                      <h4 className="font-sans font-extrabold text-base text-slate-900 uppercase">
                        CCTV Installation Basics
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Learn physical coaxial and IP cabling, CCTV mountings, power box integration, and terminal setup using standard Hikvision and CP Plus models.
                      </p>
                    </div>
                    <div className="border-t border-slate-200/60 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>DURATION: 4 WEEKS</span>
                      <span>COST: 100% FREE</span>
                    </div>
                  </div>

                  {/* Class 2 */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-sky-500 transition-colors">
                    <div className="space-y-2">
                      <span className="bg-sky-100 text-sky-800 text-[9px] font-bold px-2 py-0.5 border border-sky-200 rounded font-mono uppercase tracking-wider">
                        Open to: Freshers &amp; Employees
                      </span>
                      <h4 className="font-sans font-extrabold text-base text-slate-900 uppercase">
                        Biometrics &amp; Latch Setup
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Configure high-speed fingerprint scanners, facial gateways, magnetic door lock setups, and export daily attendance logs.
                      </p>
                    </div>
                    <div className="border-t border-slate-200/60 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>DURATION: 3 WEEKS</span>
                      <span>COST: 100% FREE</span>
                    </div>
                  </div>

                  {/* Class 3 */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl md:col-span-2 flex flex-col justify-between space-y-4 hover:border-sky-500 transition-colors">
                    <div className="space-y-2">
                      <span className="bg-indigo-100 text-indigo-800 text-[9px] font-bold px-2 py-0.5 border border-indigo-200 rounded font-mono uppercase tracking-wider">
                        Open to: Employees Only
                      </span>
                      <h4 className="font-sans font-extrabold text-base text-slate-900 uppercase">
                        Optical Fiber Rings &amp; Layer 3 VLANs
                      </h4>
                      <p className="text-slate-500 text-xs leading-relaxed">
                        Advanced network topology routing, managed switches configurations, 10G fiber splicing, VLAN port isolation, and remote VPN firewall guards.
                      </p>
                    </div>
                    <div className="border-t border-slate-200/60 pt-3 flex justify-between items-center text-[10px] font-mono text-slate-500">
                      <span>DURATION: 2 WEEKS</span>
                      <span>COST: 100% FREE (SPE SUPPORTED)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Open Jobs Section */}
              <div className="bg-white p-6 md:p-8 border border-slate-200 rounded-3xl shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-sky-600"/>
                  <h3 className="font-sans font-extrabold text-lg text-slate-900 uppercase tracking-tight">
                    Active Professional Positions
                  </h3>
                </div>

                <div className="space-y-4">
                  {/* Sales and Marketing Post */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-sky-500 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-sans uppercase font-headline">Sales and Marketing Specialist</h4>
                        <span className="text-xs font-mono text-sky-600 block mt-0.5">FULL-TIME // DHARAMPETH HQ</span>
                      </div>
                      <span className="text-[10px] font-extrabold font-mono bg-sky-50 text-sky-700 px-2.5 py-1 border border-sky-100 rounded shrink-0 uppercase">
                        EXP: MIN 2 YEARS REQUIRED
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      Promote and distribute enterprise-grade CCTV surveillance systems, biometric access controllers, and networking setups to corporate, industrial, and residential clients across Nagpur. Required: Minimum 2 years of proven sales experience in electronic appliances or security systems. Strong local Nagpur network is a big plus.
                    </p>
                  </div>

                  {/* CCTV Integration Engineer */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-sky-500 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-sans uppercase font-headline">Senior CCTV Integration Engineer</h4>
                        <span className="text-xs font-mono text-sky-600 block mt-0.5">FULL-TIME // FIELD INTEGRATIONS</span>
                      </div>
                      <span className="text-[10px] font-extrabold font-mono bg-sky-50 text-sky-700 px-2.5 py-1 border border-sky-100 rounded shrink-0 uppercase">
                        EXP: 3+ YEARS
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      Lead physical hardware staging, terminal alignments, multi-cam calibration, and diagnostic checkouts for high-risk banking, metro, and government perimeter arrays in Nagpur.
                    </p>
                  </div>

                  {/* Network Systems Specialist */}
                  <div className="bg-slate-50 border border-slate-200 p-6 rounded-2xl hover:border-sky-500 hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                      <div>
                        <h4 className="text-base font-extrabold text-slate-900 font-sans uppercase font-headline">Network Systems Specialist (PoE/Fiber)</h4>
                        <span className="text-xs font-mono text-sky-600 block mt-0.5">FULL-TIME // NAGPUR</span>
                      </div>
                      <span className="text-[10px] font-extrabold font-mono bg-sky-50 text-sky-700 px-2.5 py-1 border border-sky-100 rounded shrink-0 uppercase">
                        EXP: 2+ YEARS
                      </span>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed mb-4">
                      Configure managed switches VLANs, design ring fiber redundancies, maintain router VPN firewalls, and troubleshoot video bandwidth bottlenecks on high-channel grids.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dynamic Application & Enrollment Form */}
            <div className="lg:col-span-4" id="spe-careers-form-card">
              <div className="bg-white p-6 border border-slate-200 rounded-3xl shadow-sm sticky top-24 space-y-6">
                <div className="border-b border-slate-100 pb-4 flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-sky-600"/>
                  <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-tight">
                    SPE Application Portal
                  </h3>
                </div>

                {contactTicket ? (<div className="bg-emerald-50 border border-emerald-100 p-6 text-center text-xs text-emerald-700 space-y-3 rounded-2xl">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600 mx-auto animate-bounce"/>
                    <span className="font-bold block uppercase tracking-wider">APPLICATION COMPILED</span>
                    <p className="text-emerald-600/90 leading-relaxed font-semibold">
                      Application compiled under code reference:
                    </p>
                    <span className="font-mono bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded font-bold block text-sm border border-emerald-200">
                      SPE-APP-{Math.floor(10000 + Math.random() * 90000)}
                    </span>
                    <p className="text-slate-500 text-[10px] leading-relaxed mt-2 uppercase font-bold">
                      Our team will evaluate your resume/credentials and respond via email within 3 business days.
                    </p>
                    <button type="button" onClick={() => setContactTicket(null)} className="mt-2 w-full py-2 bg-emerald-600 text-white text-[9px] tracking-widest uppercase font-mono rounded font-bold hover:bg-emerald-700 cursor-pointer">
                      SUBMIT ANOTHER FORM
                    </button>
                  </div>) : (<form onSubmit={handleApplicationSubmit} className="space-y-4">
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Full Name ]</label>
                      <input type="text" required name="candidateName" placeholder="e.g. Ramesh Deshmukh" className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white rounded-xl placeholder-slate-400 transition-all"/>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Email Address ]</label>
                      <input type="email" required name="candidateEmail" placeholder="e.g. ramesh@gmail.com" className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white rounded-xl placeholder-slate-400 transition-all"/>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Phone Number ]</label>
                      <input type="text" required name="candidatePhone" placeholder="e.g. +91 98765 43210" className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white rounded-xl placeholder-slate-400 transition-all"/>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Selection Option ]</label>
                      <select required name="candidateOption" className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white rounded-xl transition-all font-sans font-semibold">
                        <option value="job_sales">Job: Sales &amp; Marketing Specialist</option>
                        <option value="job_cctv">Job: Senior CCTV Engineer</option>
                        <option value="job_network">Job: Network Systems Specialist</option>
                        <option value="class_basics">Class: CCTV Installation Basics (Free)</option>
                        <option value="class_biometrics">Class: Biometrics &amp; Latch Setup (Free)</option>
                        <option value="class_fiber">Class: Optical Fiber VLANs (Free)</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Experience / Bio ]</label>
                      <textarea required name="candidateBio" rows={3} placeholder="Describe your active hardware experience or college degree details..." className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white rounded-xl placeholder-slate-400 transition-all"/>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">[ Resume / Portfolio Link ]</label>
                      <input type="url" name="candidateResume" placeholder="e.g. https://drive.google.com/resume" className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-sky-500 focus:bg-white rounded-xl placeholder-slate-400 transition-all"/>
                    </div>

                    <button type="submit" className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-sans font-bold text-[10px] tracking-widest uppercase rounded-xl transition-all cursor-pointer shadow-sm text-center">
                      SUBMIT APPLICATION
                    </button>
                  </form>)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>);
}

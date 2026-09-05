import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
// import { BLOGS_DATA } from "../data";
import BLOGS_DATA from "../json/blogs.json";


const Blogs = ({ subscribers, setSubscribers, setToastMessage, setSelectedBlog }) => {
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <section className="py-16 px-8 bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto font-sans">
          <div className="text-center mb-12">
            <span className="font-sans font-bold text-[10px] text-primary tracking-widest uppercase block mb-3">TECH LOGS // SECURITY ACADEMY</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 uppercase">Surveillance Logs &amp; Guides</h2>
            <p className="text-slate-500 mt-3 text-sm max-w-2xl mx-auto leading-relaxed">
              Deep technical guides on camera sensor physics, private VLAN switches, network port isolating, and pure sine-wave double conversion UPS batteries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            <div className="lg:col-span-3 bg-white p-6 border border-slate-200 space-y-6 rounded-2xl shadow-sm">
              <div className="space-y-2">
                <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-wider">KEYWORD SEARCH</span>
                <div className="relative">
                  <input type="text" placeholder="Search articles..." value={blogSearch} onChange={(e) => setBlogSearch(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[9px] font-bold text-slate-400 uppercase block tracking-wider">SPECIALIST DIRECTORIES</span>
                <div className="flex flex-col gap-1.5">
                  {["All", "Optics & Sensors", "Surveillance Networking", "Power Infrastructure"].map(cat => (<button type='button' id='categoryFilterBtn' aria-label="Category Filter Button" key={cat} onClick={() => setBlogCategoryFilter(cat)} className={`text-left text-xs py-2 px-3.5 border transition-all rounded-xl font-bold cursor-pointer ${blogCategoryFilter === cat ? "border-sky-100 bg-sky-50 text-sky-700" : "border-transparent text-slate-500 hover:text-primary hover:bg-slate-50"}`}>
                    {cat}
                  </button>))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 space-y-3">
                <span className="text-[9px] font-bold text-primary uppercase block tracking-wider">NEWSLETTER TELEMETRY</span>
                <p className="text-[10px] text-slate-400 leading-relaxed uppercase font-semibold">Subscribe to get firmware security logs and new compliance alerts.</p>
                <input type="email" placeholder="your@email.com" value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} className="w-full bg-slate-50 border border-slate-200 px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-primary focus:bg-white rounded-xl placeholder-slate-400 transition-all" />
                <button id='subscribeBtn' aria-label="Subscribe Button" onClick={() => {
                  if (newsletterEmail && newsletterEmail.includes("@")) {
                    if (!subscribers.includes(newsletterEmail)) {
                      setSubscribers(prev => [...prev, newsletterEmail]);
                    }
                    setToastMessage(`Email ${newsletterEmail} registered under security list SPE-Grid.`);
                    setNewsletterEmail("");
                  }
                  else {
                    setToastMessage("Please enter a valid email address.");
                  }
                }} className="w-full bg-primary hover:bg-sky-700 text-white py-2.5 text-[10px] font-bold tracking-widest uppercase cursor-pointer rounded-xl transition-all shadow-sm">
                  SUBSCRIBE FEED
                </button>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-6">
              {BLOGS_DATA
                .filter(post => blogCategoryFilter === "All" || post.category === blogCategoryFilter)
                .filter(post => post.title.toLowerCase().includes(blogSearch.toLowerCase()) || post.excerpt.toLowerCase().includes(blogSearch.toLowerCase()))
                .map((post) => (<div key={post.id} className="bg-white p-6 border border-slate-200/80 hover:border-primary transition-all rounded-2xl shadow-sm group">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                    <span className="text-[10px] px-2.5 py-1 bg-sky-50 text-sky-700 border border-sky-100 uppercase tracking-widest font-bold rounded-lg">
                      {post.category}
                    </span>
                    <div className="flex gap-4 text-[9px] text-slate-400 uppercase font-semibold">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-slate-100 font-sans">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6 h-6 rounded-lg bg-primary flex items-center justify-center text-[10px] text-white font-bold uppercase">
                        {post.author.slice(0, 2)}
                      </div>
                      <div>
                        <span className="text-slate-800 text-xs font-bold block">{post.author}</span>
                        <span className="text-[8px] text-slate-400 uppercase block font-bold">{post.authorRole}</span>
                      </div>
                    </div>

                    <button id='readBtn' aria-label="Read Button" onClick={() => setSelectedBlog(post)} className="text-[10px] font-bold tracking-widest uppercase text-primary hover:text-sky-700 flex items-center gap-1 transition-all cursor-pointer">
                      READ ARTICLE <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>))}
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}


export default Blogs
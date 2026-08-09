import React from 'react'
import { motion } from 'motion/react';
import { Facebook, Link, Linkedin, Share2, Twitter, X } from 'lucide-react';

const QuickBlogVIew = ({ setSelectedBlog, selectedBlog }) => {
    return (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl rounded-none">

                <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-start bg-[#0F0F0F]">
                    <div>
                        <div className="flex items-center gap-2 mb-2 font-mono">
                            <span className="text-[9px] px-2 py-0.5 bg-[#FF5A00]/10 text-[#FF5A00] border border-[#FF5A00]/30 uppercase font-bold tracking-widest">
                                {selectedBlog.category}
                            </span>
                            <span className="text-[9px] text-[#888888] uppercase tracking-wider">• {selectedBlog.readTime}</span>
                        </div>
                        <h3 className="font-headline font-bold text-lg md:text-2xl text-white uppercase tracking-wide leading-snug">
                            {selectedBlog.title}
                        </h3>
                    </div>
                    <button onClick={() => setSelectedBlog(null)} className="text-on-surface-variant hover:text-white p-1 hover:bg-white/5 transition-all cursor-pointer shrink-0 ml-4">
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="p-6 md:p-8 space-y-6 overflow-y-auto font-mono text-xs text-on-surface-variant leading-relaxed">
                    <div className="flex items-center gap-3 p-4 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none">
                        <div className="w-10 h-10 rounded-none bg-[#FF5A00] text-white flex items-center justify-center font-bold text-sm uppercase">
                            {selectedBlog.author.slice(0, 2)}
                        </div>
                        <div>
                            <span className="text-white text-xs font-bold block uppercase">{selectedBlog.author}</span>
                            <span className="text-[9px] text-[#888888] uppercase block">{selectedBlog.authorRole}</span>
                        </div>
                        <div className="ml-auto text-right text-[9px] text-[#888888] uppercase">
                            <span>Published: </span>
                            <span className="text-white font-bold block">{selectedBlog.date}</span>
                        </div>
                    </div>

                    <div className="space-y-4 whitespace-pre-line text-gray-300">
                        {selectedBlog.content}
                    </div>

                    {selectedBlog.tags && (<div className="pt-4 border-t border-[#2A2A2A] flex flex-wrap gap-2 items-center">
                        <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">TAGS:</span>
                        {selectedBlog.tags.map((tag, idx) => (<span key={idx} className="text-[9px] bg-white/5 border border-[#2A2A2A] px-2.5 py-1 text-white uppercase font-bold">
                            #{tag}
                        </span>))}
                    </div>)}

                    <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">SHARE INTEL:</span>
                            <div className="flex items-center gap-1.5">
                                <button onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    const text = encodeURIComponent(`Check out this security insight: ${selectedBlog.title}`);
                                    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, "_blank");
                                }} className="p-2 border border-[#2A2A2A] hover:border-sky-500 hover:bg-sky-500/10 text-[#888888] hover:text-sky-500 transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on X">
                                    <Twitter className="h-3.5 w-3.5" />
                                </button>
                                <button onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
                                }} className="p-2 border border-[#2A2A2A] hover:border-sky-500 hover:bg-sky-500/10 text-[#888888] hover:text-sky-500 transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on LinkedIn">
                                    <Linkedin className="h-3.5 w-3.5" />
                                </button>
                                <button onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, "_blank");
                                }} className="p-2 border border-[#2A2A2A] hover:border-sky-500 hover:bg-sky-500/10 text-[#888888] hover:text-sky-500 transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on Facebook">
                                    <Facebook className="h-3.5 w-3.5" />
                                </button>
                                <button onClick={() => {
                                    const url = encodeURIComponent(window.location.href);
                                    const text = encodeURIComponent(`Read "${selectedBlog.title}" at Security Plus Electronics`);
                                    window.open(`https://api.whatsapp.com/send?text=${text}%20${url}`, "_blank");
                                }} className="p-2 border border-[#2A2A2A] hover:border-sky-500 hover:bg-sky-500/10 text-[#888888] hover:text-sky-500 transition-all rounded-none cursor-pointer flex items-center justify-center" title="Share on WhatsApp">
                                    <Share2 className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </div>

                        <button onClick={() => {
                            navigator.clipboard.writeText(`${window.location.origin}/blog/${selectedBlog.id || "article"}`);
                            setToastMessage("Secure link copied to clipboard.");
                        }} className="flex items-center gap-1.5 px-3 py-1.5 border border-[#2A2A2A] hover:border-sky-500 text-on-surface-variant hover:text-sky-500 hover:bg-sky-500/10 transition-all text-[10px] font-bold tracking-wider uppercase rounded-none cursor-pointer self-start sm:self-auto">
                            <Link className="h-3 w-3" />
                            Copy Secure Link
                        </button>
                    </div>
                </div>

                <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] flex justify-end gap-3 font-mono shrink-0">
                    <button onClick={() => setSelectedBlog(null)} className="px-5 py-2.5 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white transition-all rounded-none">
                        Close Article
                    </button>

                    <button onClick={() => {
                        setSelectedBlog(null);
                        setBookingConfirmed(false);
                        setShowroomModalOpen(true);
                    }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] transition-all rounded-none">
                        Discuss Tech with advisor
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default QuickBlogVIew
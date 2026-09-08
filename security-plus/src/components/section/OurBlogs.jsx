import { ArrowRight } from "lucide-react";
import BLOGS_DATA from "../../json/blogs.json";

const OurBlogs = ({ setSelectedBlog }) => {
    return (<section className="py-24 px-6 md:px-12 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
                <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                    RECENT INDUSTRY NEWS & SECURITY GUIDES
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
                        <button type='button' id='readBtn' aria-label="Read Button" onClick={() => setSelectedBlog(blog)} className="text-xs btn btn-link font-mono font-bold text-primary hover:text-sky-700 flex items-center gap-1 cursor-pointer">
                            <span>READ</span>
                            <ArrowRight className="h-3 w-3" />
                        </button>
                    </div>
                </div>))}
            </div>
        </div>
    </section>);
};

export default OurBlogs
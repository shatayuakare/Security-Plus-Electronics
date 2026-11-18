import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import {
  ChevronRight,
  Search,
  CalendarDays,
  Clock3,
  BookOpen,
  RefreshCw,
  UserRound,
  SlidersHorizontal,
  X,
} from "lucide-react";
import axios from "axios";
import PageHeading from "../components/PageHeading";

const WORDPRESS_API =
  "https://woston.in/?rest_route=%2Fwp%2Fv2%2Fposts";

const PRIMARY_COLOR = "#0B1F4D";

// Extract readable text from WordPress HTML
const stripHTML = (html = "") => {
  if (typeof window === "undefined") {
    return html.replace(/<[^>]*>/g, "").trim();
  }

  const doc = new DOMParser().parseFromString(html, "text/html");
  return doc.body.textContent?.trim() || "";
};

// Calculate reading time
const calculateReadTime = (html = "") => {
  const words = stripHTML(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
};

// Format date
const formatDate = (date) => {
  if (!date) return "Recently published";

  return new Date(date).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

// Normalize WordPress post
const normalizeBlog = (post) => {
  const embedded = post._embedded || {};
  const author = embedded.author?.[0];
  const featuredImage =
    embedded["wp:featuredmedia"]?.[0]?.source_url || "";

  const content = post.content?.rendered || "";

  return {
    id: post.id,
    slug: post.slug,
    title: stripHTML(post.title?.rendered || "Untitled Article"),
    excerpt: stripHTML(post.excerpt?.rendered || content).slice(0, 220),
    content,

    date: formatDate(post.date),
    dateTimestamp: new Date(post.date).getTime(),

    modified: formatDate(post.modified),
    modifiedTimestamp: new Date(post.modified).getTime(),

    readTime: calculateReadTime(content),

    author: author?.name || "Woston Editorial Team",
    authorRole: author?.description || "Technical Contributor",
    authorAvatar: author?.avatar_urls?.["48"] || "",

    image: featuredImage,
    link: post.link,
  };
};

const Blogs = ({
  subscribers = [],
  setSubscribers,
  setToastMessage,
  setSelectedBlog,
}) => {
  const [blogSearch, setBlogSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortOption, setSortOption] = useState("newest");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // FETCH WORDPRESS BLOGS
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await axios.get(WORDPRESS_API, {
        params: {
          per_page: 100,
          _embed: 1,
          status: "publish",
          orderby: "date",
          order: "desc",
        },
      });

      setBlogs(response.data.map(normalizeBlog));
    } catch (err) {
      console.error("WordPress Blog API Error:", err);
      setError("Unable to load articles. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  // SEARCH + FILTER + SORT
  const filteredBlogs = useMemo(() => {
    let result = [...blogs];

    // Keyword search
    const searchText = blogSearch.trim().toLowerCase();

    if (searchText) {
      result = result.filter((post) =>
        [
          post.title,
          post.excerpt,
          stripHTML(post.content),
        ].some((value) =>
          value.toLowerCase().includes(searchText)
        )
      );
    }

    // Reader-focused filters
    switch (activeFilter) {
      case "latest":
        result = result.filter((post) => {
          const days =
            (Date.now() - post.dateTimestamp) /
            (1000 * 60 * 60 * 24);

          return days >= 0 && days <= 30;
        });
        break;

      case "updated":
        result = result.filter(
          (post) =>
            post.modifiedTimestamp > post.dateTimestamp
        );
        result.sort(
          (a, b) =>
            b.modifiedTimestamp - a.modifiedTimestamp
        );
        break;

      case "quick":
        result = result.filter(
          (post) => post.readTime <= 3
        );
        break;

      case "deep":
        result = result.filter(
          (post) => post.readTime > 5
        );
        break;

      default:
        break;
    }

    // Sorting
    if (activeFilter !== "updated") {
      switch (sortOption) {
        case "oldest":
          result.sort(
            (a, b) => a.dateTimestamp - b.dateTimestamp
          );
          break;

        case "az":
          result.sort((a, b) =>
            a.title.localeCompare(b.title)
          );
          break;

        case "za":
          result.sort((a, b) =>
            b.title.localeCompare(a.title)
          );
          break;

        case "shortest":
          result.sort((a, b) => a.readTime - b.readTime);
          break;

        case "longest":
          result.sort((a, b) => b.readTime - a.readTime);
          break;

        default:
          result.sort(
            (a, b) => b.dateTimestamp - a.dateTimestamp
          );
      }
    }

    return result;
  }, [blogs, blogSearch, activeFilter, sortOption]);

  // FILTER OPTIONS
  const filters = [
    { id: "all", label: "All Articles" },
    { id: "latest", label: "Latest" },
    { id: "updated", label: "Recently Updated" },
    { id: "quick", label: "Quick Reads" },
    { id: "deep", label: "In-depth Reads" },
  ];

  // NEWSLETTER
  const handleSubscribe = () => {
    const email = newsletterEmail.trim().toLowerCase();

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setToastMessage?.("Please enter a valid email address.");
      return;
    }

    if (!subscribers.includes(email)) {
      setSubscribers?.((prev) => [...prev, email]);
    }

    setToastMessage?.(
      `Email ${email} registered under security list SPE-Grid.`
    );

    setNewsletterEmail("");
  };

  // RESET FILTERS
  const resetFilters = () => {
    setBlogSearch("");
    setActiveFilter("all");
    setSortOption("newest");
  };

  return (
    <motion.div
      aria-label="Our Blogs"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">

        <div className="max-w-7xl mx-auto font-sans">

          {/* HEADER */}

          <PageHeading tagline={"KNOWLEDGE CENTER"} title={"Insights & Guides"} description={"Explore technical knowledge, surveillancet echnologies, networking solutions and expert guides from the world of security and IT."} />

          {/* <div className="mt-6 flex justify-center items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-slate-400">
            <BookOpen size={13} />
            {blogs.length} Published Articles
          </div> */}
          {/* MAIN LAYOUT */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* SIDEBAR */}

            <aside className="lg:col-span-3">

              <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm space-y-7 lg:sticky lg:top-24">

                {/* SEARCH */}

                <div>
                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3">
                    Find Articles
                  </span>

                  <div className="relative">

                    <Search
                      size={15}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      type="search"
                      placeholder="Search by keyword..."
                      value={blogSearch}
                      onChange={(e) =>
                        setBlogSearch(e.target.value)
                      }
                      className="w-full bg-slate-50 border border-slate-200 pl-9 pr-3 py-3 text-xs rounded-xl outline-none focus:border-sky-500 focus:bg-white transition-all"
                    />

                  </div>
                </div>

                {/* READER FILTERS */}

                <div>

                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3">
                    Discover Articles
                  </span>

                  <div className="flex flex-col gap-1.5">

                    {filters.map((filter) => (
                      <button
                        key={filter.id}
                        type="button"
                        onClick={() =>
                          setActiveFilter(filter.id)
                        }
                        className={`w-full text-left text-xs py-2.5 px-3 rounded-lg border transition-all ${activeFilter === filter.id
                          ? "bg-sky-50 text-sky-700 border-sky-100 font-bold"
                          : "border-transparent text-slate-500 hover:bg-slate-50 hover:text-sky-700"
                          }`}
                      >
                        {filter.label}
                      </button>
                    ))}

                  </div>

                </div>

                {/* SORTING */}

                <div className="pt-5 border-t border-slate-100">

                  <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase block mb-3">
                    Sort Articles
                  </span>

                  <div className="relative">

                    <SlidersHorizontal
                      size={14}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />

                    <select
                      value={sortOption}
                      onChange={(e) =>
                        setSortOption(e.target.value)
                      }
                      className="w-full appearance-none bg-slate-50 border border-slate-200 pl-9 pr-3 py-3 text-xs rounded-xl outline-none focus:border-sky-500 cursor-pointer text-slate-600"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                      <option value="az">Title A - Z</option>
                      <option value="za">Title Z - A</option>
                      <option value="shortest">Shortest Read</option>
                      <option value="longest">Longest Read</option>
                    </select>

                  </div>

                </div>

                {/* NEWSLETTER */}

                <div className="pt-5 border-t border-slate-100 space-y-3">

                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-widest">
                    Knowledge Updates
                  </span>

                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    Subscribe for technical articles,
                    security insights and product updates.
                  </p>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={newsletterEmail}
                    onChange={(e) =>
                      setNewsletterEmail(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSubscribe();
                    }}
                    className="w-full bg-slate-50 border border-slate-200 px-3 py-3 text-xs rounded-xl outline-none focus:border-sky-500"
                  />

                  <button
                    type="button"
                    onClick={handleSubscribe}
                    className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3 text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all shadow-sm"
                  >
                    Subscribe Now
                  </button>

                </div>

              </div>

            </aside>

            {/* BLOG LIST */}

            <main className="lg:col-span-9 space-y-5">

              {/* RESULTS HEADER */}

              <div className="flex flex-wrap justify-between items-center gap-3 pb-2">

                <div>
                  <h2 className="text-sm font-bold uppercase tracking-wide text-slate-800">
                    {filters.find(
                      (f) => f.id === activeFilter
                    )?.label || "Latest Articles"}
                  </h2>

                  <p className="text-[11px] text-slate-400 mt-1">
                    Showing {filteredBlogs.length} of {blogs.length} articles
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    resetFilters();
                    fetchBlogs();
                  }}
                  className="flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-sky-600 hover:text-sky-800"
                >
                  <RefreshCw size={12} />
                  Reset & Refresh
                </button>

              </div>

              {/* ACTIVE SEARCH */}

              {blogSearch && (
                <div className="flex items-center justify-between bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">

                  <span className="text-xs text-sky-700">
                    Search: <strong>{blogSearch}</strong>
                  </span>

                  <button
                    type="button"
                    onClick={() => setBlogSearch("")}
                    className="text-sky-600 hover:text-sky-800"
                    aria-label="Clear search"
                  >
                    <X size={15} />
                  </button>

                </div>
              )}

              {/* LOADING */}

              {loading && (
                <div className="bg-white border border-slate-200 rounded-2xl p-16 text-center">

                  <RefreshCw
                    className="animate-spin mx-auto text-sky-600 mb-4"
                    size={25}
                  />

                  <p className="text-sm font-semibold text-slate-700">
                    Loading articles...
                  </p>

                  <p className="text-xs text-slate-400 mt-2">
                    Connecting to Woston Knowledge Center
                  </p>

                </div>
              )}

              {/* ERROR */}

              {!loading && error && (
                <div className="bg-white border border-red-100 rounded-2xl p-10 text-center">

                  <p className="text-sm font-bold text-slate-800">
                    Something went wrong
                  </p>

                  <p className="text-xs text-slate-500 mt-2">
                    {error}
                  </p>

                  <button
                    type="button"
                    onClick={fetchBlogs}
                    className="mt-5 text-xs font-bold text-sky-600"
                  >
                    Try Again →
                  </button>

                </div>
              )}

              {/* EMPTY */}

              {!loading && !error && filteredBlogs.length === 0 && (
                <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">

                  <Search
                    size={28}
                    className="mx-auto text-slate-300 mb-4"
                  />

                  <h3 className="font-bold text-slate-800">
                    No Articles Found
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    No articles match your selected filters.
                    Try changing your search or filter.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-5 text-xs font-bold text-sky-600"
                  >
                    Clear All Filters →
                  </button>

                </div>
              )}

              {/* BLOG CARDS */}

              {!loading &&
                !error &&
                filteredBlogs.map((post, index) => (

                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.35,
                      delay: index * 0.04,
                    }}
                    className="group bg-white border border-slate-200/80 hover:border-sky-300 hover:shadow-lg hover:shadow-slate-200/50 rounded-2xl overflow-hidden transition-all duration-300"
                  >

                    <div className="flex flex-col sm:flex-row items-stretch">

                      {/* IMAGE */}

                      {post.image && (
                        <div className="sm:w-56 md:w-64 shrink-0 overflow-hidden bg-slate-100">

                          <img
                            src={post.image}
                            alt={post.title}
                            loading="lazy"
                            className="w-full h-56 sm:h-full min-h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                          />

                        </div>
                      )}

                      {/* ARTICLE CONTENT */}

                      <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col">

                        {/* ARTICLE LABEL + DATE */}

                        <div className="flex flex-wrap justify-between items-center gap-3 mb-4">

                          <span className="text-[9px] px-3 py-1.5 bg-sky-50 text-sky-700 border border-sky-100 uppercase tracking-wider font-bold rounded-full">
                            Article
                          </span>

                          <div className="flex items-center gap-3 text-[9px] text-slate-400 uppercase font-semibold">

                            <span className="flex items-center gap-1.5">
                              <CalendarDays size={11} />
                              {post.date}
                            </span>

                            <span className="flex items-center gap-1.5">
                              <Clock3 size={11} />
                              {post.readTime} min read
                            </span>

                          </div>

                        </div>

                        {/* TITLE */}

                        <h3
                          className="text-base md:text-lg font-bold leading-snug mb-3 uppercase tracking-tight transition-colors group-hover:text-sky-600"
                          style={{ color: PRIMARY_COLOR }}
                        >
                          {post.title}
                        </h3>

                        {/* DESCRIPTION */}

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>

                        {/* FIXED BOTTOM FOOTER */}

                        <div className="mt-auto pt-4 border-t border-slate-100 flex flex-wrap justify-between items-center gap-4">

                          {/* AUTHOR */}

                          <div className="flex items-center gap-2.5 min-w-0">

                            {post.authorAvatar ? (
                              <img
                                src={post.authorAvatar}
                                alt={post.author}
                                className="w-8 h-8 rounded-full object-cover shrink-0"
                              />
                            ) : (
                              <div className="w-8 h-8 rounded-full bg-sky-600 flex items-center justify-center text-white shrink-0">
                                <UserRound size={15} />
                              </div>
                            )}

                            <div className="min-w-0">
                              <span className="text-[11px] text-slate-800 font-bold block truncate">
                                {post.author}
                              </span>

                              <span className="text-[8px] text-slate-400 uppercase tracking-wide block truncate">
                                {post.authorRole}
                              </span>
                            </div>

                          </div>

                          {/* READ ARTICLE */}

                          <button
                            type="button"
                            onClick={() =>
                              setSelectedBlog?.(post)
                            }
                            className="shrink-0 flex items-center gap-1.5 text-[10px] font-bold tracking-widest uppercase text-sky-600 hover:text-sky-800 transition-colors"
                          >
                            Read Article
                            <ChevronRight size={14} />
                          </button>

                        </div>

                      </div>

                    </div>

                  </motion.article>

                ))}

            </main>

          </div>

        </div>

      </section>
    </motion.div>
  );
};

export default Blogs;

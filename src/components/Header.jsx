import { Heart, X, Menu, ShoppingBag, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom"
import { companytData } from '../utils/Constant';
import { useEffect } from "react";

const formatPrice = (product) => {
  const raw = Number(product?.prices?.sale_price || product?.prices?.regular_price || product?.prices?.price || 0);
  const minor = Number(product?.prices?.currency_minor_unit || 0);
  const amount = minor > 0 ? raw / 10 ** minor : raw;

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(amount) ? amount : 0);
};

const plainName = (name = "") => String(name).replace(/<[^>]+>/g, "");

const Header = ({ wishlist, products = [], toggleWishlist, wishlistDropdownOpen, setWishlistDropdownOpen, setDropdownSubView, setSelectedProductForQuickView, mobileMenuOpen, setMobileMenuOpen, accountRef, mobileHamburgerRef, mobileMenuRef, }) => {
  const location = useLocation();
  const savedItems = (wishlist || []).map((id) => products.find((product) => product?.id === id) || { id, missing: true });

  useEffect(() => {
    if (!wishlistDropdownOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setWishlistDropdownOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [wishlistDropdownOpen, setWishlistDropdownOpen]);

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-[#0a0d16]/95 backdrop-blur-md border-b border-slate-800/80 z-40 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all shadow-lg shadow-slate-950/20">
        <Link to={"/"} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 md:gap-3 cursor-pointer select-none active:scale-95 hover:opacity-90 transition-all focus:boder-0 focus:outline-0" >
          <div className="flex items-center gap-4">
            <div className="h-12 aspect-square flex items-center justify-center shrink-0">
              <img alt="Security Plus Electronics Logo" className="h-full w-full object-cover drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-white transition-all duration-300" src={companytData.logo} referrerPolicy="no-referrer" fetchPriority="high" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl focus:boder-0 focus:outline-0 font-extrabold text-white uppercase tracking-tight font-sans">
                Security Plus
              </h2>

              <div className="flex items-center gap-2">
                <span className="h-px w-9 md:w-11 bg-sky-500"></span>
                <span className="text-[9px] font-bold text-sky-400 uppercase tracking-[0.2em] font-sans">
                  CCTV Mall
                </span>
                <span className="h-px w-9 md:w-11 bg-sky-500"></span>
              </div>
            </div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-5 lg:gap-6 font-sans font-bold text-[11px] tracking-widest uppercase">
          <Link to={"/"} onClick={() => { window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${location.pathname === "/" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Home
          </Link>
          <Link to={"/products"} onClick={() => { window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${location.pathname === "/products" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Products
          </Link>
          <Link to={"/blogs"} onClick={() => { window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${location.pathname === "/blogs" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Blogs
          </Link>
          <Link to={"/about"} onClick={() => { window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${location.pathname === "/about" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            About Us
          </Link>
          <Link to={"/contact"} onClick={() => { window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${location.pathname === "/contact" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Contact Us
          </Link>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <div ref={accountRef} className="relative">
            <button
              type="button"
              aria-expanded={wishlistDropdownOpen}
              aria-label="Open wishlist"
              onClick={() => {
                setWishlistDropdownOpen((open) => !open);
                setDropdownSubView("wishlist");
              }}
              className={`relative h-8 w-8 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center bg-slate-950 shrink-0 ${wishlistDropdownOpen ? "border-rose-500 text-rose-400" : "border-slate-500 text-slate-300 hover:border-rose-500 hover:text-rose-400"}`}
              title={`View Saved Wishlist (${wishlist.length} items)`}
            >
              <Heart className={`h-4 w-4 ${wishlist.length > 0 ? "fill-rose-500 text-rose-500 animate-pulse" : "text-slate-400"}`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-[8px] border border-slate-950">
                  {wishlist.length}
                </span>
              )}
            </button>

            <AnimatePresence>
              {wishlistDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  transition={{ duration: 0.18 }}
                  className="absolute right-0 top-[calc(100%+0.85rem)] z-50 w-[min(22rem,calc(100vw-1.5rem))] overflow-hidden rounded-2xl border border-slate-800 bg-[#0a0d16] shadow-2xl shadow-black/60"
                >
                  <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 px-4 py-3">
                    <div>
                      <p className="font-sans text-[9px] font-bold uppercase tracking-[0.22em] text-sky-400">CCTV Mall</p>
                      <h3 className="mt-0.5 font-sans text-sm font-extrabold uppercase tracking-wide text-white">Saved Wishlist</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="rounded-full border border-rose-500/40 bg-rose-500/10 px-2 py-1 font-mono text-[9px] font-bold text-rose-300">
                        {wishlist.length} {wishlist.length === 1 ? "item" : "items"}
                      </span>
                      <button
                        type="button"
                        aria-label="Close wishlist"
                        onClick={() => setWishlistDropdownOpen(false)}
                        className="rounded-full border border-slate-800 bg-slate-950 p-1.5 text-slate-400 transition-colors hover:text-white cursor-pointer"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>

                  {savedItems.length === 0 ? (
                    <div className="px-5 py-8 text-center">
                      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-slate-800 bg-slate-950">
                        <Heart className="h-5 w-5 text-slate-500" />
                      </div>
                      <p className="font-sans text-sm font-bold text-white">Your wishlist is empty</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-400">Save cameras, recorders, and accessories while you browse the catalog.</p>
                      <Link
                        to="/products"
                        onClick={() => { setWishlistDropdownOpen(false); window.scrollTo(0, 0); }}
                        className="mt-4 inline-flex items-center justify-center rounded-xl border border-sky-500/40 bg-sky-500/10 px-4 py-2 font-sans text-[10px] font-bold uppercase tracking-widest text-sky-300 transition-colors hover:bg-sky-500 hover:text-white"
                      >
                        Browse products
                      </Link>
                    </div>
                  ) : (
                    <ul className="max-h-80 overflow-y-auto">
                      {savedItems.map((product) => (
                        <li key={product.id} className="border-b border-slate-800/70 last:border-b-0">
                          <div className="flex items-center gap-3 px-3 py-3">
                            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl border border-slate-800 bg-slate-900">
                              {product.missing ? (
                                <div className="flex h-full w-full items-center justify-center">
                                  <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                                </div>
                              ) : (
                                <img
                                  src={product.images?.[0]?.thumbnail || product.images?.[0]?.src}
                                  alt={product.images?.[0]?.alt || plainName(product.name)}
                                  className="h-full w-full object-cover"
                                />
                              )}
                            </div>

                            <div className="min-w-0 flex-1">
                              <p className="truncate font-sans text-[9px] font-bold uppercase tracking-wider text-sky-400">
                                {product.missing ? "Saved product" : (product.brands?.[0]?.name || product.sku || "Security Plus")}
                              </p>
                              <p className="mt-0.5 line-clamp-2 font-sans text-xs font-bold uppercase leading-snug text-slate-100">
                                {product.missing ? `Item #${product.id}` : plainName(product.name)}
                              </p>
                              {!product.missing && (
                                <p className="mt-1 font-sans text-sm font-extrabold text-white">{formatPrice(product)}</p>
                              )}
                            </div>

                            <div className="flex shrink-0 flex-col gap-1.5">
                              {!product.missing && (
                                <button
                                  type="button"
                                  aria-label="Quick view saved product"
                                  onClick={() => {
                                    setSelectedProductForQuickView(product);
                                    setWishlistDropdownOpen(false);
                                  }}
                                  className="flex h-7 w-7 items-center justify-center rounded-lg border border-sky-500/30 bg-sky-500/10 text-sky-300 transition-colors hover:bg-sky-500 hover:text-white cursor-pointer"
                                  title="Quick view"
                                >
                                  <Eye className="h-3.5 w-3.5" />
                                </button>
                              )}
                              <button
                                type="button"
                                aria-label="Remove from wishlist"
                                onClick={() => toggleWishlist(product.id)}
                                className="flex h-7 w-7 items-center justify-center rounded-lg border border-rose-500/30 bg-rose-500/10 text-rose-300 transition-colors hover:bg-rose-500 hover:text-white cursor-pointer"
                                title="Remove from wishlist"
                              >
                                <Heart className="h-3.5 w-3.5 fill-current" />
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {savedItems.length > 0 && (
                    <div className="border-t border-slate-800/80 px-3 py-3">
                      <Link
                        to="/products"
                        onClick={() => { setWishlistDropdownOpen(false); window.scrollTo(0, 0); }}
                        className="flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2.5 font-sans text-[10px] font-bold uppercase tracking-widest text-white transition-colors hover:bg-sky-600"
                      >
                        View catalog
                      </Link>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to={"https://woston.in"} target="_blank" className="hidden md:flex">
            <img src={new URL(`../assets/images/woston-logo-light.avif`, import.meta.url).href} alt="Woston Logo" className="h-12 w-full" loading="eager" />
          </Link>

          {/* Mobile hamburger */}
          <button ref={mobileHamburgerRef} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden h-8 w-8 flex items-center justify-center rounded-lg border border-slate-850 bg-slate-950 text-slate-300 hover:border-primary hover:text-sky-400 transition-all cursor-pointer shrink-0 p-1" title="Toggle Menu">
            <Menu className="h-4.5 w-4.5" />
          </button>
        </div >
      </nav >

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-45 md:hidden" />
            {/* Side Drawer */}
            <motion.div ref={mobileMenuRef} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#0a0d16]/98 backdrop-blur-lg z-50 p-6 flex flex-col gap-6 border-l border-slate-800/80 md:hidden shadow-2xl overflow-y-auto">

              <div className="flex justify-between items-center pb-4 border-b border-slate-800/60">
                <span className="font-sans font-extrabold text-xs tracking-widest text-white uppercase">
                  MENU
                </span>
                <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900 border border-slate-850 transition-colors" title="Close Menu">
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex flex-col gap-2">
                <Link to={"/"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "/" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  Home
                </Link>
                <Link to={"/products"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "products" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  Products
                </Link>
                <Link to={"/blogs"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "products" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  Blogs
                </Link>
                <Link to={"/about"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "about" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  About Us
                </Link>
                <Link to={"/contact"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "contact" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                <Link to={"https://woston.in"} target="_blank" onClick={() => setMobileMenuOpen(false)} className="bg-primary hover:bg-primary text-white px-5 py-3 rounded-xl font-sans font-bold text-[10px] tracking-widest uppercase border border-primary hover:border-primary transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full">
                  <ShoppingBag className="h-4 w-4 text-white" />
                  WOSTON STORE
                </Link>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header >
  );
};


export default Header
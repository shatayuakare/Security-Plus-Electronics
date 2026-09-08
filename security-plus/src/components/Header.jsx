import React from "react";
import { Heart, User, Terminal, X, Menu, ClipboardList, ShoppingBag, ArrowLeft, Trash2, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/images/logo.avif";
import { getProductImageUrls } from "../components/BlurUpImage";
import { Link, useLocation } from "react-router-dom"
import { companytData } from '../utils/Constant';


const Header = ({ activeTab, setActiveTab, wishlist, toggleWishlist, accountDropdownOpen, setAccountDropdownOpen, dropdownSubView, setDropdownSubView, logoData, mobileMenuOpen, setMobileMenuOpen, inquiryList, setIsInquiryDrawerOpen, mobileHamburgerRef, mobileMenuRef, }) => {

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
          <button onClick={() => {
            setAccountDropdownOpen(true);
            setDropdownSubView("wishlist");
          }} className="relative h-8 w-8 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center bg-slate-950 border-slate-500 text-slate-300 hover:border-rose-500 hover:text-rose-400 shrink-0" title={`View Saved Wishlist (${wishlist.length} items)`}>
            <Heart className={`h-4 w-4 ${wishlist.length > 0 ? "fill-rose-500 text-rose-500 animate-pulse" : "text-slate-400"}`} />
            {wishlist.length > 0 && (<span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-[8px] border border-slate-950">
              {wishlist.length}
            </span>)}
          </button>

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
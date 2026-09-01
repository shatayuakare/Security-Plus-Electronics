import React from "react";
import { Heart, User, Terminal, X, Menu, ClipboardList, ShoppingBag, ArrowLeft, Trash2, Eye } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "../assets/images/logo.png";
import { getProductImageUrls } from "../components/BlurUpImage";
import { Link, useLocation } from "react-router-dom"
import { companytData } from '../utils/Constant';


const Header = ({ activeTab, setActiveTab, customerUser, setCustomerUser, wishlist, toggleWishlist, accountDropdownOpen, setAccountDropdownOpen, dropdownSubView, setDropdownSubView, logoData, adminEmails, setAdminLoginOpen, setToastMessage, PRODUCTS_DATA, setSelectedProductForQuickView, mobileMenuOpen, setMobileMenuOpen, isAdminMode, setIsAdminMode, inquiryList, setIsInquiryDrawerOpen, accountRef, mobileHamburgerRef, mobileMenuRef, }) => {


  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-[#0a0d16]/95 backdrop-blur-md border-b border-slate-800/80 z-40 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all shadow-lg shadow-slate-950/20">
        <Link to={"/"} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 md:gap-3 cursor-pointer select-none active:scale-95 hover:opacity-90 transition-all" title="Return to Home">
          <div className="flex items-center gap-4">
            <div className="h-12 aspect-square flex items-center justify-center shrink-0">
              <img alt="Security Plus Electronics Logo" className="h-full w-full object-cover drop-shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:drop-shadow-white transition-all duration-300" src={companytData.logo} referrerPolicy="no-referrer" />
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-extrabold text-white uppercase tracking-tight font-sans">
                {logoData.companyName}
              </h2>
              {logoData.companySuffix && (
                <div className="flex items-center gap-2">
                  <span className="h-px w-9 md:w-11 bg-sky-500"></span>
                  <span className="text-[9px] font-bold text-sky-400 uppercase tracking-[0.2em] font-sans">
                    {logoData.companySuffix}
                  </span>
                  <span className="h-px w-9 md:w-11 bg-sky-500"></span>
                </div>
              )}
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

          {/* Interactive Account Dropdown */}
          {/*   <div className="relative" ref={accountRef}>
            <button onClick={() => setAccountDropdownOpen(!accountDropdownOpen)} className={`h-8 w-8 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 ${accountDropdownOpen
              ? "bg-primary border-primary text-white shadow-lg shadow-primary/15"
              : "bg-slate-950 border-slate-850 text-slate-300 hover:border-primary hover:text-sky-400"}`} title="Account Options">
              <User className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {accountDropdownOpen && (<motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10, scale: 0.95 }} transition={{ duration: 0.15 }} className="absolute right-0 mt-3 w-64 bg-slate-950 border border-slate-800 rounded-xl p-4 shadow-2xl z-50 flex flex-col gap-3 font-sans">
                {!isAdminMode ? (customerUser ? (dropdownSubView === "main" ? (<>
                  <div className="border-b border-slate-900 pb-2.5">
                    {adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase()) ? (<span className="font-mono font-bold text-[8px] tracking-widest text-emerald-400 uppercase block mb-1">● Admin Connected</span>) : (<span className="font-mono font-bold text-[8px] tracking-widest text-sky-400 uppercase block mb-1">● Customer Connected</span>)}
                    <h4 className="text-xs font-bold text-white uppercase">{customerUser.name}</h4>
                    <p className="text-[10px] text-slate-400 truncate mt-0.5">{customerUser.email}</p>
                  </div>

            <button onClick={() => setDropdownSubView("wishlist")} className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-primary transition-all cursor-pointer flex items-center justify-between px-3">
              <span className="flex items-center gap-1.5">
                <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                My Wishlist
              </span>
              <span className="bg-rose-500 text-white font-mono text-[9px] px-2 py-0.5 rounded-full">
                {wishlist.length}
              </span>
            </button>

            <Link to={"/products"} onClick={() => { setAccountDropdownOpen(false); }} className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-1.5">
              Explore Catalog
            </Link>

            <button onClick={() => {
              setCustomerUser(null);
              setToastMessage("Logged out successfully.");
              setAccountDropdownOpen(false);
              setActiveTab("home");
            }} className="w-full bg-rose-950/20 hover:bg-rose-900/30 text-rose-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2 rounded-lg border border-rose-950/50 hover:border-rose-800 transition-all cursor-pointer flex items-center justify-center gap-1.5">
              Log Out Account
            </button>
          </>) : (
          <>
            <div className="border-b border-slate-900 pb-2 flex items-center gap-2">
              <button onClick={() => setDropdownSubView("main")} className="p-1 hover:bg-slate-900 rounded-lg text-slate-400 hover:text-white transition-colors cursor-pointer" title="Back">
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <div>
                <span className="font-mono font-bold text-[8px] tracking-widest text-rose-500 uppercase block">Wishlist Workspace</span>
                <h4 className="text-xs font-bold text-white uppercase">My Saved Items ({wishlist.length})</h4>
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-800">
              {wishlist.length > 0 ? (PRODUCTS_DATA.filter(p => wishlist.includes(p.id)).map(product => {
                const urls = getProductImageUrls(product.image);
                return (<div key={product.id} className="bg-slate-900/40 border border-slate-900/80 p-2 rounded-lg flex items-center gap-2 group/wish-item hover:border-slate-800 transition-all">
                  <div className="w-10 h-10 bg-slate-950 border border-slate-850 rounded overflow-hidden shrink-0 relative flex items-center justify-center">
                    <img src={urls.low} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h5 className="text-[10px] font-bold text-white truncate uppercase font-sans">{product.name}</h5>
                    <p className="text-[9px] text-sky-400 font-bold font-sans mt-0.5">{product.price}</p>
                  </div>
                  <div className="flex gap-1 shrink-0">
                    <button onClick={() => {
                      setSelectedProductForQuickView(product);
                      setAccountDropdownOpen(false);
                    }} className="p-1.5 bg-slate-950 hover:bg-sky-950 text-slate-400 hover:text-sky-400 border border-slate-800 rounded-md transition-all cursor-pointer" title="Quick View">
                      <Eye className="h-3 w-3" />
                    </button>
                    <button onClick={() => {
                      toggleWishlist(product.id);
                    }} className="p-1.5 bg-slate-950 hover:bg-rose-950 text-slate-400 hover:text-rose-500 border border-slate-800 rounded-md transition-all cursor-pointer" title="Remove">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>);
              })) : (<div className="py-6 text-center text-slate-500 flex flex-col items-center justify-center gap-1.5">
                <Heart className="h-6 w-6 text-slate-700 stroke-1" />
                <p className="text-[10px] font-sans">No saved items found.</p>
                <Link to={"/products"} onClick={() => {
                  setAccountDropdownOpen(false);
                }} className="text-[9px] font-bold text-sky-400 hover:underline mt-1 font-sans cursor-pointer uppercase">
                  Browse Products
                </Link>
              </div>)}
            </div>

            <div className="border-t border-slate-900 pt-2.5">
              <button onClick={() => setDropdownSubView("main")} className="w-full bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white font-sans font-bold text-[8px] tracking-wider uppercase py-2 rounded-lg border border-slate-850 transition-all cursor-pointer text-center">
                Return to Profile
              </button>
            </div>
          </>)) : (<>
            <div className="border-b border-slate-900 pb-2.5">
              <span className="font-mono font-bold text-[8px] tracking-widest text-slate-500 uppercase block mb-1">Secure Customer Portal</span>
              <h4 className="text-xs font-bold text-white uppercase">Guest Visitor</h4>
              <p className="text-[10px] text-slate-400 leading-normal mt-1">Log in or create a customer account to access exclusive specs and order management.</p>
            </div>
            <Link to={"/login"} onClick={() => { setAccountDropdownOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="w-full bg-primary hover:bg-primary text-white font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-primary hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-1.5">
              <User className="w-3 h-3" />
              Sign In
            </Link>
            <Link to={"/register"} onClick={() => { setAccountDropdownOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="w-full bg-slate-900 hover:bg-slate-800 text-sky-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-1.5">
              Register Account
            </Link>
          </>)) : (<>
            <div>
              <span className="font-mono font-bold text-[8px] tracking-widest text-emerald-400 uppercase block mb-1">
                ● SYSTEM ONLINE
              </span>
              <h4 className="text-xs font-extrabold text-white uppercase">Root Administrator</h4>
              <span className="text-[8px] font-mono font-bold text-slate-400 block mt-1 bg-slate-900 border border-slate-850 px-2 py-0.5 rounded uppercase max-w-max">
                Nagpur HQ Session
              </span>
            </div>
            <div className="h-px bg-slate-800 my-1" />
            <button onClick={() => {
              const adminEl = document.getElementById("admin-portal-dashboard-card");
              if (adminEl) {
                adminEl.scrollIntoView({ behavior: "smooth" });
              }
              else {
                setToastMessage("Scroll down to find the Admin Management Console at the bottom of the workspace.");
              }
              setAccountDropdownOpen(false);
            }} className="w-full bg-slate-900 hover:bg-slate-800 text-sky-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2 rounded-lg border border-slate-800 hover:border-primary transition-all cursor-pointer flex items-center justify-center gap-1.5">
              <Terminal className="w-3 h-3" />
              Admin Control Panel
            </button>
            <button onClick={() => {
              setIsAdminMode(false);
              localStorage.removeItem("spe_admin_mode");
              setToastMessage("Session token destroyed. Offline mode restored.");
              setAccountDropdownOpen(false);
            }} className="w-full bg-slate-950 hover:bg-red-950/20 text-red-450 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-red-900 transition-all cursor-pointer flex items-center justify-center gap-1.5">
              <X className="w-3 h-3" />
              Sign Out System
            </button>
          </>)}
        </motion.div>)}
      </AnimatePresence> 
          </div>
*/}


          <Link to={"https://woston.in"} target="_blank" className="hidden md:flex">
            <img src={new URL(`../assets/images/woston-logo-light.png`, import.meta.url).href} alt="Woston Logo" className="h-12 w-full" />
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
                <span className="font-sans font-extrabold text-xs tracking-widest text-white uppercase">[ MENU ]</span>
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
                  Products
                </Link>
                <Link to={"/about"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "about" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  About Us
                </Link>
                <Link to={"/contact"} onClick={() => { setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${location.pathname === "contact" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                  Contact Us
                </Link>
              </div>

              <div className="flex flex-col gap-3 mt-4">
                {isAdminMode && (<button onClick={() => { setIsInquiryDrawerOpen(true); setMobileMenuOpen(false); }} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-sans font-bold text-[10px] tracking-widest uppercase border border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full">
                  <ClipboardList className="h-4 w-4 text-sky-400" />
                  Inquiry List {inquiryList.length > 0 ? `(${inquiryList.length})` : ""}
                </button>)}

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
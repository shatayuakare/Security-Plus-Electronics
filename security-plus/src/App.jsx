import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { X, Sparkles, Eye, Twitter, Linkedin, Facebook, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logo from "./assets/images/logo.png";

import AdminPanel from "./components/AdminPanel";
import { ToastContainer } from "react-toastify"
import { SEOManager } from "./components/SEOManager";

import BrandCarousel from "./components/BrandCarousel";
import { Header } from "./components/Header";
import { ProductCategories } from "./components/section/ProductCategories";
import { VirtualShowroom } from "./components/VirtualShowroom";

// Import pages
import { ScrollableTestimonials, OurThought, OurBlogs, FAQSection, CorporateContactForm, OurLocation } from "./pages/Home";
import { Route, Routes, useLocation } from "react-router-dom"
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import TermsAndConditions from "./pages/TermAndCondition";

// Import modular section page
import Hero from "./components/Hero";
import Products from "./pages/Products";
import { Testimonials as TestimonialsPage } from "./components/Testimonials";
import Gallery from "./pages/Gallery";
import { AuthSection } from "./components/AuthSection";
import Footer from "./components/Footer";
import ReelSection from "./components/section/ReelSection";


// JSON file to fetch data
import TESTIMONIALS_DATA from "./json/testimonials.json"
import PRODUCTS from "./json/wooProducts.json"
import GALLERY_ITEMS from "./json/gallary.json"
import QuickProductView from "./components/modal/QuickProductView";
import ShowroomExperience from "./components/modal/ShowroomExperience";
import QuickBlogVIew from "./components/modal/QuickBlogVIew";
import axios from "axios";
import { SERVER } from "./utils/Constant";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
};


function App() {

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [showroomModalOpen, setShowroomModalOpen] = useState(false);

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [activeShowroomHotspot, setActiveShowroomHotspot] = useState(null);
  const [showroomScanStatus, setShowroomScanStatus] = useState("idle");

  const [toastMessage, setToastMessage] = useState(null);
  const [customerUser, setCustomerUser] = useState(() => {
    const saved = localStorage.getItem("spe_customer_user");
    return saved ? JSON.parse(saved) : null;
  });
  const [registeredCustomers, setRegisteredCustomers] = useState(() => {
    const saved = localStorage.getItem("spe_registered_customers");
    if (saved)
      return JSON.parse(saved);
    return [
      { name: "Security Manager", email: "info@securityplus.in", phone: "08048102415", password: "customer123" }
    ];
  });

  useEffect(() => {
    if (customerUser) {
      localStorage.setItem("spe_customer_user", JSON.stringify(customerUser));
    }
    else {
      localStorage.removeItem("spe_customer_user");
    }
  }, [customerUser]);

  useEffect(() => {
    localStorage.setItem("spe_registered_customers", JSON.stringify(registeredCustomers));
  }, [registeredCustomers]);

  const [wishlist, setWishlist] = useState(() => {
    const savedUser = localStorage.getItem("spe_customer_user");
    const user = savedUser ? JSON.parse(savedUser) : null;
    if (user && user.email) {
      const saved = localStorage.getItem(`spe_wishlist_${user.email}`);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  useEffect(() => {
    if (customerUser && customerUser.email) {
      const saved = localStorage.getItem(`spe_wishlist_${customerUser.email}`);
      setWishlist(saved ? JSON.parse(saved) : []);
    }
    else {
      setWishlist([]);
    }
  }, [customerUser]);

  const saveWishlist = (newWishlist) => {
    setWishlist(newWishlist);
    if (customerUser && customerUser.email) {
      localStorage.setItem(`spe_wishlist_${customerUser.email}`, JSON.stringify(newWishlist));
    }
  };

  const toggleWishlist = (productId) => {
    if (!customerUser) {
      setToastMessage("Please log in to add items to your wishlist.");
      return;
    }
    const index = wishlist.indexOf(productId);
    let newWishlist;
    if (index > -1) {
      newWishlist = wishlist.filter(id => id !== productId);
      setToastMessage("Product removed from your wishlist.");
    }
    else {
      newWishlist = [...wishlist, productId];
      setToastMessage("Product added to your wishlist!");
    }
    saveWishlist(newWishlist);
  };

  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const [productCategories, setProductCategories] = useState(() => {
    const saved = localStorage.getItem("spe_product_categories");
    if (saved)
      return JSON.parse(saved);
    return ["CCTV Cameras", "Biometric Access", "NVR Storage", "Networking Backbone", "Power Backup"];
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("spe_products_catalog");
    if (saved)
      return JSON.parse(saved);
    return PRODUCTS.map(p => ({ ...p }));
  });

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`https://woston.in/wp-json/wc/store/v1/products?per_page=12&page=${currentPage}`).then(res => setProducts(res.data)).catch(e => console.error(e));
    }
    fetchProducts();
  }, [currentPage]);

  const [contactData, setContactData] = useState(() => {
    const saved = localStorage.getItem("spe_contact_data");
    const defaults = {
      phone: "WhatsApp: +91 9373456746 | On-Call: +91 7020320794 / +91 9284522248 | Inquiry (IVR): 08048102415",
      email: "info@securityplus.in",
      address: "SPE CCTV Mall, West High Court Road, Dharampeth, Nagpur, Maharashtra 440010",
      officeHours: "Mon - Sat: 10:00 AM - 08:30 PM",
      mapAddress: "SPE CCTV Mall Nagpur",
      coordinates: "21.1458° N, 79.0882° E"
    };
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (!parsed.phone || parsed.phone.includes("94231") || parsed.phone.includes("98230") || parsed.phone.includes("43255")) {
          parsed.phone = defaults.phone;
        }
        if (!parsed.email || parsed.email.includes("shatayu") || parsed.email.includes("akare")) {
          parsed.email = defaults.email;
        }
        return parsed;
      }
      catch (e) {
        return defaults;
      }
    }
    return defaults;
  });

  const [logoData, setLogoData] = useState(() => {
    const saved = localStorage.getItem("spe_logo_data");
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.companyName === "SPE" || parsed.companySuffix === "Nagpur") {
          return {
            logoUrl: parsed.logoUrl || logo,
            companyName: "Security Plus",
            companySuffix: "CCTV Mall"
          };
        }
        return parsed;
      }
      catch (e) {
        console.error("Logo Error", e)
      }
    }
    return {
      logoUrl: logo,
      companyName: "Security Plus",
      companySuffix: "CCTV Mall"
    };
  });

  const [inquiryList, setInquiryList] = useState(() => {
    const saved = localStorage.getItem("spe_inquiry_list");
    if (saved) {
      try {
        return JSON.parse(saved);
      }
      catch (e) {
        return [];
      }
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem("spe_inquiry_list", JSON.stringify(inquiryList));
  }, [inquiryList]);
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [socialLinks, setSocialLinks] = useState(() => {
    const saved = localStorage.getItem("spe_social_links");
    if (saved)
      return JSON.parse(saved);
    return {
      twitter: "https://twitter.com/securityPlusCCT",
      facebook: "https://facebook.com/securitypluselectroncis",
      linkedin: "https://linkedin.com/securitypluselectronics"
    };
  });

  const [testimonials, setTestimonials] = useState(TESTIMONIALS_DATA);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [adminEmails, setAdminEmails] = useState(() => {
    const saved = localStorage.getItem("spe_admin_emails");
    if (saved)
      return JSON.parse(saved);
    return ["info@securityplus.in", "admin@securityplus.in", "developer@securityplus.in"];
  });
  const [adminPasscodeVal, setAdminPasscodeVal] = useState(() => {
    return localStorage.getItem("spe_admin_passcode") || "admin123";
  });
  const [isAdminMode, setIsAdminMode] = useState(() => {
    const wasAdmin = localStorage.getItem("spe_admin_mode") === "true";
    const savedUser = localStorage.getItem("spe_customer_user");
    const savedAdminEmails = localStorage.getItem("spe_admin_emails");
    if (wasAdmin && savedUser) {
      try {
        const parsedUser = JSON.parse(savedUser);
        const emails = savedAdminEmails ? JSON.parse(savedAdminEmails) : ["info@securityplus.in", "admin@securityplus.in"];
        if (parsedUser && parsedUser.email && emails.map(e => e.toLowerCase()).includes(parsedUser.email.toLowerCase())) {
          return true;
        }
      }
      catch (e) {
        console.error(e)
      }
    }
    return false;
  });
  useEffect(() => {
    localStorage.setItem("spe_admin_emails", JSON.stringify(adminEmails));
  }, [adminEmails]);
  useEffect(() => {
    localStorage.setItem("spe_admin_passcode", adminPasscodeVal);
  }, [adminPasscodeVal]);

  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState("");
  const [adminError, setAdminError] = useState("");
  const [accountDropdownOpen, setAccountDropdownOpen] = useState(false);
  const [dropdownSubView, setDropdownSubView] = useState("main");
  const accountRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileHamburgerRef = useRef(null);

  useEffect(() => {
    if (!accountDropdownOpen) {
      setDropdownSubView("main");
    }
  }, [accountDropdownOpen]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (accountRef.current && !accountRef.current.contains(event.target)) {
        setAccountDropdownOpen(false);
      }
      if (mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        mobileHamburgerRef.current &&
        !mobileHamburgerRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const [supportTickets, setSupportTickets] = useState(() => {
    const saved = localStorage.getItem("spe_support_tickets");
    if (saved)
      return JSON.parse(saved);
    return [
      {
        id: "SPE-TKT-312984",
        name: "Security Manager",
        company: "Nagpur Tech Corp",
        email: "info@securityplus.in",
        phone: "08048102415",
        department: "technical",
        message: "Need assistance setting up magnetic latch relay. Currently 12V output drops during load cycle.",
        date: "2026-06-30",
        status: "Open",
        assignedTo: "Sandeep Agnihotri",
        notes: ["Ticket generated automatically on submission.", "Sandeep Agnihotri assigned to SLA priority 2."]
      },
      {
        id: "SPE-TKT-581902",
        name: "Vinay Shinde",
        company: "Nagpur Smart Warehouse",
        email: "v.shinde@nagpurwarehouse.com",
        phone: "+91 99321 00412",
        department: "billing",
        message: "Looking to expand showroom camera systems. We need 15 units of Hikvision 4K IP Dome cameras with PoE switches.",
        date: "2026-06-29",
        status: "Assigned",
        assignedTo: "Manoj Kulkarni",
        notes: ["Quote sent for 15 units + installation services."]
      },
      {
        id: "SPE-TKT-918231",
        name: "Anjali Sharma",
        company: "Dharampeth Retail Mall",
        email: "contact@dharampethmall.co.in",
        phone: "+91 90211 43210",
        department: "sales",
        message: "Scheduled inspection of existing Biometric Gateway readers.",
        date: "2026-06-28",
        status: "Resolved",
        assignedTo: "Prateek Deshpande",
        notes: ["Gateway firmware updated. Readers validated at < 0.2s speed."]
      }
    ];
  });
  const [careerApplications, setCareerApplications] = useState(() => {
    const saved = localStorage.getItem("spe_career_apps");
    if (saved)
      return JSON.parse(saved);
  });

  useEffect(() => {
    localStorage.setItem("spe_support_tickets", JSON.stringify(supportTickets));
  }, [supportTickets]);
  useEffect(() => {
    localStorage.setItem("spe_career_apps", JSON.stringify(careerApplications));
  }, [careerApplications]);
  useEffect(() => {
    localStorage.setItem("spe_admin_mode", String(isAdminMode));
  }, [isAdminMode]);
  useEffect(() => {
    localStorage.setItem("spe_product_categories", JSON.stringify(productCategories));
  }, [productCategories]);
  useEffect(() => {
    localStorage.setItem("spe_products_catalog", JSON.stringify(products));
  }, [products]);
  useEffect(() => {
    localStorage.setItem("spe_contact_data", JSON.stringify(contactData));
  }, [contactData]);
  useEffect(() => {
    localStorage.setItem("spe_logo_data", JSON.stringify(logoData));
  }, [logoData]);
  useEffect(() => {
    localStorage.setItem("spe_social_links", JSON.stringify(socialLinks));
  }, [socialLinks]);

  // Global hotkey event listener (Ctrl + Alt + Shift + A)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.altKey && e.shiftKey && e.key.toLowerCase() === "a") {
        e.preventDefault();
        setAdminLoginOpen(true);
        setAdminError("");
        setAdminPasscode("");
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        if (selectedBlog) {
          setSelectedBlog(null);
        }
        if (showroomModalOpen) {
          setShowroomModalOpen(false);
        }
        if (selectedProductForQuickView) {
          setSelectedProductForQuickView(null);
        }
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedBlog, showroomModalOpen, selectedProductForQuickView]);

  useEffect(() => {
    if (selectedProductForQuickView) {
      setSelectedProductForQuickView(null)
    }
    if (selectedBlog) {
      setSelectedBlog(null)
    }
    if (showroomModalOpen) {
      setShowroomModalOpen(false)
    }
    setTimeout(() => {
      setToastMessage(null)
    }, 2000);
  }, [toastMessage])


  if (isAdminMode) {
    return (<AdminPanel onExit={() => setIsAdminMode(false)} supportTickets={supportTickets} setSupportTickets={setSupportTickets} careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} products={products} setProducts={setProducts} productCategories={productCategories} setProductCategories={setProductCategories} contactData={contactData} setContactData={setContactData} logoData={logoData} setLogoData={setLogoData} socialLinks={socialLinks} setSocialLinks={setSocialLinks} reels={reels} setReels={setReels} adminEmails={adminEmails} setAdminEmails={setAdminEmails} adminPasscodeVal={adminPasscodeVal} setAdminPasscodeVal={setAdminPasscodeVal} />);
  }







  return (
    <>
      <Header wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} adminEmails={adminEmails} setAdminLoginOpen={setAdminLoginOpen} setToastMessage={setToastMessage} PRODUCTS={PRODUCTS} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />

      <SEOManager />

      <main className={location.pathname === "/" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>
        <Routes>
          <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Hero heroSlideIndex={heroSlideIndex} setHeroSlideIndex={setHeroSlideIndex} setShowroomModalOpen={setShowroomModalOpen} setBookingConfirmed={setBookingConfirmed} />

            <BrandCarousel />
            <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} />
            <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} showroomScanStatus={showroomScanStatus} setShowroomScanStatus={setShowroomScanStatus} activeShowroomHotspot={activeShowroomHotspot} setActiveShowroomHotspot={setActiveShowroomHotspot} setToastMessage={setToastMessage} setShowroomModalOpen={setShowroomModalOpen} />
            <ReelSection />

            <motion.section {...fadeInUp} className="py-24 px-8 relative z-20 border-b border-slate-100 bg-slate-50">
              <div className="max-w-4xl mx-auto text-center">
                <span className="font-sans font-bold text-[10px] text-primary tracking-widest uppercase block mb-3">OUR VISION &amp; SLA VALUES</span>
                <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 uppercase">Our Vision &amp; Mission</h2>
                <div className="h-0.5 w-20 bg-primary mx-auto mb-8"></div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Deliver innovative, reliable, and complete security solutions with exceptional customer support. We custom-engineer systems that protect Nagpur's leading commercial, financial, and industrial properties with absolute technological integrity.
                </p>
              </div>
            </motion.section>

            <ScrollableTestimonials />
            {/* <OurThought /> */}
            <OurBlogs setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />
            {/* <OurLocation contactData={contactData} /> */}
            <FAQSection />
          </motion.div>} />

          <Route path="/about" Component={AboutUs} />
          <Route path="/termandcondition" Component={TermsAndConditions} />
          <Route path="/gallary" element={<Gallery setLightboxIndex={setLightboxIndex} galleryItems={GALLERY_ITEMS} />} />
          <Route path="/contact" element={<ContactUs logoData={logoData} setSupportTickets={setSupportTickets} setToastMessage={setToastMessage} />} />
          <Route path="/career" element={<Careers careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />} />
          <Route path="/products" element={<Products products={products} productCategories={productCategories} customerUser={customerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setCurrentPage={setCurrentPage} currentPage={currentPage} setSelectedProductForQuickView={setSelectedProductForQuickView} />} />
          <Route path="/testimonial" element={<TestimonialsPage testimonials={testimonials} setTestimonials={setTestimonials} setToastMessage={setToastMessage} />} />
          <Route path="/blogs" element={<Blogs setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />} />
          <Route path="/login" element={<AuthSection isLogin={true} registeredCustomers={registeredCustomers} setRegisteredCustomers={setRegisteredCustomers} setCustomerUser={setCustomerUser} setToastMessage={setToastMessage} />} />
          <Route path="/register" element={<AuthSection isLogin={false} registeredCustomers={registeredCustomers} setRegisteredCustomers={setRegisteredCustomers} setCustomerUser={setCustomerUser} setToastMessage={setToastMessage} />} />
        </Routes>
      </main>

      <AnimatePresence>
        {selectedProductForQuickView &&
          <QuickProductView selectedProductForQuickView={selectedProductForQuickView} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} setInquiryList={setInquiryList} inquiryList={inquiryList} />
        }
      </AnimatePresence>

      {/* Toast View */}
      <AnimatePresence>
        {toastMessage && (<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 w-auto md:w-120 bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-slate-800 flex items-start gap-3 shadow-2xl">
          <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5 animate-pulse" />
          <div className="flex-1 min-w-0">
            <span className="font-mono font-bold text-[9px] tracking-widest text-sky-400 uppercase block">SYSTEM SENTINEL GUARD</span>
            <p className="text-[11px] text-slate-300 leading-normal mt-0.5 wrap-break-wordbreak">{toastMessage}</p>
          </div>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white shrink-0 cursor-pointer p-0.5">
            <X className="h-3.5 w-3.5" />
          </button>
        </motion.div>)}
      </AnimatePresence>

      {/* quick view Blog modal */}
      <AnimatePresence>
        {selectedBlog &&
          <QuickBlogVIew setSelectedBlog={setSelectedBlog} selectedBlog={selectedBlog} setToastMessage={setToastMessage} />
        }
      </AnimatePresence>

      {/* Showroom Modal */}
      <AnimatePresence >
        {showroomModalOpen &&
          <ShowroomExperience setShowroomModalOpen={setShowroomModalOpen} />
        }
      </AnimatePresence >

      <Footer logoData={logoData} />
    </>
  )
}
export default App;
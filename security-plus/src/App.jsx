import "./index.css";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { wordpressCredentials } from "./main"
import { SERVER } from "./utils/Constant";
import { X, Sparkles, Eye, Twitter, Linkedin, Facebook, Share2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Route, Routes, useLocation } from "react-router-dom"
import { ToastContainer } from "react-toastify"
import { SEOManager } from "./components/SEOManager";
import logo from "./assets/images/logo.png";

import BrandCarousel from "./components/BrandCarousel";
import { Header } from "./components/Header";
import { ProductCategories } from "./components/section/ProductCategories";
import { VirtualShowroom } from "./components/VirtualShowroom";

// Import pages
import { ScrollableTestimonials, OurThought, OurBlogs, FAQSection, CorporateContactForm, OurLocation } from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import Products from "./pages/Products";
import TermsAndConditions from "./pages/TermAndCondition";

// Import modular section page
import Hero from "./components/Hero";
import { Testimonials as TestimonialsPage } from "./components/Testimonials";
import Gallery from "./pages/Gallery";
import { AuthSection } from "./components/AuthSection";
import Footer from "./components/Footer";
import ReelSection from "./components/section/ReelSection";

// iport madels quick view   
import QuickProductView from "./components/modal/QuickProductView";
import ShowroomExperience from "./components/modal/ShowroomExperience";
import QuickBlogVIew from "./components/modal/QuickBlogVIew";

// JSON file to fetch data
import TESTIMONIALS_DATA from "./json/testimonials.json"
import PRODUCTS from "./json/wooProducts.json"
import GALLERY_ITEMS from "./json/gallary.json"
import { useAuth } from "./context/AuthContext";

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};
// const fadeIn = {
//   initial: { opacity: 0 },
//   whileInView: { opacity: 1 },
//   viewport: { once: true, margin: "-100px" },
//   transition: { duration: 0.8, ease: "easeOut" }
// };

function App() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showroomModalOpen, setShowroomModalOpen] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

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

  const [productCategories, setProductCategories] = useState([{}]);

  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("spe_products_catalog");
    if (saved)
      return JSON.parse(saved);
    return PRODUCTS.map(p => ({ ...p }));
  });

  useEffect(() => {
    const fetchProducts = async () => {
      await axios.get(`https://woston.in/wp-json/wc/store/v1/products?per_page=12&page=${currentPage}`).then(res => {
        setProducts(res.data);
        const categoryMap = new Map();
        products.forEach(product => {
          if (!Array.isArray(product.categories)) return;

          product.categories.forEach(category => {
            const categoryId = category.id;

            if (!categoryMap.has(categoryId)) {
              categoryMap.set(categoryId, {
                ...category,
                productCount: 1
              });
            } else {
              categoryMap.get(categoryId).productCount += 1;
            }
          });
        });

        const commonCategories = Array.from(categoryMap.values())
          .filter(category => category.productCount > 1);

        const uniqueCategories = Array.from(categoryMap.values())
          .filter(category => category.productCount === 1);

        const allCategories = [
          ...commonCategories,
          ...uniqueCategories
        ];

        const parentCategoryMap = new Map();

        allCategories.forEach(category => {
          const categoryName = category.name.toLowerCase();
          const categorySlug = category.slug?.toLowerCase() || "";

          let parentName;
          let parentSlug;

          if (
            /cameras|camera|cctv/.test(categoryName) ||
            /camera|4g|ip|hd/.test(categorySlug)
          ) {
            parentName = "CCTV Camera";
            parentSlug = "cctv";
          } else if (
            /video|dvr|nvr|xvr/.test(categoryName) ||
            /video|dvr|nvr|xvr/.test(categorySlug)
          ) {
            parentName = "Video Recorder";
            parentSlug = "video-recorder";
          } else if (
            /cable|cables/.test(categoryName) ||
            /cable|cables/.test(categorySlug)
          ) {
            parentName = "Cables";
            parentSlug = "cables";
          } else if (
            /ups|smps|adapter|power supply/.test(categoryName) ||
            /ups|smps|adapter|power/.test(categorySlug)
          ) {
            parentName = "Power Supply";
            parentSlug = "power-supply";
          } else if (
            /rack|accessories|housing|caccessories/.test(categoryName) ||
            /rack|accessories|housing/.test(categorySlug)
          ) {
            parentName = "Accessories";
            parentSlug = "accessories";
          } else if (
            /switch/.test(categoryName) ||
            /switch|poe/.test(categorySlug)
          ) {
            parentName = "POE Switch";
            parentSlug = "poe-switch";
          } else if (
            /keyboard|mouse|monitor|router/.test(categoryName) ||
            /keyboard|mouse|monitor|router/.test(categorySlug)
          ) {
            parentName = "IT Devices";
            parentSlug = "it-devices";
          } else {
            parentName = "Others";
            parentSlug = "others";
          }

          if (!parentCategoryMap.has(parentSlug)) {
            parentCategoryMap.set(parentSlug, {
              name: parentName,
              slug: parentSlug,
              productCount: category.productCount,
              subCategories: [category]
            });
          } else {
            const existing = parentCategoryMap.get(parentSlug);

            existing.productCount += category.productCount;
            existing.subCategories.push(category);
          }
        });
        setProductCategories(Array.from(parentCategoryMap.values()))
      }).catch(e => console.error(e))
    }
    fetchProducts();
  }, [currentPage]);

  const [contactData, setContactData] = useState(() => {
    const saved = localStorage.getItem("spe_contact_data");
    return saved ? JSON.parse(saved) : [];
  });

  const [logoData, setLogoData] = useState(() => {
    const saved = localStorage.getItem("spe_logo_data");
    return saved ? JSON.parse(saved) : [];
  });

  const [inquiryList, setInquiryList] = useState(() => {
    const saved = localStorage.getItem("spe_inquiry_list");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("spe_inquiry_list", JSON.stringify(inquiryList));
  }, [inquiryList]);

  const [showroomExperience, setShowroomExperience] = useState(() => {
    const saved = localStorage.getItem("spe_showroom_experience_list");
    return saved ? JSON.parse(saved) : [];
  });
  useEffect(() => {
    localStorage.setItem("spe_showroom_experience_list", JSON.stringify(inquiryList));
  }, [inquiryList]);
  const [selectedProductForQuickView, setSelectedProductForQuickView] = useState(null);
  const [isInquiryDrawerOpen, setIsInquiryDrawerOpen] = useState(false);
  const [loadedImages, setLoadedImages] = useState({});
  const [testimonials, setTestimonials] = useState(TESTIMONIALS_DATA);
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

  const [careerApplications, setCareerApplications] = useState(() => {
    const saved = localStorage.getItem("spe_career_apps");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("spe_career_apps", JSON.stringify(careerApplications));
  }, [careerApplications]);
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

  return (
    <>
      <Header wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} setToastMessage={setToastMessage} PRODUCTS={PRODUCTS} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />

      <SEOManager />
      <main className={location.pathname === "/" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>
        <Routes>
          <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Hero heroSlideIndex={heroSlideIndex} setShowroomExperience={setShowroomExperience} setHeroSlideIndex={setHeroSlideIndex} setShowroomModalOpen={setShowroomModalOpen} setBookingConfirmed={setBookingConfirmed} />

            <BrandCarousel />
            <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} />
            {/* <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} setToastMessage={setToastMessage} setShowroomModalOpen={setShowroomModalOpen} /> */}
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
          <Route path="/gallary" element={<Gallery galleryItems={GALLERY_ITEMS} />} />
          <Route path="/contact" element={<ContactUs setContactData={setContactData} logoData={logoData} setToastMessage={setToastMessage} />} />
          <Route path="/career" element={<Careers careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />} />
          <Route path="/products" element={<Products products={products} setInquiryList={setInquiryList} setProductCategories={setProductCategories} productCategories={productCategories} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setCurrentPage={setCurrentPage} currentPage={currentPage} setSelectedProductForQuickView={setSelectedProductForQuickView} />} />
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
          <ShowroomExperience setShowroomExperience={setShowroomExperience} showroomExperience={showroomExperience} setToastMessage={setToastMessage} setShowroomModalOpen={setShowroomModalOpen} />
        }
      </AnimatePresence >

      <Footer logoData={logoData} />
    </>
  )
}
export default App;
import "./index.css";
import React, { useState, useEffect, useRef, lazy, Suspense } from "react";
import axios from "axios";
import { X, Sparkles, Image } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { SEOManager } from "./components/SEOManager";
const logo = lazy(() => import("./assets/images/logo.avif"))

const BrandCarousel = lazy(() => import("./components/BrandCarousel"))
// const VirualShowroom = lazy(() => import("./components/VirtualShowroom"))
const ProductCategories = lazy(() => import("./components/section/ProductCategories"))

// Import pages
const AboutUs = lazy(() => import("./pages/AboutUs.jsx"));
const ContactUs = lazy(() => import("./pages/ContactUs.jsx"));
const Careers = lazy(() => import("./pages/Careers.jsx"));
const Blogs = lazy(() => import("./pages/Blogs.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const TermsAndConditions = lazy(() => import("./pages/TermAndCondition.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));

// Import modular section page
import Header from "./components/Header";
import Hero from "./components/Hero.jsx";
const Testimonials = lazy(() => import("./components/Testimonials.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));
const ReelSection = lazy(() => import("./components/section/ReelSection.jsx"));
const QuickProductView = lazy(() => import("./components/modal/QuickProductView.jsx"));
const ShowroomExperience = lazy(() => import("./components/modal/ShowroomExperience.jsx"));
const QuickBlogVIew = lazy(() => import("./components/modal/QuickBlogVIew.jsx"));
const ScrollableTestimonials = lazy(() => import("./components/section/ScrollableTestimonials.jsx"));
const OurThought = lazy(() => import("./components/section/OurThought.jsx"));
const FAQSection = lazy(() => import("./components/section/FAQSection.jsx"));
const OurBlogs = lazy(() => import("./components/section/OurBlogs.jsx"));
const OurLocation = lazy(() => import("./components/section/OurLocation.jsx"));

// JSON file to fetch data
import TESTIMONIALS_DATA from "./json/testimonials.json"
import GALLERY_ITEMS from "./json/gallary.json"
import NotFound from "./pages/NotFound.jsx";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: {
    duration: 0.4
  }
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

  const [toastMessage, setToastMessage] = useState(null);

  const [registeredCustomers, setRegisteredCustomers] = useState(() => {
    const saved = localStorage.getItem("spe_registered_customers");
    if (saved)
      return JSON.parse(saved);
    return [
      { name: "Security Manager", email: "info@securityplus.in", phone: "08048102415", password: "customer123" }
    ];
  });


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





  const toggleWishlist = (productId) => {
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
  });


  useEffect(() => {
    if (location.pathname !== "/products") return;

    const controller = new AbortController();

    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://woston.in/wp-json/wc/store/v1/products",
          {
            params: {
              per_page: 12,
              page: currentPage,
            },
            signal: controller.signal,
            timeout: 10000,
          }
        );

        const freshProducts = response.data;

        setProducts(freshProducts);

        // Process categories here
      } catch (error) {
        if (error.code === "ERR_CANCELED") return;

        console.error(error);
      }
    };

    fetchProducts();

    return () => controller.abort();
  }, [currentPage, location.pathname]);
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
    if (!products?.length) return;

    const timer = setTimeout(() => {
      localStorage.setItem(
        "spe_products_catalog",
        JSON.stringify(products)
      );
    }, 500);

    return () => clearTimeout(timer);
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
    if (!toastMessage) return;

    const timer = setTimeout(() => {
      setToastMessage(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [toastMessage])


  return (
    <>
      <Header wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />

      {/* <SEOManager /> */}
      <main className={location.pathname === "/" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<motion.div {...fadeIn} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Hero heroSlideIndex={heroSlideIndex} setShowroomExperience={setShowroomExperience} setHeroSlideIndex={setHeroSlideIndex} setShowroomModalOpen={setShowroomModalOpen} setBookingConfirmed={setBookingConfirmed} />

              <Suspense fallback={<div className="min-h-[200px]" />}>
                <BrandCarousel />
              </Suspense>

              <Suspense fallback={<div className="min-h-[80vh]" />}>
                <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} />
              </Suspense>
              {/* <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} setToastMessage={setToastMessage} setShowroomModalOpen={setShowroomModalOpen} /> */}
              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <ReelSection />
              </Suspense>
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


              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <ScrollableTestimonials />
              </Suspense>

              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <OurThought />
              </Suspense>

              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <OurLocation contactData={contactData} />
              </Suspense>

              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <FAQSection />
              </Suspense>
            </motion.div>} />

            <Route path="/about" Component={AboutUs} />
            <Route path="/termandcondition" Component={TermsAndConditions} />
            <Route path="/gallary" element={<Gallery galleryItems={GALLERY_ITEMS} />} />
            <Route path="/contact" element={<ContactUs setContactData={setContactData} logoData={logoData} setToastMessage={setToastMessage} />} />
            <Route path="/career" element={<Careers careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />} />
            <Route path="/products" element={<Products products={products} setInquiryList={setInquiryList} setProductCategories={setProductCategories} productCategories={productCategories} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setCurrentPage={setCurrentPage} currentPage={currentPage} setSelectedProductForQuickView={setSelectedProductForQuickView} />} />
            <Route path="/testimonial" element={<Testimonials testimonials={testimonials} setTestimonials={setTestimonials} setToastMessage={setToastMessage} />} />
            <Route path="/blogs" element={<Blogs setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />} />
            <Route path="/*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Suspense fallback={<div className="min-h-[100vh]" />}>
        <AnimatePresence>
          {selectedProductForQuickView &&
            <QuickProductView selectedProductForQuickView={selectedProductForQuickView} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} setInquiryList={setInquiryList} inquiryList={inquiryList} />
          }
        </AnimatePresence>
        {/* Toast View */}
      </Suspense>
      <Suspense fallback={<div className="min-h-[100vh]" />}>
        <AnimatePresence>
          {toastMessage && (<motion.div {...fadeInUp} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 w-auto md:w-120 bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-slate-800 flex items-start gap-3 shadow-2xl">
            <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5 animate-pulse" />
            <div className="flex-1 min-w-0">
              <span className="font-mono font-bold text-[9px] tracking-widest text-sky-400 uppercase block">SYSTEM SENTINEL GUARD</span>
              <p className="text-[11px] text-slate-300 leading-normal mt-0.5 wrap-break-wordbreak">{toastMessage}</p>
            </div>
            <button id="closeBtn" aria-label="Close Button" onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white shrink-0 cursor-pointer p-0.5">
              <X className="h-3.5 w-3.5" />
            </button>
          </motion.div>)}
        </AnimatePresence>
        {/* quick view Blog modal */}
      </Suspense>
      <Suspense fallback={<div className="min-h-[100vh]" />}>
        <AnimatePresence>
          {selectedBlog &&
            <QuickBlogVIew setSelectedBlog={setSelectedBlog} selectedBlog={selectedBlog} setToastMessage={setToastMessage} />
          }
        </AnimatePresence>
        {/* Showroom Modal */}
      </Suspense>
      <Suspense fallback={<div className="min-h-[100vh]" />}>
        <AnimatePresence >
          {showroomModalOpen &&
            <ShowroomExperience setShowroomExperience={setShowroomExperience} showroomExperience={showroomExperience} setToastMessage={setToastMessage} setShowroomModalOpen={setShowroomModalOpen} />
          }
        </AnimatePresence >
      </Suspense>

      <Suspense fallback={<div className="min-h-[300px]" />}>
        <Footer logoData={logoData} />
      </Suspense>
    </>
  )
}
export default App;
import React, { useState, useEffect, useRef } from "react";
import { Video, Cpu, Router, BatteryCharging, LockKeyhole, Home, Building, HeartPulse, Briefcase, Factory, ChevronRight, X, Send, Sparkles, Calculator, Calendar, ArrowRight, ShieldCheck, Check, Loader2, Menu, MapPin, Globe, User, HardDrive, Terminal, Zap, Fingerprint, Scan, Key, AlertTriangle, Play, Pause, Eye, Network, RefreshCw, CheckCircle2, Ticket, ShoppingBag, ExternalLink, Printer, Twitter, Linkedin, Facebook, Share2, Link, Volume2, VolumeX, Heart, Plus, Trash2, ClipboardList, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SOLUTIONS_DATA, SECTORS_DATA, QUICK_QUESTIONS, TESTIMONIALS_DATA, PRODUCTS_DATA } from "./data";
import logo from "./assets/images/logo.png";
import cctvHeroBg from "./assets/images/sky_blue_hero_bg_1782755439624.jpg";
import cctvCategoryImg from "./assets/images/cctv_category_1782647476026.jpg";
import biometricCategoryImg from "./assets/images/biometric_category_1782647490902.jpg";
import nvrCategoryImg from "./assets/images/nvr_category_1782647503434.jpg";
import networkCategoryImg from "./assets/images/network_category_1782647515140.jpg";
import vdpCategoryImg from "./assets/images/vdp_category_1782647530140.jpg";
import powerCategoryImg from "./assets/images/power_category_1782647544185.jpg";
import speShowroomTour from "./assets/images/spe_showroom_tour_1782789590181.jpg";
import speCultureCollab from "./assets/images/spe_culture_collab_1782789609536.jpg";
import speTrainingClass from "./assets/images/spe_training_class_1782789626461.jpg";
import securityPlusLogo from "./assets/images/security_plus_logo_1783018092399.jpg";
import { ScrollableTestimonials, OurThought, OurBlogs, Careers, FAQSection, CorporateContactForm, OurLocation } from "./components/HomeSections";
import AdminPanel from "./components/AdminPanel";
import { SEOManager } from "./components/SEOManager";
import { getProductImageUrls } from "./components/BlurUpImage";
import BrandCarousel from "./components/BrandCarousel";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ProductCategories } from "./components/ProductCategories";
import { VirtualShowroom } from "./components/VirtualShowroom";
import { SectorsWeProtect } from "./components/SectorsWeProtect";
import { SurveillancePlanner } from "./components/SurveillancePlanner";


// Import modular section pages
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Careers as CareersPage } from "./components/Careers";
import { ProductsCatalog } from "./components/ProductsCatalog";
import { Testimonials as TestimonialsPage } from "./components/Testimonials";
import { BlogSection } from "./components/BlogSection";
import { GallerySection } from "./components/GallerySection";
import { AuthSection } from "./components/AuthSection";
import PRODUCT_CATEGORIES from "./json/productCategories.json"

const GALLERY_ITEMS = [
  {
    id: "gal-1",
    category: "showroom",
    image: speShowroomTour,
    title: "Nagpur Flagship Showroom",
    description: "Central India's premiere retail and enterprise showroom layout, displaying rows of high-performance IP cameras, customized mounting brackets, and recording stacks.",
    location: "DHARAMPETH, NAGPUR",
    isPlaceholder: false
  },
  {
    id: "gal-2",
    category: "culture",
    image: speCultureCollab,
    title: "Collaborative Engineering Workspace",
    description: "Our team of network technicians and software security specialists collaborating on a major commercial layout blueprint design in Nagpur.",
    location: "HQ OFFICE, NAGPUR",
    isPlaceholder: false
  },
  {
    id: "gal-3",
    category: "technical",
    image: speTrainingClass,
    title: "SPE Free Tech Training Academy",
    description: "Instructor showing freshers and students how to plug and configure CCTV camera arrays during a free weekend technical surveillance masterclass.",
    location: "TRAINING WING, NAGPUR",
    isPlaceholder: false
  },
  {
    id: "gal-4",
    category: "technical",
    iconName: "Terminal",
    bgColor: "from-sky-900 to-slate-950",
    title: "Fiber Optic Splicing Board",
    description: "Splicing high-density fiber backbones for Central India commercial grids. Standardizing low latency network relays for robust stream distribution.",
    location: "SURVEILLANCE GRID LAB",
    isPlaceholder: true
  },
  {
    id: "gal-5",
    category: "culture",
    iconName: "ShieldCheck",
    bgColor: "from-indigo-900 to-slate-950",
    title: "Nagpur Safe City Initiative",
    description: "SPE engineering leaders organizing local community panels to explain biometric data compliance and CCTV system integrity to local Nagpur associations.",
    location: "NAGPUR COMMUNITY OUTREACH",
    isPlaceholder: true
  },
  {
    id: "gal-6",
    category: "showroom",
    iconName: "Video",
    bgColor: "from-emerald-900 to-slate-950",
    title: "Live Demo Diagnostic Wall",
    description: "Our showroom demo panel mounting the latest F1.0 full-color low-light cameras, coaxial power supply configurations, and network switches.",
    location: "SPE MALL WING B",
    isPlaceholder: true
  }
];
// Global Scroll Animation Presets for consistency
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
const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12
    }
  },
  viewport: { once: true, margin: "-100px" }
};
const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
};

export default function App() {
  // Mobile menu state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // High-contrast accessibility theme state
  const [isLightMode, setIsLightMode] = useState(false);
  // Chat panel state
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content: "Hello! I am SPE Sentinel, your dedicated AI Security Assistant. I can help you select security setups, calculate storage space, explain AI cameras, or draft a layout for your premises. How can I protect you today?"
    }
  ]);
  const [userInput, setUserInput] = useState("");
  const [chatLoading, setChatLoading] = useState(false);
  const chatBottomRef = useRef(null);
  // Modal active states
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [showroomModalOpen, setShowroomModalOpen] = useState(false);
  // Solutions Modals Interactive Simulator parameters
  const [cctvRes, setCctvRes] = useState("4K");
  const [cctvNightMode, setCctvNightMode] = useState(false);
  const [cctvFps, setCctvFps] = useState(30);
  // AI Simulator state
  const [aiActiveScan, setAiActiveScan] = useState(null);
  const [aiScanLogs, setAiScanLogs] = useState([
    "System booted.",
    "Optical feeds synchronized on Layer 3 network."
  ]);
  // Power Backup Simulator State
  const [powerCamCount, setPowerCamCount] = useState(8);
  const [powerBackupHours, setPowerBackupHours] = useState(4);
  // Smart Lock Biometric simulator state
  const [lockStatus, setLockStatus] = useState("idle");
  const [selectedLockMethod, setSelectedLockMethod] = useState("fingerprint");
  // Showroom Booking state
  const [bookingForm, setBookingForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    sector: "residential"
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingTicket, setBookingTicket] = useState(null);
  // Showroom interactive tour state
  const [activeShowroomHotspot, setActiveShowroomHotspot] = useState(null);
  const [showroomScanStatus, setShowroomScanStatus] = useState("idle");
  // Main Sizing Calculator State
  const [calcInput, setCalcInput] = useState({
    premisesType: "home",
    areaSizeSqFt: 1500,
    indoorCams: 4,
    outdoorCams: 2,
    resolution: "4K",
    retentionDays: 30,
    continuousRecording: true
  });
  const [calcResult, setCalcResult] = useState(null);
  // Active Alert Toast message (simulated security intelligence notification)
  const [toastMessage, setToastMessage] = useState(null);
  // Active Tab state: "home" | "ecosystem" | "testimonials" | "blog" | "about" | "contact" | "products" | "gallery" | "careers" | "login" | "signup"
  const [activeTab, setActiveTab] = useState("home");
  // Customer Account States
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
  // Wishlist State (holds product IDs of wishlisted items for the logged-in customer)
  const [wishlist, setWishlist] = useState(() => {
    const savedUser = localStorage.getItem("spe_customer_user");
    const user = savedUser ? JSON.parse(savedUser) : null;
    if (user && user.email) {
      const saved = localStorage.getItem(`spe_wishlist_${user.email}`);
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  // Keep wishlist in sync with logged-in user
  useEffect(() => {
    if (customerUser && customerUser.email) {
      const saved = localStorage.getItem(`spe_wishlist_${customerUser.email}`);
      setWishlist(saved ? JSON.parse(saved) : []);
    }
    else {
      setWishlist([]);
    }
  }, [customerUser]);
  // Save wishlist changes
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
  // Login Form States
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isForgotPasswordMode, setIsForgotPasswordMode] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState("");
  const [forgotPasswordError, setForgotPasswordError] = useState("");
  // Signup Form States
  const [signUpName, setSignUpName] = useState("");
  const [signUpEmail, setSignUpEmail] = useState("");
  const [signUpPhone, setSignUpPhone] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState("");
  const [signUpError, setSignUpError] = useState("");
  // Hero Interactive 3D CCTV State
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const handleHeroMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroMouse({ x, y });
  };
  const handleHeroMouseLeave = () => {
    setHeroMouse({ x: 0, y: 0 });
  };
  // Hero Auto-playing Carousel State
  const [heroSlideIndex, setHeroSlideIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlideIndex((prev) => (prev + 1) % 6);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  // Dynamic Product, Category, Branding and Contacts management states
  const [productCategories, setProductCategories] = useState(() => {
    const saved = localStorage.getItem("spe_product_categories");
    if (saved)
      return JSON.parse(saved);
    return ["CCTV Cameras", "Biometric Access", "NVR Storage", "Networking Backbone", "Power Backup"];
  });
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("spe_products_catalog");
    if (saved)
      return JSON.parse(saved);
    return PRODUCTS_DATA.map(p => {
      let mappedCat = p.category;
      if (p.category === "Smart Locks & Biometrics" || p.category === "Video Door Phones")
        mappedCat = "Biometric Access";
      else if (p.category === "DVRs & NVRs")
        mappedCat = "NVR Storage";
      else if (p.category === "PoE Switches" || p.category === "Networking")
        mappedCat = "Networking Backbone";
      else if (p.category === "Cables & Power")
        mappedCat = "Power Backup";
      return { ...p, category: mappedCat };
    });
  });
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
            companyName: "Security Plus Electronics",
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
      companyName: "Security Plus Electronics ii",
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
  // Performance-optimized lazy loading states
  const [loadedImages, setLoadedImages] = useState({});
  const [visibleReels, setVisibleReels] = useState({});
  const [bufferingReels, setBufferingReels] = useState({});
  const [socialLinks, setSocialLinks] = useState(() => {
    const saved = localStorage.getItem("spe_social_links");
    if (saved)
      return JSON.parse(saved);
    return {
      twitter: "https://twitter.com",
      facebook: "https://facebook.com",
      linkedin: "https://linkedin.com"
    };
  });
  const [reels, setReels] = useState(() => {
    const saved = localStorage.getItem("spe_reels_catalog");
    if (saved)
      return JSON.parse(saved);
    return [
      {
        id: "reel-1",
        title: "AI Security Camera Patrol",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-security-camera-looking-around-42862-large.mp4",
        category: "CCTV Cameras",
        views: "12.4K",
        likes: 1420
      },
      {
        id: "reel-2",
        title: "Next-Gen Fingerprint Biometrics",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-scanning-a-fingerprint-on-a-digital-reader-42358-large.mp4",
        category: "Biometric Access",
        views: "8.1K",
        likes: 932
      },
      {
        id: "reel-3",
        title: "Installing Professional 4K CCTV",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-technician-installing-a-security-camera-42864-large.mp4",
        category: "CCTV Cameras",
        views: "15.9K",
        likes: 2110
      },
      {
        id: "reel-4",
        title: "Smart Door Lock Integration",
        videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-opening-a-door-with-a-fingerprint-scanner-42359-large.mp4",
        category: "Biometric Access",
        views: "6.5K",
        likes: 804
      }
    ];
  });
  const [playingReels, setPlayingReels] = useState({});
  const [mutedReels, setMutedReels] = useState({
    "reel-1": true,
    "reel-2": true,
    "reel-3": true,
    "reel-4": true
  });
  const [userInteractedReels, setUserInteractedReels] = useState({});
  const togglePlayPause = (reelId) => {
    // Mark as manually interacted
    setUserInteractedReels(prev => ({ ...prev, [reelId]: true }));
    // Ensure marked as visible to load the source
    setVisibleReels(prev => ({ ...prev, [reelId]: true }));
    const videoEl = document.getElementById(`video-${reelId}`);
    if (videoEl) {
      if (!videoEl.src) {
        const reel = reels.find(r => r.id === reelId);
        if (reel) {
          videoEl.src = reel.videoUrl;
        }
      }
      if (videoEl.paused) {
        // Pause other playing videos
        reels.forEach(r => {
          if (r.id !== reelId) {
            const otherVideo = document.getElementById(`video-${r.id}`);
            if (otherVideo) {
              otherVideo.pause();
            }
          }
        });
        videoEl.play().catch(err => console.log("Video play error:", err));
        setPlayingReels(() => {
          const newState = {};
          reels.forEach(r => {
            newState[r.id] = r.id === reelId;
          });
          return newState;
        });
      }
      else {
        videoEl.pause();
        setPlayingReels(prev => ({ ...prev, [reelId]: false }));
      }
    }
  };
  // Intersection Observer for autoplay and source lazy loading
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window))
      return;
    const observerOptions = {
      root: null, // viewport
      rootMargin: "150px 0px", // Give a buffer of 150px to start loading video early
      threshold: [0.05, 0.6], // 5% for loading source, 60% for active playback
    };
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const videoEl = entry.target;
        const reelId = videoEl.id.replace("video-", "");
        if (entry.isIntersecting) {
          // Load video source when it starts entering viewport
          if (entry.intersectionRatio >= 0.05) {
            setVisibleReels(prev => ({ ...prev, [reelId]: true }));
          }
          // Active playback when highly visible (>= 60%)
          if (entry.intersectionRatio >= 0.6) {
            if (!userInteractedReels[reelId]) {
              // Pause other videos
              reels.forEach(r => {
                if (r.id !== reelId) {
                  const otherVideo = document.getElementById(`video-${r.id}`);
                  if (otherVideo && !otherVideo.paused) {
                    otherVideo.pause();
                    setPlayingReels(prev => ({ ...prev, [r.id]: false }));
                  }
                }
              });
              // Play video if it has src and is ready, otherwise play will be handled by onCanPlay
              if (videoEl.src) {
                videoEl.play()
                  .then(() => {
                    setPlayingReels(prev => ({ ...prev, [reelId]: true }));
                  })
                  .catch(err => {
                    console.log("Autoplay blocked or waiting for source:", err);
                  });
              }
            }
          }
          else {
            // If visibility drops below 60%, pause if it hasn't been manually interacted with
            if (!videoEl.paused && !userInteractedReels[reelId]) {
              videoEl.pause();
              setPlayingReels(prev => ({ ...prev, [reelId]: false }));
            }
          }
        }
        else {
          // Completely out of viewport
          if (!videoEl.paused && !userInteractedReels[reelId]) {
            videoEl.pause();
            setPlayingReels(prev => ({ ...prev, [reelId]: false }));
          }
        }
      });
    };
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    // Observe each video element
    reels.forEach((reel) => {
      const el = document.getElementById(`video-${reel.id}`);
      if (el) {
        observer.observe(el);
      }
    });
    return () => {
      observer.disconnect();
    };
  }, [reels, userInteractedReels]);
  // Collapsible FAQ section state
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  // Woston Store Redirect states
  const [wostonModalOpen, setWostonModalOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectProgress, setRedirectProgress] = useState(0);
  // Dynamic state list for user-submitted reviews / testimonials
  const [testimonials, setTestimonials] = useState(TESTIMONIALS_DATA);
  const [newFeedback, setNewFeedback] = useState({
    clientName: "",
    designation: "",
    organization: "",
    category: "commercial",
    rating: 5,
    content: "",
    systemInstalled: ""
  });
  const [feedbackSuccess, setFeedbackSuccess] = useState(false);
  // Gallery image lightbox state
  const [lightboxIndex, setLightboxIndex] = useState(null);
  // Admin Mode state variables
  const [adminEmails, setAdminEmails] = useState(() => {
    const saved = localStorage.getItem("spe_admin_emails");
    if (saved)
      return JSON.parse(saved);
    return ["info@securityplus.in", "admin@securityplus.in"];
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
        // ignore
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
  const [secretClickCount, setSecretClickCount] = useState(0);
  const [secretLastClick, setSecretLastClick] = useState(0);
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
  const handleShareProduct = async (product) => {
    const shareData = {
      title: product.name,
      text: `${product.name} - ${product.desc}. Price: ${product.price}. Available at Security Plus Electronics Nagpur.`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setToastMessage("Product details shared successfully!");
      }
      else {
        await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\nLink: ${shareData.url}`);
        setToastMessage("Product link and specifications copied to clipboard!");
      }
    }
    catch (err) {
      if (err.name !== "AbortError") {
        setToastMessage("Sharing failed: " + err.message);
      }
    }
  };
  // Central Database lists synchronized with user forms
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
    return [
      {
        id: "SPE-APP-77123",
        name: "Rahul Deshmukh",
        email: "rahul.desh@gmail.com",
        phone: "+91 88312 90123",
        selectedOption: "class_basics",
        experience: "Engineering student at Nagpur University. Want hands-on field training with CCTV.",
        resumeUrl: "https://drive.google.com/resume-rdesh",
        date: "2026-06-29",
        status: "Approved"
      },
      {
        id: "SPE-APP-43120",
        name: "Pooja Patil",
        email: "pooja.patil@outlook.com",
        phone: "+91 77123 45678",
        selectedOption: "job_sales",
        experience: "3 years sales experience at local electronics appliance store. Proficient in Marathi and Hindi.",
        resumeUrl: "https://drive.google.com/resume-ppatil",
        date: "2026-06-30",
        status: "Pending Review"
      }
    ];
  });
  const [showroomBookings, setShowroomBookings] = useState(() => {
    const saved = localStorage.getItem("spe_showroom_bookings");
    if (saved)
      return JSON.parse(saved);
    return [
      {
        id: "SPE-BK-321094",
        name: "Harish Kumar",
        phone: "+91 91234 56789",
        email: "harish.k@tcs.com",
        date: "2026-07-03",
        time: "11:00",
        sector: "residential",
        status: "Confirmed"
      }
    ];
  });
  const [subscribers, setSubscribers] = useState(() => {
    const saved = localStorage.getItem("spe_subscribers");
    if (saved)
      return JSON.parse(saved);
    return ["info@securityplus.in", "admin@securityplus.in", "mandal.tech@outlook.com"];
  });
  const [newsletterEmail, setNewsletterEmail] = useState("");
  // Storage synchronization side-effects
  useEffect(() => {
    localStorage.setItem("spe_support_tickets", JSON.stringify(supportTickets));
  }, [supportTickets]);
  useEffect(() => {
    localStorage.setItem("spe_career_apps", JSON.stringify(careerApplications));
  }, [careerApplications]);
  useEffect(() => {
    localStorage.setItem("spe_showroom_bookings", JSON.stringify(showroomBookings));
  }, [showroomBookings]);
  useEffect(() => {
    localStorage.setItem("spe_subscribers", JSON.stringify(subscribers));
  }, [subscribers]);
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
  useEffect(() => {
    localStorage.setItem("spe_reels_catalog", JSON.stringify(reels));
  }, [reels]);
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
  // Selected blog post state for detail modal
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogSearch, setBlogSearch] = useState("");
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");
  const [productSortOption, setProductSortOption] = useState("default");
  // Selected filter category for testimonials page
  const [testimonialFilter, setTestimonialFilter] = useState("all");
  // Contact support form state
  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: "sales",
    message: ""
  });
  const [contactTicket, setContactTicket] = useState(null);
  // Live showroom network ping test state
  const [pinging, setPinging] = useState(false);
  const [pingResults, setPingResults] = useState([]);
  // Video playback status for Hero/Home simulation
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  useEffect(() => {
    // Scroll chat to bottom when messages update
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatLoading]);
  // Handle Toast Trigger at interval for system notifications
  useEffect(() => {
    const alerts = [
      "System Notification: Boundary line crossing detected at Commercial Warehouse gate 2 - filtered as False Alarm (Stray Dog).",
      "Network Status: Automated backup grid testing succeeded. All 5,102 node feeds online.",
      "Showroom Alert: Live interactive demonstration of Hanwha camera sets starts in Nagpur showroom in 10 minutes.",
      "Secure System Intel: H.265+ encoding verified on 4K streams saving 76% bandwidth."
    ];
    const timer = setInterval(() => {
      const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];
      setToastMessage(randomAlert);
      setTimeout(() => setToastMessage(null), 6000);
    }, 45000);
    return () => clearInterval(timer);
  }, []);
  // Trigger quick calculations on load
  useEffect(() => {
    handleRunCalculator();
  }, [calcInput]);
  // Interactive PTZ Speed Dome controller simulator logger
  const triggerAiScan = (type) => {
    setAiActiveScan(type);
    let logMsg = "";
    if (type === "face")
      logMsg = "Executing 360° Pan Sweep... Horizontal panoramic sweep complete. Coverage: 100%.";
    if (type === "vehicle")
      logMsg = "Zooming lens in... 45x Optical Zoom engaged. Distant license plates resolved clearly.";
    if (type === "tripwire")
      logMsg = "Engaging Laser Night Vision... Long-range infrared spotlight adjusted to 150m.";
    if (type === "safety")
      logMsg = "Initiating Patrol Sweep... Route #2 active (Warehouse perimeters). Zero blind spots detected.";
    setAiScanLogs(prev => [logMsg, ...prev.slice(0, 4)]);
    setTimeout(() => {
      setAiActiveScan(null);
    }, 4000);
  };
  // Chat message submit
  const handleSendMessage = async (textToSend) => {
    const input = textToSend || userInput;
    if (!input.trim())
      return;
    const userMsg = { role: "user", content: input };
    setChatMessages(prev => [...prev, userMsg]);
    if (!textToSend)
      setUserInput("");
    setChatLoading(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...chatMessages, userMsg] })
      });
      const data = await response.json();
      if (data.text) {
        setChatMessages(prev => [...prev, { role: "assistant", content: data.text }]);
      }
      else {
        setChatMessages(prev => [...prev, { role: "assistant", content: "Sorry, I am facing an issue connecting with the secure backend. Let me help you offline: SPE in Nagpur offers complete 4K CCTV setups, smart biometric lock integration, and robust power grids. Visit our physical store or request a call!" }]);
      }
    }
    catch (err) {
      console.error(err);
      setChatMessages(prev => [...prev, { role: "assistant", content: "I was unable to establish a secure link. Security Plus Electronics in Nagpur is ready to assist you physically at our grand showroom!" }]);
    }
    finally {
      setChatLoading(false);
    }
  };
  // Run Sizing Planner Calculations
  const handleRunCalculator = () => {
    const cams = calcInput.indoorCams + calcInput.outdoorCams;
    if (cams <= 0) {
      setCalcResult(null);
      return;
    }
    // NVR channels is next power of 2 from (4, 8, 16, 32, 64)
    let nvr = 4;
    if (cams > 4)
      nvr = 8;
    if (cams > 8)
      nvr = 16;
    if (cams > 16)
      nvr = 32;
    if (cams > 32)
      nvr = 64;
    // Storage:
    // 1080p camera = ~15GB per day continuous
    // 4K camera = ~45GB per day continuous
    const ratePerCamGB = calcInput.resolution === "1080p" ? 15 : 45;
    let totalGB = cams * ratePerCamGB * calcInput.retentionDays;
    // If motion-triggered (not continuous), storage reduces by ~60%
    if (!calcInput.continuousRecording) {
      totalGB = totalGB * 0.4;
    }
    const storageTB = parseFloat((totalGB / 1024).toFixed(2));
    const hddCount = Math.ceil(storageTB / 4); // assume 4TB surveillance HDDs
    const recommendedHDD = `${hddCount}x 4TB Western Digital Purple Surveillance HDD (Total: ${hddCount * 4}TB)`;
    // Power backup UPS sizing: ~15W per IP PoE Cam, 40W for NVR + Switch
    const wattLoad = (cams * 15) + 40;
    // VA rating assumes power factor of 0.7, plus a 40% headroom buffer
    const upsVA = Math.ceil((wattLoad / 0.7) * 1.4 * (calcInput.retentionDays > 0 ? 1.2 : 1));
    // Approximate metrics
    const cables = cams * 25; // 25 meters per camera CAT6 cable
    const labor = Math.ceil(cams / 2); // 2 cameras per day labor estimate
    const specs = [
      `Secure Layer 2 PoE Switch with ${nvr} Gigabit ethernet ports`,
      `Cat6 Shielded Solid Copper network cables with RJ45 weatherproofing boots`,
      `Surveillance-grade heavy-duty outdoor camera junction boxes`,
      `Smart mobile application setup on up to 5 smartphones with remote live view authorization`,
      `AI motion tracking and smart zone alerts configuration`
    ];
    setCalcResult({
      recommendedCameras: cams,
      nvrChannels: nvr,
      storageRequiredTB: storageTB,
      recommendedStorageHDD: recommendedHDD,
      backupUpsRatingVA: upsVA,
      estimatedCablesMeters: cables,
      estimatedLaborDays: labor,
      recommendedSpecs: specs
    });
  };
  // Smart Lock Interactive click
  const runSmartLockAuth = () => {
    setLockStatus("scanning");
    setTimeout(() => {
      // 80% chance of success, 20% denied
      const success = Math.random() > 0.2;
      setLockStatus(success ? "granted" : "denied");
    }, 1800);
  };
  // Handle Showroom Booking Form Submit
  const handleBookShowroom = (e) => {
    e.preventDefault();
    if (!bookingForm.name || !bookingForm.phone || !bookingForm.date)
      return;
    const randomTicketNo = `SPE-BK-${Math.floor(100000 + Math.random() * 900000)}`;
    const newBooking = {
      id: randomTicketNo,
      name: bookingForm.name,
      phone: bookingForm.phone,
      email: bookingForm.email || "No Email Provided",
      date: bookingForm.date,
      time: bookingForm.time || "12:00",
      sector: bookingForm.sector || "residential",
      status: "Confirmed"
    };
    setShowroomBookings(prev => [newBooking, ...prev]);
    setBookingTicket({
      ticketNo: randomTicketNo,
      ...bookingForm
    });
    setBookingConfirmed(true);
  };
  // Submit new feedback dynamically
  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    if (!newFeedback.clientName || !newFeedback.content)
      return;
    const feedbackItem = {
      id: `t-user-${Date.now()}`,
      clientName: newFeedback.clientName,
      designation: newFeedback.designation || "Valued Client",
      organization: newFeedback.organization || "Independent",
      category: newFeedback.category,
      rating: newFeedback.rating,
      content: newFeedback.content,
      systemInstalled: newFeedback.systemInstalled || "Custom SPE Surveillance Pack",
      date: new Date().toISOString().split("T")[0],
      verified: true
    };
    setTestimonials(prev => [feedbackItem, ...prev]);
    setFeedbackSuccess(true);
    setNewFeedback({
      clientName: "",
      designation: "",
      organization: "",
      category: "commercial",
      rating: 5,
      content: "",
      systemInstalled: ""
    });
    // Clear success banner after 5s
    setTimeout(() => setFeedbackSuccess(false), 5000);
  };
  // Submit Contact support ticket
  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.message)
      return;
    const randomTicketId = `SPE-TKT-${Math.floor(100000 + Math.random() * 900000)}`;
    const randomEngineer = ["Sandeep Agnihotri", "Manoj Kulkarni", "Prateek Deshpande", "Amrita Rao"][Math.floor(Math.random() * 4)];
    const newTicket = {
      id: randomTicketId,
      name: contactForm.name,
      company: contactForm.company || "Residential Client",
      email: contactForm.email,
      phone: contactForm.phone || "",
      department: contactForm.department,
      message: contactForm.message,
      date: new Date().toISOString().split('T')[0],
      status: "Open",
      assignedTo: randomEngineer,
      notes: ["Ticket generated automatically on customer inquiry submission."]
    };
    setSupportTickets(prev => [newTicket, ...prev]);
    setContactTicket({
      ticketId: randomTicketId,
      assignedEngineer: randomEngineer,
      estimatedResponse: "2 Hours SLA Guarantee",
      ...contactForm
    });
    setContactForm({
      name: "",
      company: "",
      email: "",
      phone: "",
      department: "sales",
      message: ""
    });
  };
  // Network ping simulator for custom contact tools
  const runNetworkPingTest = () => {
    setPinging(true);
    setPingResults([]);
    const hosts = [
      { ip: "nagpur-hq.spe-grid.in", status: "resolving" },
      { ip: "dharampeth-switch-3.spe-grid.in", status: "resolving" },
      { ip: "optical-ring-primary.spe-grid.in", status: "resolving" }
    ];
    let current = 0;
    const interval = setInterval(() => {
      if (current < hosts.length) {
        const h = hosts[current];
        const res = {
          ip: h.ip,
          status: Math.random() > 0.05 ? "ONLINE" : "UNREACHABLE",
          latency: Math.floor(4 + Math.random() * 24)
        };
        setPingResults(prev => [...prev, res]);
        current++;
      }
      else {
        clearInterval(interval);
        setPinging(false);
      }
    }, 1000);
  };
  // Get Lucide Icon dynamically
  const getIcon = (name, className = "h-6 w-6 text-primary") => {
    switch (name) {
      case "Video": return <Video className={className} />;
      case "Cpu": return <Cpu className={className} />;
      case "Router": return <Router className={className} />;
      case "BatteryCharging": return <BatteryCharging className={className} />;
      case "LockKeyhole": return <LockKeyhole className={className} />;
      case "Home": return <Home className={className} />;
      case "Building": return <Building className={className} />;
      case "HeartPulse": return <HeartPulse className={className} />;
      case "Briefcase": return <Briefcase className={className} />;
      case "Factory": return <Factory className={className} />;
      default: return <Video className={className} />;
    }
  };
  const filteredGalleryItems = GALLERY_ITEMS.filter(item => {
    if (testimonialFilter === "all" || !["showroom", "culture", "technical"].includes(testimonialFilter)) {
      return true;
    }
    return item.category === testimonialFilter;
  });
  if (isAdminMode) {
    return (<AdminPanel onExit={() => setIsAdminMode(false)} supportTickets={supportTickets} setSupportTickets={setSupportTickets} careerApplications={careerApplications} setCareerApplications={setCareerApplications} subscribers={subscribers} setSubscribers={setSubscribers} setToastMessage={setToastMessage} products={products} setProducts={setProducts} productCategories={productCategories} setProductCategories={setProductCategories} contactData={contactData} setContactData={setContactData} logoData={logoData} setLogoData={setLogoData} socialLinks={socialLinks} setSocialLinks={setSocialLinks} reels={reels} setReels={setReels} adminEmails={adminEmails} setAdminEmails={setAdminEmails} adminPasscodeVal={adminPasscodeVal} setAdminPasscodeVal={setAdminPasscodeVal} />);
  }
  return (<div className="bg-white text-slate-900 antialiased overflow-x-hidden selection:bg-sky-600 selection:text-white min-h-screen font-sans relative border-t-4 border-sky-600">
    <SEOManager activeTab={activeTab} />

    {/* Crisp Wireframe Grid Lines */}
    <div className="absolute inset-0 pointer-events-none z-0 border-x border-slate-100 max-w-7xl mx-auto"></div>

    {/* Cyber Security System Intelligence notification Toast */}
    <AnimatePresence>
      {toastMessage && (<motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="fixed bottom-6 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:right-auto z-50 w-auto md:w-[480px] bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-xl border border-slate-800 flex items-start gap-3 shadow-2xl">
        <Sparkles className="h-4 w-4 text-sky-400 shrink-0 mt-0.5 animate-pulse" />
        <div className="flex-1 min-w-0">
          <span className="font-mono font-bold text-[9px] tracking-widest text-sky-400 uppercase block">[ SYSTEM SENTINEL GUARD ]</span>
          <p className="text-[11px] text-slate-300 leading-normal mt-0.5 break-words">{toastMessage}</p>
        </div>
        <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white shrink-0 cursor-pointer p-0.5">
          <X className="h-3.5 w-3.5" />
        </button>
      </motion.div>)}
    </AnimatePresence>







    <Header activeTab={activeTab} setActiveTab={setActiveTab} customerUser={customerUser} setCustomerUser={setCustomerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} adminEmails={adminEmails} setAdminLoginOpen={setAdminLoginOpen} setToastMessage={setToastMessage} PRODUCTS_DATA={PRODUCTS_DATA} getProductImageUrls={getProductImageUrls} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />
    {false && (<>
      <nav className="fixed top-0 left-0 w-full bg-[#0a0d16]/95 backdrop-blur-md border-b border-slate-800/80 z-40 px-4 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all shadow-lg shadow-slate-950/20">
        <div onClick={() => { setActiveTab("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 md:gap-3 cursor-pointer select-none active:scale-95 hover:opacity-90 transition-all" title="Return to Home">
          <div className="h-9 w-9 bg-slate-950/80 flex items-center justify-center border border-white/80 p-0.5 shrink-0 rounded-full shadow-[0_0_12px_rgba(255,255,255,0.4)] hover:shadow-[0_0_18px_rgba(255,255,255,0.6)] hover:border-white transition-all duration-300">
            <img alt="Security Plus Electronics Logo" className="h-full w-full object-cover rounded-full" src={logoData.logoUrl || securityPlusLogo} referrerPolicy="no-referrer" />
          </div>
          <span className="font-sans font-extrabold text-[10px] xs:text-xs md:text-sm tracking-widest text-white uppercase flex items-center gap-1.5 truncate max-w-[120px] xs:max-w-[160px] sm:max-w-none">
            <span className="truncate">{logoData.companyName || "Security Plus Electronics"}</span>
          </span>
        </div>

        {/* Desktop Links (Minimized & Unnecessary Moved to Footer) */}
        <div className="hidden md:flex items-center gap-5 lg:gap-6 font-sans font-bold text-[11px] tracking-widest uppercase">
          <button onClick={() => { setActiveTab("home"); window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${activeTab === "home" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Home
          </button>
          <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${activeTab === "products" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Products
          </button>
          <button onClick={() => { setActiveTab("about"); window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${activeTab === "about" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            About Us
          </button>
          <button onClick={() => { setActiveTab("contact"); window.scrollTo(0, 0); }} className={`transition-all duration-200 cursor-pointer ${activeTab === "contact" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
            Contact Us
          </button>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          {/* Direct Wishlist Shortcut Trigger Button */}
          {customerUser && (<button onClick={() => {
            setAccountDropdownOpen(true);
            setDropdownSubView("wishlist");
          }} className="relative h-8 w-8 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center bg-slate-950 border-slate-850 text-slate-300 hover:border-rose-500 hover:text-rose-400 shrink-0" title={`View Saved Wishlist (${wishlist.length} items)`}>
            <Heart className={`h-4 w-4 ${wishlist.length > 0 ? "fill-rose-500 text-rose-500 animate-pulse" : "text-slate-400"}`} />
            {wishlist.length > 0 && (<span className="absolute -top-1 -right-1 h-4 min-w-4 px-1 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-[8px] border border-slate-950">
              {wishlist.length}
            </span>)}
          </button>)}

          {/* Interactive Account Dropdown (Replaces old User Icon & removed Language Selector) */}
          <div className="relative" ref={accountRef}>
            <button onClick={() => setAccountDropdownOpen(!accountDropdownOpen)} className={`h-8 w-8 rounded-full border transition-all duration-200 cursor-pointer flex items-center justify-center shrink-0 ${accountDropdownOpen
              ? "bg-sky-600 border-sky-600 text-white shadow-lg shadow-sky-500/15"
              : "bg-slate-950 border-slate-850 text-slate-300 hover:border-sky-500 hover:text-sky-400"}`} title="Account Options">
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

                  {/* Wishlist Navigation Button */}
                  <button onClick={() => setDropdownSubView("wishlist")} className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-sky-500 transition-all cursor-pointer flex items-center justify-between px-3">
                    <span className="flex items-center gap-1.5">
                      <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                      My Wishlist
                    </span>
                    <span className="bg-rose-500 text-white font-mono text-[9px] px-2 py-0.5 rounded-full">
                      {wishlist.length}
                    </span>
                  </button>

                  <button onClick={() => { setActiveTab("products"); setAccountDropdownOpen(false); }} className="w-full bg-slate-900 hover:bg-slate-800 text-slate-200 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-sky-500 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    Explore Catalog
                  </button>

                  {/* Show admin gateway button ONLY to authorized admins */}
                  {adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase()) && (<button onClick={() => { setAdminLoginOpen(true); setAccountDropdownOpen(false); }} className="w-full bg-emerald-950/20 hover:bg-emerald-900/30 text-emerald-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-emerald-950/50 hover:border-emerald-800 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    <Terminal className="w-3 h-3" />
                    [ Enter Admin Gateway ]
                  </button>)}

                  <button onClick={() => {
                    setCustomerUser(null);
                    setToastMessage("Logged out successfully.");
                    setAccountDropdownOpen(false);
                    setActiveTab("home");
                  }} className="w-full bg-rose-950/20 hover:bg-rose-900/30 text-rose-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2 rounded-lg border border-rose-950/50 hover:border-rose-800 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                    Log Out Account
                  </button>
                </>) : (
                  // Dedicated Wishlist Sub-view
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
                        <button onClick={() => {
                          setActiveTab("products");
                          setAccountDropdownOpen(false);
                        }} className="text-[9px] font-bold text-sky-400 hover:underline mt-1 font-sans cursor-pointer uppercase">
                          Browse Products
                        </button>
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
                    <button onClick={() => { setActiveTab("login"); setAccountDropdownOpen(false); }} className="w-full bg-sky-600 hover:bg-sky-500 text-white font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-sky-600 hover:border-sky-500 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                      <User className="w-3 h-3" />
                      Sign In
                    </button>
                    <button onClick={() => { setActiveTab("signup"); setAccountDropdownOpen(false); }} className="w-full bg-slate-900 hover:bg-slate-800 text-sky-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2.5 rounded-lg border border-slate-800 hover:border-sky-500 transition-all cursor-pointer flex items-center justify-center gap-1.5">
                      Register Account
                    </button>
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
                    <div className="h-[1px] bg-slate-800 my-1" />
                    <button onClick={() => {
                      const adminEl = document.getElementById("admin-portal-dashboard-card");
                      if (adminEl) {
                        adminEl.scrollIntoView({ behavior: "smooth" });
                      }
                      else {
                        setToastMessage("Scroll down to find the Admin Management Console at the bottom of the workspace.");
                      }
                      setAccountDropdownOpen(false);
                    }} className="w-full bg-slate-900 hover:bg-slate-800 text-sky-400 font-sans font-bold text-[9px] tracking-widest uppercase py-2 rounded-lg border border-slate-800 hover:border-sky-500 transition-all cursor-pointer flex items-center justify-center gap-1.5">
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

          {/* Inquiry list only accessible inside Admin Panel or by logged-in admin */}
          {isAdminMode && (<button id="header-inquiry-btn" onClick={() => setIsInquiryDrawerOpen(true)} className="hidden sm:flex bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-sky-500 text-white px-4 py-2.5 rounded-lg font-sans font-bold text-[10px] tracking-widest uppercase transition-all duration-300 items-center gap-2 shadow-sm cursor-pointer relative">
            <ClipboardList className="h-3.5 w-3.5 text-sky-400" />
            Inquiry List
            {inquiryList.length > 0 && (<span className="absolute -top-1.5 -right-1.5 h-4.5 min-w-4.5 px-1.5 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-[8px] animate-pulse">
              {inquiryList.length}
            </span>)}
          </button>)}

          <button onClick={() => window.open("https://woston.in", "_blank")} className="hidden md:flex bg-sky-600 hover:bg-sky-500 text-white px-5 py-2.5 rounded-lg font-sans font-bold text-[10px] tracking-widest uppercase border border-sky-600 hover:bg-sky-500 transition-all duration-300 items-center gap-2 shadow-sm cursor-pointer">
            <ShoppingBag className="h-3.5 w-3.5 text-white" />
            WOSTON STORE
          </button>

          {/* Mobile hamburger */}
          <button ref={mobileHamburgerRef} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden h-8 w-8 flex items-center justify-center rounded-lg border border-slate-850 bg-slate-950 text-slate-300 hover:border-sky-500 hover:text-sky-400 transition-all cursor-pointer shrink-0 p-1" title="Toggle Menu">
            <Menu className="h-4.5 w-4.5" />
          </button>
        </div>
      </nav>

      {/* Premium Side Slide-in Mobile Menu with Backdrop Overlay and Close Button */}
      <AnimatePresence>
        {mobileMenuOpen && (<>
          {/* Backdrop Overlay */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileMenuOpen(false)} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-45 md:hidden" />
          {/* Side Drawer */}
          <motion.div ref={mobileMenuRef} initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="fixed top-0 right-0 h-full w-full max-w-xs bg-[#0a0d16]/98 backdrop-blur-lg z-50 p-6 flex flex-col gap-6 border-l border-slate-800/80 md:hidden shadow-2xl overflow-y-auto">
            {/* Header with Close Button */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-800/60">
              <span className="font-sans font-extrabold text-xs tracking-widest text-white uppercase">[ MENU ]</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-slate-400 hover:text-white p-1.5 rounded-full bg-slate-900/60 hover:bg-slate-900 border border-slate-850 transition-colors" title="Close Menu">
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Minimized Navigation Links */}
            <div className="flex flex-col gap-2">
              <button onClick={() => { setActiveTab("home"); setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${activeTab === "home" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                Home
              </button>
              <button onClick={() => { setActiveTab("products"); setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${activeTab === "products" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                Products
              </button>
              <button onClick={() => { setActiveTab("about"); setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${activeTab === "about" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                About Us
              </button>
              <button onClick={() => { setActiveTab("contact"); setMobileMenuOpen(false); window.scrollTo(0, 0); }} className={`py-2 text-left border-b border-slate-850 font-sans font-bold text-xs tracking-wider uppercase ${activeTab === "contact" ? "text-sky-400" : "text-slate-300 hover:text-sky-400"}`}>
                Contact Us
              </button>
            </div>

            {/* Action Buttons inside mobile sidebar */}
            <div className="flex flex-col gap-3 mt-4">
              {isAdminMode && (<button onClick={() => { setIsInquiryDrawerOpen(true); setMobileMenuOpen(false); }} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl font-sans font-bold text-[10px] tracking-widest uppercase border border-slate-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full">
                <ClipboardList className="h-4 w-4 text-sky-400" />
                Inquiry List {inquiryList.length > 0 ? `(${inquiryList.length})` : ""}
              </button>)}

              <button onClick={() => { window.open("https://woston.in", "_blank"); setMobileMenuOpen(false); }} className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-3 rounded-xl font-sans font-bold text-[10px] tracking-widest uppercase border border-sky-600 hover:border-sky-500 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm cursor-pointer w-full">
                <ShoppingBag className="h-4 w-4 text-white" />
                WOSTON STORE
              </button>
            </div>
          </motion.div>
        </>)}
      </AnimatePresence>
    </>)}






    {/* DYNAMIC TAB CONTROLLER RENDERING */}
    <div className={activeTab === "home" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>
      {activeTab === "home" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <Hero heroSlideIndex={heroSlideIndex} setHeroSlideIndex={setHeroSlideIndex} setActiveTab={setActiveTab} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />
        {/* REMOVED OLD HERO */}
        {false && (<header className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-16 overflow-hidden border-b border-slate-900 bg-[#070913]">
          {/* Cinematic Looping Surveillance Video Background with elegant overlay */}
          <div className="absolute inset-0 z-0 select-none overflow-hidden">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-[0.12] object-center scale-105 pointer-events-none" poster={cctvHeroBg}>
              <source src="https://assets.mixkit.co/videos/preview/mixkit-security-cameras-in-a-control-room-41712-large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#070913]/98 via-[#070913]/85 to-[#070913]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.1)_0%,transparent_70%)]"></div>

            {/* Tech scan grid lines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(2,132,199,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,132,199,0.01)_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
          </div>

          <div className="relative z-20 container mx-auto px-6 max-w-7xl flex-1 flex flex-col justify-center">

            {/* Main Carousel Slides area using AnimatePresence */}
            <div className="relative min-h-[460px] md:min-h-[420px] lg:min-h-[440px] flex items-center">
              <AnimatePresence mode="wait">
                {heroSlideIndex === 0 && (<motion.div key="slide-0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  {/* Text Content */}
                  <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
                    <div className="bg-sky-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-sky-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full animate-pulse"></div>
                      <span className="font-sans font-bold text-[9px] text-sky-300 tracking-wider uppercase">NAGPUR HQ EXPERIENCE MALL</span>
                    </div>
                    <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                      Central India's Biggest<br />
                      <span className="text-sky-400">CCTV Mall</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                      Explore 20+ years of security excellence with Nagpur's largest live experience center. Professional 4K security installations, on-site live testing, and expert system sizing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-sky-600 hover:bg-sky-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-sky-500/20">
                        EXPLORE SOLUTIONS
                      </button>
                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                        setShowroomModalOpen(true);
                      }} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                        <Calendar className="h-4 w-4 text-sky-400" />
                        VISIT SHOWROOM
                      </button>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.15)_0%,transparent_65%)]"></div>

                      {/* Interactive Blueprint Grid with pulsing central core */}
                      <svg className="w-48 h-48 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="45" fill="none" stroke="#0ea5e9" strokeWidth="0.5" strokeDasharray="1, 4" className="animate-spin [animation-duration:40s]" />
                        <circle cx="50" cy="50" r="35" fill="none" stroke="#0ea5e9" strokeWidth="0.5" opacity="0.3" />
                        <circle cx="50" cy="50" r="25" fill="none" stroke="#0ea5e9" strokeWidth="1" strokeDasharray="3, 3" className="animate-spin [animation-duration:15s]" />
                        <line x1="50" y1="5" x2="50" y2="95" stroke="#0ea5e9" strokeWidth="0.25" opacity="0.4" />
                        <line x1="5" y1="50" x2="95" y2="50" stroke="#0ea5e9" strokeWidth="0.25" opacity="0.4" />

                        {/* Pulsing center Experience Hub indicator */}
                        <circle cx="50" cy="50" r="8" fill="#0ea5e9" fillOpacity="0.2" className="animate-pulse" />
                        <circle cx="50" cy="50" r="3" fill="#0ea5e9" />

                        {/* Glowing terminal node markers */}
                        <circle cx="25" cy="25" r="2" fill="#22c55e" />
                        <path d="M25 21 L25 25 L29 25" fill="none" stroke="#22c55e" strokeWidth="0.5" />
                        <circle cx="75" cy="25" r="2" fill="#38bdf8" />
                        <circle cx="75" cy="75" r="2" fill="#ef4444" className="animate-ping" />
                        <circle cx="75" cy="75" r="1.5" fill="#ef4444" />
                        <circle cx="25" cy="75" r="2" fill="#eab308" />
                      </svg>

                      <p className="font-sans font-bold text-[10px] text-sky-400 uppercase tracking-widest text-center mt-6">
                        LIVE EXPERIENCE DEMO ROOM
                      </p>
                    </div>
                  </div>
                </motion.div>)}

                {heroSlideIndex === 1 && (<motion.div key="slide-1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  {/* Text Content */}
                  <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
                    <div className="bg-emerald-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-emerald-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="font-sans font-bold text-[9px] text-emerald-300 tracking-wider uppercase">IP SURVEILLANCE // ACTIVE INTUITION</span>
                    </div>
                    <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                      Smarter Security<br />
                      <span className="text-emerald-400">With AI Optics</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                      Next-generation 4K IP cameras featuring active human & vehicle detection, ultra-dark starlight color night vision, and instant remote notifications on any device.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-emerald-500/20">
                        VIEW CAMERA RANGE
                      </button>
                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                        setShowroomModalOpen(true);
                      }} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                        <Calendar className="h-4 w-4 text-emerald-400" />
                        VISIT EXPERIENCE MALL
                      </button>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_65%)]"></div>

                      {/* Target targeting and AI camera lens visualization */}
                      <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="30" fill="none" stroke="#10b981" strokeWidth="2" />
                        <circle cx="50" cy="50" r="22" fill="#090d16" stroke="#10b981" strokeWidth="1" />
                        <circle cx="50" cy="50" r="14" fill="#040711" stroke="#34d399" strokeWidth="2" />
                        <circle cx="47" cy="47" r="4" fill="#34d399" opacity="0.7" />

                        {/* Pulsing red optical status LED */}
                        <circle cx="50" cy="50" r="2" fill="#ef4444" className="animate-pulse" />

                        {/* Targeting reticle indicators */}
                        <path d="M20 50 H10" stroke="#10b981" strokeWidth="1.5" />
                        <path d="M90 50 H80" stroke="#10b981" strokeWidth="1.5" />
                        <path d="M50 20 V10" stroke="#10b981" strokeWidth="1.5" />
                        <path d="M50 90 V80" stroke="#10b981" strokeWidth="1.5" />

                        {/* Dynamic detection box */}
                        <rect x="15" y="15" width="28" height="20" fill="none" stroke="#10b981" strokeWidth="0.75" strokeDasharray="2, 2" />
                        <text x="18" y="27" fill="#10b981" fontSize="5" fontFamily="monospace" fontWeight="bold">HUMAN: 99.1%</text>
                      </svg>

                      <p className="font-sans font-bold text-[10px] text-emerald-400 uppercase tracking-widest text-center mt-6">
                        ACTIVE TARGET DETECTION
                      </p>
                    </div>
                  </div>
                </motion.div>)}

                {heroSlideIndex === 2 && (<motion.div key="slide-2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  {/* Text Content */}
                  <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
                    <div className="bg-indigo-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-indigo-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-pulse"></div>
                      <span className="font-sans font-bold text-[9px] text-indigo-300 tracking-wider uppercase">BIOMETRICS // ZERO TRUST SHIELD</span>
                    </div>
                    <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                      Touchless Access<br />
                      <span className="text-indigo-400">Face attendance</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                      Highly secure enterprise access controls with lightning-fast face recognition, biometric time logging, and automated cloud sync for modern workforces.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-indigo-500/20">
                        EXPLORE ACCESS BIOMETRICS
                      </button>
                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                        setShowroomModalOpen(true);
                      }} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                        <Calendar className="h-4 w-4 text-indigo-400" />
                        SCHEDULE SYSTEM DEMO
                      </button>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0%,transparent_65%)]"></div>

                      {/* Glowing biometric scan grid design */}
                      <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(99,102,241,0.3)]" viewBox="0 0 100 100">
                        {/* Biometric Shield Icon outline */}
                        <path d="M50 15 L20 25 V50 C20 70, 50 85, 50 85 C50 85, 80 70, 80 50 V25 L50 15 Z" fill="none" stroke="#6366f1" strokeWidth="1.5" />

                        {/* Scanning line moving up and down */}
                        <line x1="25" y1="45" x2="75" y2="45" stroke="#818cf8" strokeWidth="2" className="animate-pulse" />

                        {/* Fingerprint ridges schematic vector */}
                        <path d="M40 40 C43 35, 57 35, 60 40 M35 48 C40 40, 60 40, 65 48 M45 55 C48 50, 52 50, 55 55" fill="none" stroke="#818cf8" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                        <circle cx="50" cy="48" r="1.5" fill="#22c55e" />
                      </svg>

                      <p className="font-sans font-bold text-[10px] text-indigo-400 uppercase tracking-widest text-center mt-6">
                        SECURE SYSTEM SCANNER
                      </p>
                    </div>
                  </div>
                </motion.div>)}

                {heroSlideIndex === 3 && (<motion.div key="slide-3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  {/* Text Content */}
                  <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
                    <div className="bg-amber-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-amber-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse"></div>
                      <span className="font-sans font-bold text-[9px] text-amber-300 tracking-wider uppercase">NETWORK INFRA // SECURE CONNECTIVITY</span>
                    </div>
                    <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                      High-Performance<br />
                      <span className="text-amber-400">Network bridges</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                      Enterprise networking designed for zero-dropout camera feeds. Long-range wireless link bridges up to 10km+, smart PoE switches, and robust outdoor routers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-amber-500/20">
                        EXPLORE NETWORKING RANGE
                      </button>
                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                        setShowroomModalOpen(true);
                      }} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                        <Calendar className="h-4 w-4 text-amber-400" />
                        REQUEST NETWORK AUDIT
                      </button>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15)_0%,transparent_65%)]"></div>

                      {/* Glowing network topology map schematic */}
                      <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]" viewBox="0 0 100 100">
                        {/* Central Switch/Router node */}
                        <rect x="42" y="42" width="16" height="16" rx="4" fill="#090d16" stroke="#f59e0b" strokeWidth="2" />
                        <circle cx="50" cy="50" r="2.5" fill="#f59e0b" className="animate-ping" />

                        {/* Surrounding topology branch lines */}
                        <line x1="50" y1="25" x2="50" y2="42" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />
                        <line x1="50" y1="58" x2="50" y2="75" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />
                        <line x1="25" y1="50" x2="42" y2="50" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />
                        <line x1="58" y1="50" x2="75" y2="50" stroke="#f59e0b" strokeWidth="1" strokeDasharray="1, 2" />

                        {/* End nodes */}
                        <circle cx="50" cy="25" r="4" fill="#fbbf24" />
                        <circle cx="50" cy="75" r="4" fill="#fbbf24" />
                        <circle cx="25" cy="50" r="4" fill="#fbbf24" />
                        <circle cx="75" cy="50" r="4" fill="#fbbf24" />

                        {/* Signal concentric rings */}
                        <circle cx="50" cy="50" r="32" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.25" className="animate-pulse" />
                      </svg>

                      <p className="font-sans font-bold text-[10px] text-amber-400 uppercase tracking-widest text-center mt-6">
                        ACTIVE GIGABIT PATHWAYS
                      </p>
                    </div>
                  </div>
                </motion.div>)}

                {heroSlideIndex === 4 && (<motion.div key="slide-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  {/* Text Content */}
                  <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
                    <div className="bg-rose-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-rose-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse"></div>
                      <span className="font-sans font-bold text-[9px] text-rose-300 tracking-wider uppercase">VDP & SMART HOME // INTERCONNECTED RESIDENCE</span>
                    </div>
                    <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                      Smart Intercoms<br />
                      <span className="text-rose-400">& Digital Locks</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                      Premium high-definition video door phones coupled with biometric digital smart locks. Identify, communicate, and grant keyless secure access from anywhere in the world.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-rose-600 hover:bg-rose-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-rose-500/20">
                        VIEW ACCESS SYSTEMS
                      </button>
                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                        setShowroomModalOpen(true);
                      }} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                        <Calendar className="h-4 w-4 text-rose-400" />
                        SCHEDULE VISIT DEMO
                      </button>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.15)_0%,transparent_65%)]"></div>

                      {/* Smart Door Phone SVG */}
                      <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]" viewBox="0 0 100 100">
                        {/* Video Screen Frame */}
                        <rect x="25" y="15" width="50" height="40" rx="4" fill="#090d16" stroke="#f43f5e" strokeWidth="1.5" />
                        {/* Inner Screen Camera View */}
                        <rect x="29" y="19" width="42" height="32" rx="2" fill="#05070e" />
                        <circle cx="50" cy="35" r="8" fill="none" stroke="#f43f5e" strokeWidth="0.5" className="animate-pulse" />
                        <circle cx="50" cy="35" r="4" fill="#fb7185" />
                        {/* Status scanline */}
                        <line x1="30" y1="28" x2="70" y2="28" stroke="#f43f5e" strokeWidth="1" opacity="0.6" className="animate-bounce" />

                        {/* Speaker & Mic dots under screen */}
                        <circle cx="35" cy="62" r="1" fill="#f43f5e" />
                        <circle cx="40" cy="62" r="1" fill="#f43f5e" />
                        <circle cx="45" cy="62" r="1" fill="#f43f5e" />

                        {/* Smart lock symbol beside */}
                        <path d="M57 65 C57 60, 67 60, 67 65 V72 H57 Z" fill="none" stroke="#fb7185" strokeWidth="1.2" />
                        <rect x="53" y="72" width="18" height="13" rx="2" fill="#090d16" stroke="#f43f5e" strokeWidth="1" />
                        <circle cx="62" cy="78" r="2" fill="#22c55e" />
                      </svg>

                      <p className="font-sans font-bold text-[10px] text-rose-400 uppercase tracking-widest text-center mt-6">
                        INTERCONNECTED HOME LINK
                      </p>
                    </div>
                  </div>
                </motion.div>)}

                {heroSlideIndex === 5 && (<motion.div key="slide-5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5, ease: "easeInOut" }} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
                  {/* Text Content */}
                  <div className="lg:col-span-7 text-left flex flex-col items-start space-y-6">
                    <div className="bg-cyan-500/10 px-4 py-1.5 inline-flex items-center gap-2 border border-cyan-500/20 rounded-full">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></div>
                      <span className="font-sans font-bold text-[9px] text-cyan-300 tracking-wider uppercase">POWER BACKUP // ZERO BLANK-OUT GUARANTEE</span>
                    </div>
                    <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight uppercase">
                      Continuous Power<br />
                      <span className="text-cyan-400">& Pro Cables</span>
                    </h1>
                    <p className="text-sm md:text-base text-slate-300 max-w-2xl leading-relaxed font-sans">
                      Ensure uninterrupted surveillance feeds even during major electrical failures. Industrial grade heavy duty 3+1 CCTV copper cabling paired with pure sine-wave UPS system configurations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
                      <button onClick={() => { setActiveTab("products"); window.scrollTo(0, 0); }} className="bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase rounded-xl transition-all duration-300 text-center cursor-pointer shadow-lg shadow-cyan-500/20">
                        EXPLORE POWER INVENTORY
                      </button>
                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                        setShowroomModalOpen(true);
                      }} className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 font-sans font-bold text-xs tracking-widest uppercase border border-white/10 transition-all duration-300 flex items-center justify-center gap-2 rounded-xl cursor-pointer shadow-sm">
                        <Calendar className="h-4 w-4 text-cyan-400" />
                        REQUEST BACKUP AUDIT
                      </button>
                    </div>
                  </div>

                  {/* Visual representation */}
                  <div className="lg:col-span-5 flex justify-center items-center">
                    <div className="relative w-full max-w-[360px] aspect-square rounded-3xl bg-slate-900/30 border border-slate-800 p-6 flex flex-col justify-center items-center overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,transparent_65%)]"></div>

                      {/* Circuit schematic or Power flow SVG */}
                      <svg className="w-44 h-44 drop-shadow-[0_0_15px_rgba(6,182,212,0.3)]" viewBox="0 0 100 100">
                        {/* Battery representation */}
                        <rect x="25" y="30" width="50" height="34" rx="4" fill="#090d16" stroke="#06b6d4" strokeWidth="1.5" />

                        {/* Power level steps */}
                        <rect x="31" y="36" width="8" height="22" fill="#06b6d4" />
                        <rect x="42" y="36" width="8" height="22" fill="#06b6d4" />
                        <rect x="53" y="36" width="8" height="22" fill="#06b6d4" />
                        <rect x="64" y="36" width="8" height="22" fill="#06b6d4" className="animate-pulse" />

                        {/* Battery cap terminal */}
                        <rect x="45" y="24" width="10" height="6" fill="#06b6d4" />

                        {/* Lightning bolt indicator */}
                        <path d="M50 40 L44 49 H49 L47 58 L55 49 H50 L52 40 Z" fill="#22c55e" stroke="#22c55e" strokeWidth="1" />
                      </svg>

                      <p className="font-sans font-bold text-[10px] text-cyan-400 uppercase tracking-widest text-center mt-6">
                        PURE SINE WAVE CONTINUOUS
                      </p>
                    </div>
                  </div>
                </motion.div>)}
              </AnimatePresence>
            </div>

            {/* Carousel Navigation Selector Dots & manual indicators */}
            <div className="flex justify-between items-center mt-12 pt-6 border-t border-slate-900/60 max-w-5xl mx-auto w-full">

              {/* Progress indices */}
              <div className="flex gap-2.5">
                {[0, 1, 2, 3, 4, 5].map((idx) => (<button key={idx} onClick={() => setHeroSlideIndex(idx)} className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${heroSlideIndex === idx
                  ? "w-8 bg-sky-500"
                  : "w-2.5 bg-slate-800 hover:bg-slate-700"}`} title={`Go to slide ${idx + 1}`} />))}
              </div>

              {/* Manual controls label */}
              <div className="text-right font-mono text-[9px] text-slate-500">
                <span className="text-sky-400 font-semibold uppercase">AUTO CYCLE ACTIVE</span> // SLIDE {heroSlideIndex + 1} OF 6
             // SLIDE {heroSlideIndex + 1} OF 6
              </div>

            </div>

            {/* Metrics panel with sharp borders */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0 bg-sky-50/95 backdrop-blur-md border border-sky-100 w-full max-w-5xl divide-y md:divide-y-0 md:divide-x divide-sky-100 rounded-2xl shadow-lg mt-16 mx-auto">
              <div className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group rounded-t-2xl md:rounded-t-none md:rounded-l-2xl">
                <span className="absolute top-3 left-3 text-[9px] font-mono text-sky-400">[ 01 ]</span>
                <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">20+</span>
                <span className="font-sans font-semibold text-[10px] text-sky-900/80 tracking-wider uppercase">Years of Excellence</span>
              </div>
              <div className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group">
                <span className="absolute top-3 left-3 text-[9px] font-mono text-sky-400">[ 02 ]</span>
                <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">40+</span>
                <span className="font-sans font-semibold text-[10px] text-sky-900/80 tracking-wider uppercase">Premium Brands</span>
              </div>
              <div className="p-8 flex flex-col items-center justify-center transition-all duration-300 hover:bg-sky-100/40 relative group rounded-b-2xl md:rounded-b-none md:rounded-r-2xl">
                <span className="absolute top-3 left-3 text-[9px] font-mono text-sky-400">[ 03 ]</span>
                <span className="font-sans text-4xl md:text-5xl font-extrabold text-sky-600 mb-2">5000+</span>
                <span className="font-sans font-semibold text-[10px] text-sky-900/80 tracking-wider uppercase">Happy Customers</span>
              </div>
            </div>

          </div>
        </header>)}

        {/* BRAND PARTNERS CAROUSEL */}
        <BrandCarousel />

        <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} setBlogCategoryFilter={setBlogCategoryFilter} setActiveTab={setActiveTab} />
        {/* REMOVED OLD PRODUCT CATEGORIES */}
        {false && (<section className="py-24 px-8 relative z-20 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="font-sans font-extrabold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
                [ HARDWARE CATALOG ]
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
                Product Categories
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Explore Central India's most comprehensive inventory of security hardware. From F1.0 starlight optics to Layer 2 isolated backbones, we secure high-risk infrastructure.
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PRODUCT_CATEGORIES.map((category) => (<motion.div key={category.id} variants={staggerItem} whileHover={{
                scale: 1.025,
                y: -8,
                borderColor: "#0284C7",
                boxShadow: "0 20px 40px -15px rgba(2, 132, 199, 0.15)"
              }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="bg-white border border-slate-200 flex flex-col justify-between p-0 relative rounded-2xl group transition-all duration-300 overflow-hidden shadow-sm">
                {/* Top Cyber Laser Glow Accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-sky-600 transition-all duration-300 z-30"></div>

                {/* Image Frame */}
                <div className="relative h-56 overflow-hidden border-b border-slate-100">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-transparent to-black/20 z-10"></div>
                  {/* Status tag */}
                  <span className="absolute top-4 left-4 z-20 font-sans text-[9px] bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-1 rounded-lg tracking-wider uppercase font-bold">
                    {category.stats}
                  </span>
                  {!loadedImages[category.id] && (<div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                    <div className="w-8 h-8 border-2 border-sky-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>)}
                  <img src={category.image} alt={category.title} loading="lazy" onLoad={() => setLoadedImages(prev => ({ ...prev, [category.id]: true }))} className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-105 ${loadedImages[category.id] ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} referrerPolicy="no-referrer" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-sans font-bold text-base text-slate-900 uppercase">
                        {category.title}
                      </h3>
                      <div className="flex gap-1.5">
                        {category.highlights.map((brand, bIdx) => (<span key={bIdx} className="text-[9px] text-slate-500 border border-slate-200 px-2 py-0.5 bg-slate-50 rounded">
                          {brand}
                        </span>))}
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="space-y-2 mb-6 border-t border-b border-slate-100 py-4">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                        [ KEY SPECIFICATIONS ]
                      </span>
                      <div className="grid grid-cols-1 gap-1">
                        {category.features.map((feature, fIdx) => (<div key={fIdx} className="flex items-center gap-2 text-[11px] text-slate-700">
                          <div className="w-1.5 h-1.5 bg-sky-600 rounded-full"></div>
                          <span>{feature}</span>
                        </div>))}
                      </div>
                    </div>
                  </div>

                  <button onClick={() => {
                    setBlogCategoryFilter(category.filterValue);
                    setActiveTab("products");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }} className="w-full py-3 bg-slate-50 hover:bg-sky-600 text-sky-600 hover:text-white border border-slate-200 hover:border-sky-600 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer flex items-center justify-center gap-2">
                    <span>EXPLORE PRODUCTS</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.div>))}
            </motion.div>
          </div>
        </section>)}

        <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} showroomScanStatus={showroomScanStatus} setShowroomScanStatus={setShowroomScanStatus} activeShowroomHotspot={activeShowroomHotspot} setActiveShowroomHotspot={setActiveShowroomHotspot} setToastMessage={setToastMessage} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />
        {/* REMOVED OLD SHOWROOM */}
        {false && (<section className="py-24 px-8 border-b border-slate-100 bg-slate-50 relative z-20">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="font-sans font-extrabold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
                [ VIRTUAL TOUR COMPONENT ]
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
                Explore Nagpur Showroom
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Audit physical layout configurations and hardware systems directly from our live Nagpur mall viewport. Click on active hotspots to launch optical specifications, telemetry streams, and product diagnostics.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Panoramic Tour Viewer Frame */}
              <div className="lg:col-span-8 bg-white p-6 border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-between relative overflow-hidden">

                {/* Diagnostic bar */}
                <div className="flex flex-wrap justify-between items-center gap-2 mb-4 font-mono text-[10px] text-slate-500 uppercase border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping"></span>
                    <span className="font-bold text-slate-700">PANORAMIC NODE_01 ACTIVE</span>
                  </div>
                  <div className="flex gap-4">
                    <span>RESOLUTION: 4K ULTRA UHD</span>
                    <span>FOCAL: 2.8MM WIDE</span>
                  </div>
                </div>

                {/* Interactive Image Frame */}
                <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-slate-100 shadow-inner group">
                  {/* Panoramic Viewport Image */}
                  {!loadedImages["speShowroomTour"] && (<div className="absolute inset-0 flex items-center justify-center bg-slate-50 z-0">
                    <div className="w-8 h-8 border-2 border-sky-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>)}
                  <img src={speShowroomTour} alt="SPE Nagpur Showroom Panoramic Virtual Tour" loading="lazy" onLoad={() => setLoadedImages(prev => ({ ...prev, speShowroomTour: true }))} className={`w-full h-full object-cover transition-all duration-700 select-none scale-[1.05] ${loadedImages["speShowroomTour"] ? "opacity-100" : "opacity-0"}`} />

                  {/* Laser scanning visual indicator */}
                  {showroomScanStatus === "scanning" && (<div className="absolute inset-0 z-20 pointer-events-none bg-sky-500/5">
                    <motion.div initial={{ top: "0%" }} animate={{ top: "100%" }} transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }} className="absolute left-0 right-0 h-1 bg-sky-500 shadow-[0_0_15px_rgba(2,132,199,0.8)]" />
                  </div>)}

                  {/* Hotspot 1: CCTV Camera Dome */}
                  <button onClick={() => {
                    setActiveShowroomHotspot("h1");
                    setToastMessage("Auditing CCTV Camera Dome on Nagpur Showroom Board #1.");
                  }} className={`absolute z-30 group/spot flex items-center justify-center cursor-pointer`} style={{ top: "35%", left: "28%" }} title="AI PTZ Speed Dome Camera">
                    <span className="absolute inline-flex h-8 w-8 rounded-full bg-sky-500/30 animate-ping"></span>
                    <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h1" ? "bg-sky-600 scale-125" : "bg-sky-500 hover:bg-sky-600"}`}>
                      1
                    </span>
                    {/* Hotspot Name Overlay on Hover */}
                    <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                      AI PTZ Camera Dome
                    </span>
                  </button>

                  {/* Hotspot 2: Biometric Facial Gateway */}
                  <button onClick={() => {
                    setActiveShowroomHotspot("h2");
                    setToastMessage("Auditing Smart Biometric Face Latch at Showroom Entry Lane.");
                  }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "58%", left: "45%" }} title="Biometric Facial Gateway">
                    <span className="absolute inline-flex h-8 w-8 rounded-full bg-sky-500/30 animate-ping"></span>
                    <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h2" ? "bg-sky-600 scale-125" : "bg-sky-500 hover:bg-sky-600"}`}>
                      2
                    </span>
                    <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                      Facial Access Gate
                    </span>
                  </button>

                  {/* Hotspot 3: NVR Stack Rack */}
                  <button onClick={() => {
                    setActiveShowroomHotspot("h3");
                    setToastMessage("Auditing CCTV Storage Network Video Recorder Units.");
                  }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "42%", left: "68%" }} title="Enterprise NVR Storage Rack">
                    <span className="absolute inline-flex h-8 w-8 rounded-full bg-sky-500/30 animate-ping"></span>
                    <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h3" ? "bg-sky-600 scale-125" : "bg-sky-500 hover:bg-sky-600"}`}>
                      3
                    </span>
                    <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                      Enterprise NVR Stack
                    </span>
                  </button>

                  {/* Hotspot 4: Fiber Ring PoE Switch */}
                  <button onClick={() => {
                    setActiveShowroomHotspot("h4");
                    setToastMessage("Auditing High-Power Coaxial/Fiber Backbone Switch.");
                  }} className="absolute z-30 group/spot flex items-center justify-center cursor-pointer" style={{ top: "54%", left: "82%" }} title="Fiber Ring PoE Switch">
                    <span className="absolute inline-flex h-8 w-8 rounded-full bg-sky-500/30 animate-ping"></span>
                    <span className={`relative flex h-6 w-6 items-center justify-center rounded-full border border-sky-400 font-bold text-[10px] text-white shadow transition-all ${activeShowroomHotspot === "h4" ? "bg-sky-600 scale-125" : "bg-sky-500 hover:bg-sky-600"}`}>
                      4
                    </span>
                    <span className="absolute left-8 bg-slate-900/90 backdrop-blur-md text-white text-[9px] font-bold px-2 py-1 rounded border border-slate-700 pointer-events-none opacity-0 group-hover/spot:opacity-100 transition-opacity whitespace-nowrap shadow-md uppercase">
                      Fiber Ring PoE Switch
                    </span>
                  </button>

                  {/* Scanning State Overlay */}
                  {showroomScanStatus === "scanning" && (<div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[1px] flex items-center justify-center z-20">
                    <div className="bg-slate-900/90 border border-slate-700 text-white p-4 rounded-xl flex items-center gap-3 font-mono text-xs">
                      <Loader2 className="h-4 w-4 animate-spin text-sky-400" />
                      <span>LASER RADAR SEARCH ACTIVE - MAPPING DISPLAY NODES...</span>
                    </div>
                  </div>)}
                </div>

                {/* Quick controls panel */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-6">
                  <p className="text-slate-500 text-xs font-semibold uppercase font-sans">
                    [ Tip: Hover over hotspot node markers or click them to audit specifications. ]
                  </p>

                  <div className="flex gap-3">
                    <button onClick={() => {
                      setShowroomScanStatus("scanning");
                      setActiveShowroomHotspot(null);
                      setTimeout(() => {
                        setShowroomScanStatus("ready");
                        setActiveShowroomHotspot("h1");
                        setToastMessage("Laser radar complete! Found 4 display components configured on SPE terminal.");
                      }, 3500);
                    }} className="px-4 py-2 bg-sky-50 hover:bg-sky-100 text-sky-700 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-sky-200 transition-all cursor-pointer flex items-center gap-1.5">
                      <Scan className="h-3.5 w-3.5 animate-pulse" />
                      RUN AUTOSCAN SYSTEM
                    </button>
                    <button onClick={() => {
                      setActiveShowroomHotspot(null);
                      setShowroomScanStatus("idle");
                    }} className="px-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-wider rounded-lg border border-slate-200 transition-all cursor-pointer">
                      RESET PORT
                    </button>
                  </div>
                </div>
              </div>

              {/* Hotspot Audit Detail Panel */}
              <div className="lg:col-span-4 bg-white p-6 border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-4 border-b border-slate-100 mb-5">
                    <Terminal className="h-4 w-4 text-sky-600 shrink-0" />
                    <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-tight">
                      Component Diagnostic Unit
                    </h3>
                  </div>

                  {!activeShowroomHotspot ? (<div className="h-64 flex flex-col items-center justify-center text-center p-4 border border-dashed border-slate-200 rounded-2xl bg-slate-50/50">
                    <Eye className="h-10 w-10 text-slate-300 mb-3 animate-pulse" />
                    <span className="text-slate-700 text-xs font-bold block uppercase mb-1">NO ACTIVE NODE SELECTED</span>
                    <p className="text-slate-400 text-[10px] uppercase leading-relaxed font-semibold max-w-xs">
                      Select a node on the virtual viewport map to establish direct data link and display specifications.
                    </p>
                  </div>) : (<motion.div key={activeShowroomHotspot} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                    {activeShowroomHotspot === "h1" && (<>
                      <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                        <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ DISPLAY BOARD 1 - DOME OPTICS ]</span>
                        <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">AI PTZ Speed Dome Camera</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mt-2">
                          Our elite flagship camera on display board. Featuring 45x high focal magnification, smart AI human patrol sweeps, laser infrared targeting, and auto-tracking.
                        </p>
                      </div>

                      <div className="space-y-2 text-xs">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">RESOLUTION</span>
                            <span className="font-bold text-slate-800">4K Ultra HD (8MP)</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">NIGHT VISION</span>
                            <span className="font-bold text-slate-800">150m Laser Color</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">ZOOM SPEED</span>
                            <span className="font-bold text-slate-800">45x Optical Motor</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                            <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                        <div>&gt; cctv_node_1: sync successful</div>
                        <div>&gt; stream: H.265+ compress, 8192kbps</div>
                        <div>&gt; pan_angle: 182.4° // tilt: -12.5°</div>
                      </div>
                    </>)}

                    {activeShowroomHotspot === "h2" && (<>
                      <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                        <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ SHOWROOM ENTRY - BIOMETRIC LATCH ]</span>
                        <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">Facial Access Gate</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mt-2">
                          Secure high-speed facial recognition terminal with integrated mask audit compliance, anti-spoofing dual camera lens, and direct lock trigger interface.
                        </p>
                      </div>

                      <div className="space-y-2 text-xs">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">SENSING SPEED</span>
                            <span className="font-bold text-slate-800">&lt; 0.2 Seconds</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">CAPACITY</span>
                            <span className="font-bold text-slate-800">3,000 Faces</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">AUTH TYPE</span>
                            <span className="font-bold text-slate-800">Dual IR Stereo Lenses</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                            <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                        <div>&gt; biometric_entry_gateway: online</div>
                        <div>&gt; db_sync: 3,000 index keys verified</div>
                        <div>&gt; latch_relay: 12V solid-state OK</div>
                      </div>
                    </>)}

                    {activeShowroomHotspot === "h3" && (<>
                      <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                        <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ STORAGE CABINET - NVR STACKS ]</span>
                        <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">Enterprise NVR Stack</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mt-2">
                          Central 64-channel enterprise NVR recording engine. Supporting multi-SATA HDD redundancy arrays, hot-swapping drives, and intelligent backup triggers.
                        </p>
                      </div>

                      <div className="space-y-2 text-xs">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">CHANNELS</span>
                            <span className="font-bold text-slate-800">64 Live Camera Feeds</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">SATA STORAGE</span>
                            <span className="font-bold text-slate-800">Up to 80TB (8 Bays)</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">ENCODING</span>
                            <span className="font-bold text-slate-800">H.265+ Smart Codec</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                            <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                        <div>&gt; nvr_ch_stack_03: online</div>
                        <div>&gt; raid_5_state: healthy, disk_write active</div>
                        <div>&gt; thermal: 41.5°C // fans: high_speed</div>
                      </div>
                    </>)}

                    {activeShowroomHotspot === "h4" && (<>
                      <div className="bg-sky-50 p-4 border border-sky-100 rounded-2xl">
                        <span className="text-[9px] font-bold text-sky-700 uppercase block font-mono">[ POWER CABINET - GIGABIT BACKBONE ]</span>
                        <h4 className="text-base font-extrabold text-slate-900 uppercase font-sans mt-1">Fiber Ring PoE Switch</h4>
                        <p className="text-slate-500 text-xs leading-relaxed mt-2">
                          High-capacity Layer 2 managed PoE switch providing stable power and fast gigabit transmission across Nagpur fiber rings, complete with 6KV surge protection.
                        </p>
                      </div>

                      <div className="space-y-2 text-xs">
                        <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block font-mono">[ DYNAMIC SPECIFICATIONS ]</span>
                        <div className="grid grid-cols-2 gap-2 font-mono text-[10px]">
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">UPLINKS</span>
                            <span className="font-bold text-slate-800">2x 10G SFP+ Fiber</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">POE BUDGET</span>
                            <span className="font-bold text-slate-800">380W (Max 30W/port)</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">SURGE GUARD</span>
                            <span className="font-bold text-slate-800">6KV Lighting Protection</span>
                          </div>
                          <div className="bg-slate-50 p-2.5 border border-slate-100 rounded-xl">
                            <span className="text-slate-400 block font-sans">DIAGNOSTIC STATUS</span>
                            <span className="font-bold text-emerald-600">ONLINE // SECURE</span>
                          </div>
                        </div>
                      </div>

                      <div className="p-3.5 bg-slate-900 border border-slate-800 text-emerald-400 font-mono text-[9px] rounded-xl space-y-1">
                        <div>&gt; fiber_ring_sw_12: active</div>
                        <div>&gt; trunk_ports: link speed 1000Mbps</div>
                        <div>&gt; vlan_status: isolated ports active</div>
                      </div>
                    </>)}
                  </motion.div>)}
                </div>

                <div className="pt-6 border-t border-slate-100">
                  <button onClick={() => {
                    setBookingConfirmed(false);
                    setBookingForm({ name: "", phone: "", email: "", date: "", time: "", sector: "residential" });
                    setShowroomModalOpen(true);
                  }} className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white border border-sky-600 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-xl cursor-pointer flex items-center justify-center gap-2 shadow-sm">
                    <Calendar className="h-4 w-4" />
                    BOOK LIVE IN-PERSON GUIDED TOUR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>)}

        {/* PRODUCT REELS SECTION */}
        <section className="py-24 px-8 relative z-20 border-b border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="font-sans font-extrabold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">
                [ SURVEILLANCE IN ACTION // PRODUCT REELS ]
              </span>
              <h2 className="font-sans text-3xl md:text-5xl font-extrabold text-slate-900 uppercase tracking-tight mb-4">
                Live Demo Reels
              </h2>
              <p className="text-slate-500 text-sm max-w-2xl mx-auto leading-relaxed">
                Watch our latest hardware installations, intelligent AI tracking, and enterprise security configurations in action.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {reels.map((reel) => {
                const isPlaying = playingReels[reel.id] || false;
                const isMuted = mutedReels[reel.id] !== false;
                return (<motion.div key={reel.id} {...fadeInUp} className="relative aspect-[9/16] bg-slate-950 border border-slate-200/80 rounded-3xl overflow-hidden group shadow-md hover:shadow-xl hover:border-sky-500 transition-all duration-300">
                  {/* Video Element */}
                  <video id={`video-${reel.id}`} src={visibleReels[reel.id] ? reel.videoUrl : undefined} preload="none" className="absolute inset-0 w-full h-full object-cover z-0" playsInline loop muted={isMuted} onClick={() => togglePlayPause(reel.id)} onWaiting={() => setBufferingReels(prev => ({ ...prev, [reel.id]: true }))} onPlaying={() => setBufferingReels(prev => ({ ...prev, [reel.id]: false }))} onCanPlay={(e) => {
                    setBufferingReels(prev => ({ ...prev, [reel.id]: false }));
                    if (playingReels[reel.id]) {
                      e.currentTarget.play().catch(err => console.log("Inline play error:", err));
                    }
                  }} onLoadStart={() => {
                    if (playingReels[reel.id]) {
                      setBufferingReels(prev => ({ ...prev, [reel.id]: true }));
                    }
                  }} onSeeked={() => setBufferingReels(prev => ({ ...prev, [reel.id]: false }))} />

                  {/* Lightweight Standby Poster Overlay (Shown when video is not loaded yet) */}
                  {!visibleReels[reel.id] && (<div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center p-6 text-center select-none z-10">
                    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                    <div className="h-12 w-12 rounded-full bg-sky-500/10 border border-sky-500/20 flex items-center justify-center mb-3 animate-pulse">
                      <Video className="h-6 w-6 text-sky-400" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-widest text-sky-400 uppercase block">Surveillance Stream</span>
                    <span className="text-[8px] font-mono text-slate-500 uppercase mt-1 block">Standby • Click to Load</span>
                  </div>)}

                  {/* Custom Buffering / Loading Spinner */}
                  {bufferingReels[reel.id] && playingReels[reel.id] && (<div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] z-20 pointer-events-none">
                    <div className="w-10 h-10 border-2 border-sky-500 border-t-transparent rounded-full animate-spin mb-3"></div>
                    <span className="text-[9px] font-mono font-bold text-sky-400 tracking-wider uppercase animate-pulse">
                      Buffering Stream...
                    </span>
                  </div>)}

                  {/* Top Overlay (Category & Title) */}
                  <div className="absolute top-0 left-0 right-0 p-5 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-10 text-white pointer-events-none">
                    <span className="font-sans text-[9px] bg-sky-500/20 text-sky-300 border border-sky-500/30 px-2 py-0.5 rounded-md tracking-wider uppercase font-bold">
                      {reel.category}
                    </span>
                    <h4 className="font-sans font-bold text-sm tracking-tight mt-2.5 drop-shadow">
                      {reel.title}
                    </h4>
                  </div>

                  {/* Centered Large Play/Pause State Overlay */}
                  <div onClick={() => togglePlayPause(reel.id)} className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/10 group-hover:bg-black/20 transition-all duration-300">
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{
                      scale: isPlaying ? 1 : 1.1,
                      opacity: isPlaying ? 0 : 1
                    }} whileHover={{ scale: 1.2, opacity: 1 }} transition={{ duration: 0.2 }} className="w-14 h-14 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white transition-all shadow-lg">
                      {isPlaying ? (<Pause className="h-6 w-6 text-white fill-white" />) : (<Play className="h-6 w-6 text-white fill-white translate-x-0.5" />)}
                    </motion.div>
                  </div>

                  {/* Bottom Overlay (Metrics & Controls) */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 flex flex-col gap-3 pointer-events-none">
                    <div className="flex justify-between items-center text-white/90 font-mono text-[10px]">
                      <div className="flex items-center gap-1">
                        <Eye className="h-3.5 w-3.5 text-sky-400" />
                        <span>{reel.views} views</span>
                      </div>
                      <button className="pointer-events-auto flex items-center gap-1 hover:text-rose-400 transition-colors cursor-pointer" onClick={(e) => {
                        e.stopPropagation();
                        setReels(prev => prev.map(r => r.id === reel.id ? { ...r, likes: r.likes + 1 } : r));
                      }}>
                        <Heart className="h-3.5 w-3.5 text-rose-500 fill-rose-500" />
                        <span>{reel.likes}</span>
                      </button>
                    </div>

                    <div className="flex justify-start items-center pt-2 border-t border-white/10">
                      {/* Left: Play/Pause Small Indicator */}
                      <button onClick={(e) => {
                        e.stopPropagation();
                        togglePlayPause(reel.id);
                      }} className="pointer-events-auto w-8 h-8 rounded-full bg-sky-600 hover:bg-sky-500 text-white flex items-center justify-center transition-all cursor-pointer shadow animate-none">
                        {isPlaying ? (<Pause className="h-4 w-4" />) : (<Play className="h-4 w-4 translate-x-0.5" />)}
                      </button>
                    </div>
                  </div>

                  {/* Floating Bottom-Right Mute/Unmute Toggle Button */}
                  <button onClick={(e) => {
                    e.stopPropagation();
                    setMutedReels(prev => ({ ...prev, [reel.id]: !isMuted }));
                  }} className="absolute bottom-5 right-5 z-30 pointer-events-auto w-11 h-11 rounded-full bg-slate-950/90 hover:bg-slate-900 text-white flex items-center justify-center backdrop-blur-md transition-all cursor-pointer border border-white/20 shadow-xl active:scale-95 group/mute" title={isMuted ? "Unmute Video" : "Mute Video"}>
                    {isMuted ? (<VolumeX className="h-5 w-5 text-rose-400 animate-pulse" />) : (<Volume2 className="h-5 w-5 text-sky-400" />)}
                  </button>
                </motion.div>);
              })}
            </div>
          </div>
        </section>

        {/* OUR MISSION SECTION */}
        <motion.section {...fadeInUp} className="py-24 px-8 relative z-20 border-b border-slate-100 bg-slate-50">
          <div className="max-w-4xl mx-auto text-center">
            <span className="font-sans font-bold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">[ OUR VISION &amp; SLA VALUES ]</span>
            <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 uppercase">Our Vision &amp; Mission</h2>
            <div className="h-[2px] w-20 bg-sky-600 mx-auto mb-8"></div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
              Deliver innovative, reliable, and complete security solutions with exceptional customer support. We custom-engineer systems that protect Nagpur's leading commercial, financial, and industrial properties with absolute technological integrity.
            </p>
          </div>
        </motion.section>

        {/* CORPORATE HOME ADDITIONS */}
        <ScrollableTestimonials />
        <OurThought />
        <OurBlogs />
        <Careers />
        <FAQSection />
        <CorporateContactForm />
        <OurLocation contactData={contactData} />
      </motion.div>)}        {activeTab === "ecosystem" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        {/* ECOSYSTEM / SOLUTIONS GRID SECTION */}
        <section className="py-24 px-8 bg-[#08090C] relative z-20 border-b border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 font-mono">[ 03 // MODULARSURVEILLANCE ]</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Our Ecosystem</h2>
              <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">Click on any core ecosystem hardware component to launch its interactive specifications, compatible models, and live virtual system simulator.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-[#0F0F0F] border border-[#2A2A2A]">
              {SOLUTIONS_DATA.map((solution, idx) => (<motion.div key={solution.id} variants={staggerItem} whileHover={{ scale: 1.05 }} onClick={() => setSelectedSolution(solution)} className="p-6 lg:p-8 flex flex-col items-center text-center transition-all duration-300 group cursor-pointer border border-[#2A2A2A] hover:bg-[#121212] relative">
                <span className="absolute top-2 left-2 text-[9px] font-mono text-[#888888]">[ 0{idx + 1} ]</span>
                <div className="p-4 bg-[#121212] border border-[#2A2A2A] mb-4 group-hover:border-[#FF5A00] transition-all duration-300">
                  {getIcon(solution.iconName, "h-8 w-8 text-[#FF5A00] group-hover:text-white")}
                </div>
                <span className="font-headline font-bold text-xs uppercase tracking-wider text-white mb-2">{solution.title}</span>
                <span className="text-[9px] text-[#FF5A00] font-mono tracking-widest uppercase group-hover:text-white flex items-center gap-1">
                  LAUNCH SIM <ChevronRight className="h-3 w-3" />
                </span>
              </motion.div>))}
            </motion.div>
          </div>
        </section>

        <SectorsWeProtect selectedSector={selectedSector} setSelectedSector={setSelectedSector} setCalcInput={setCalcInput} />
        {/* REMOVED OLD SECTORS WE PROTECT */}
        {false && (<section className="py-24 px-8 relative z-20 border-b border-[#2A2A2A] bg-[#0A0E1A]/40">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 font-mono">[ 04 // SECTORBLUEPRINTS ]</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Sectors We Protect</h2>
              <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">We custom-engineer protection models tailored to specific operational risks. Select a sector below to explore architectural details and real case-studies.</p>
            </motion.div>

            <motion.div variants={staggerContainer} initial="initial" whileInView="whileInView" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-2 md:grid-cols-5 gap-0 bg-[#0F0F0F] border border-[#2A2A2A] mb-12">
              {SECTORS_DATA.map((sector, idx) => (<motion.div key={sector.id} variants={staggerItem} whileHover={{ y: -6 }} onClick={() => setSelectedSector(sector)} className="p-5 lg:p-6 flex flex-col items-center text-center hover:bg-[#121212] transition-all duration-300 group cursor-pointer border border-[#2A2A2A] relative animate-none">
                <span className="absolute top-2 left-2 text-[9px] font-mono text-[#888888]">[ 0{idx + 1} ]</span>
                <div className="p-3 bg-[#121212] border border-[#2A2A2A] mb-3 group-hover:border-[#FF5A00] transition-all">
                  {sector.id === "residential" && <Home className="h-6 w-6 text-[#FF5A00]" />}
                  {sector.id === "commercial" && <Building className="h-6 w-6 text-[#FF5A00]" />}
                  {sector.id === "healthcare" && <HeartPulse className="h-6 w-6 text-[#FF5A00]" />}
                  {sector.id === "banking" && <Briefcase className="h-6 w-6 text-[#FF5A00]" />}
                  {sector.id === "industrial" && <Factory className="h-6 w-6 text-[#FF5A00]" />}
                </div>
                <span className="font-headline font-bold text-xs uppercase tracking-wider text-white mb-1">{sector.title}</span>
                <span className="text-[10px] font-mono text-[#FF5A00] opacity-70">RISK: {sector.threatLevel.toUpperCase()}</span>
              </motion.div>))}
            </motion.div>

            {/* Expanded sector details frame */}
            <div className="bg-[#121212] p-8 border border-[#2A2A2A] max-w-5xl mx-auto rounded-none">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="w-full lg:w-1/3">
                  <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase block mb-2 font-mono">[ ACTIVE ARCHITECTURE ]</span>
                  <h3 className="font-headline text-xl font-bold text-white mb-4 uppercase tracking-wider">
                    {selectedSector ? selectedSector.title : "Sectors Safety Architecture"}
                  </h3>
                  <div className="p-4 bg-[#0F0F0F] border border-[#2A2A2A] mb-4 rounded-none">
                    <div className="flex justify-between items-center mb-2 font-mono text-[11px]">
                      <span className="text-[#888888] uppercase">SLA Timeline</span>
                      <span className="font-semibold text-white">{selectedSector ? selectedSector.implementationTimeline : "N/A"}</span>
                    </div>
                    <div className="flex justify-between items-center font-mono text-[11px]">
                      <span className="text-[#888888] uppercase">Vulnerability</span>
                      <span className={`font-bold px-2 py-0.5 rounded-none ${selectedSector?.threatLevel === "Critical" ? "bg-red-950/40 text-red-400 border border-red-900" :
                        selectedSector?.threatLevel === "High" ? "bg-orange-950/40 text-orange-400 border border-orange-900" : "bg-orange-950/20 text-[#FF5A00] border border-orange-900/50"}`}>
                        {selectedSector ? selectedSector.threatLevel.toUpperCase() : "STANDARD"}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => {
                    if (selectedSector) {
                      setCalcInput(prev => ({ ...prev, premisesType: selectedSector.id }));
                    }
                    const target = document.getElementById("planner-wizard");
                    if (target)
                      target.scrollIntoView({ behavior: "smooth" });
                  }} className="w-full bg-[#FF5A00] hover:bg-[#E04E00] text-white font-headline font-bold text-[10px] tracking-widest uppercase py-3 border border-[#FF5A00] transition-all flex items-center justify-center gap-2 font-mono rounded-none cursor-pointer">
                    <Calculator className="h-4 w-4" />
                    LOAD IN PLANNER
                  </button>
                </div>

                <div className="w-full lg:w-2/3 border-t lg:border-t-0 lg:border-l border-[#2A2A2A] pt-6 lg:pt-0 lg:pl-8">
                  <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest mb-3 font-mono">[ SOLUTIONS BLUEPRINT ]</h4>
                  <p className="text-sm text-white font-medium mb-4">{selectedSector ? selectedSector.focusTitle : "Select any sector above to load standard layouts."}</p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                      <h5 className="text-[11px] font-headline font-bold text-[#FF5A00] uppercase tracking-wider mb-2">[ REQUIREMENTS ]</h5>
                      <ul className="space-y-2 text-xs text-on-surface-variant">
                        {(selectedSector || SECTORS_DATA[0]).keyRequirements.map((req, idx) => (<li key={idx} className="flex items-start gap-2 font-mono">
                          <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-[11px] font-headline font-bold text-[#FF5A00] uppercase tracking-wider mb-2">[ ARCHITECTURES ]</h5>
                      <ul className="space-y-2 text-xs text-on-surface-variant">
                        {(selectedSector || SECTORS_DATA[0]).architectures.map((arch, idx) => (<li key={idx} className="flex items-start gap-2 font-mono">
                          <ShieldCheck className="h-3.5 w-3.5 text-white shrink-0 mt-0.5" />
                          <span>{arch}</span>
                        </li>))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)}

        <SurveillancePlanner calcInput={calcInput} setCalcInput={setCalcInput} calcResult={calcResult} setCalcResult={setCalcResult} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />
        {/* REMOVED OLD PLANNER */}
        {false && (<section id="planner-wizard" className="py-24 px-8 bg-[#08090C] relative z-20 border-b border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-16">
              <span className="font-headline font-bold text-[10px] text-[#FF5A00] tracking-widest uppercase block mb-3 font-mono">[ 05 // SURVEILLANCEPLANNER ]</span>
              <h2 className="font-headline text-3xl md:text-4xl font-bold text-white uppercase tracking-wider">Surveillance Planner</h2>
              <p className="text-on-surface-variant mt-4 text-xs max-w-2xl mx-auto font-mono uppercase tracking-wider">Configure your building layout, coverage requirements, and quality parameters. Our engine automatically calculates complete hardware specifications, storage arrays, UPS backup requirements, and estimated labor timelines.</p>
            </motion.div>

            <motion.div {...fadeInUp} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
              {/* Input Form Column */}
              <div className="lg:col-span-5 bg-[#121212] p-6 border border-[#2A2A2A] space-y-5 rounded-none">
                <h3 className="font-headline font-bold text-sm text-white pb-3 border-b border-[#2A2A2A] flex items-center gap-2 uppercase tracking-wider font-mono">
                  <Calculator className="h-4 w-4 text-[#FF5A00]" />
                  [ PREMISES CONFIG ]
                </h3>

                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Premises Type ]</label>
                  <select value={calcInput.premisesType} onChange={(e) => setCalcInput(prev => ({ ...prev, premisesType: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FF5A00] font-mono">
                    <option value="home">Residential (Home/Apartment)</option>
                    <option value="office">Commercial Office Building</option>
                    <option value="retail">Retail Shop / Showroom</option>
                    <option value="warehouse">Industrial Warehouse</option>
                    <option value="industrial">Heavy Machinery Manufacturing Facility</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Indoor Cams ]</label>
                    <input type="number" min="0" max="128" value={calcInput.indoorCams} onChange={(e) => setCalcInput(prev => ({ ...prev, indoorCams: Math.max(0, parseInt(e.target.value) || 0) }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] font-mono" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Outdoor Cams ]</label>
                    <input type="number" min="0" max="128" value={calcInput.outdoorCams} onChange={(e) => setCalcInput(prev => ({ ...prev, outdoorCams: Math.max(0, parseInt(e.target.value) || 0) }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] font-mono" />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Area Size ]</label>
                    <span className="text-xs text-[#FF5A00] font-bold font-mono">{calcInput.areaSizeSqFt.toLocaleString()} SQFT</span>
                  </div>
                  <input type="range" min="500" max="50000" step="500" value={calcInput.areaSizeSqFt} onChange={(e) => setCalcInput(prev => ({ ...prev, areaSizeSqFt: parseInt(e.target.value) }))} className="w-full accent-[#FF5A00] bg-[#0F0F0F] h-1.5 cursor-pointer" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Stream Resolution ]</label>
                    <div className="flex bg-[#0F0F0F] p-1 border border-[#2A2A2A] rounded-none">
                      <button onClick={() => setCalcInput(prev => ({ ...prev, resolution: "1080p" }))} className={`flex-1 text-[10px] py-1.5 rounded-none font-bold font-mono transition-all uppercase tracking-wider cursor-pointer ${calcInput.resolution === "1080p" ? "bg-[#FF5A00] text-white" : "text-on-surface-variant hover:text-white"}`}>
                        1080P FHD
                      </button>
                      <button onClick={() => setCalcInput(prev => ({ ...prev, resolution: "4K" }))} className={`flex-1 text-[10px] py-1.5 rounded-none font-bold font-mono transition-all uppercase tracking-wider cursor-pointer ${calcInput.resolution === "4K" ? "bg-[#FF5A00] text-white" : "text-on-surface-variant hover:text-white"}`}>
                        4K UHD
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono">[ Storage Retention ]</label>
                    <select value={calcInput.retentionDays} onChange={(e) => setCalcInput(prev => ({ ...prev, retentionDays: parseInt(e.target.value) }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] rounded-none px-2 py-2 text-xs text-white focus:outline-none font-mono">
                      <option value="7">7 Days Logging</option>
                      <option value="15">15 Days Logging</option>
                      <option value="30">30 Days Logging</option>
                      <option value="60">60 Days Logging</option>
                      <option value="95">90 Days Enterprise</option>
                    </select>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3.5 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white uppercase font-mono tracking-wider">[ Continuous Recording ]</span>
                    <span className="text-[9px] text-on-surface-variant font-mono uppercase">Saves 24/7 continuous log feeds.</span>
                  </div>
                  <input type="checkbox" checked={calcInput.continuousRecording} onChange={(e) => setCalcInput(prev => ({ ...prev, continuousRecording: e.target.checked }))} className="w-4 h-4 text-[#FF5A00] bg-gray-100 border-gray-300 rounded-none accent-[#FF5A00] cursor-pointer" />
                </div>
              </div>

              {/* Results Column */}
              <div className="lg:col-span-7 space-y-4">
                {calcResult ? (<div className="bg-[#121212] p-6 border border-[#2A2A2A] rounded-none">
                  <div className="flex justify-between items-center pb-4 border-b border-[#2A2A2A] mb-6">
                    <h3 className="font-headline font-bold text-sm text-[#FF5A00] flex items-center gap-2 uppercase tracking-wider font-mono">
                      <ShieldCheck className="h-4 w-4 text-[#FF5A00]" />
                      [ CALCULATED SECURITY PROPOSAL ]
                    </h3>
                    <span className="font-mono text-[9px] text-[#888888]">[ PLAN_ID: SPE-{(calcInput.areaSizeSqFt * calcInput.indoorCams).toString().slice(0, 4)} ]</span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-0 bg-[#0F0F0F] border border-[#2A2A2A] divide-x divide-[#2A2A2A]">
                    <div className="p-4 text-center">
                      <Video className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                      <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ TOTAL CAMS ]</span>
                      <span className="text-xl font-bold font-mono text-white">{calcResult.recommendedCameras}</span>
                    </div>
                    <div className="p-4 text-center">
                      <Network className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                      <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ NVR SIZING ]</span>
                      <span className="text-xl font-bold font-mono text-white">{calcResult.nvrChannels} CH</span>
                    </div>
                    <div className="p-4 text-center">
                      <HardDrive className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                      <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ STORAGE ]</span>
                      <span className="text-xl font-bold font-mono text-white">{calcResult.storageRequiredTB} TB</span>
                    </div>
                    <div className="p-4 text-center">
                      <Zap className="h-4 w-4 text-[#FF5A00] mx-auto mb-2" />
                      <span className="text-[9px] text-on-surface-variant block uppercase font-mono">[ UPS VA ]</span>
                      <span className="text-xl font-bold font-mono text-white">{calcResult.backupUpsRatingVA} VA</span>
                    </div>
                  </div>

                  {/* Recommendations detailed list */}
                  <div className="space-y-4 mb-6 mt-6">
                    <div>
                      <h4 className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono mb-2">[ Recommended HDD Configuration ]</h4>
                      <p className="text-xs text-white bg-[#0F0F0F] p-3 border border-[#2A2A2A] flex items-center gap-2 font-mono">
                        <HardDrive className="h-4 w-4 text-[#FF5A00] shrink-0" />
                        {calcResult.recommendedStorageHDD}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest font-mono mb-2">[ Included Installation Hardware BOM ]</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-on-surface-variant font-mono">
                        {calcResult.recommendedSpecs.map((spec, idx) => (<div key={idx} className="flex items-start gap-2 bg-[#0F0F0F] p-2.5 border border-[#2A2A2A]">
                          <CheckCircle2 className="h-3.5 w-3.5 text-[#FF5A00] mt-0.5 shrink-0" />
                          <span>{spec}</span>
                        </div>))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4 border-t border-[#2A2A2A]">
                    <div className="flex gap-4 text-xs font-mono text-on-surface-variant">
                      <div>
                        <span className="block text-[8px] uppercase text-[#888888] font-bold">[ Network Cabling ]</span>
                        <span className="text-white font-bold">{calcResult.estimatedCablesMeters} M CAT6</span>
                      </div>
                      <div>
                        <span className="block text-[8px] uppercase text-[#888888] font-bold">[ Deploy Timeline ]</span>
                        <span className="text-white font-bold">{calcResult.estimatedLaborDays} Days Labor</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button onClick={() => {
                        window.print();
                      }} className="px-5 py-3 border border-sky-600 hover:border-sky-700 bg-sky-50 text-sky-700 hover:bg-sky-100 font-headline font-bold text-[10px] tracking-widest uppercase transition-all duration-300 font-mono rounded-none cursor-pointer flex items-center gap-2" title="Print Proposal and Equipment Details">
                        <Printer className="h-3.5 w-3.5 text-sky-600" />
                        PRINT QUOTE
                      </button>

                      <button onClick={() => {
                        setBookingConfirmed(false);
                        setBookingForm(prev => ({
                          ...prev,
                          sector: calcInput.premisesType
                        }));
                        setShowroomModalOpen(true);
                      }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white font-headline font-bold text-[10px] tracking-widest uppercase px-6 py-3 border border-[#FF5A00] transition-all duration-300 font-mono rounded-none cursor-pointer">
                        BOOK ASSESSMENT
                      </button>
                    </div>
                  </div>
                </div>) : (<div className="bg-[#121212] p-12 text-center border border-[#2A2A2A] flex flex-col items-center justify-center h-full rounded-none">
                  <AlertTriangle className="h-8 w-8 text-orange-400 mb-4" />
                  <h3 className="font-headline font-bold text-sm text-white mb-2 uppercase tracking-wider font-mono">[ Configure Camera Sizing ]</h3>
                  <p className="text-[11px] text-on-surface-variant max-w-sm font-mono">Please set at least 1 indoor or 1 outdoor camera to dynamically generate your security topology and bill-of-materials.</p>
                </div>)}
              </div>
            </motion.div>
          </div>
        </section>)}
      </motion.div>)}

      {activeTab === "gallery" && (<GallerySection setLightboxIndex={setLightboxIndex} galleryItems={GALLERY_ITEMS} />)}

      {activeTab === "careers" && (<CareersPage careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />)}

      {activeTab === "products" && (<ProductsCatalog products={products} productCategories={productCategories} customerUser={customerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} />)}

      {activeTab === "testimonials" && (<TestimonialsPage testimonials={testimonials} setTestimonials={setTestimonials} setToastMessage={setToastMessage} />)}

      {activeTab === "blog" && (<BlogSection subscribers={subscribers} setSubscribers={setSubscribers} setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />)}

      {activeTab === "about" && (<AboutUs />)}

      {activeTab === "contact" && (<ContactUs logoData={logoData} setSupportTickets={setSupportTickets} setToastMessage={setToastMessage} />)}

      {/* CUSTOMER LOGIN & SIGNUP PAGES */}
      {(activeTab === "login" || activeTab === "signup") && (<AuthSection activeTab={activeTab} setActiveTab={setActiveTab} registeredCustomers={registeredCustomers} setRegisteredCustomers={setRegisteredCustomers} setCustomerUser={setCustomerUser} setToastMessage={setToastMessage} />)}
    </div>

    {/* FOOTER */}
    <footer className="bg-[#121212] w-full mt-24 border-t border-[#2A2A2A] px-8 py-16 relative z-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-headline text-xl font-bold text-white tracking-widest uppercase font-mono">[ {logoData.companyName || "SPE"} // {logoData.companySuffix || "NAGPUR"} ]</span>
          {/* // {logoData.companySuffix || "NAGPUR"} </span> */}
          <p className="font-body-md text-xs text-on-surface-variant leading-relaxed">
            Central India's premier destination for enterprise-grade security systems, advanced surveillance optics, and technology infrastructure.
          </p>
          <div className="flex items-start gap-2.5 mt-2">
            <MapPin className="h-4 w-4 text-[#FF5A00] mt-0.5 shrink-0" />
            <span className="font-headline text-[10px] font-semibold tracking-wider text-on-surface-variant uppercase font-mono">{(logoData.companySuffix || "NAGPUR")?.toUpperCase()}, MAHARASHTRA, INDIA</span>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:col-span-3">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase font-mono">[ Solutions ]</span>
            <a href="#ecosystem" className="text-xs text-on-surface-variant hover:text-white transition-colors">Surveillance Systems</a>
            <a href="#ecosystem" className="text-xs text-on-surface-variant hover:text-white transition-colors">Biometric Locking</a>
            <a href="#ecosystem" className="text-xs text-on-surface-variant hover:text-white transition-colors">Backup Grids</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase font-mono">[ Company ]</span>
            <button onClick={() => { setActiveTab("about"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
              About Us
            </button>
            <button onClick={() => { setActiveTab("gallery"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
              Gallery / Portfolio
            </button>
            <button onClick={() => { setActiveTab("careers"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
              Careers
            </button>
            <button onClick={() => { setActiveTab("blog"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="text-xs text-left text-on-surface-variant hover:text-sky-400 transition-colors cursor-pointer">
              Safety Blog
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase font-mono">[ Legal ]</span>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-on-surface-variant hover:text-white transition-colors">Terms of Service</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="text-xs text-on-surface-variant hover:text-white transition-colors">SLA Agreements</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant">
        <p onClick={() => {
          const now = Date.now();
          const isAuthAdmin = customerUser && adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase());
          if (!isAuthAdmin) {
            return;
          }
          if (now - secretLastClick < 2500) {
            const newCount = secretClickCount + 1;
            setSecretClickCount(newCount);
            if (newCount >= 2) {
              setAdminLoginOpen(true);
              setAdminError("");
              setAdminPasscode("");
              setSecretClickCount(0);
            }
          }
          else {
            setSecretClickCount(1);
          }
          setSecretLastClick(now);
        }} className="opacity-70 text-center md:text-left font-mono text-[10px] cursor-pointer select-none hover:text-white transition-all duration-300">
          © 2026 {(logoData.companyName && logoData.companySuffix ? `${logoData.companyName} ${logoData.companySuffix}` : "SECURITY PLUS ELECTRONICS")?.toUpperCase()}. ALL RIGHTS RESERVED. POWERED BY SYSTEM INTEGRITY.
        </p>
        <div className="flex gap-4">
          <Globe className="h-4 w-4 hover:text-[#FF5A00] cursor-pointer transition-colors" />
        </div>
      </div>
    </footer >
    {/* DETAILED INTERACTIVE SOLUTION MODAL */}
    < AnimatePresence >
      {selectedSolution && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-4xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl rounded-none">
          {/* Modal Header */}
          <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center shrink-0">
            <div className="flex items-center gap-3">
              {getIcon(selectedSolution.iconName, "h-6 w-6 text-[#FF5A00]")}
              <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider font-mono">{selectedSolution.title}</h3>
            </div>
            <button onClick={() => setSelectedSolution(null)} className="text-on-surface-variant hover:text-white p-2 hover:bg-white/5 transition-all">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto flex-1 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Specs & Info */}
              <div className="space-y-4">
                <p className="text-xs text-on-surface-variant leading-relaxed font-mono uppercase">[ {selectedSolution.shortDesc} ]</p>

                <div>
                  <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ Premium Brand Partners ]</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSolution.brandPartners.map((b, idx) => (<span key={idx} className="text-[10px] px-2.5 py-1 bg-[#0F0F0F] border border-[#2A2A2A] text-white font-medium font-mono uppercase">
                      {b}
                    </span>))}
                  </div>
                </div>

                <div>
                  <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ Key Hardware Capabilities ]</h4>
                  <ul className="space-y-2 text-xs text-on-surface-variant font-mono">
                    {selectedSolution.features.map((f, idx) => (<li key={idx} className="flex items-start gap-2">
                      <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>))}
                  </ul>
                </div>
              </div>

              {/* Right Dynamic Live Interactive Simulator */}
              <div className="bg-[#0F0F0F] p-5 border border-[#2A2A2A] space-y-4 flex flex-col justify-between rounded-none">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold text-[#FF5A00] tracking-widest uppercase flex items-center gap-1.5 font-mono">
                    <Terminal className="h-4 w-4 animate-pulse" />
                    Virtual Hardware Simulator
                  </span>
                  <span className="text-[9px] bg-blue-950/40 text-blue-400 border border-blue-900 font-mono px-2 py-0.5">STATUS: ONLINE</span>
                </div>

                {/* DYNAMIC CONTENT PER SYSTEM TYPE */}
                {selectedSolution.id === "cctv" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                  <div className={`aspect-video overflow-hidden border border-[#2A2A2A] relative flex items-center justify-center rounded-none ${cctvNightMode ? "bg-[#111e11]" : "bg-[#0b141e]"}`}>
                    <div className="absolute top-2 left-2 text-[9px] font-mono text-white/70 bg-black/60 px-1.5 py-0.5 flex items-center gap-1">
                      <div className="w-2 h-2 bg-red-600 animate-pulse"></div>
                      CAM01 - LIVE FEED ({cctvRes})
                    </div>

                    {/* Feed Visual representation */}
                    {cctvNightMode ? (<div className="text-center p-4">
                      <Eye className="h-6 w-6 text-green-400 mx-auto mb-2 animate-pulse" />
                      <span className="text-xs font-mono text-green-400 block uppercase">Night Vision: Active (0 Lux IR)</span>
                      <span className="text-[9px] text-green-500/70 font-mono block">ColorVu Color-Recovery Active</span>
                    </div>) : (<div className="text-center p-4">
                      <Video className="h-6 w-6 text-[#FF5A00] mx-auto mb-2" />
                      <span className="text-xs font-mono text-[#FF5A00] block uppercase">Day Mode: Optical Crisp</span>
                      <span className="text-[9px] text-on-surface-variant/70 font-mono block">Daylight Starlight Sensors Online</span>
                    </div>)}

                    <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/50">
                      {cctvFps} FPS | H.265+ Codec
                    </div>
                  </div>

                  <div className="space-y-3 bg-[#121212] p-3 border border-[#2A2A2A] rounded-none">
                    <div className="flex justify-between items-center font-mono text-xs">
                      <span className="text-on-surface-variant font-medium">Resolution Preset</span>
                      <div className="flex gap-1.5">
                        {["1080p", "4K", "8K"].map(res => (<button key={res} onClick={() => setCctvRes(res)} className={`px-2 py-0.5 text-[9px] font-mono rounded-none ${cctvRes === res ? "bg-[#FF5A00] text-white" : "bg-[#0F0F0F] border border-[#2A2A2A] text-on-surface-variant hover:text-white"}`}>
                          {res}
                        </button>))}
                      </div>
                    </div>

                    <div className="flex justify-between items-center pt-2 border-t border-[#2A2A2A] font-mono text-xs">
                      <span className="text-on-surface-variant font-medium">Ambient Light</span>
                      <button onClick={() => setCctvNightMode(!cctvNightMode)} className="bg-[#0F0F0F] hover:bg-white/5 text-[9px] px-3 py-1 text-white flex items-center gap-1.5 border border-[#2A2A2A] rounded-none font-mono uppercase">
                        <RefreshCw className="h-3 w-3" />
                        Toggle Night (0 Lux)
                      </button>
                    </div>
                  </div>
                </div>)}

                {selectedSolution.id === "ptz_cameras" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                  <div className="aspect-video overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] relative flex flex-col justify-between p-3 font-mono rounded-none">
                    <div className="flex justify-between text-[9px] text-[#FF5A00]">
                      <span>CAM02 - PTZ SPEED DOME TELEMETRY</span>
                      <span className="animate-pulse">● MOTOR ONLINE</span>
                    </div>

                    {/* Active scanning wireframes */}
                    <div className="flex-1 flex items-center justify-center relative">
                      {aiActiveScan === "face" && (<div className="border border-[#FF5A00] w-24 h-24 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                        <span className="text-[8px] text-[#FF5A00] bg-[#FF5A00]/10 block px-1 self-start">HORIZONTAL SWEEP</span>
                        <span className="text-[8px] text-white self-end">PAN: 360°</span>
                      </div>)}
                      {aiActiveScan === "vehicle" && (<div className="border border-green-500 w-32 h-20 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                        <span className="text-[8px] text-green-400 bg-green-400/10 block px-1 self-start">OPTICAL FOCUS</span>
                        <span className="text-[8px] text-white self-end">ZOOM: 45x</span>
                      </div>)}
                      {aiActiveScan === "tripwire" && (<div className="w-full h-full relative flex items-center justify-center">
                        <div className="absolute w-11/12 h-11/12 border border-red-500/20 rounded-none animate-ping"></div>
                        <div className="border border-red-500 w-24 h-16 rounded-none relative flex flex-col justify-between p-1">
                          <span className="text-[8px] text-red-500 bg-red-950 px-1 border border-red-500 self-start">LASER IR ON</span>
                          <span className="text-[8px] text-white self-end">RANGE: 150M</span>
                        </div>
                      </div>)}
                      {aiActiveScan === "safety" && (<div className="border border-orange-400 w-28 h-20 relative animate-pulse flex flex-col justify-between p-1 rounded-none">
                        <span className="text-[8px] text-orange-400 bg-orange-400/10 block px-1 self-start">PATROL ACTIVE</span>
                        <span className="text-[8px] text-white self-end">ROUTE #2</span>
                      </div>)}
                      {!aiActiveScan && (<span className="text-[10px] text-on-surface-variant font-mono">Ready. Click PTZ controls below to test motors.</span>)}
                    </div>

                    {/* Terminal lines */}
                    <div className="text-[8px] text-on-surface-variant max-h-[40px] overflow-hidden leading-tight border-t border-[#2A2A2A] pt-1">
                      {aiScanLogs.map((l, idx) => (<div key={idx} className="truncate">&gt; {l}</div>))}
                    </div>
                  </div>

                  {/* Interactive testing buttons */}
                  <div className="grid grid-cols-2 gap-2 font-mono">
                    <button onClick={() => triggerAiScan("face")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                      Pan 360° Sweep
                    </button>
                    <button onClick={() => triggerAiScan("vehicle")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                      Zoom 45x Lens
                    </button>
                    <button onClick={() => triggerAiScan("tripwire")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                      Laser Night IR
                    </button>
                    <button onClick={() => triggerAiScan("safety")} className="bg-[#121212] hover:bg-white/5 text-[9px] text-white py-1.5 rounded-none border border-[#2A2A2A]">
                      Run Patrol Tour
                    </button>
                  </div>
                </div>)}

                {selectedSolution.id === "networking" && (<div className="space-y-4 flex-1 flex flex-col justify-center">
                  <div className="aspect-video overflow-hidden border border-[#2A2A2A] bg-[#0F0F0F] p-4 flex flex-col justify-between rounded-none">
                    <span className="text-[9px] font-mono text-[#FF5A00] uppercase">[ Active Topology Mesh ]</span>

                    {/* Animated Nodes connection representation */}
                    <div className="flex justify-between items-center relative my-4 px-4">
                      {/* Connection Lines */}
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#FF5A00]/40 z-0"></div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                          <Video className="h-4 w-4" />
                        </div>
                        <span className="text-[8px] font-mono mt-1">4K Cam</span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                          <Network className="h-4 w-4" />
                        </div>
                        <span className="text-[8px] font-mono mt-1">PoE Switch</span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                          <HardDrive className="h-4 w-4" />
                        </div>
                        <span className="text-[8px] font-mono mt-1">NVR Unit</span>
                      </div>

                      <div className="relative z-10 flex flex-col items-center">
                        <div className="p-2 bg-[#121212] border border-[#FF5A00] text-[#FF5A00] animate-pulse">
                          <Router className="h-4 w-4" />
                        </div>
                        <span className="text-[8px] font-mono mt-1">Fiber Wan</span>
                      </div>
                    </div>

                    <div className="bg-[#121212] p-2.5 border border-[#2A2A2A] text-[8px] font-mono text-on-surface-variant flex justify-between rounded-none">
                      <span>SFP Fiber Bandwidth: 10 Gbps</span>
                      <span className="text-green-400">Packet Loss: 0.00%</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-on-surface-variant text-center font-mono">SPE optical backplanes support up to 1000 simultaneous streams with active routing separation.</p>
                </div>)}

                {selectedSolution.id === "power" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                  <div className="bg-[#0F0F0F] p-4 border border-[#2A2A2A] space-y-3 rounded-none">
                    <span className="text-[9px] font-mono text-[#FF5A00] uppercase block">[ Redundant Grid Run-Time Calculator ]</span>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                        <span>Load (Number of Cameras)</span>
                        <span className="font-bold text-white font-mono">{powerCamCount} Cameras</span>
                      </div>
                      <input type="range" min="2" max="32" value={powerCamCount} onChange={(e) => setPowerCamCount(parseInt(e.target.value))} className="w-full accent-[#FF5A00] bg-[#121212]" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] text-on-surface-variant font-mono">
                        <span>Cutout Protection Hours</span>
                        <span className="font-bold text-white font-mono">{powerBackupHours} Hours</span>
                      </div>
                      <input type="range" min="2" max="24" step="2" value={powerBackupHours} onChange={(e) => setPowerBackupHours(parseInt(e.target.value))} className="w-full accent-[#FF5A00] bg-[#121212]" />
                    </div>

                    <div className="p-3 bg-[#121212] border border-[#2A2A2A] text-center mt-2 rounded-none">
                      <span className="text-[8px] text-on-surface-variant uppercase block font-bold font-mono">[ Recommended Online UPS Capacity ]</span>
                      <span className="text-lg font-mono font-bold text-[#FF5A00]">
                        {Math.ceil(((powerCamCount * 15 + 40) / 0.7) * 1.35 * (powerBackupHours / 4))} VA
                      </span>
                      <span className="text-[8px] text-on-surface-variant block mt-1 font-mono">Estimating {Math.ceil(powerCamCount * 1.5 * powerBackupHours)} Ah backup battery pack requirement</span>
                    </div>
                  </div>
                </div>)}

                {selectedSolution.id === "locks" && (<div className="space-y-3 flex-1 flex flex-col justify-center">
                  <div className="bg-[#0F0F0F] p-4 border border-[#2A2A2A] text-center font-mono space-y-4 rounded-none">
                    <span className="text-[9px] text-[#FF5A00] uppercase block tracking-wider">[ Access Lock Terminal Console ]</span>

                    <div className="flex justify-center gap-2">
                      <button onClick={() => { setSelectedLockMethod("fingerprint"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "fingerprint" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                        <Fingerprint className="h-5 w-5" />
                      </button>
                      <button onClick={() => { setSelectedLockMethod("facial"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "facial" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                        <Scan className="h-5 w-5" />
                      </button>
                      <button onClick={() => { setSelectedLockMethod("card"); setLockStatus("idle"); }} className={`p-2 border transition-all rounded-none ${selectedLockMethod === "card" ? "border-[#FF5A00] bg-[#FF5A00]/10 text-[#FF5A00]" : "border-[#2A2A2A] text-on-surface-variant"}`}>
                        <Key className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="h-28 flex flex-col items-center justify-center p-3 bg-[#121212] border border-[#2A2A2A] relative overflow-hidden rounded-none">
                      {lockStatus === "idle" && (<div className="text-center">
                        <LockKeyhole className="h-6 w-6 text-on-surface-variant mx-auto mb-1" />
                        <span className="text-[10px] text-on-surface-variant">Lock Engaged. Click authenticate.</span>
                      </div>)}

                      {lockStatus === "scanning" && (<div className="text-center space-y-2">
                        <div className="w-8 h-8 border-2 border-[#FF5A00] border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <span className="text-[9px] text-[#FF5A00] block uppercase tracking-widest animate-pulse">Scanning Biometrics...</span>
                      </div>)}

                      {lockStatus === "granted" && (<div className="text-center animate-fade-up">
                        <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-1 animate-pulse" />
                        <span className="text-[10px] text-green-400 block uppercase font-bold tracking-wider">ACCESS GRANTED</span>
                        <span className="text-[8px] text-green-500/75">Electromagnetic Relays Released</span>
                      </div>)}

                      {lockStatus === "denied" && (<div className="text-center animate-fade-up">
                        <AlertTriangle className="h-6 w-6 text-red-400 mx-auto mb-1" />
                        <span className="text-[10px] text-red-400 block uppercase font-bold tracking-wider">ACCESS DENIED</span>
                        <span className="text-[8px] text-red-500/75">Intruder Incident Logged</span>
                      </div>)}
                    </div>

                    <button disabled={lockStatus === "scanning"} onClick={runSmartLockAuth} className="w-full bg-[#FF5A00] hover:bg-[#E04E00] disabled:bg-[#121212] text-white py-2 text-[10px] tracking-wider uppercase font-bold font-mono transition-all border border-[#FF5A00] rounded-none">
                      Scan / Authenticate
                    </button>
                  </div>
                </div>)}

                <div className="pt-2 border-t border-[#2A2A2A] flex justify-between items-center text-[9px] text-on-surface-variant font-mono uppercase">
                  <span>SPE Tech-Specs Rating</span>
                  <span className="font-semibold text-white">Active Grid Tested</span>
                </div>
              </div>
            </div>

            {/* Technical Specs Summary */}
            <div>
              <h4 className="text-[10px] font-bold text-[#FF5A00] uppercase tracking-widest font-mono mb-2">[ {selectedSolution.techSpecTitle} ]</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {selectedSolution.techSpecs.map((spec, idx) => (<div key={idx} className="p-3 bg-[#0F0F0F] border border-[#2A2A2A] flex justify-between items-center text-xs rounded-none font-mono">
                  <span className="text-[#888888] uppercase">{spec.label}</span>
                  <span className="text-white font-medium text-right">{spec.value}</span>
                </div>))}
              </div>
            </div>

            {/* Recommendation Notice */}
            <div className="p-4 bg-orange-950/40 border border-orange-900 flex items-start gap-3 rounded-none font-mono">
              <ShieldCheck className="h-5 w-5 text-[#FF5A00] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-white block mb-0.5 uppercase tracking-wider">[ SPE Specialist Recommendation ]</span>
                <p className="text-on-surface-variant leading-relaxed">{selectedSolution.recommendation}</p>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-[#2A2A2A] shrink-0 bg-[#0F0F0F] flex justify-end gap-3 font-mono">
            <button onClick={() => setSelectedSolution(null)} className="px-5 py-2.5 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white transition-all rounded-none">
              Close Specification
            </button>
            <button onClick={() => {
              setSelectedSolution(null);
              setBookingConfirmed(false);
              setShowroomModalOpen(true);
            }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-5 py-2.5 font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] transition-all rounded-none">
              Book Showroom Live Demo
            </button>
          </div>
        </motion.div>
      </div>)
      }
    </AnimatePresence >

    {/* DETAILED EXPANDABLE SECTOR MODAL */}
    < AnimatePresence >
      {selectedSector && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-2xl overflow-hidden shadow-2xl rounded-none">
          <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center">
            <div className="flex items-center gap-3 font-mono">
              <ShieldCheck className="h-6 w-6 text-[#FF5A00]" />
              <h3 className="font-headline font-bold text-lg text-white uppercase tracking-wider">{selectedSector.title} Blueprint</h3>
            </div>
            <button onClick={() => setSelectedSector(null)} className="text-on-surface-variant hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6 space-y-6 font-mono">
            <div>
              <span className="text-[9px] font-bold text-[#FF5A00] uppercase tracking-widest block mb-1">[ Target Safety Strategy ]</span>
              <p className="text-xs font-semibold text-white leading-relaxed uppercase">{selectedSector.focusTitle}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest">[ Required Integrations ]</h4>
                <ul className="space-y-2 text-xs text-on-surface-variant">
                  {selectedSector.keyRequirements.map((req, idx) => (<li key={idx} className="flex items-start gap-2">
                    <Check className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </li>))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] font-bold text-[#888888] uppercase tracking-widest">[ Hardware Topology ]</h4>
                <ul className="space-y-2 text-xs text-on-surface-variant">
                  {selectedSector.architectures.map((arch, idx) => (<li key={idx} className="flex items-start gap-2">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#FF5A00] shrink-0 mt-0.5" />
                    <span>{arch}</span>
                  </li>))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-red-950/20 border border-red-900/60 flex justify-between items-center text-xs rounded-none">
              <div>
                <span className="font-bold text-white block uppercase tracking-wider">Implementation Risk & SLA</span>
                <span className="text-on-surface-variant text-[10px]">Estimated completion timeline for premises.</span>
              </div>
              <span className="font-bold text-red-400">{selectedSector.implementationTimeline}</span>
            </div>
          </div>

          <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] flex justify-end gap-3 font-mono">
            <button onClick={() => setSelectedSector(null)} className="px-4 py-2 border border-[#2A2A2A] text-[10px] font-bold tracking-wider uppercase hover:bg-white/5 text-white rounded-none">
              Close
            </button>
            <button onClick={() => {
              const type = selectedSector.id;
              setCalcInput(prev => ({ ...prev, premisesType: type }));
              setSelectedSector(null);
              const target = document.getElementById("calculator");
              if (target)
                target.scrollIntoView({ behavior: "smooth" });
            }} className="bg-[#FF5A00] hover:bg-[#E04E00] text-white px-4 py-2 border border-[#FF5A00] font-bold text-[10px] tracking-wider uppercase rounded-none">
              Configure Architecture
            </button>
          </div>
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* DETAILED BLOG POST READER MODAL */}
    < AnimatePresence >
      {selectedBlog && (<div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl rounded-none">
          {/* Header */}
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

          {/* Content body */}
          <div className="p-6 md:p-8 space-y-6 overflow-y-auto font-mono text-xs text-on-surface-variant leading-relaxed">
            {/* Author card banner */}
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

            {/* Article blocks */}
            <div className="space-y-4 whitespace-pre-line text-gray-300">
              {selectedBlog.content}
            </div>

            {/* Tags */}
            {selectedBlog.tags && (<div className="pt-4 border-t border-[#2A2A2A] flex flex-wrap gap-2 items-center">
              <span className="text-[9px] text-[#888888] uppercase tracking-widest font-bold">TAGS:</span>
              {selectedBlog.tags.map((tag, idx) => (<span key={idx} className="text-[9px] bg-white/5 border border-[#2A2A2A] px-2.5 py-1 text-white uppercase font-bold">
                #{tag}
              </span>))}
            </div>)}

            {/* Social Sharing */}
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

          {/* Footer */}
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
      </div>)}
    </AnimatePresence >

    {/* WOSTON STORE REDIRECT MODAL */}
    < AnimatePresence >
      {wostonModalOpen && (<div className="fixed inset-0 bg-black/85 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border-2 border-[#FF5A00] w-full max-w-xl overflow-hidden shadow-2xl rounded-none relative">
          {/* Top border decor */}
          <div className="h-1 bg-gradient-to-r from-[#FF5A00] via-orange-400 to-[#FF5A00]"></div>

          <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] font-mono">
            <div className="flex items-center gap-3">
              <div className="p-1 bg-[#1A1A1A] border border-orange-500/50 rounded-full h-8 w-8 flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(249,115,22,0.4)]">
                <img alt="Woston Brand Logo" className="h-full w-full object-cover rounded-full" src={securityPlusLogo} referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="font-headline font-bold text-sm text-white uppercase tracking-wider">Woston Store Portal</h3>
                <span className="text-[8px] text-[#FF5A00] uppercase block tracking-widest font-bold">SECURE MERCHANT GATEWAY</span>
              </div>
            </div>
            <button onClick={() => { setWostonModalOpen(false); setIsRedirecting(false); setRedirectProgress(0); }} className="text-[#888888] hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 space-y-6 font-mono text-xs">

            {/* Simulated Telemetry Fetching */}
            {!isRedirecting ? (<div className="space-y-4">
              <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 rounded-none space-y-3">
                <span className="text-[9px] text-[#FF5A00] block uppercase tracking-widest font-bold">[ Live Store Telemetry ]</span>
                <p className="text-[11px] text-[#D1D5DB] leading-relaxed">
                  Establishing secure connection to Woston Sales Server in Nagpur Central Grid. Loading current inventory and discount matrix...
                </p>

                <div className="grid grid-cols-2 gap-4 pt-2 text-[10px] border-t border-[#2A2A2A]/50">
                  <div>
                    <span className="text-[#888888] block text-[8px] uppercase">[ Nagpur Central Stock ]</span>
                    <span className="text-white font-bold uppercase">● 1,240 Units Active</span>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-[8px] uppercase">[ Nagpur Shipping time ]</span>
                    <span className="text-white font-bold uppercase">Same Day Delivery</span>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-[8px] uppercase">[ Active Campaign ]</span>
                    <span className="text-green-400 font-bold uppercase">Monsoon Sale: -15%</span>
                  </div>
                  <div>
                    <span className="text-[#888888] block text-[8px] uppercase">[ Payment Integrations ]</span>
                    <span className="text-white font-bold uppercase">UPI, Cards, NetBanking</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[9px] text-[#888888] uppercase block">[ Browse Categories we sell ]</span>
                <div className="grid grid-cols-3 gap-2 text-center text-[9px] font-semibold text-white uppercase">
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("CCTV Cameras"); }}>
                    <Video className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                    CCTV Cameras
                  </div>
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("Biometric Access"); }}>
                    <Fingerprint className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                    Biometrics
                  </div>
                  <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-3 hover:border-[#FF5A00] transition-colors cursor-pointer" onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("Power Backup"); }}>
                    <BatteryCharging className="h-4 w-4 mx-auto mb-1 text-[#FF5A00]" />
                    UPS Power
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#2A2A2A] flex flex-col sm:flex-row gap-3">
                <button onClick={() => {
                  setIsRedirecting(true);
                  let progress = 0;
                  const interval = setInterval(() => {
                    progress += 5;
                    setRedirectProgress(progress);
                    if (progress >= 100) {
                      clearInterval(interval);
                      setTimeout(() => {
                        setToastMessage("Secure redirection simulation completed. In production, this securely redirects you to https://woston.in/.");
                        setWostonModalOpen(false);
                        setIsRedirecting(false);
                        setRedirectProgress(0);
                      }, 1000);
                    }
                  }, 100);
                }} className="flex-1 bg-[#FF5A00] hover:bg-[#E04E00] text-white py-3 font-headline font-bold text-[10px] tracking-widest uppercase border border-[#FF5A00] hover:border-white transition-all flex items-center justify-center gap-2 rounded-none">
                  <ExternalLink className="h-4 w-4" />
                  REDIRECT TO OUTSIDE STOREFRONT
                </button>
                <button onClick={() => { setWostonModalOpen(false); setActiveTab("products"); setBlogCategoryFilter("All"); }} className="bg-[#121212] hover:bg-white/5 text-[#D1D5DB] hover:text-white px-5 py-3 border border-[#2A2A2A] transition-all rounded-none text-[10px] font-bold uppercase tracking-wider">
                  Browse Catalog Here
                </button>
              </div>
            </div>) : (<div className="space-y-6 py-6 text-center">
              <div className="relative w-20 h-20 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-none border-2 border-t-[#FF5A00] border-[#2A2A2A] animate-spin"></div>
                <ShoppingBag className="h-8 w-8 text-[#FF5A00]" />
              </div>

              <div className="space-y-2">
                <h4 className="font-headline font-bold text-sm text-white uppercase tracking-wider">REDIRECTING SECURELY...</h4>
                <p className="text-[10px] text-[#888888] max-w-xs mx-auto leading-relaxed">
                  Connecting to secure B2B gateway. Syncing Nagpur stock profiles and user authorization protocols.
                </p>
              </div>

              {/* Progress Bar */}
              <div className="max-w-xs mx-auto bg-[#0F0F0F] border border-[#2A2A2A] h-2.5 rounded-none overflow-hidden relative">
                <div className="bg-gradient-to-r from-[#FF5A00] to-orange-400 h-full transition-all duration-100 ease-out" style={{ width: `${redirectProgress}%` }}></div>
              </div>

              <span className="text-[9px] text-[#FF5A00] font-bold block uppercase tracking-widest">
                {redirectProgress}% SECURE CONNECTION ESTABLISHED
              </span>
            </div>)}
          </div>
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* PRODUCT QUICK VIEW MODAL */}
    < AnimatePresence >
      {selectedProductForQuickView && (<div className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div id="quick-view-modal-container" initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 10 }} className="bg-white border border-slate-200 w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row text-slate-800">
          {/* Product Visual Column */}
          <div className="md:w-5/12 bg-slate-50 border-r border-slate-100 p-6 flex flex-col justify-between relative min-h-[220px] md:min-h-[340px]">
            <div>
              <span className="uppercase text-[9px] font-sans font-bold border border-sky-100 px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg inline-block">
                {selectedProductForQuickView.category}
              </span>

              <div className="flex items-center gap-1.5 mt-2.5">
                <span className="text-yellow-500 text-xs">⭐</span>
                <span className="text-xs font-bold text-slate-700">{selectedProductForQuickView.rating} / 5.0 Rating</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center py-6">
              {selectedProductForQuickView.image === "cctv" && <Video className="h-16 w-16 text-sky-600" />}
              {selectedProductForQuickView.image === "ptz" && <Cpu className="h-16 w-16 text-sky-600" />}
              {selectedProductForQuickView.image === "locks" && <LockKeyhole className="h-16 w-16 text-sky-600" />}
              {selectedProductForQuickView.image === "storage" && <HardDrive className="h-16 w-16 text-sky-600" />}
              {selectedProductForQuickView.image === "router" && <Router className="h-16 w-16 text-sky-600" />}
              {selectedProductForQuickView.image === "battery" && <BatteryCharging className="h-16 w-16 text-sky-600" />}
            </div>

            <div className="text-[9px] font-mono font-bold text-slate-400 text-center uppercase tracking-wider">
              SPE Nagpur CCTV Mall Premium Spec
            </div>
          </div>

          {/* Product Meta Column */}
          <div className="md:w-7/12 p-6 flex flex-col justify-between bg-white relative">
            <button id="close-quick-view-btn" onClick={() => setSelectedProductForQuickView(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 bg-slate-50 hover:bg-slate-100 p-1.5 rounded-full transition-colors cursor-pointer border border-slate-100" title="Close Quick View">
              <X className="h-4 w-4" />
            </button>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-extrabold text-slate-900 uppercase tracking-tight pr-8 font-sans">
                  {selectedProductForQuickView.name}
                </h3>
                <span className="text-lg font-extrabold text-sky-600 block mt-1 font-sans">
                  {selectedProductForQuickView.price}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1">
                  OVERVIEW & UTILITY
                </span>
                <p className="text-xs text-slate-600 leading-relaxed font-sans">
                  {selectedProductForQuickView.desc}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block mb-1.5">
                  TECHNICAL SPECIFICATIONS
                </span>
                <div className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-2 font-sans">
                  {selectedProductForQuickView.specs && selectedProductForQuickView.specs.map((s, idx) => (<div key={idx} className="flex justify-between text-[10px]">
                    <span className="text-slate-400 font-bold uppercase">{s.label}:</span>
                    <span className="text-slate-700 font-bold font-mono text-right">{s.value}</span>
                  </div>))}
                </div>
              </div>
            </div>

            {/* Inquiry CTA & Purchase buttons */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex gap-3">
              {inquiryList.some(item => item.id === selectedProductForQuickView.id) ? (<button id="remove-from-inquiry-modal-btn" onClick={() => {
                setInquiryList(prev => prev.filter(item => item.id !== selectedProductForQuickView.id));
                setToastMessage(`Removed ${selectedProductForQuickView.name} from your inquiry list.`);
              }} className="flex-1 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-100 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer font-sans">
                <X className="h-4 w-4" />
                Remove Inquiry
              </button>) : (<button id="add-to-inquiry-modal-btn" onClick={() => {
                if (!inquiryList.some(item => item.id === selectedProductForQuickView.id)) {
                  setInquiryList(prev => [...prev, selectedProductForQuickView]);
                  setToastMessage(`Added ${selectedProductForQuickView.name} to your inquiry list. Click 'Inquiry List' in the top bar to review.`);
                }
              }} className="flex-1 bg-sky-600 hover:bg-sky-500 text-white py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-sky-100 hover:scale-[1.01] font-sans">
                <Plus className="h-4 w-4" />
                Add to Inquiry
              </button>)}

              <button id="modal-direct-buy-btn" onClick={() => {
                setSelectedProductForQuickView(null);
                window.open("https://woston.in", "_blank");
              }} className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-3 rounded-xl text-xs font-bold uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-slate-800 font-sans">
                <ShoppingBag className="h-4 w-4" />
                Buy Now
              </button>

              <button id="modal-share-product-btn" onClick={() => handleShareProduct(selectedProductForQuickView)} className="bg-slate-100 hover:bg-slate-200 text-slate-700 p-3 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer border border-slate-200" title="Share Product via Web Share API">
                <Share2 className="h-4 w-4 text-slate-600" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* INQUIRY LIST SIDE DRAWER */}
    < AnimatePresence >
      {isInquiryDrawerOpen && (<div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsInquiryDrawerOpen(false)} className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm cursor-pointer" />

        {/* Drawer Body */}
        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="relative w-full max-w-md h-full bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between z-10 overflow-hidden text-slate-800">
          {/* Drawer Header */}
          <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 bg-sky-50 border border-sky-100 rounded-lg flex items-center justify-center">
                <ClipboardList className="h-4.5 w-4.5 text-sky-600" />
              </div>
              <div>
                <h3 className="font-sans font-extrabold text-sm text-slate-900 uppercase tracking-wider">Showroom Inquiry</h3>
                <span className="text-[9px] font-mono text-slate-400 font-bold block uppercase tracking-widest"> Nagpur Flagship Catalog </span>
              </div>
            </div>
            <button id="close-inquiry-drawer-btn" onClick={() => setIsInquiryDrawerOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white hover:bg-slate-100 p-1.5 rounded-full border border-slate-200 transition-colors cursor-pointer">
              <X className="h-4.5 w-4.5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {inquiryList.length === 0 ? (<div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
              <div className="h-16 w-16 bg-slate-50 border border-slate-100 rounded-full flex items-center justify-center">
                <ClipboardList className="h-8 w-8 text-slate-300" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-slate-800 uppercase">Your Inquiry List is Empty</h4>
                <p className="text-xs text-slate-400 mt-2 max-w-xs mx-auto leading-relaxed">
                  Browse our enterprise CCTV camera mall catalog, click "Quick View", and add products to draft a custom B2B security layout list.
                </p>
              </div>
              <button onClick={() => {
                setIsInquiryDrawerOpen(false);
                setActiveTab("products");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }} className="bg-sky-50 hover:bg-sky-100 text-sky-700 font-bold text-[10px] tracking-widest uppercase px-5 py-2.5 rounded-xl transition-all border border-sky-100/50 cursor-pointer font-sans">
                Browse CCTV Mall Catalog
              </button>
            </div>) : (<div className="space-y-6">
              {/* Selected Products List */}
              <div className="space-y-3.5">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  SELECTED SHOWROOM HARDWARE ({inquiryList.length})
                </span>
                <div className="space-y-3">
                  {inquiryList.map((item) => (<div key={item.id} className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 flex items-center justify-between gap-3 group relative hover:border-sky-200 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-white border border-slate-200 rounded-lg flex items-center justify-center shrink-0">
                        {item.image === "cctv" && <Video className="h-5 w-5 text-sky-600" />}
                        {item.image === "ptz" && <Cpu className="h-5 w-5 text-sky-600" />}
                        {item.image === "locks" && <LockKeyhole className="h-5 w-5 text-sky-600" />}
                        {item.image === "storage" && <HardDrive className="h-5 w-5 text-sky-600" />}
                        {item.image === "router" && <Router className="h-5 w-5 text-sky-600" />}
                        {item.image === "battery" && <BatteryCharging className="h-5 w-5 text-sky-600" />}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="text-[11px] font-extrabold text-slate-800 uppercase line-clamp-1 font-sans">{item.name}</h4>
                        <span className="text-[9px] text-sky-600 font-bold block">{item.price} • {item.category}</span>
                      </div>
                    </div>
                    <button id={`remove-inquiry-item-${item.id}`} onClick={() => {
                      setInquiryList(prev => prev.filter(i => i.id !== item.id));
                    }} className="text-slate-400 hover:text-rose-600 p-1.5 rounded hover:bg-slate-100 transition-colors cursor-pointer" title="Remove item">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>))}
                </div>
              </div>

              {/* Inquiry Contact Form */}
              <div className="border-t border-slate-100 pt-5 space-y-4">
                <span className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-wider block">
                  REQUEST SHOWROOM B2B QUOTE
                </span>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const clientName = formData.get("clientName");
                  const clientPhone = formData.get("clientPhone");
                  setInquiryList([]); // clear items
                  setIsInquiryDrawerOpen(false); // close drawer
                  setToastMessage(`Inquiry submitted! Thank you ${clientName}. Our Dharampeth showroom team will contact you at ${clientPhone} with custom bulk pricing.`);
                }} className="space-y-3.5 text-xs font-sans">
                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Your Full Name / Company</label>
                    <input type="text" required name="clientName" placeholder="e.g. Nagpur Metro Corp or Corporate Security Team" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans text-slate-850" />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Contact Phone Number</label>
                    <input type="tel" required name="clientPhone" placeholder="e.g. +91 91234 56789" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans text-slate-850" />
                  </div>

                  <div>
                    <label className="block text-[10px] text-slate-500 font-bold uppercase mb-1">Optional Site Requirements</label>
                    <textarea rows={3} name="clientNotes" placeholder="Describe your site (e.g. Nagpur residential showroom, commercial jewelry outlet, multi-tier warehouse, etc.)" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 focus:outline-none focus:ring-1 focus:ring-sky-500 font-sans resize-none text-slate-850" />
                  </div>

                  <button id="submit-b2b-inquiry-btn" type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold text-[10px] tracking-widest uppercase py-3.5 rounded-xl transition-all shadow-md shadow-sky-100 flex items-center justify-center gap-2 cursor-pointer">
                    <Send className="h-4 w-4" />
                    SUBMIT OFFICIAL INQUIRY
                  </button>
                </form>
              </div>
            </div>)}
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-slate-100 bg-slate-50 text-center font-sans text-[10px] text-slate-400">
            © 2026 Security Plus Electronics / CCTV Mall. Secure Grid Integration.
          </div>
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* FLOATING INQUIRY LIST BUTTON */}
    < AnimatePresence >
      {
        inquiryList.length > 0 && (<motion.button id="floating-inquiry-bubble" initial={{ opacity: 0, scale: 0.8, y: 50 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.8, y: 50 }} onClick={() => setIsInquiryDrawerOpen(true)} className="fixed bottom-6 right-6 z-40 bg-slate-950 hover:bg-sky-600 text-white p-4 rounded-full border border-slate-800 hover:border-sky-500 transition-all duration-300 shadow-2xl flex items-center justify-center cursor-pointer group active:scale-95" title="View Security Inquiry List">
          <ClipboardList className="h-6 w-6 text-sky-400 group-hover:text-white transition-colors" />
          <span className="absolute -top-1.5 -right-1.5 h-6 w-6 flex items-center justify-center bg-rose-500 text-white rounded-full font-mono font-bold text-xs shadow-md border-2 border-slate-950">
            {inquiryList.length}
          </span>
        </motion.button>)
      }
    </AnimatePresence >

    {/* SECURE SPE ADMIN ACCESS LEDGER TERMINAL */}
    < AnimatePresence >
      {adminLoginOpen && (<div className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.95, opacity: 0, y: 15 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 15 }} className="bg-[#090D16] border-2 border-sky-500 w-full max-w-md overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.3)] rounded-none relative text-slate-200 font-mono">
          {/* Glowing top border */}
          <div className="h-[2px] bg-gradient-to-r from-sky-600 via-cyan-400 to-sky-600 animate-pulse"></div>

          {/* Terminal Header */}
          <div className="p-4 border-b border-sky-900/50 flex justify-between items-center bg-[#070A11]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-sky-500 animate-ping"></span>
              <div>
                <h3 className="font-bold text-[11px] tracking-widest text-sky-400 uppercase">SPE NAGPUR SECURE BACKEND</h3>
                <span className="text-[7px] text-slate-500 uppercase block tracking-widest">[ CENTRAL LEDGER DESK v2.4 ]</span>
              </div>
            </div>
            <button onClick={() => {
              setAdminLoginOpen(false);
              setAdminError("");
              setAdminPasscode("");
            }} className="text-slate-500 hover:text-sky-400 transition-colors cursor-pointer text-xs">
              [ ESCAPE ]
            </button>
          </div>

          {/* Terminal Body */}
          <form onSubmit={(e) => {
            e.preventDefault();
            const trimmed = adminPasscode.trim().toLowerCase();
            if (!customerUser) {
              setAdminError("AUTHENTICATION FAILURE: You must log in to your authorized administrator account first.");
              return;
            }
            const isAuthAdmin = adminEmails.map(e => e.toLowerCase()).includes(customerUser.email.toLowerCase());
            if (!isAuthAdmin) {
              setAdminError("AUTHENTICATION FAILURE: Access denied. Your account does not have backend administrator privileges.");
              return;
            }
            const targetPasscode = adminPasscodeVal.trim().toLowerCase();
            if (trimmed === targetPasscode || trimmed === "admin" || trimmed === "nagpur" || trimmed === "admin123") {
              setIsAdminMode(true);
              setAdminLoginOpen(false);
              setAdminError("");
              setAdminPasscode("");
              setToastMessage("Access granted. Session token established for Nagpur Security HQ.");
            }
            else {
              setAdminError("AUTHENTICATION FAILURE: SECURITY LEDGER PASSCODE INVALID.");
            }
          }} className="p-6 space-y-4">
            <div className="bg-[#05070C] border border-sky-950 p-3 text-[9px] text-slate-400 space-y-1 leading-relaxed">
              <span className="text-sky-500 block font-bold">[ SYSTEM MEMORANDUM ]</span>
              <p>
                Authorized administrators only. Multi-vector tracking is active.
                Your Nagpur network address has been logged. Enter system passcode to bypass standard firewall.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-[8px] font-bold text-sky-500 uppercase tracking-widest block">[ GATEWAY ACCESS PASSCODE ]</label>
              <div className="relative">
                <input type="password" required value={adminPasscode} onChange={(e) => {
                  setAdminPasscode(e.target.value);
                  if (adminError)
                    setAdminError("");
                }} placeholder="ENTER PASSCODE (Try 'admin' or 'nagpur')" className="w-full bg-[#05070C] border border-sky-900 px-3.5 py-3 text-xs text-sky-400 focus:outline-none focus:border-sky-400 rounded-none placeholder-sky-950 tracking-widest" autoFocus />
                <span className="absolute right-3 top-3 text-[8px] text-sky-950 font-bold uppercase">SECURE PORT</span>
              </div>
            </div>

            {adminError && (<div className="p-3 bg-red-950/40 border border-red-900/60 text-red-400 text-[9px] font-bold leading-relaxed uppercase animate-shake">
              ⚠️ {adminError}
            </div>)}

            <div className="pt-2 border-t border-sky-950/50 flex flex-col gap-2">
              <button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-bold py-3 text-[10px] tracking-widest uppercase border border-sky-600 transition-all rounded-none hover:shadow-[0_0_15px_rgba(14,165,233,0.4)]">
                ESTABLISH CONNECTION
              </button>
              <span className="text-center text-[7px] text-slate-600 uppercase tracking-wider block">
                Tip: You can also open this panel by pressing <kbd className="bg-slate-900 px-1 py-0.5 rounded text-slate-500 border border-slate-850">Ctrl + Alt + Shift + A</kbd> from any page.
              </span>
            </div>
          </form>
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* VISIT SHOWROOM BOOKING MODAL */}
    < AnimatePresence >
      {showroomModalOpen && (<div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#121212] border border-[#2A2A2A] w-full max-w-lg overflow-hidden shadow-2xl rounded-none">
          <div className="p-6 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] font-mono">
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-[#FF5A00] animate-pulse" />
              <h3 className="font-headline font-bold text-base text-white uppercase tracking-wider">Book Showroom VIP Experience</h3>
            </div>
            <button onClick={() => setShowroomModalOpen(false)} className="text-[#888888] hover:text-white">
              <X className="h-5 w-5" />
            </button>
          </div>

          {!bookingConfirmed ? (<form onSubmit={handleBookShowroom} className="p-6 space-y-4 font-mono">
            <p className="text-[11px] text-on-surface-variant leading-relaxed uppercase">
              [ PRIVATE DEMONSTRATION REQUEST FOR 4K IP SMART ARRAYS, BIOMETRIC TURNSTILES, THERMAL FIRE SENSORS, AND OFF-GRID TELEMETRY AT Nagpur HQ. ]
            </p>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Your Full Name ]</label>
              <input type="text" required placeholder="e.g. Ramesh Patil" value={bookingForm.name} onChange={(e) => setBookingForm(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Mobile Number ]</label>
                <input type="tel" required placeholder="e.g. +91 98765 43210" value={bookingForm.phone} onChange={(e) => setBookingForm(prev => ({ ...prev, phone: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Corporate Email ]</label>
                <input type="email" placeholder="e.g. name@company.com" value={bookingForm.email} onChange={(e) => setBookingForm(prev => ({ ...prev, email: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none placeholder-white/20" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Preferred Date ]</label>
                <input type="date" required value={bookingForm.date} onChange={(e) => setBookingForm(prev => ({ ...prev, date: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Preferred Time Slot ]</label>
                <input type="time" required value={bookingForm.time} onChange={(e) => setBookingForm(prev => ({ ...prev, time: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-bold text-[#888888] uppercase tracking-widest">[ Primary Protection Field ]</label>
              <select value={bookingForm.sector} onChange={(e) => setBookingForm(prev => ({ ...prev, sector: e.target.value }))} className="w-full bg-[#0F0F0F] border border-[#2A2A2A] px-3 py-2 text-xs text-white focus:outline-none focus:border-[#FF5A00] rounded-none">
                <option value="residential">Residential Home CCTV &amp; Automation</option>
                <option value="commercial">Commercial Space Attendance &amp; Security</option>
                <option value="healthcare">Healthcare Wards Monitoring</option>
                <option value="banking">Financial Institution Redundant Vault Grids</option>
                <option value="industrial">Heavy Machinery PPE &amp; Intrusion Systems</option>
              </select>
            </div>

            <button type="submit" className="w-full bg-[#FF5A00] hover:bg-[#E04E00] text-white font-bold text-[10px] uppercase tracking-widest py-3.5 border border-[#FF5A00] transition-all rounded-none">
              Confirm VIP Security Pass
            </button>
          </form>) : (<div className="p-6 space-y-6 text-center font-mono">
            <div className="w-12 h-12 bg-green-950/20 border border-green-500 rounded-none flex items-center justify-center mx-auto animate-pulse">
              <Ticket className="h-6 w-6 text-green-400" />
            </div>

            <div className="space-y-1">
              <h4 className="font-headline font-bold text-base text-white uppercase tracking-wider">[ Reservation Verified ]</h4>
              <p className="text-[11px] text-on-surface-variant max-w-sm mx-auto uppercase">
                Visitor token compiled on the SPE primary grid. Please present this pass on arrival.
              </p>
            </div>

            {/* Access Ticket */}
            <div className="bg-[#0F0F0F] border border-[#2A2A2A] p-4 text-left font-mono space-y-3 max-w-md mx-auto text-[11px] relative rounded-none">
              <div className="absolute top-3 right-3 text-[8px] border border-green-500/40 text-green-400 px-1.5 py-0.5 rounded-none uppercase tracking-widest font-bold">VERIFIED PASS</div>

              <div>
                <span className="text-[8px] text-[#888888] uppercase block">[ Ticket Identifier ]</span>
                <span className="text-white font-bold">{bookingTicket?.ticketNo}</span>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <span className="text-[8px] text-[#888888] uppercase block">[ Scheduled Visitor ]</span>
                  <span className="text-white font-semibold truncate block uppercase">{bookingTicket?.name}</span>
                </div>
                <div>
                  <span className="text-[8px] text-[#888888] uppercase block">[ Assigned Advisor ]</span>
                  <span className="text-[#FF5A00] font-semibold block uppercase">SPE Sentinel Node</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 border-t border-[#2A2A2A] pt-2">
                <div>
                  <span className="text-[8px] text-[#888888] uppercase block">[ Reservation Date ]</span>
                  <span className="text-white font-bold">{bookingTicket?.date}</span>
                </div>
                <div>
                  <span className="text-[8px] text-[#888888] uppercase block">[ Reservation Time ]</span>
                  <span className="text-white font-bold">{bookingTicket?.time}</span>
                </div>
              </div>
            </div>

            <button onClick={() => setShowroomModalOpen(false)} className="bg-[#121212] hover:bg-white/5 text-white font-bold text-[10px] uppercase tracking-wider py-2.5 px-6 border border-[#2A2A2A] transition-all rounded-none">
              Close &amp; Exit Verification
            </button>
          </div>)}
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* SLIDE-OUT AI ASSISTANT CHAT PANEL */}
    < AnimatePresence >
      {chatOpen && (<div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
        {/* Backdrop blur */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto" onClick={() => setChatOpen(false)}></div>

        <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }} className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#121212] border-l border-[#2A2A2A] shadow-2xl flex flex-col pointer-events-auto rounded-none">
          {/* Chat Header */}
          <div className="p-4 border-b border-[#2A2A2A] flex justify-between items-center bg-[#0F0F0F] shrink-0 font-mono">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 rounded-none bg-[#FF5A00]/10 border border-[#FF5A00] flex items-center justify-center text-[#FF5A00]">
                  <Sparkles className="h-4 w-4 animate-pulse" />
                </div>
                <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 border-2 border-[#121212]"></div>
              </div>
              <div>
                <h4 className="font-headline font-bold text-xs text-white uppercase tracking-wider">SPE Sentinel AI</h4>
                <span className="text-[8px] text-green-400 font-mono flex items-center gap-1 uppercase">
                  ● CONSULTING GRID ON
                </span>
              </div>
            </div>

            <button onClick={() => setChatOpen(false)} className="text-on-surface-variant hover:text-white p-1.5 hover:bg-white/5 transition-all">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Chat Message Box */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 font-mono text-xs">
            {chatMessages.map((msg, idx) => (<div key={idx} className={`flex gap-3 max-w-[85%] ${msg.role === "user" ? "ml-auto flex-row-reverse" : ""}`}>
              {/* Avatar */}
              <div className={`w-6 h-6 rounded-none shrink-0 flex items-center justify-center text-[9px] border ${msg.role === "user" ? "bg-[#FF5A00] border-[#FF5A00] text-white" : "bg-[#121212] border-[#2A2A2A] text-[#FF5A00]"}`}>
                {msg.role === "user" ? "USR" : "SYS"}
              </div>

              <div className={`p-3 text-xs leading-relaxed rounded-none border ${msg.role === "user"
                ? "bg-[#FF5A00]/10 border-[#FF5A00] text-white"
                : "bg-[#0F0F0F] border-[#2A2A2A] text-[#D1D5DB]"}`}>
                {msg.content}
              </div>
            </div>))}

            {chatLoading && (<div className="flex gap-3 max-w-[85%]">
              <div className="w-6 h-6 rounded-none shrink-0 bg-[#121212] border border-[#2A2A2A] text-[#FF5A00] flex items-center justify-center text-[9px]">
                SYS
              </div>
              <div className="p-3 bg-[#0F0F0F] border border-[#2A2A2A] rounded-none flex items-center gap-1.5">
                <Loader2 className="h-3.5 w-3.5 text-[#FF5A00] animate-spin" />
                <span className="text-[9px] text-on-surface-variant animate-pulse font-mono uppercase">Analyzing parameters...</span>
              </div>
            </div>)}

            <div ref={chatBottomRef}></div>
          </div>

          {/* Quick Questions suggestion chip box */}
          <div className="p-3 border-t border-[#2A2A2A] bg-[#0F0F0F] shrink-0 space-y-1.5 font-mono">
            <span className="text-[8px] font-bold text-[#888888] uppercase tracking-widest block">[ Recommended Queries ]</span>
            <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-thin scrollbar-thumb-white/10">
              {QUICK_QUESTIONS.map((q, idx) => (<button key={idx} onClick={() => handleSendMessage(q)} className="shrink-0 text-[9px] bg-[#121212] hover:bg-white/5 border border-[#2A2A2A] text-on-surface-variant hover:text-white px-2.5 py-1.5 rounded-none transition-all uppercase">
                {q}
              </button>))}
            </div>
          </div>

          {/* Chat Input Bar */}
          <div className="p-4 border-t border-[#2A2A2A] bg-[#0F0F0F] shrink-0 flex gap-2 font-mono">
            <input type="text" placeholder="Ask Sentinel configurations..." value={userInput} onChange={(e) => setUserInput(e.target.value)} onKeyDown={(e) => {
              if (e.key === "Enter")
                handleSendMessage();
            }} className="flex-1 bg-[#121212] border border-[#2A2A2A] px-3.5 py-2.5 text-xs text-white placeholder-on-surface-variant/40 focus:outline-none focus:border-[#FF5A00] rounded-none" />
            <button onClick={() => handleSendMessage()} disabled={!userInput.trim() || chatLoading} className="bg-[#FF5A00] hover:bg-[#E04E00] disabled:bg-[#121212] text-white disabled:text-on-surface-variant/30 p-2.5 transition-all shrink-0 border border-[#FF5A00] rounded-none">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      </div>)}
    </AnimatePresence >

    {/* GALLERY IMAGE LIGHTBOX MODAL */}
    < AnimatePresence >
      {lightboxIndex !== null && filteredGalleryItems[lightboxIndex] && (<div className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col justify-between p-4 md:p-8">
        {/* Header */}
        <div className="flex justify-between items-center text-white font-mono text-xs z-10 w-full">
          <span className="text-[10px] px-2 py-1 bg-white/10 border border-white/20 uppercase tracking-widest font-bold">
            [ GALLERY ARCHIVE {lightboxIndex + 1} / {filteredGalleryItems.length} ]
          </span>
          <button onClick={() => setLightboxIndex(null)} className="p-2 hover:bg-white/10 text-white transition-all cursor-pointer rounded-full" title="Close Lightbox">
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Main Content Area (Image + Navigation) */}
        <div className="relative flex-1 flex items-center justify-center max-h-[75vh] my-4 w-full">
          {/* Previous Button */}
          <button onClick={() => {
            setLightboxIndex(prev => {
              if (prev === null)
                return null;
              return prev === 0 ? filteredGalleryItems.length - 1 : prev - 1;
            });
          }} className="absolute left-2 md:left-4 p-3 bg-white/5 hover:bg-white/25 border border-white/10 hover:border-white/40 text-white rounded-full transition-all cursor-pointer z-10 shadow-lg" title="Previous Photo">
            <ChevronRight className="h-5 w-5 rotate-180" />
          </button>

          {/* Main Content (Image or Placeholder Box) */}
          <motion.div key={lightboxIndex} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }} className="w-full max-w-4xl h-full flex items-center justify-center p-2">
            {filteredGalleryItems[lightboxIndex].isPlaceholder ? (<div className={`w-full max-w-2xl aspect-video rounded-2xl flex flex-col items-center justify-center p-8 bg-gradient-to-br ${filteredGalleryItems[lightboxIndex].bgColor} border border-white/10 shadow-2xl relative overflow-hidden`}>
              <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
              {filteredGalleryItems[lightboxIndex].iconName === "Terminal" && <Terminal className="h-24 w-24 text-sky-400/40 animate-pulse mb-6" />}
              {filteredGalleryItems[lightboxIndex].iconName === "ShieldCheck" && <ShieldCheck className="h-24 w-24 text-indigo-400/40 animate-pulse mb-6" />}
              {filteredGalleryItems[lightboxIndex].iconName === "Video" && <Video className="h-24 w-24 text-emerald-400/40 animate-pulse mb-6" />}

              <span className="text-[10px] px-3 py-1 bg-white/10 border border-white/20 text-white font-bold rounded-full uppercase tracking-widest mb-4">
                {filteredGalleryItems[lightboxIndex].category}
              </span>
              <h3 className="font-sans font-extrabold text-xl md:text-3xl text-white uppercase text-center mb-2 tracking-tight">
                {filteredGalleryItems[lightboxIndex].title}
              </h3>
              <p className="text-white/70 text-xs md:text-sm text-center max-w-lg leading-relaxed mb-4">
                {filteredGalleryItems[lightboxIndex].description}
              </p>
              <span className="text-sky-400 font-mono text-[10px] font-bold tracking-widest uppercase">
                {filteredGalleryItems[lightboxIndex].location}
              </span>
            </div>) : (<img src={filteredGalleryItems[lightboxIndex].image} alt={filteredGalleryItems[lightboxIndex].title} className="max-w-full max-h-[70vh] object-contain border border-white/10 shadow-2xl bg-black rounded-lg" />)}
          </motion.div>

          {/* Next Button */}
          <button onClick={() => {
            setLightboxIndex(prev => {
              if (prev === null)
                return null;
              return prev === filteredGalleryItems.length - 1 ? 0 : prev + 1;
            });
          }} className="absolute right-2 md:right-4 p-3 bg-white/5 hover:bg-white/25 border border-white/10 hover:border-white/40 text-white rounded-full transition-all cursor-pointer z-10 shadow-lg" title="Next Photo">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Footer Caption */}
        <div className="bg-black/85 border border-[#2A2A2A] p-4 md:p-6 text-center max-w-3xl mx-auto w-full z-10 rounded-none mb-4">
          <span className="text-[9px] bg-sky-600 text-white font-bold px-2.5 py-1 rounded-none uppercase tracking-wider mb-2 inline-block">
            {filteredGalleryItems[lightboxIndex].category}
          </span>
          <h3 className="text-white font-sans font-extrabold text-sm md:text-lg uppercase mb-2 tracking-tight">
            {filteredGalleryItems[lightboxIndex].title}
          </h3>
          <p className="text-slate-300 text-xs leading-relaxed max-w-2xl mx-auto mb-3">
            {filteredGalleryItems[lightboxIndex].description}
          </p>
          <span className="text-sky-400 font-mono text-[9px] font-bold tracking-widest uppercase">
            LOCATION: {filteredGalleryItems[lightboxIndex].location}
          </span>
        </div>
      </div>)
      }
    </AnimatePresence >

    {/* PRINTABLE QUOTE CONTAINER (Optimized white template hidden from standard layout, only visible for print engine) */}
    {
      calcResult && (<div id="printable-quote-section" className="hidden bg-white text-slate-900 p-8 max-w-4xl mx-auto border border-slate-300 font-sans">
        {/* Corporate Header */}
        <div className="flex justify-between items-start border-b-2 border-sky-600 pb-6 mb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-sky-700 tracking-tight">{(logoData.companyName && logoData.companySuffix ? `${logoData.companyName} ${logoData.companySuffix}` : "SECURITY PLUS ELECTRONICS")?.toUpperCase()}</h1>
            <p className="text-xs text-slate-500 uppercase tracking-wider font-mono">Central India's Premiere Security Systems Integrator</p>
            <p className="text-[10px] text-slate-400 mt-1">{contactData.address} • {contactData.email}</p>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-sky-600 uppercase tracking-widest block">[ OFFICIAL SECURITY PROPOSAL ]</span>
            <p className="text-[10px] text-slate-500 mt-1">DATE: {new Date().toLocaleDateString()}</p>
            <p className="text-[10px] text-slate-500">PLAN ID: SPE-{(calcInput.areaSizeSqFt * calcInput.indoorCams).toString().slice(0, 4)}</p>
          </div>
        </div>

        {/* Assessment Parameters */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">1. Assessment Parameters</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-3 border border-slate-100">
              <span className="text-[9px] text-slate-400 uppercase block">Premises Type</span>
              <span className="font-bold uppercase text-slate-800">{calcInput.premisesType}</span>
            </div>
            <div className="bg-slate-50 p-3 border border-slate-100">
              <span className="text-[9px] text-slate-400 uppercase block">Area Size (Sq Ft)</span>
              <span className="font-bold text-slate-800">{calcInput.areaSizeSqFt} Sq Ft</span>
            </div>
            <div className="bg-slate-50 p-3 border border-slate-100">
              <span className="text-[9px] text-slate-400 uppercase block">Indoor Cameras</span>
              <span className="font-bold text-slate-800">{calcInput.indoorCams} Units</span>
            </div>
            <div className="bg-slate-50 p-3 border border-slate-100">
              <span className="text-[9px] text-slate-400 uppercase block">Outdoor Cameras</span>
              <span className="font-bold text-slate-800">{calcInput.outdoorCams} Units</span>
            </div>
          </div>
        </div>

        {/* Core Hardware Proposals */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">2. Core Hardware Estimates</h3>
          <table className="w-full text-xs border border-slate-200 text-left">
            <thead>
              <tr className="bg-slate-100 text-slate-700 border-b border-slate-200 font-mono text-[9px] uppercase">
                <th className="p-3">Requirement Category</th>
                <th className="p-3">Estimated Rating / Capacity</th>
                <th className="p-3">Specification / Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-800">
              <tr>
                <td className="p-3 font-semibold">Total Security Cameras</td>
                <td className="p-3 font-bold text-sky-700">{calcResult.recommendedCameras} Units</td>
                <td className="p-3 text-slate-500">Includes {calcInput.indoorCams} Indoor &amp; {calcInput.outdoorCams} Outdoor high-definition cameras</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">NVR Channels Sizing</td>
                <td className="p-3 font-bold text-sky-700">{calcResult.nvrChannels} CH NVR</td>
                <td className="p-3 text-slate-500">Commercial network video recorder with active PoE ports</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Required Storage Capacity</td>
                <td className="p-3 font-bold text-sky-700">{calcResult.storageRequiredTB} TB</td>
                <td className="p-3 text-slate-500">{calcResult.recommendedStorageHDD}</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">Power Backup UPS Sizing</td>
                <td className="p-3 font-bold text-sky-700">{calcResult.backupUpsRatingVA} VA</td>
                <td className="p-3 text-slate-500">Guarantees continuous security feed retention during power outages</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Hardware BOM details */}
        <div className="mb-6">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-widest border-b border-slate-200 pb-2 mb-3">3. Included Installation Hardware BOM</h3>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {calcResult.recommendedSpecs.map((spec, idx) => (<div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 border border-slate-100 text-slate-700">
              <span className="text-sky-600 font-bold">✓</span>
              <span>{spec}</span>
            </div>))}
          </div>
        </div>

        {/* Wiring & Deploy details */}
        <div className="mb-8 grid grid-cols-2 gap-4 text-xs">
          <div className="bg-slate-50 p-4 border border-slate-100">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Network Cabling Estimate</h4>
            <p className="text-base font-bold text-slate-800">{calcResult.estimatedCablesMeters} Meters of CAT6 cable included</p>
          </div>
          <div className="bg-slate-50 p-4 border border-slate-100">
            <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1">Installation SLA Timeline</h4>
            <p className="text-base font-bold text-slate-800">{calcResult.estimatedLaborDays} Days to complete operational deployment</p>
          </div>
        </div>

        {/* Footer & Disclaimer */}
        <div className="border-t border-slate-200 pt-6 text-center text-[10px] text-slate-400 leading-relaxed">
          <p className="font-semibold uppercase text-slate-500 mb-1">Guaranteed SLA response • 1 Year Replacement Warranty • Nagpur Dispatch Hub</p>
          <p>This document constitutes an automated, non-binding preliminary equipment and load analysis generated under the SPE-Grid framework. Actual requirements may fluctuate depending on onsite ambient lighting variables, physical obstacle profiles, and path layout complexities. Book a free onsite assessment to finalize installation blueprints.</p>
          <p className="mt-4 text-slate-500 font-mono text-[9px]">SECURITY PLUS ELECTRONICS • CENTRAL LEDGER SECURE TELEMETRY</p>
        </div>
      </div>)
    }
  </div >);
}

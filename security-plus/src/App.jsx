import React, { useState, useEffect, useRef } from "react";
import "./index.css";
import { Video, Cpu, Router, BatteryCharging, LockKeyhole, Home, Building, HeartPulse, Briefcase, Factory, ChevronRight, X, Send, Sparkles, Calculator, Calendar, ArrowRight, ShieldCheck, Check, Loader2, Menu, MapPin, Globe, User, HardDrive, Terminal, Zap, Fingerprint, Scan, Key, AlertTriangle, Play, Pause, Eye, Network, RefreshCw, CheckCircle2, Ticket, ShoppingBag, ExternalLink, Printer, Twitter, Linkedin, Facebook, Share2, Link, Volume2, VolumeX, Heart, Plus, Trash2, ClipboardList, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SOLUTIONS_DATA, SECTORS_DATA, QUICK_QUESTIONS, PRODUCTS_DATA } from "./data";
import logo from "./assets/images/logo.png";
import speShowroomTour from "./assets/images/spe_showroom_tour_1782789590181.jpg";
import speCultureCollab from "./assets/images/spe_culture_collab_1782789609536.jpg";
import speTrainingClass from "./assets/images/spe_training_class_1782789626461.jpg";
import securityPlusLogo from "./assets/images/security_plus_logo_1783018092399.jpg";
import AdminPanel from "./components/AdminPanel";
import { SEOManager } from "./components/SEOManager";
import { getProductImageUrls } from "./components/BlurUpImage";
import BrandCarousel from "./components/BrandCarousel";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { ProductCategories } from "./components/section/ProductCategories";
import { VirtualShowroom } from "./components/VirtualShowroom";
import { SectorsWeProtect } from "./components/SectorsWeProtect";
import { SurveillancePlanner } from "./components/SurveillancePlanner";

// Import modular section page
import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import { Careers as CareersPage } from "./components/Careers";
import { ProductsCatalog } from "./components/ProductsCatalog";
import { Testimonials as TestimonialsPage } from "./components/Testimonials";
import { BlogSection } from "./components/BlogSection";
import { GallerySection } from "./components/GallerySection";
import { AuthSection } from "./components/AuthSection";
import PRODUCT_CATEGORIES from "./json/productCategories.json"
import Footer from "./components/Footer";
import ReelSection from "./components/section/ReelSection";


import TESTIMONIALS_DATA from "./json/testimonials.json"

import { ScrollableTestimonials, OurThought, OurBlogs, Careers, FAQSection, CorporateContactForm, OurLocation } from "./pages/HomeSections";



// Ruotes
import { BrowserRouter, Route, Routes, useLocation, useNavigation } from "react-router-dom"


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



function App() {

  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);
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
  const [selectedSolution, setSelectedSolution] = useState(null);
  const [selectedSector, setSelectedSector] = useState(null);
  const [showroomModalOpen, setShowroomModalOpen] = useState(false);
  const [cctvRes, setCctvRes] = useState("4K");
  const [cctvNightMode, setCctvNightMode] = useState(false);
  const [cctvFps, setCctvFps] = useState(30);
  const [aiActiveScan, setAiActiveScan] = useState(null);
  const [aiScanLogs, setAiScanLogs] = useState([
    "System booted.",
    "Optical feeds synchronized on Layer 3 network."
  ]);

  const [powerCamCount, setPowerCamCount] = useState(8);
  const [powerBackupHours, setPowerBackupHours] = useState(4);
  const [lockStatus, setLockStatus] = useState("idle");
  const [selectedLockMethod, setSelectedLockMethod] = useState("fingerprint");

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
  const [activeShowroomHotspot, setActiveShowroomHotspot] = useState(null);
  const [showroomScanStatus, setShowroomScanStatus] = useState("idle");
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
  const [toastMessage, setToastMessage] = useState(null);
  const [activeTab, setActiveTab] = useState("home");
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
  const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [wostonModalOpen, setWostonModalOpen] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [redirectProgress, setRedirectProgress] = useState(0);
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
  const [blogCategoryFilter, setBlogCategoryFilter] = useState("All");

  const [testimonialFilter, setTestimonialFilter] = useState("all");

  const [contactForm, setContactForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    department: "sales",
    message: ""
  });
  const [contactTicket, setContactTicket] = useState(null);
  const [pinging, setPinging] = useState(false);
  const [pingResults, setPingResults] = useState([]);
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, chatLoading]);

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

  useEffect(() => {
    handleRunCalculator();
  }, [calcInput]);

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
    const ratePerCamGB = calcInput.resolution === "1080p" ? 15 : 45;
    let totalGB = cams * ratePerCamGB * calcInput.retentionDays;
    if (!calcInput.continuousRecording) {
      totalGB = totalGB * 0.4;
    }
    const storageTB = parseFloat((totalGB / 1024).toFixed(2));
    const hddCount = Math.ceil(storageTB / 4);
    const recommendedHDD = `${hddCount}x 4TB Western Digital Purple Surveillance HDD (Total: ${hddCount * 4}TB)`;
    const wattLoad = (cams * 15) + 40;
    const upsVA = Math.ceil((wattLoad / 0.7) * 1.4 * (calcInput.retentionDays > 0 ? 1.2 : 1));
    const cables = cams * 25;
    const labor = Math.ceil(cams / 2);
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

  const runSmartLockAuth = () => {
    setLockStatus("scanning");
    setTimeout(() => {
      const success = Math.random() > 0.2;
      setLockStatus(success ? "granted" : "denied");
    }, 1800);
  };

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




  return (
    <>
      <Header wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} logoData={logoData} adminEmails={adminEmails} setAdminLoginOpen={setAdminLoginOpen} setToastMessage={setToastMessage} PRODUCTS_DATA={PRODUCTS_DATA} getProductImageUrls={getProductImageUrls} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} isAdminMode={isAdminMode} setIsAdminMode={setIsAdminMode} inquiryList={inquiryList} setIsInquiryDrawerOpen={setIsInquiryDrawerOpen} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />

      <main className={location.pathname === "/" ? "pt-0 bg-[#070913]" : "pt-20 bg-white"}>

        <Routes>
          <Route path="/" element={<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Hero heroSlideIndex={heroSlideIndex} setHeroSlideIndex={setHeroSlideIndex} setActiveTab={setActiveTab} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

            <BrandCarousel />

            <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} setBlogCategoryFilter={setBlogCategoryFilter} setActiveTab={setActiveTab} />


            <VirtualShowroom loadedImages={loadedImages} setLoadedImages={setLoadedImages} showroomScanStatus={showroomScanStatus} setShowroomScanStatus={setShowroomScanStatus} activeShowroomHotspot={activeShowroomHotspot} setActiveShowroomHotspot={setActiveShowroomHotspot} setToastMessage={setToastMessage} setBookingConfirmed={setBookingConfirmed} setBookingForm={setBookingForm} setShowroomModalOpen={setShowroomModalOpen} />

            <ReelSection />

            <motion.section {...fadeInUp} className="py-24 px-8 relative z-20 border-b border-slate-100 bg-slate-50">
              <div className="max-w-4xl mx-auto text-center">
                <span className="font-sans font-bold text-[10px] text-sky-600 tracking-widest uppercase block mb-3">OUR VISION &amp; SLA VALUES</span>
                <h2 className="font-sans text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 uppercase">Our Vision &amp; Mission</h2>
                <div className="h-0.5 w-20 bg-sky-600 mx-auto mb-8"></div>
                <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
                  Deliver innovative, reliable, and complete security solutions with exceptional customer support. We custom-engineer systems that protect Nagpur's leading commercial, financial, and industrial properties with absolute technological integrity.
                </p>
              </div>
            </motion.section>

            <ScrollableTestimonials />
            <OurThought />
            {/* <OurBlogs /> */}
            {/* <OurLocation contactData={contactData} /> */}
            <FAQSection />
          </motion.div>} />

          <Route path="/about" Component={AboutUs} />
          <Route path="/gallary" element={<GallerySection setLightboxIndex={setLightboxIndex} galleryItems={GALLERY_ITEMS} />} />
          <Route path="/contact" element={<ContactUs logoData={logoData} setSupportTickets={setSupportTickets} setToastMessage={setToastMessage} />} />
          <Route path="/career" element={<CareersPage careerApplications={careerApplications} setCareerApplications={setCareerApplications} setToastMessage={setToastMessage} />} />
          <Route path="/products" element={<ProductsCatalog products={products} productCategories={productCategories} customerUser={customerUser} wishlist={wishlist} toggleWishlist={toggleWishlist} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} />} />
          <Route path="/testimonial" element={<TestimonialsPage testimonials={testimonials} setTestimonials={setTestimonials} setToastMessage={setToastMessage} />} />
          <Route path="/blogs" element={<BlogSection subscribers={subscribers} setSubscribers={setSubscribers} setToastMessage={setToastMessage} setSelectedBlog={setSelectedBlog} />} />
          <Route path="/login" element={<AuthSection registeredCustomers={registeredCustomers} setRegisteredCustomers={setRegisteredCustomers} setCustomerUser={setCustomerUser} setToastMessage={setToastMessage} />} />

        </Routes>
      </main>

      <Footer logoData={logoData} />

    </>
  )

}
export default App;
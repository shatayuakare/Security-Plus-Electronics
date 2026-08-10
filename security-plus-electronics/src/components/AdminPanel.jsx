import React, { useState, useEffect } from "react";
import { Terminal, ShieldCheck, Database, Settings, LogOut, Check, X, Search, Trash2, Cpu, Users, BarChart2, FileText, ArrowLeft, Mail, Plus, Edit2, Building, Video, Sliders, Play, CheckCircle2, ShoppingBag, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
export default function AdminPanel({ onExit, supportTickets, setSupportTickets, careerApplications, setCareerApplications, subscribers, setSubscribers, setToastMessage, products, setProducts, productCategories, setProductCategories, contactData, setContactData, logoData, setLogoData, socialLinks, setSocialLinks, reels, setReels, adminEmails, setAdminEmails, adminPasscodeVal, setAdminPasscodeVal }) {
  const [activeTab, setActiveTab] = useState("dashboard");
  // New Management States
  const [productSearch, setProductSearch] = useState("");
  const [productCategoryFilter, setProductCategoryFilter] = useState("all");
  // Reel Form modal states
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);
  const [editingReel, setEditingReel] = useState(null);
  const [reelForm, setReelForm] = useState({
    title: "",
    videoUrl: "",
    category: "",
    views: "1.0K",
    likes: 45
  });
  // Product Form modal states
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    price: "",
    rating: 4.5,
    image: "cctv",
    desc: "",
    specs: [{ label: "Lens Type", value: "" }, { label: "Sensor", value: "" }]
  });
  // Category states
  const [categoryInput, setCategoryInput] = useState("");
  const [editingCategoryIndex, setEditingCategoryIndex] = useState(null);
  const [editingCategoryValue, setEditingCategoryValue] = useState("");
  // Branding Form states
  const [logoUrl, setLogoUrl] = useState(logoData.logoUrl || "");
  const [companyName, setCompanyName] = useState(logoData.companyName || "");
  const [companySuffix, setCompanySuffix] = useState(logoData.companySuffix || "");
  // Contact Form states
  const [contactPhone, setContactPhone] = useState(contactData.phone || "");
  const [contactEmail, setContactEmail] = useState(contactData.email || "");
  const [contactAddress, setContactAddress] = useState(contactData.address || "");
  const [contactHours, setContactHours] = useState(contactData.officeHours || "");
  const [contactMapAddress, setContactMapAddress] = useState(contactData.mapAddress || "");
  // Socials Form states
  const [socialTwitter, setSocialTwitter] = useState(socialLinks.twitter || "");
  const [socialFacebook, setSocialFacebook] = useState(socialLinks.facebook || "");
  const [socialLinkedin, setSocialLinkedin] = useState(socialLinks.linkedin || "");
  // 1. PRODUCTS OPERATIONS
  const handleOpenAddProduct = () => {
    setEditingProduct(null);
    setProductForm({
      name: "",
      category: productCategories[0] || "",
      price: "₹3,499",
      rating: 4.8,
      image: "cctv",
      desc: "",
      specs: [
        { label: "Lens Type", value: "4mm Fixed Lens" },
        { label: "IR Range", value: "30 Meters HD" },
        { label: "Housing", value: "IP67 Weatherproof" }
      ]
    });
    setIsProductModalOpen(true);
  };
  const handleOpenEditProduct = (prod) => {
    setEditingProduct(prod);
    setProductForm({
      name: prod.name,
      category: prod.category,
      price: prod.price,
      rating: prod.rating,
      image: prod.image || "cctv",
      desc: prod.desc,
      specs: prod.specs && prod.specs.length > 0 ? [...prod.specs] : [{ label: "", value: "" }]
    });
    setIsProductModalOpen(true);
  };
  const handleSaveProduct = (e) => {
    e.preventDefault();
    if (!productForm.name || !productForm.category)
      return;
    if (editingProduct) {
      setProducts(prev => prev.map(p => p.id === editingProduct.id ? { ...p, ...productForm } : p));
      addLog("PRODUCTS", `Updated product details for: ${productForm.name}`, "success");
      setToastMessage(`Product "${productForm.name}" updated successfully.`);
    }
    else {
      const newProd = {
        id: `prod-${Date.now()}`,
        ...productForm
      };
      setProducts(prev => [...prev, newProd]);
      addLog("PRODUCTS", `Registered new catalog item: ${productForm.name}`, "success");
      setToastMessage(`New product "${productForm.name}" added to catalog.`);
    }
    setIsProductModalOpen(false);
  };
  const handleDeleteProduct = (prodId, prodName) => {
    if (confirm(`Are you absolutely sure you want to delete ${prodName} from the database? This cannot be undone.`)) {
      setProducts(prev => prev.filter(p => p.id !== prodId));
      addLog("PRODUCTS", `Removed product from database: ${prodName}`, "warn");
      setToastMessage(`Product "${prodName}" removed from catalog.`);
    }
  };
  const handleAddSpecField = () => {
    setProductForm(prev => ({
      ...prev,
      specs: [...prev.specs, { label: "", value: "" }]
    }));
  };
  const handleRemoveSpecField = (index) => {
    setProductForm(prev => ({
      ...prev,
      specs: prev.specs.filter((_, idx) => idx !== index)
    }));
  };
  const handleSpecChange = (index, field, val) => {
    setProductForm(prev => {
      const updatedSpecs = [...prev.specs];
      updatedSpecs[index][field] = val;
      return { ...prev, specs: updatedSpecs };
    });
  };
  // 2. CATEGORY OPERATIONS
  const handleAddCategory = (e) => {
    e.preventDefault();
    const cleanCat = categoryInput.trim();
    if (!cleanCat)
      return;
    if (productCategories.includes(cleanCat)) {
      alert("This category already exists.");
      return;
    }
    setProductCategories(prev => [...prev, cleanCat]);
    addLog("CATEGORIES", `Created product category: ${cleanCat}`, "success");
    setToastMessage(`Category "${cleanCat}" created successfully.`);
    setCategoryInput("");
  };
  const handleUpdateCategory = (index) => {
    const oldCatName = productCategories[index];
    const newCatName = editingCategoryValue.trim();
    if (!newCatName || oldCatName === newCatName) {
      setEditingCategoryIndex(null);
      return;
    }
    setProducts(prev => prev.map(p => p.category === oldCatName ? { ...p, category: newCatName } : p));
    setProductCategories(prev => prev.map((cat, idx) => idx === index ? newCatName : cat));
    addLog("CATEGORIES", `Renamed category "${oldCatName}" to "${newCatName}" (Cascaded products).`, "success");
    setToastMessage(`Category updated to "${newCatName}". All products updated.`);
    setEditingCategoryIndex(null);
  };
  const handleDeleteCategory = (catName) => {
    const productsInCat = products.filter(p => p.category === catName);
    if (productsInCat.length > 0) {
      if (!confirm(`Warning: There are ${productsInCat.length} products assigned to "${catName}". Deleting this category will leave these products uncategorized. Proceed?`)) {
        return;
      }
    }
    else {
      if (!confirm(`Remove category "${catName}"?`))
        return;
    }
    setProductCategories(prev => prev.filter(c => c !== catName));
    addLog("CATEGORIES", `Deleted product category: ${catName}`, "warn");
    setToastMessage(`Category "${catName}" removed.`);
  };
  // 2.5. REELS OPERATIONS
  const handleOpenAddReel = () => {
    setEditingReel(null);
    setReelForm({
      title: "",
      videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-scanning-a-fingerprint-on-a-digital-reader-42358-large.mp4",
      category: productCategories[0] || "CCTV Cameras",
      views: "1.0K",
      likes: Math.floor(Math.random() * 100) + 10
    });
    setIsReelModalOpen(true);
  };
  const handleOpenEditReel = (rl) => {
    setEditingReel(rl);
    setReelForm({
      title: rl.title,
      videoUrl: rl.videoUrl,
      category: rl.category,
      views: rl.views || "1.0K",
      likes: rl.likes || 10
    });
    setIsReelModalOpen(true);
  };
  const handleSaveReel = (e) => {
    e.preventDefault();
    if (!reelForm.title || !reelForm.videoUrl || !reelForm.category)
      return;
    if (editingReel) {
      setReels(prev => prev.map(r => r.id === editingReel.id ? { ...r, ...reelForm } : r));
      addLog("REELS", `Updated action reel: ${reelForm.title}`, "success");
      setToastMessage(`Action reel "${reelForm.title}" updated successfully.`);
    }
    else {
      const newReel = {
        id: `reel-${Date.now()}`,
        ...reelForm
      };
      setReels(prev => [...prev, newReel]);
      addLog("REELS", `Registered new action reel: ${reelForm.title}`, "success");
      setToastMessage(`New action reel "${reelForm.title}" added successfully.`);
    }
    setIsReelModalOpen(false);
  };
  const handleDeleteReel = (reelId, title) => {
    if (confirm(`Are you absolutely sure you want to delete the reel "${title}"?`)) {
      setReels(prev => prev.filter(r => r.id !== reelId));
      addLog("REELS", `Deleted action reel: ${title}`, "warn");
      setToastMessage(`Reel "${title}" deleted.`);
    }
  };
  // 3. BRANDING & CONTACT SAVING
  const handleSaveBranding = (e) => {
    e.preventDefault();
    setLogoData({
      logoUrl,
      companyName,
      companySuffix
    });
    addLog("BRANDING", `Updated website header branding: ${companyName}`, "success");
    setToastMessage("Website branding configuration updated.");
  };
  const handleSaveContactAndSocials = (e) => {
    e.preventDefault();
    setContactData({
      phone: contactPhone,
      email: contactEmail,
      address: contactAddress,
      officeHours: contactHours,
      mapAddress: contactMapAddress,
      coordinates: "21.1458° N, 79.0882° E",
      mapAddressLabel: "SPE CCTV MALL HQ",
      mapCoords: { lat: "21.1458° N", lng: "79.0882° E" }
    });
    setSocialLinks({
      twitter: socialTwitter,
      facebook: socialFacebook,
      linkedin: socialLinkedin
    });
    addLog("CONTACTS", `Updated contact information and social media links.`, "success");
    setToastMessage("Corporate contact cards and social links synchronized.");
  };
  // Dashboard & Logging state
  const [diagnosticLogs, setDiagnosticLogs] = useState([]);
  const [cpuLoad, setCpuLoad] = useState(34);
  const [networkLatency, setNetworkLatency] = useState(14);
  const [storageUsed, setStorageUsed] = useState(62.4);
  // Search & Filters
  const [ticketSearch, setTicketSearch] = useState("");
  const [ticketFilter, setTicketFilter] = useState("all");
  const [careerSearch, setCareerSearch] = useState("");
  // Detailed Modal Views
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [selectedApp, setSelectedApp] = useState(null);
  const [ticketNoteText, setTicketNoteText] = useState("");
  // Extensibility state (for future-proofing)
  const [customModules, setCustomModules] = useState(() => {
    const saved = localStorage.getItem("spe_custom_modules");
    if (saved)
      return JSON.parse(saved);
    return [];
  });
  const [newModuleName, setNewModuleName] = useState("");
  const [newModuleDesc, setNewModuleDesc] = useState("");
  const [showAddModuleModal, setShowAddModuleModal] = useState(false);
  // Simulated live metrics updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCpuLoad(prev => {
        const delta = Math.floor(Math.random() * 9) - 4;
        return Math.max(15, Math.min(85, prev + delta));
      });
      setNetworkLatency(prev => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.max(8, Math.min(45, prev + delta));
      });
    }, 4000);
    // Initial logs
    const now = new Date().toLocaleTimeString();
    setDiagnosticLogs([
      { time: now, module: "CORE", message: "SPE Nagpur Central Dispatch synchronized.", type: "success" },
      { time: now, module: "SLA", message: "SLA response clock initialized at 2 hours.", type: "info" },
      { time: now, module: "TELEMETRY", message: "Listening for physical virtual tour hotspots clicks...", type: "info" }
    ]);
    return () => clearInterval(interval);
  }, []);
  const addLog = (module, message, type = "info") => {
    const time = new Date().toLocaleTimeString();
    setDiagnosticLogs(prev => [{ time, module, message, type }, ...prev.slice(0, 39)]);
  };
  // Ticket actions
  const handleAssignTicket = (ticketId, engineer) => {
    setSupportTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        const notes = [...(t.notes || []), `Assigned to ${engineer} by admin.`];
        addLog("TICKET", `Ticket ${ticketId} assigned to ${engineer}.`, "info");
        return { ...t, status: "Assigned", assignedTo: engineer, notes };
      }
      return t;
    }));
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket((prev) => ({
        ...prev,
        status: "Assigned",
        assignedTo: engineer,
        notes: [...(prev.notes || []), `Assigned to ${engineer} by admin.`]
      }));
    }
    setToastMessage(`Assigned engineer ${engineer} to support ticket ${ticketId}.`);
  };
  const handleResolveTicket = (ticketId) => {
    setSupportTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        const notes = [...(t.notes || []), `Ticket marked as RESOLVED by admin.`];
        addLog("TICKET", `Ticket ${ticketId} resolved successfully.`, "success");
        return { ...t, status: "Resolved", notes };
      }
      return t;
    }));
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket((prev) => ({
        ...prev,
        status: "Resolved",
        notes: [...(prev.notes || []), `Ticket marked as RESOLVED by admin.`]
      }));
    }
    setToastMessage(`Ticket ${ticketId} marked as fully resolved.`);
  };
  const handleAddTicketNote = (ticketId) => {
    if (!ticketNoteText.trim())
      return;
    setSupportTickets(prev => prev.map(t => {
      if (t.id === ticketId) {
        const notes = [...(t.notes || []), `[Note] ${ticketNoteText}`];
        addLog("TICKET_NOTE", `Added log note to ticket ${ticketId}.`, "info");
        return { ...t, notes };
      }
      return t;
    }));
    if (selectedTicket && selectedTicket.id === ticketId) {
      setSelectedTicket((prev) => ({
        ...prev,
        notes: [...(prev.notes || []), `[Note] ${ticketNoteText}`]
      }));
    }
    setTicketNoteText("");
  };
  const handleDeleteTicket = (ticketId) => {
    if (confirm(`Are you sure you want to delete support ticket ${ticketId}?`)) {
      setSupportTickets(prev => prev.filter(t => t.id !== ticketId));
      setSelectedTicket(null);
      addLog("TICKET", `Ticket ${ticketId} permanently deleted.`, "warn");
      setToastMessage(`Ticket ${ticketId} removed from dispatch database.`);
    }
  };
  // Career actions
  const handleUpdateAppStatus = (appId, status) => {
    setCareerApplications(prev => prev.map(a => {
      if (a.id === appId) {
        addLog("CAREERS", `Application ${appId} marked as ${status}.`, "info");
        return { ...a, status };
      }
      return a;
    }));
    if (selectedApp && selectedApp.id === appId) {
      setSelectedApp((prev) => ({ ...prev, status }));
    }
    setToastMessage(`Career candidate ${appId} state set to ${status}.`);
  };
  const handleDeleteApplication = (appId) => {
    if (confirm(`Are you sure you want to delete application ${appId}?`)) {
      setCareerApplications(prev => prev.filter(a => a.id !== appId));
      setSelectedApp(null);
      addLog("CAREERS", `Application ${appId} deleted from records.`, "warn");
      setToastMessage(`Application ${appId} removed successfully.`);
    }
  };
  // Subscriber actions
  const handleDeleteSubscriber = (email) => {
    if (confirm(`Remove ${email} from the newsletter database?`)) {
      setSubscribers(prev => prev.filter(e => e !== email));
      addLog("SUBSCRIBER", `${email} unsubscribed.`, "warn");
      setToastMessage(`Removed ${email} from newsletter lists.`);
    }
  };
  // Extensibility actions (Adding custom module placeholders)
  const handleAddCustomModule = (e) => {
    e.preventDefault();
    if (!newModuleName.trim())
      return;
    const newMod = {
      id: `SPE-MOD-${Math.floor(1000 + Math.random() * 9000)}`,
      name: newModuleName,
      description: newModuleDesc || "Custom system extension interface.",
      status: "Configured (Awaiting Integration API)",
      dateAdded: new Date().toISOString().split("T")[0]
    };
    const updated = [...customModules, newMod];
    setCustomModules(updated);
    localStorage.setItem("spe_custom_modules", JSON.stringify(updated));
    addLog("EXTENSION", `Configured new custom module: ${newModuleName}`, "success");
    setToastMessage(`Successfully generated custom expansion node: ${newModuleName}`);
    setNewModuleName("");
    setNewModuleDesc("");
    setShowAddModuleModal(false);
  };
  const handleDeleteModule = (modId) => {
    const updated = customModules.filter(m => m.id !== modId);
    setCustomModules(updated);
    localStorage.setItem("spe_custom_modules", JSON.stringify(updated));
    addLog("EXTENSION", `Deleted module node ${modId}`, "warn");
  };
  // Filter lists
  const filteredTickets = supportTickets.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(ticketSearch.toLowerCase()) ||
      t.id.toLowerCase().includes(ticketSearch.toLowerCase()) ||
      t.message.toLowerCase().includes(ticketSearch.toLowerCase());
    if (ticketFilter === "all")
      return matchesSearch;
    return matchesSearch && t.status.toLowerCase() === ticketFilter.toLowerCase();
  });
  const filteredCareers = careerApplications.filter(c => c.name.toLowerCase().includes(careerSearch.toLowerCase()) ||
    c.email.toLowerCase().includes(careerSearch.toLowerCase()) ||
    c.id.toLowerCase().includes(careerSearch.toLowerCase()));
  return (<div className="bg-[#0b0c10] text-slate-100 min-h-screen font-sans flex flex-col md:flex-row relative selection:bg-primary selection:text-white">
    {/* Background Grid Pattern */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none z-0"></div>

    {/* Sidebar Navigation */}
    <div className="w-full md:w-64 bg-[#12141c] border-b md:border-b-0 md:border-r border-slate-800 p-6 flex flex-col justify-between shrink-0 relative z-10">
      <div>
        {/* Brand Header */}
        <div className="flex items-center gap-3 mb-8 pb-5 border-b border-slate-800">
          <div className="relative">
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-emerald-500 rounded-full animate-ping"></span>
            <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-emerald-500 rounded-full"></span>
            <Database className="h-6 w-6 text-sky-400" />
          </div>
          <div>
            <h1 className="font-sans font-extrabold text-xs tracking-wider uppercase text-white">SPE Command Center</h1>
            <span className="text-[9px] font-mono font-bold text-sky-400 uppercase tracking-widest block">ADMIN PANEL v1.4.0</span>
          </div>
        </div>

        {/* Nav Items */}
        <nav className="space-y-1">
          <button onClick={() => { setActiveTab("dashboard"); addLog("NAV", "Opened Executive Dashboard View."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "dashboard" ? "bg-sky-550 bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <BarChart2 className="h-4 w-4 shrink-0" />
              OVERVIEW DASHBOARD
            </span>
            <span className="bg-slate-800 text-[8px] text-slate-300 font-bold px-1.5 py-0.5 rounded border border-slate-700 font-mono">
              LIVE
            </span>
          </button>

          <button onClick={() => { setActiveTab("tickets"); addLog("NAV", "Opened SLA Tickets Ledger."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "tickets" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Terminal className="h-4 w-4 shrink-0" />
              SUPPORT TICKETS
            </span>
            {supportTickets.filter(t => t.status === "Open").length > 0 && (<span className="bg-amber-500/20 text-[8px] text-amber-400 font-bold px-1.5 py-0.5 rounded border border-amber-500/30 font-mono">
              {supportTickets.filter(t => t.status === "Open").length} NEW
            </span>)}
          </button>

          <button onClick={() => { setActiveTab("admin_manager"); addLog("NAV", "Opened Admin Accounts Manager."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "admin_manager" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-450" />
              ADMIN MANAGER
            </span>
            <span className="bg-slate-800 text-[8px] text-slate-400 px-1.5 py-0.5 rounded font-mono">
              {adminEmails.length} ACTIVE
            </span>
          </button>

          <button onClick={() => { setActiveTab("careers"); addLog("NAV", "Opened Career Application Board."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "careers" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Users className="h-4 w-4 shrink-0" />
              CAREERS &amp; ACADEMY
            </span>
            {careerApplications.filter(a => a.status === "Pending Review").length > 0 && (<span className="bg-indigo-500/20 text-[8px] text-indigo-400 font-bold px-1.5 py-0.5 rounded border border-indigo-500/30 font-mono">
              {careerApplications.filter(a => a.status === "Pending Review").length} NEW
            </span>)}
          </button>

          <button onClick={() => { setActiveTab("subscribers"); addLog("NAV", "Opened Subscriber Email Lists."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "subscribers" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0" />
              SUBSCRIBE LISTS
            </span>
            <span className="bg-slate-800 text-[8px] text-slate-400 px-1.5 py-0.5 rounded font-mono">
              {subscribers.length}
            </span>
          </button>

          {/* NEW EXTENSIBLE TABS FOR DATA MANAGEMENT */}
          <button onClick={() => { setActiveTab("products"); addLog("NAV", "Opened Catalog Products Manager."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "products" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <ShoppingBag className="h-4 w-4 shrink-0" />
              PRODUCTS DATA
            </span>
            <span className="bg-slate-800 text-[8px] text-slate-400 px-1.5 py-0.5 rounded font-mono">
              {products.length}
            </span>
          </button>

          <button onClick={() => { setActiveTab("categories"); addLog("NAV", "Opened Categories Manager."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "categories" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Sliders className="h-4 w-4 shrink-0" />
              CATEGORIES
            </span>
            <span className="bg-slate-800 text-[8px] text-slate-400 px-1.5 py-0.5 rounded font-mono">
              {productCategories.length}
            </span>
          </button>

          <button onClick={() => { setActiveTab("branding"); addLog("NAV", "Opened Branding & Contacts Configuration."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "branding" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Building className="h-4 w-4 shrink-0" />
              LOGO &amp; CONTACTS
            </span>
          </button>

          <button onClick={() => { setActiveTab("reels"); addLog("NAV", "Opened Action Reels Manager."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "reels" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Video className="h-4 w-4 shrink-0" />
              ACTION REELS
            </span>
            <span className="bg-slate-800 text-[8px] text-slate-400 px-1.5 py-0.5 rounded font-mono">
              {reels.length}
            </span>
          </button>

          <button onClick={() => { setActiveTab("config"); addLog("NAV", "Opened API Expansion Module Console."); }} className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-mono text-[10px] font-bold tracking-wider uppercase transition-all cursor-pointer ${activeTab === "config" ? "bg-primary/15 text-sky-400 border border-primary/30 shadow-md shadow-sky-950/20" : "text-slate-400 hover:text-white hover:bg-slate-800/40 border border-transparent"}`}>
            <span className="flex items-center gap-2.5">
              <Settings className="h-4 w-4 shrink-0" />
              SYSTEM EXPANSION
            </span>
            {customModules.length > 0 && (<span className="bg-emerald-500/20 text-[8px] text-emerald-400 font-bold px-1.5 py-0.5 rounded border border-emerald-500/30 font-mono">
              +{customModules.length} NODE
            </span>)}
          </button>
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="pt-6 border-t border-slate-800 space-y-4">
        <div className="flex items-center gap-2 text-[10px] font-mono text-slate-500 uppercase tracking-wide">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          <span>SECURE SYSTEM LINK</span>
        </div>
        <button onClick={onExit} className="w-full py-3 bg-rose-950/40 hover:bg-rose-900/30 text-rose-400 hover:text-rose-300 border border-rose-900/40 rounded-xl font-mono text-[10px] font-bold uppercase tracking-widest cursor-pointer transition-all flex items-center justify-center gap-2">
          <LogOut className="h-3.5 w-3.5" />
          LOGOUT SYSTEM
        </button>
      </div>
    </div>

    {/* Main Panel Window */}
    <div className="flex-1 flex flex-col min-w-0 relative z-10 bg-[#0d0f14]">

      {/* Upper System Status Bar */}
      <header className="h-16 border-b border-slate-800 px-6 flex items-center justify-between bg-[#12141c]/50 backdrop-blur-md shrink-0">
        <div className="flex items-center gap-4">
          <button onClick={onExit} className="text-slate-400 hover:text-white flex items-center gap-1 text-[10px] font-mono tracking-widest uppercase cursor-pointer">
            <ArrowLeft className="h-3.5 w-3.5" />
            BACK TO SITE
          </button>
          <span className="text-slate-700 font-mono">|</span>
          <div className="flex items-center gap-2 font-mono text-[10px] text-slate-400">
            <span className="font-bold text-slate-500 uppercase">ACTIVE DATABASE CONNECTED:</span>
            <span className="bg-slate-800 text-[9px] font-bold text-sky-400 px-2 py-0.5 rounded border border-slate-700">LOCAL_PERSISTENCE (SYNC)</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-[10px] font-mono text-slate-400 uppercase">
          <div className="hidden lg:flex items-center gap-4 border-r border-slate-800 pr-6">
            <span>SLA GUARANTEE: <strong className="text-emerald-400">100%</strong></span>
            <span>PENDING INQUIRIES: <strong className="text-amber-400">{supportTickets.filter(t => t.status === "Open").length}</strong></span>
          </div>
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
            <span>SECURE ACCESS SESSION</span>
          </div>
        </div>
      </header>

      {/* Dynamic Workspace Container */}
      <main className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8">

        {/* TAB 1: EXECUTIVE DASHBOARD */}
        {activeTab === "dashboard" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">

          {/* Dynamic KPI Widget Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#12141c] p-5 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-widest">[ SLA TICKETS ]</span>
                <span className="text-3xl font-extrabold font-mono text-white mt-1 block">{supportTickets.length}</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-1">
                  {supportTickets.filter(t => t.status === "Resolved").length} FULLY RESOLVED
                </span>
              </div>
              <div className="p-3 bg-sky-950/50 rounded-xl border border-sky-850/40 text-sky-400">
                <Terminal className="h-6 w-6" />
              </div>
            </div>

            <div className="bg-[#12141c] p-5 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-widest">[ SECURITY ADMIN MANAGER ]</span>
                <span className="text-3xl font-extrabold font-mono text-white mt-1 block">{adminEmails.length}</span>
                <span className="text-[9px] font-mono text-emerald-400 block mt-1">
                  GATEWAY ROUTING ACTIVE
                </span>
              </div>
              <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-850/40 text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
            </div>

            <div className="bg-[#12141c] p-5 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-widest">[ CANDIDATES &amp; STUDENTS ]</span>
                <span className="text-3xl font-extrabold font-mono text-white mt-1 block">{careerApplications.length}</span>
                <span className="text-[9px] font-mono text-sky-400 block mt-1">
                  {careerApplications.filter(a => a.selectedOption.startsWith("class")).length} ACADEMY REGISTRATIONS
                </span>
              </div>
              <div className="p-3 bg-emerald-950/50 rounded-xl border border-emerald-850/40 text-emerald-400">
                <Users className="h-6 w-6" />
              </div>
            </div>

            <div className="bg-[#12141c] p-5 rounded-2xl border border-slate-800 flex items-center justify-between shadow-lg">
              <div>
                <span className="text-[9px] font-mono font-bold text-slate-500 block uppercase tracking-widest">[ SUB LIST ENGAGEMENT ]</span>
                <span className="text-3xl font-extrabold font-mono text-white mt-1 block">{subscribers.length}</span>
                <span className="text-[9px] font-mono text-purple-400 block mt-1">
                  FIRMWARE LOG AUDIENCE
                </span>
              </div>
              <div className="p-3 bg-purple-950/50 rounded-xl border border-purple-850/40 text-purple-400">
                <Mail className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Graphic SVG Telemetry Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

            {/* SVG Visual Ticket SLA Performance Line Area Chart */}
            <div className="lg:col-span-8 bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div className="mb-4">
                <span className="text-[9px] font-mono font-bold text-sky-400 block uppercase tracking-widest">[ TICKET TELEMETRY GRID ]</span>
                <h3 className="font-sans font-extrabold text-base text-white uppercase mt-0.5">SLA Dispatch Response Line</h3>
              </div>

              {/* Clean SVG Native Chart */}
              <div className="relative aspect-[21/9] w-full border border-slate-800 rounded-2xl overflow-hidden bg-[#0d0f14]/80 p-4">
                <svg className="w-full h-full" viewBox="0 0 500 150" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="0" y1="30" x2="500" y2="30" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="75" x2="500" y2="75" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 3" />
                  <line x1="0" y1="120" x2="500" y2="120" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="3 3" />

                  {/* Line Area */}
                  <path d="M 0 130 C 50 110, 100 120, 150 70 C 200 40, 250 85, 300 35 C 350 10, 400 60, 450 45 C 480 35, 500 25, 500 25 L 500 150 L 0 150 Z" fill="url(#skyGradient)" opacity="0.15" />

                  {/* Flowing Path */}
                  <path d="M 0 130 C 50 110, 100 120, 150 70 C 200 40, 250 85, 300 35 C 350 10, 400 60, 450 45 C 480 35, 500 25, 500 25" fill="none" stroke="#0284c7" strokeWidth="2.5" />

                  {/* Decorative Dots */}
                  <circle cx="150" cy="70" r="4.5" fill="#0284c7" className="animate-pulse" />
                  <circle cx="300" cy="35" r="4.5" fill="#34d399" />
                  <circle cx="450" cy="45" r="4.5" fill="#0284c7" />

                  {/* Gradients */}
                  <defs>
                    <linearGradient id="skyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#0d0f14" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Chart Legend Labels */}
                <div className="absolute bottom-1.5 left-4 right-4 flex justify-between font-mono text-[8px] text-slate-500 uppercase tracking-widest">
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                  <span>SUN</span>
                </div>

                <div className="absolute top-2.5 right-4 flex gap-4 font-mono text-[8px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
                    DISPATCH LOAD
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                    98.4% SLA ASSURANCE
                  </span>
                </div>
              </div>

              <p className="text-slate-500 font-mono text-[9px] uppercase tracking-wider mt-3">
                [ Diagnostic note: Traffic metrics reflect unified streams across Dharampeth retail node and field installation squads. ]
              </p>
            </div>

            {/* Live Core Server Telemetry and Status Console */}
            <div className="lg:col-span-4 bg-[#12141c] p-6 rounded-3xl border border-[#222530] shadow-xl flex flex-col justify-between">
              <div>
                <span className="text-[9px] font-mono font-bold text-amber-500 block uppercase tracking-widest">[ DIAGNOSTIC CONTROLS ]</span>
                <h3 className="font-sans font-extrabold text-base text-white uppercase mt-0.5">Hardware Engine</h3>
              </div>

              <div className="space-y-4 my-6">
                {/* CPU Load Metric */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[9px] uppercase">
                    <span className="text-slate-400">CPU LOAD (CORE_ENGINE)</span>
                    <span className={cpuLoad > 75 ? "text-rose-400 font-bold" : "text-emerald-400 font-bold"}>{cpuLoad}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1b1e2a] rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${cpuLoad}%` }}></div>
                  </div>
                </div>

                {/* Network latency */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[9px] uppercase">
                    <span className="text-slate-400">GATEWAY TRANSIT DELAY</span>
                    <span className="text-emerald-400 font-bold">{networkLatency} ms</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1b1e2a] rounded-full overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${Math.min(100, (networkLatency / 50) * 100)}%` }}></div>
                  </div>
                </div>

                {/* Disk Array Utilization */}
                <div className="space-y-1">
                  <div className="flex justify-between font-mono text-[9px] uppercase">
                    <span className="text-slate-400">NVR STORAGE STORAGE ARRAY (RAID_5)</span>
                    <span className="text-white font-bold">{storageUsed}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-[#1b1e2a] rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500" style={{ width: `${storageUsed}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0b0c10] p-3 border border-slate-800 rounded-xl flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2 text-slate-400">
                  <Cpu className="h-4 w-4 text-sky-400" />
                  <span>PING LATENCY TARGET</span>
                </div>
                <button onClick={() => {
                  setNetworkLatency(11);
                  addLog("TELEMETRY", "Forced dynamic network gateway route recalibration.", "success");
                  setToastMessage("Nagpur gateway routes optimized successfully.");
                }} className="px-2 py-1 bg-sky-950 hover:bg-sky-900 border border-sky-800/40 rounded text-[9px] font-bold uppercase tracking-wider text-sky-400 cursor-pointer">
                  OPTIMIZE
                </button>
              </div>
            </div>
          </div>

          {/* Live Terminal Diagnostic Stream */}
          <div className="bg-[#12141c] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-sky-400 shrink-0 animate-pulse" />
                <span className="font-mono font-extrabold text-xs text-white uppercase tracking-tight">System Sentinel Stream Logs</span>
              </div>
              <button onClick={() => {
                setDiagnosticLogs([]);
                setToastMessage("Telemetry stream logs cleared.");
              }} className="p-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white transition-all cursor-pointer" title="Clear Terminal Logs">
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            </div>

            <div className="h-48 bg-[#0b0c10] border border-[#1b1e2a] rounded-2xl p-4 font-mono text-[10px] space-y-2 overflow-y-auto custom-scrollbar select-all">
              {diagnosticLogs.length === 0 ? (<div className="text-slate-600 text-center py-12 uppercase font-bold">
                [ TERMINAL OUTPUT IDLE - LINK STABLE ]
              </div>) : (diagnosticLogs.map((log, idx) => (<div key={idx} className="flex gap-2 leading-relaxed">
                <span className="text-slate-600">[{log.time}]</span>
                <span className="text-sky-400 font-bold uppercase">[{log.module}]</span>
                <span className={log.type === "success" ? "text-emerald-400" : log.type === "warn" ? "text-rose-400" : "text-slate-300"}>
                  {log.message}
                </span>
              </div>)))}
            </div>
          </div>
        </motion.div>)}

        {/* TAB 2: SUPPORT TICKETS LEDGER */}
        {activeTab === "tickets" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">

          {/* Header with search and filters */}
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center gap-4 bg-[#12141c] p-4 border border-slate-800 rounded-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input type="text" placeholder="Search tickets by SLA key, candidate name, or core message..." value={ticketSearch} onChange={(e) => setTicketSearch(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 pl-10 pr-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-sky-550 focus:border-primary placeholder-slate-500" />
            </div>

            <div className="flex gap-2">
              {["all", "open", "assigned", "resolved"].map((filter) => (<button key={filter} onClick={() => setTicketFilter(filter)} className={`px-3 py-1.5 rounded-lg font-mono text-[9px] font-bold uppercase tracking-widest border transition-all cursor-pointer ${ticketFilter === filter ? "bg-primary/15 text-sky-400 border-primary/30" : "bg-[#0b0c10] text-slate-400 border-slate-800 hover:text-white"}`}>
                {filter}
              </button>))}
            </div>
          </div>

          {/* Tickets Table */}
          <div className="bg-[#12141c] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left font-sans">
                <thead>
                  <tr className="border-b border-slate-800 text-[10px] font-mono font-bold text-slate-500 uppercase bg-[#0d0f14]/80">
                    <th className="p-4 pl-6">Ticket Reference</th>
                    <th className="p-4">Customer Details</th>
                    <th className="p-4">SLA Category</th>
                    <th className="p-4">Assigned Specialist</th>
                    <th className="p-4">Integrity Status</th>
                    <th className="p-4 text-right pr-6">System Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40 text-xs text-slate-300">
                  {filteredTickets.length === 0 ? (<tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500 font-mono uppercase font-bold">
                      No service tickets found matching current filters.
                    </td>
                  </tr>) : (filteredTickets.map((ticket) => (<tr key={ticket.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4 pl-6 font-mono font-bold text-sky-400">
                      {ticket.id}
                    </td>
                    <td className="p-4">
                      <div className="font-extrabold text-white">{ticket.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{ticket.email} | {ticket.phone || "No Phone"}</div>
                    </td>
                    <td className="p-4">
                      <span className="bg-slate-800 text-[9px] font-bold text-slate-400 px-2 py-0.5 rounded border border-slate-700 uppercase font-mono">
                        {ticket.department}
                      </span>
                    </td>
                    <td className="p-4 text-slate-400 font-mono text-[10px]">
                      {ticket.assignedTo || "Unassigned"}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full border ${ticket.status === "Open" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                        ticket.status === "Assigned" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" :
                          "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"}`}>
                        <span className={`h-1 w-1 rounded-full ${ticket.status === "Open" ? "bg-amber-400" :
                          ticket.status === "Assigned" ? "bg-indigo-400" :
                            "bg-emerald-400"}`}></span>
                        {ticket.status}
                      </span>
                    </td>
                    <td className="p-4 text-right pr-6 space-x-2">
                      <button onClick={() => { setSelectedTicket(ticket); setTicketNoteText(""); }} className="px-2.5 py-1.5 bg-[#0b0c10] hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 font-mono text-[9px] font-bold uppercase transition-all cursor-pointer">
                        AUDIT
                      </button>
                      <button onClick={() => handleDeleteTicket(ticket.id)} className="p-1.5 bg-rose-950/20 hover:bg-rose-950/50 text-rose-400 border border-rose-900/30 rounded-lg cursor-pointer inline-flex items-center justify-center align-middle" title="Delete Ticket">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>)))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>)}

        {/* TAB 3: ADMIN ACCESS MANAGER */}
        {activeTab === "admin_manager" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="flex justify-between items-center bg-[#12141c] p-4 border border-slate-800 rounded-2xl">
            <div>
              <h4 className="text-sm font-bold text-white uppercase font-sans">Admin Accounts &amp; Credentials</h4>
              <p className="text-[10px] text-slate-400 mt-0.5 font-mono">MANAGE ROOT SYSTEM ACCESS AND SECURE SYSTEM PASSCODE</p>
            </div>
            <div className="text-[9px] font-mono text-emerald-450 uppercase tracking-widest px-2.5 py-1 bg-emerald-950/20 border border-emerald-900/30">
              SECURE MODULE
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 font-sans">
            {/* Admin Emails Section */}
            <div className="lg:col-span-7 bg-[#12141c] border border-slate-800 p-6 rounded-3xl space-y-4">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3">
                <span className="text-xs font-bold text-white uppercase font-sans flex items-center gap-2">
                  <Users className="h-4 w-4 text-sky-400" />
                  Authorized Admin Emails
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-bold">
                  {adminEmails.length} REGISTERED
                </span>
              </div>

              {/* Add New Admin Form */}
              <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const input = form.elements.namedItem("newAdminEmail");
                const emailVal = input.value.trim().toLowerCase();
                if (!emailVal)
                  return;
                if (adminEmails.includes(emailVal)) {
                  setToastMessage("This email address is already registered as an administrator.");
                  return;
                }
                setAdminEmails(prev => [...prev, emailVal]);
                addLog("ADMIN_MGR", `Granted admin access permission to: ${emailVal}`, "success");
                setToastMessage(`Admin privilege added for ${emailVal} successfully.`);
                form.reset();
              }} className="flex gap-2">
                <input name="newAdminEmail" type="email" required placeholder="Enter new administrator email address..." className="flex-1 bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary placeholder-slate-500 font-mono" />
                <button type="submit" className="px-4 py-2 bg-primary hover:bg-primary text-white font-bold text-xs uppercase rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0">
                  <Plus className="h-3.5 w-3.5" />
                  ADD
                </button>
              </form>

              <div className="border border-slate-800 rounded-2xl overflow-hidden">
                <table className="w-full text-left font-sans">
                  <thead>
                    <tr className="bg-[#0b0c10] border-b border-slate-800 text-[10px] font-mono font-bold text-slate-500 uppercase">
                      <th className="p-3 pl-4">Admin Email Address</th>
                      <th className="p-3 text-right pr-4">Revoke Access</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/40 text-xs text-slate-300 font-mono">
                    {adminEmails.map((email) => (<tr key={email} className="hover:bg-slate-800/10 transition-colors">
                      <td className="p-3 pl-4 font-semibold text-slate-200">
                        {email}
                        {(email === "info@securityplus.in" || email === "admin@securityplus.in") && (<span className="ml-2 bg-sky-950/40 border border-sky-900/30 text-sky-400 font-bold text-[8px] uppercase tracking-wider px-1.5 py-0.5 rounded">
                          Default Corporate
                        </span>)}
                      </td>
                      <td className="p-3 text-right pr-4">
                        {(email === "info@securityplus.in" || email === "admin@securityplus.in") ? (<span className="text-[9px] text-slate-600 uppercase font-bold tracking-widest select-none">
                          SYSTEM OWNED
                        </span>) : (<button onClick={() => {
                          if (confirm(`Are you sure you want to revoke admin privileges for ${email}?`)) {
                            setAdminEmails(prev => prev.filter(e => e !== email));
                            addLog("ADMIN_MGR", `Revoked admin access for: ${email}`, "warn");
                            setToastMessage(`Revoked admin access for ${email}.`);
                          }
                        }} className="p-1.5 bg-rose-950/20 hover:bg-rose-950/50 text-rose-400 border border-rose-900/30 rounded-lg cursor-pointer inline-flex items-center justify-center align-middle" title="Revoke Admin Permission">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>)}
                      </td>
                    </tr>))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Secure Credentials Passcode section */}
            <div className="lg:col-span-5 bg-[#12141c] border border-slate-800 p-6 rounded-3xl space-y-4">
              <span className="text-xs font-bold text-white uppercase font-sans flex items-center gap-2 border-b border-slate-800 pb-3">
                <Settings className="h-4 w-4 text-emerald-450" />
                Gateway Security Passcode
              </span>

              <div className="bg-[#0b0c10] p-4 border border-slate-850 rounded-2xl text-[10px] text-slate-400 leading-relaxed font-mono">
                <span className="text-emerald-400 block font-bold mb-1">[ GATEWAY SECURITY MANDATE ]</span>
                The central passcode allows access via the hidden [ Administrator Gateway ] or the secure hotkey combo.
                Ensure you set a complex passcode. The active passcode is required to authorize admin mode sessions.
              </div>

              <form onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const input = form.elements.namedItem("passcodeVal");
                const newPasscode = input.value.trim();
                if (!newPasscode || newPasscode.length < 4) {
                  setToastMessage("Security error: Passcode must be at least 4 characters long.");
                  return;
                }
                setAdminPasscodeVal(newPasscode);
                addLog("ADMIN_MGR", `Updated secure Gateway Passcode.`, "success");
                setToastMessage("Gateway Passcode updated successfully. Ensure this is noted down.");
              }} className="space-y-3">
                <div className="space-y-1">
                  <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block font-mono">[ ACTIVE PASSCODE ]</label>
                  <input name="passcodeVal" type="text" defaultValue={adminPasscodeVal} placeholder="Type new passcode here..." className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-3 text-xs text-emerald-400 font-bold focus:outline-none focus:border-emerald-500 rounded-xl placeholder-emerald-950 font-mono tracking-widest" />
                </div>
                <button type="submit" className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5 font-mono">
                  <Check className="h-4 w-4" />
                  SAVE NEW PASSCODE
                </button>
              </form>
            </div>
          </div>
        </motion.div>)}

        {/* TAB 4: CAREER CENTER & ACADEMY APPLICATIONS */}
        {activeTab === "careers" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">

          <div className="flex justify-between items-center bg-[#12141c] p-4 border border-slate-800 rounded-2xl">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input type="text" placeholder="Search candidate index..." value={careerSearch} onChange={(e) => setCareerSearch(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 pl-10 pr-4 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-sky-550 focus:border-primary placeholder-slate-500" />
            </div>
            <div className="text-[10px] font-mono text-slate-400 uppercase">
              CAREERS &amp; FREE ACADEMY CENTRAL DB
            </div>
          </div>

          <div className="bg-[#12141c] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left font-sans">
                <thead>
                  <tr className="border-b border-slate-800 text-[10px] font-mono font-bold text-slate-500 uppercase bg-[#0d0f14]/80">
                    <th className="p-4 pl-6">Node Ref</th>
                    <th className="p-4">Candidate / Bio</th>
                    <th className="p-4">Applied Option</th>
                    <th className="p-4">Application Date</th>
                    <th className="p-4">Review Status</th>
                    <th className="p-4 text-right pr-6">Manage Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/40 text-xs text-slate-300">
                  {filteredCareers.length === 0 ? (<tr>
                    <td colSpan={6} className="p-8 text-center text-slate-500 font-mono uppercase font-bold">
                      No candidate registrations on ledger.
                    </td>
                  </tr>) : (filteredCareers.map((app) => (<tr key={app.id} className="hover:bg-slate-800/20 transition-colors">
                    <td className="p-4 pl-6 font-mono font-bold text-sky-400">
                      {app.id}
                    </td>
                    <td className="p-4">
                      <div className="font-extrabold text-white">{app.name}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{app.email} | {app.phone}</div>
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded border ${app.selectedOption.startsWith("class")
                        ? "bg-emerald-950/40 text-emerald-400 border-emerald-900/30"
                        : "bg-sky-950/40 text-sky-400 border-sky-900/30"}`}>
                        {app.selectedOption.replace("_", " ")}
                      </span>
                    </td>
                    <td className="p-4 font-mono text-[10px] text-slate-400">
                      {app.date}
                    </td>
                    <td className="p-4">
                      <span className={`inline-flex items-center gap-1 text-[9px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full border ${app.status === "Approved" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                        app.status === "Interview Scheduled" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                          app.status === "Pending Review" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                            "bg-slate-800 text-slate-400 border-slate-700"}`}>
                        {app.status}
                      </span>
                    </td>
                    <td className="p-4 text-right pr-6 space-x-2">
                      <button onClick={() => setSelectedApp(app)} className="px-2.5 py-1.5 bg-[#0b0c10] hover:bg-slate-800 text-slate-300 hover:text-white rounded-lg border border-slate-800 font-mono text-[9px] font-bold uppercase transition-all cursor-pointer">
                        ASSESS
                      </button>
                      <button onClick={() => handleDeleteApplication(app.id)} className="p-1.5 bg-rose-950/20 hover:bg-rose-950/50 text-rose-400 border border-rose-900/30 rounded-lg cursor-pointer inline-flex items-center justify-center align-middle">
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </td>
                  </tr>)))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>)}

        {/* TAB 5: SUBSCRIBER LIST ENGAGEMENT */}
        {activeTab === "subscribers" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <span className="text-[9px] font-mono font-bold text-purple-400 block uppercase tracking-widest">[ NEWSLETTER SUBSCRIBERS ]</span>
              <h3 className="font-sans font-extrabold text-base text-white uppercase mt-0.5">Firmware Log Audience List</h3>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">
                View active emails registered for the central security log telemetry broadcasts. In the future, you can integrate a mailing service provider API (like Mailchimp or Brevo) directly into this database index.
              </p>
            </div>

            <div className="border border-slate-800 rounded-2xl overflow-hidden">
              <div className="bg-[#0b0c10] px-4 py-3 border-b border-slate-800 flex justify-between items-center text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                <span>SUBSCRIBER EMAIL</span>
                <span>ACTION</span>
              </div>
              <div className="divide-y divide-slate-800/40 font-mono text-xs">
                {subscribers.map((email, index) => (<div key={index} className="px-4 py-3 flex justify-between items-center hover:bg-slate-800/10 transition-colors">
                  <span className="text-white font-semibold">{email}</span>
                  <button onClick={() => handleDeleteSubscriber(email)} className="p-1 bg-rose-950/20 hover:bg-rose-900/30 text-rose-400 hover:text-rose-300 border border-rose-900/40 rounded cursor-pointer" title="Unsubscribe Email">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>))}
              </div>
            </div>
          </div>
        </motion.div>)}

        {/* TAB 6: CONFIG & SYSTEM EXPANSION (FUTURE PROOFING MODULE) */}
        {activeTab === "config" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 max-w-4xl mx-auto">

          {/* Future proof design overview */}
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
            <div className="flex items-center gap-2">
              <Sliders className="h-5 w-5 text-sky-400" />
              <h3 className="font-sans font-extrabold text-base text-white uppercase tracking-tight">
                API Expansion Nodes &amp; Future Integrations
              </h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              We designed this administrative dashboard with **absolute expandability** in mind. Below, you can declare new custom integration modules. When you are ready to connect a real backend database (like Firebase Firestore or Google Cloud SQL) or third-party webhooks, you can easily plug your active logic into these node references.
            </p>
          </div>

          {/* Modular Expansion Node creation */}
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <span className="font-mono text-xs font-bold text-white uppercase">[ Configured Expansion Nodes ]</span>
              <button onClick={() => setShowAddModuleModal(true)} className="px-3 py-1.5 bg-primary hover:bg-sky-700 text-white font-mono text-[9px] font-bold tracking-widest uppercase border border-primary rounded-lg transition-all flex items-center gap-1 cursor-pointer">
                <Plus className="h-3.5 w-3.5" />
                GENERATE MODULE NODE
              </button>
            </div>

            <div className="space-y-4">
              {/* Mock System Modules demonstrating current state */}
              <div className="bg-[#0b0c10] p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <span className="bg-sky-950/50 text-sky-400 text-[8px] font-bold px-1.5 py-0.5 rounded border border-sky-900/30 font-mono tracking-widest uppercase">
                    SPE-SYSTEM-CORE
                  </span>
                  <h4 className="text-sm font-extrabold text-white font-sans uppercase mt-1">Local State Sync Ledger</h4>
                  <p className="text-slate-500 text-[11px]">Provides zero-latency localStorage cache and instant client state sync.</p>
                </div>
                <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 px-2 py-0.5 rounded uppercase shrink-0">
                  INTEGRATED &amp; ACTIVE
                </span>
              </div>

              {customModules.map((m) => (<div key={m.id} className="bg-[#0b0c10] p-4 rounded-xl border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-1">
                  <span className="bg-indigo-950/50 text-indigo-400 text-[8px] font-bold px-1.5 py-0.5 rounded border border-indigo-900/30 font-mono tracking-widest uppercase">
                    {m.id}
                  </span>
                  <h4 className="text-sm font-extrabold text-white font-sans uppercase mt-1">{m.name}</h4>
                  <p className="text-slate-500 text-[11px]">{m.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-950/20 border border-amber-900/30 px-2 py-0.5 rounded uppercase shrink-0">
                    {m.status}
                  </span>
                  <button onClick={() => handleDeleteModule(m.id)} className="p-1 bg-rose-950/20 hover:bg-rose-950/50 text-rose-400 border border-rose-900/30 rounded cursor-pointer">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>))}

              {customModules.length === 0 && (<div className="text-center py-6 border border-dashed border-slate-800 rounded-xl bg-[#0b0c10]/40 text-slate-500 text-xs font-mono uppercase font-bold">
                [ No custom future integration modules registered. Create one above to test! ]
              </div>)}
            </div>
          </div>
        </motion.div>)}

        {/* TAB 7: MANAGE PRODUCTS */}
        {activeTab === "products" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-[#12141c] p-6 rounded-3xl border border-slate-800">
            <div>
              <h3 className="font-sans font-extrabold text-base text-white uppercase tracking-tight flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-sky-400" />
                Product Catalog Manager
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Manage your B2B website product catalog, pricing, ratings, description, and technical specifications.
              </p>
            </div>
            <button onClick={handleOpenAddProduct} className="px-4 py-2.5 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all flex items-center gap-2 cursor-pointer shadow-md shadow-sky-950/40">
              <Plus className="h-4 w-4" />
              ADD CATALOG PRODUCT
            </button>
          </div>

          {/* Filtering & Search Bar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-8 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input type="text" placeholder="Search product title, descriptions, or specs..." value={productSearch} onChange={(e) => setProductSearch(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary font-sans" />
            </div>
            <div className="md:col-span-4">
              <select value={productCategoryFilter} onChange={(e) => setProductCategoryFilter(e.target.value)} className="w-full bg-[#12141c] border border-slate-800 rounded-xl px-4 py-3 text-xs text-slate-300 focus:outline-none focus:border-primary font-sans font-bold cursor-pointer">
                <option value="all">ALL CATEGORIES</option>
                {productCategories.map(cat => (<option key={cat} value={cat}>{cat.toUpperCase()}</option>))}
              </select>
            </div>
          </div>

          {/* Products Table/List */}
          <div className="bg-[#12141c] border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-850 bg-[#0d0f14] text-[9px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    <th className="px-6 py-4">PRODUCT DETAILS</th>
                    <th className="px-6 py-4">CATEGORY</th>
                    <th className="px-6 py-4">PRICE</th>
                    <th className="px-6 py-4 text-center">RATING</th>
                    <th className="px-6 py-4 text-right">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-850 font-sans text-xs">
                  {products.filter(p => {
                    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
                      p.desc.toLowerCase().includes(productSearch.toLowerCase());
                    if (productCategoryFilter === "all")
                      return matchesSearch;
                    return matchesSearch && p.category === productCategoryFilter;
                  }).map((prod) => (<tr key={prod.id} className="hover:bg-slate-800/20 transition-all">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center shrink-0">
                          <Video className="h-5 w-5 text-sky-400" />
                        </div>
                        <div className="min-w-0">
                          <span className="font-bold text-white block uppercase tracking-wide truncate max-w-[240px]">{prod.name}</span>
                          <span className="text-[10px] text-slate-500 mt-0.5 block truncate max-w-[280px]">{prod.desc}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="bg-sky-950/40 text-sky-400 text-[9px] font-bold px-2 py-1 rounded border border-sky-900/30 uppercase tracking-wider">
                        {prod.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-mono font-bold text-white text-sm">
                      {prod.price}
                    </td>
                    <td className="px-6 py-4 text-center font-mono font-bold text-amber-400">
                      ⭐ {prod.rating}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <button onClick={() => handleOpenEditProduct(prod)} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer transition-colors border border-slate-700/40" title="Edit Product">
                          <Edit2 className="h-3.5 w-3.5" />
                        </button>
                        <button onClick={() => handleDeleteProduct(prod.id, prod.name)} className="p-2 bg-rose-950/20 hover:bg-rose-950/60 text-rose-400 rounded-lg cursor-pointer transition-all border border-rose-900/20" title="Delete Product">
                          <Trash2 className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>))}

                  {products.filter(p => {
                    const matchesSearch = p.name.toLowerCase().includes(productSearch.toLowerCase()) ||
                      p.desc.toLowerCase().includes(productSearch.toLowerCase());
                    if (productCategoryFilter === "all")
                      return matchesSearch;
                    return matchesSearch && p.category === productCategoryFilter;
                  }).length === 0 && (<tr>
                    <td colSpan={5} className="text-center py-12 text-slate-500 font-mono">
                      [ NO PRODUCTS MATCHING SYSTEM QUERIES FOUND ]
                    </td>
                  </tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>)}

        {/* TAB 8: MANAGE CATEGORIES */}
        {activeTab === "categories" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6 max-w-4xl mx-auto">
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 space-y-2">
            <h3 className="font-sans font-extrabold text-base text-white uppercase tracking-tight flex items-center gap-2">
              <Sliders className="h-5 w-5 text-sky-400" />
              Product Categories Manager
            </h3>
            <p className="text-slate-400 text-xs">
              Add, update, or remove hardware categories. Renaming a category automatically re-maps all relevant products in the database.
            </p>
          </div>

          {/* Add category form */}
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl">
            <form onSubmit={handleAddCategory} className="flex gap-3">
              <div className="flex-1">
                <input type="text" placeholder="e.g., Thermal Imaging, Fiber Hardware, Access Terminals..." value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-4 py-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-primary rounded-xl font-sans" />
              </div>
              <button type="submit" className="px-5 py-3 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase border border-primary rounded-xl transition-all cursor-pointer flex items-center gap-1.5">
                <Plus className="h-3.5 w-3.5" />
                CREATE CATEGORY
              </button>
            </form>
          </div>

          {/* Categories list */}
          <div className="bg-[#12141c] border border-slate-800 rounded-3xl shadow-xl p-6 space-y-4">
            <span className="font-mono text-[10px] font-bold text-slate-400 uppercase block tracking-wider">[ Active Website Product Categories ]</span>
            <div className="space-y-3">
              {productCategories.map((cat, idx) => (<div key={idx} className="bg-[#0b0c10] p-4 rounded-xl border border-slate-800 flex justify-between items-center gap-4">
                {editingCategoryIndex === idx ? (<div className="flex-1 flex gap-2">
                  <input type="text" value={editingCategoryValue} onChange={(e) => setEditingCategoryValue(e.target.value)} className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-white focus:outline-none focus:border-primary rounded-lg font-sans flex-1" />
                  <button onClick={() => handleUpdateCategory(idx)} className="p-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg cursor-pointer">
                    <Check className="h-3.5 w-3.5" />
                  </button>
                  <button onClick={() => setEditingCategoryIndex(null)} className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-400 rounded-lg cursor-pointer">
                    <X className="h-3.5 w-3.5" />
                  </button>
                </div>) : (<>
                  <div className="space-y-1">
                    <span className="text-sm font-bold text-white font-sans uppercase">{cat}</span>
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">
                      {products.filter(p => p.category === cat).length} ACTIVE PRODUCTS IN CATALOG
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button onClick={() => { setEditingCategoryIndex(idx); setEditingCategoryValue(cat); }} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg cursor-pointer border border-slate-700/40" title="Rename Category">
                      <Edit2 className="h-3.5 w-3.5" />
                    </button>
                    <button onClick={() => handleDeleteCategory(cat)} className="p-2 bg-rose-950/20 hover:bg-rose-950/60 text-rose-400 rounded-lg cursor-pointer border border-rose-900/20 animate-all" title="Delete Category">
                      <Trash2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </>)}
              </div>))}
            </div>
          </div>
        </motion.div>)}

        {/* TAB 9: LOGO & CONTACT DATA */}
        {activeTab === "branding" && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8 max-w-4xl mx-auto">

          {/* Dynamic Header Branding Config */}
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="font-sans font-extrabold text-base text-white uppercase tracking-tight flex items-center gap-2">
                <Building className="h-5 w-5 text-sky-400" />
                Website Branding Configuration
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Update the logo image link, corporation title, and sub-branding details shown across headers and footers.
              </p>
            </div>

            <form onSubmit={handleSaveBranding} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ COMPANY BRAND NAME ]</label>
                  <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ SUB-BRAND / SUFFIX ]</label>
                  <input type="text" value={companySuffix} onChange={(e) => setCompanySuffix(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ LOGO ASSET URL ]</label>
                <input type="text" value={logoUrl} onChange={(e) => setLogoUrl(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
              </div>

              <div className="pt-2 flex justify-end">
                <button type="submit" className="px-5 py-3 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase border border-primary rounded-xl transition-all cursor-pointer flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  UPDATE LOGO CONFIG
                </button>
              </div>
            </form>
          </div>

          {/* Dynamic Contacts & Social links */}
          <div className="bg-[#12141c] p-6 rounded-3xl border border-slate-800 shadow-xl space-y-6">
            <div>
              <h3 className="font-sans font-extrabold text-base text-white uppercase tracking-tight flex items-center gap-2">
                <Globe className="h-5 w-5 text-sky-400" />
                Contact Information &amp; Social Links Directory
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Manage direct support hotlines, corporate email gateways, experience center headquarters address, and operating hours.
              </p>
            </div>

            <form onSubmit={handleSaveContactAndSocials} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ DIRECT HOTLINE ]</label>
                  <input type="text" value={contactPhone} onChange={(e) => setContactPhone(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ SYSTEM SUPPORT EMAIL ]</label>
                  <input type="email" value={contactEmail} onChange={(e) => setContactEmail(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ EXPERIENCE HQ PHYSICAL ADDRESS ]</label>
                <textarea rows={2} value={contactAddress} onChange={(e) => setContactAddress(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ MAP SEARCH LOCATION (SEEDS GOOGLE MAP!) ]</label>
                  <input type="text" value={contactMapAddress} onChange={(e) => setContactMapAddress(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" placeholder="e.g. West High Court Road, Dharampeth, Nagpur" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[9px] font-bold text-slate-400 uppercase tracking-widest font-sans">[ OPERATING HOURS DESCRIPTION ]</label>
                  <textarea rows={1} value={contactHours} onChange={(e) => setContactHours(e.target.value)} required className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                </div>
              </div>

              {/* Social Handles */}
              <div className="border-t border-slate-800 pt-4 space-y-4">
                <span className="font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider block">[ Corporate Social Networks Channels ]</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-sans">Twitter URL</label>
                    <input type="text" value={socialTwitter} onChange={(e) => setSocialTwitter(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-sans">Facebook URL</label>
                    <input type="text" value={socialFacebook} onChange={(e) => setSocialFacebook(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[9px] font-bold text-slate-500 uppercase tracking-widest font-sans">LinkedIn URL</label>
                    <input type="text" value={socialLinkedin} onChange={(e) => setSocialLinkedin(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-primary rounded-xl font-sans" />
                  </div>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button type="submit" className="px-5 py-3 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase border border-primary rounded-xl transition-all cursor-pointer flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  SAVE CONTACTS &amp; SOCIALS
                </button>
              </div>
            </form>
          </div>
        </motion.div>)}

        {activeTab === "reels" && (<motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#12141c] p-6 border border-slate-800 rounded-2xl">
            <div>
              <h2 className="font-sans text-lg font-extrabold text-white uppercase tracking-tight">
                Product Action Reels Ledger
              </h2>
              <p className="text-xs text-slate-400 mt-1 font-mono uppercase tracking-wider">
                Add, edit, or remove high-performance 9:16 vertical demonstration and installation reels.
              </p>
            </div>
            <button onClick={handleOpenAddReel} className="px-4 py-2.5 bg-primary hover:bg-sky-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer flex items-center gap-1.5 shrink-0 self-start sm:self-center">
              <Plus className="h-4 w-4" />
              ADD NEW REEL
            </button>
          </div>

          <div className="bg-[#12141c] border border-slate-800 rounded-2xl overflow-hidden">
            <div className="p-4 bg-[#0d0f14] border-b border-slate-800 font-mono text-[9px] font-bold text-slate-400 uppercase tracking-wider">
              Active Reels Catalog ({reels.length} Items)
            </div>

            <div className="divide-y divide-slate-800/60">
              {reels.map((rl) => (<div key={rl.id} className="p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:bg-slate-800/10 transition-colors">
                <div className="flex items-center gap-4">
                  {/* 9:16 video thumbnail / icon */}
                  <div className="w-12 h-20 bg-black border border-slate-800 rounded-lg flex items-center justify-center shrink-0 overflow-hidden relative">
                    <video src={rl.videoUrl} className="w-full h-full object-cover opacity-60" muted playsInline />
                    <Play className="h-4 w-4 text-white/80 absolute z-10" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white tracking-tight">{rl.title}</h4>
                    <div className="flex flex-wrap items-center gap-2 mt-2 font-mono text-[9px]">
                      <span className="bg-sky-950 text-sky-400 border border-sky-900/40 px-1.5 py-0.5 rounded uppercase">
                        {rl.category}
                      </span>
                      <span className="text-slate-500">VIEWS: {rl.views || "1.0K"}</span>
                      <span className="text-slate-500">LIKES: {rl.likes || 0}</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-mono mt-1 truncate max-w-md">URL: {rl.videoUrl}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button onClick={() => handleOpenEditReel(rl)} className="p-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors cursor-pointer" title="Edit Reel">
                    <Edit2 className="h-3.5 w-3.5" />
                  </button>
                  <button onClick={() => handleDeleteReel(rl.id, rl.title)} className="p-2 bg-red-950/20 hover:bg-red-900/40 text-red-400 hover:text-red-200 rounded-lg transition-colors cursor-pointer border border-red-900/20" title="Delete Reel">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>))}

              {reels.length === 0 && (<div className="p-12 text-center text-slate-500 font-mono text-xs uppercase tracking-wider">
                No reels configured. Click "ADD NEW REEL" above to deploy video content.
              </div>)}
            </div>
          </div>
        </motion.div>)}

      </main>
    </div>

    {/* MODAL 1: DETAILED SUPPORT TICKET AUDIT */}
    <AnimatePresence>
      {selectedTicket && (<div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#12141c] border border-slate-800 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl flex flex-col">
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-[#0d0f14]">
            <div className="flex items-center gap-2">
              <Terminal className="h-4 w-4 text-sky-400" />
              <h3 className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">
                Ticket Audit Panel: {selectedTicket.id}
              </h3>
            </div>
            <button onClick={() => setSelectedTicket(null)} className="text-slate-400 hover:text-white cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-6 space-y-6 overflow-y-auto max-h-[75vh]">

            {/* Meta details */}
            <div className="grid grid-cols-2 gap-4 bg-[#0b0c10] p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider block">Customer Name</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedTicket.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider block">Corporate/SLA Client</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedTicket.company || "Residential Client"}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider block">Email Address</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedTicket.email}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider block">Mobile SLA Phone</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedTicket.phone || "No Mobile"}</strong>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-1">
              <span className="text-slate-500 font-mono text-[9px] uppercase tracking-wider block">SLA Support Issue Request</span>
              <div className="bg-[#0b0c10] border border-slate-800 p-4 rounded-xl text-xs text-slate-300 leading-relaxed font-sans whitespace-pre-wrap">
                {selectedTicket.message}
              </div>
            </div>

            {/* Status Assignment & Engineers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <span className="text-slate-500 font-mono text-[9px] uppercase block">Assign Field Specialist</span>
                <select value={selectedTicket.assignedTo || ""} onChange={(e) => handleAssignTicket(selectedTicket.id, e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 text-slate-200 text-xs px-3 py-2 rounded-xl focus:outline-none focus:border-primary">
                  <option value="">-- Unassigned --</option>
                  <option value="Sandeep Agnihotri">Sandeep Agnihotri (CCTV Cabling Lead)</option>
                  <option value="Manoj Kulkarni">Manoj Kulkarni (Biometric Specialist)</option>
                  <option value="Prateek Deshpande">Prateek Deshpande (Fiber Splicing Lead)</option>
                  <option value="Amrita Rao">Amrita Rao (IT Network Security Architect)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <span className="text-slate-500 font-mono text-[9px] uppercase block">Ticket Integrity Actions</span>
                {selectedTicket.status !== "Resolved" ? (<button onClick={() => handleResolveTicket(selectedTicket.id)} className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-mono text-[10px] font-bold tracking-widest uppercase rounded-xl transition-all cursor-pointer flex items-center justify-center gap-1.5">
                  <Check className="h-4 w-4" />
                  RESOLVE TICKET
                </button>) : (<div className="bg-emerald-950/20 text-emerald-400 font-mono text-[10px] font-bold uppercase border border-emerald-900/30 py-2.5 rounded-xl text-center">
                  SOLVED // SLA CLOSED
                </div>)}
              </div>
            </div>

            {/* Audit logs & history */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <span className="text-slate-400 font-mono text-[10px] uppercase font-bold block">Internal Dispatch Audit Notes</span>
              <div className="bg-[#0b0c10] p-4 rounded-xl border border-slate-800 space-y-2 max-h-40 overflow-y-auto">
                {selectedTicket.notes && selectedTicket.notes.length > 0 ? (selectedTicket.notes.map((note, idx) => (<div key={idx} className="font-mono text-[10px] text-slate-400 border-l-2 border-slate-700 pl-2 leading-relaxed">
                  {note}
                </div>))) : (<div className="text-slate-600 font-mono text-[9px] uppercase">No internal note log history. Add one below.</div>)}
              </div>

              <div className="flex gap-2">
                <input type="text" placeholder="Add diagnostic audit logs to this ticket..." value={ticketNoteText} onChange={(e) => setTicketNoteText(e.target.value)} className="flex-1 bg-[#0b0c10] border border-slate-800 text-xs px-3.5 py-2 rounded-xl focus:outline-none focus:border-primary text-white placeholder-slate-600" />
                <button onClick={() => handleAddTicketNote(selectedTicket.id)} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-mono text-[10px] font-bold uppercase rounded-xl cursor-pointer transition-all border border-slate-700">
                  ADD NOTE
                </button>
              </div>
            </div>

          </div>
        </motion.div>
      </div>)}
    </AnimatePresence>

    {/* MODAL 2: CANDIDATE CAREER ASSESSMENT */}
    <AnimatePresence>
      {selectedApp && (<div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#12141c] border border-slate-800 w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl flex flex-col">
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-[#0d0f14]">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-sky-400" />
              <h3 className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">
                Candidate Profile Assessment: {selectedApp.id}
              </h3>
            </div>
            <button onClick={() => setSelectedApp(null)} className="text-slate-400 hover:text-white cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="p-6 space-y-6">

            <div className="grid grid-cols-2 gap-4 bg-[#0b0c10] p-4 rounded-xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase block">Candidate Name</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedApp.name}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase block">Selected Module / Class</span>
                <strong className="text-white text-sm mt-0.5 block uppercase">{selectedApp.selectedOption.replace("_", " ")}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase block">Contact Email</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedApp.email}</strong>
              </div>
              <div>
                <span className="text-slate-500 font-mono text-[9px] uppercase block">Contact Mobile</span>
                <strong className="text-white text-sm mt-0.5 block">{selectedApp.phone}</strong>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 font-mono text-[9px] uppercase block">Experience Profile / Motivation</span>
              <div className="bg-[#0b0c10] border border-slate-800 p-4 rounded-xl text-xs text-slate-300 leading-relaxed font-sans">
                {selectedApp.experience}
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-slate-500 font-mono text-[9px] uppercase block">Resume / Portfolio Link</span>
              {selectedApp.resumeUrl ? (<a href={selectedApp.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-[#0b0c10] border border-slate-800 p-3 rounded-xl text-xs text-sky-400 hover:text-sky-300 flex items-center gap-1.5 font-mono">
                <FileText className="h-4 w-4 text-primary" />
                {selectedApp.resumeUrl}
              </a>) : (<span className="text-slate-600 font-mono text-xs block uppercase">No Link Submitted.</span>)}
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-end gap-2">
              <button onClick={() => handleUpdateAppStatus(selectedApp.id, "Approved")} className="px-4 py-2 bg-emerald-900/30 hover:bg-emerald-950 text-emerald-400 hover:text-emerald-300 border border-emerald-900/40 rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest cursor-pointer transition-all">
                APPROVE / ENROLL
              </button>
              <button onClick={() => handleUpdateAppStatus(selectedApp.id, "Interview Scheduled")} className="px-4 py-2 bg-indigo-900/30 hover:bg-indigo-950 text-indigo-400 hover:text-indigo-300 border border-indigo-900/40 rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest cursor-pointer transition-all">
                SCHEDULE INTERVIEW
              </button>
              <button onClick={() => handleUpdateAppStatus(selectedApp.id, "Archived")} className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 rounded-xl font-mono text-[9px] font-bold uppercase tracking-widest cursor-pointer transition-all">
                ARCHIVE RECORD
              </button>
            </div>

          </div>
        </motion.div>
      </div>)}
    </AnimatePresence>

    {/* MODAL 3: GENERATE EXPANSION MODULE */}
    <AnimatePresence>
      {showAddModuleModal && (<div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#12141c] border border-slate-800 w-full max-w-md overflow-hidden rounded-2xl shadow-2xl flex flex-col">
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-[#0d0f14]">
            <div className="flex items-center gap-2">
              <Settings className="h-4 w-4 text-sky-400" />
              <h3 className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">
                Generate Future API Node
              </h3>
            </div>
            <button onClick={() => setShowAddModuleModal(false)} className="text-slate-400 hover:text-white cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleAddCustomModule} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Expansion Module Name</label>
              <input type="text" required placeholder="e.g. Firebase Live Attendance Sync" value={newModuleName} onChange={(e) => setNewModuleName(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary placeholder-slate-650" />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Operational Description / Intent</label>
              <textarea rows={3} placeholder="Describe how your future API call, SQL query or webhook will operate in this section..." value={newModuleDesc} onChange={(e) => setNewModuleDesc(e.target.value)} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary placeholder-slate-650" />
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-2">
              <button type="button" onClick={() => setShowAddModuleModal(false)} className="flex-1 py-2 bg-slate-850 hover:bg-slate-800 text-slate-300 font-mono text-[9px] font-bold tracking-widest uppercase rounded-xl transition-all border border-slate-800 cursor-pointer text-center">
                CANCEL
              </button>
              <button type="submit" className="flex-1 py-2 bg-primary hover:bg-sky-700 text-white font-mono text-[9px] font-bold tracking-widest uppercase rounded-xl transition-all border border-primary cursor-pointer text-center">
                CONFIGURE NODE
              </button>
            </div>
          </form>
        </motion.div>
      </div>)}
    </AnimatePresence>

    {/* MODAL 3: ADD/EDIT PRODUCT CATALOG */}
    <AnimatePresence>
      {isProductModalOpen && (<div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#12141c] border border-slate-800 w-full max-w-2xl overflow-hidden rounded-2xl shadow-2xl flex flex-col">
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-[#0d0f14]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="h-4 w-4 text-sky-400" />
              <h3 className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">
                {editingProduct ? `Edit Catalog Item: ${editingProduct.name}` : "Add New Catalog Product"}
              </h3>
            </div>
            <button onClick={() => setIsProductModalOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleSaveProduct} className="p-6 space-y-4 overflow-y-auto max-h-[75vh]">
            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Product Title / Model Name</label>
              <input type="text" required placeholder="e.g. Woston PTZ 4K Zoom Camera" value={productForm.name} onChange={(e) => setProductForm(prev => ({ ...prev, name: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Hardware Category</label>
                <select value={productForm.category} onChange={(e) => setProductForm(prev => ({ ...prev, category: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary font-sans cursor-pointer">
                  {productCategories.map(cat => (<option key={cat} value={cat}>{cat}</option>))}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Display Price</label>
                <input type="text" required placeholder="e.g. ₹3,499" value={productForm.price} onChange={(e) => setProductForm(prev => ({ ...prev, price: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary" />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Rating Star (1.0 - 5.0)</label>
                <input type="number" step="0.1" min="1.0" max="5.0" required value={productForm.rating} onChange={(e) => setProductForm(prev => ({ ...prev, rating: parseFloat(e.target.value) || 4.5 }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Surveillance Icon Representation</label>
                <select value={productForm.image} onChange={(e) => setProductForm(prev => ({ ...prev, image: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary font-sans cursor-pointer">
                  <option value="cctv">📹 CCTV / Dome Camera</option>
                  <option value="ptz">⚙️ PTZ Motorized Camera</option>
                  <option value="locks">🔒 Biometrics / Smart Lock</option>
                  <option value="storage">💾 DVR / NVR Storage Disk</option>
                  <option value="router">🌐 PoE Switch / Router</option>
                  <option value="battery">⚡ Cables &amp; Power Backup</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Operational Description</label>
              <textarea rows={2} required placeholder="Enter professional hardware description..." value={productForm.desc} onChange={(e) => setProductForm(prev => ({ ...prev, desc: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3.5 py-2.5 text-xs text-white rounded-xl focus:outline-none focus:border-primary font-sans" />
            </div>

            {/* Technical Specifications list */}
            <div className="space-y-3 pt-3 border-t border-slate-800">
              <div className="flex justify-between items-center">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">[ TECHNICAL SPECIFICATION LABELS ]</span>
                <button type="button" onClick={handleAddSpecField} className="px-2 py-1 bg-slate-800 hover:bg-slate-700 text-sky-400 border border-slate-700 text-[8px] font-mono font-bold uppercase rounded">
                  + ADD SPEC FIELD
                </button>
              </div>

              <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                {productForm.specs.map((spec, index) => (<div key={index} className="flex gap-2 items-center">
                  <input type="text" placeholder="Label (e.g. Lens)" required value={spec.label} onChange={(e) => handleSpecChange(index, "label", e.target.value)} className="flex-1 bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary" />
                  <input type="text" placeholder="Value (e.g. 3.6mm)" required value={spec.value} onChange={(e) => handleSpecChange(index, "value", e.target.value)} className="flex-1 bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary" />
                  {productForm.specs.length > 1 && (<button type="button" onClick={() => handleRemoveSpecField(index)} className="p-2 bg-rose-950/20 hover:bg-rose-950/50 text-rose-400 border border-rose-900/30 rounded-lg">
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>)}
                </div>))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-2">
              <button type="button" onClick={() => setIsProductModalOpen(false)} className="flex-1 py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-300 font-mono text-[9px] font-bold tracking-widest uppercase rounded-xl transition-all border border-slate-800 cursor-pointer text-center">
                CANCEL
              </button>
              <button type="submit" className="flex-1 py-2.5 bg-primary hover:bg-sky-700 text-white font-mono text-[9px] font-bold tracking-widest uppercase rounded-xl transition-all border border-primary cursor-pointer text-center">
                SAVE CATALOG DATA
              </button>
            </div>
          </form>
        </motion.div>
      </div>)}
    </AnimatePresence>

    {/* MODAL 4: ADD/EDIT REEL CATALOG */}
    <AnimatePresence>
      {isReelModalOpen && (<div className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="bg-[#12141c] border border-slate-800 w-full max-w-lg overflow-hidden rounded-2xl shadow-2xl flex flex-col">
          <div className="p-5 border-b border-slate-800 flex justify-between items-center bg-[#0d0f14]">
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-sky-400" />
              <h3 className="font-sans font-extrabold text-sm text-white uppercase tracking-tight">
                {editingReel ? `Edit Action Reel: ${editingReel.title}` : "Add New Action Reel"}
              </h3>
            </div>
            <button onClick={() => setIsReelModalOpen(false)} className="text-slate-400 hover:text-white cursor-pointer">
              <X className="h-4 w-4" />
            </button>
          </div>

          <form onSubmit={handleSaveReel} className="p-6 space-y-4">
            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Reel Title</label>
              <input type="text" required placeholder="e.g. AI-Powered Starlight Night Vision" value={reelForm.title} onChange={(e) => setReelForm(prev => ({ ...prev, title: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary" />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Video MP4 URL</label>
              <input type="text" required placeholder="https://assets.mixkit.co/..." value={reelForm.videoUrl} onChange={(e) => setReelForm(prev => ({ ...prev, videoUrl: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary font-mono" />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Product Category Connection</label>
              <select value={reelForm.category} onChange={(e) => setReelForm(prev => ({ ...prev, category: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary">
                {productCategories.map((cat, idx) => (<option key={idx} value={cat}>{cat}</option>))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Initial Views Display</label>
                <input type="text" required value={reelForm.views} onChange={(e) => setReelForm(prev => ({ ...prev, views: e.target.value }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1">
                <label className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-wider block">Initial Likes Count</label>
                <input type="number" required value={reelForm.likes} onChange={(e) => setReelForm(prev => ({ ...prev, likes: parseInt(e.target.value) || 0 }))} className="w-full bg-[#0b0c10] border border-slate-800 px-3 py-2 text-xs text-white rounded-lg focus:outline-none focus:border-primary" />
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex gap-2">
              <button type="button" onClick={() => setIsReelModalOpen(false)} className="flex-1 py-2.5 bg-slate-850 hover:bg-slate-800 text-slate-300 font-mono text-[9px] font-bold tracking-widest uppercase rounded-xl transition-all border border-slate-800 cursor-pointer text-center">
                CANCEL
              </button>
              <button type="submit" className="flex-1 py-2.5 bg-primary hover:bg-sky-700 text-white font-mono text-[9px] font-bold tracking-widest uppercase rounded-xl transition-all border border-primary cursor-pointer text-center">
                SAVE REEL
              </button>
            </div>
          </form>
        </motion.div>
      </div>)}
    </AnimatePresence>

  </div>);
}

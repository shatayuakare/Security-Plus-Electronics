import { useEffect, useMemo, useState } from "react";
import axios from "axios";

import "../products.css";

import { motion } from "motion/react";

import {
  ShoppingBag,
  ExternalLink,
  Heart,
  Eye,
  ChevronRight,
  ChevronLeft,
  Search,
  X,
  LoaderCircle,
} from "lucide-react";
import BrandCarousel from "../components/BrandCarousel";
// import BRANDS from "../json/brands.json";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import PageHeading from "../components/PageHeading";

const PRODUCT_API =
  "https://woston.in/wp-json/wc/store/v1/products";

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.12,
    },
  },
  viewport: { once: true, margin: "-100px" },
};

const staggerItem = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: {
    duration: 0.6,
    ease: [0.16, 1, 0.3, 1],
  },
};

// CATEGORY RULES

const CATEGORY_RULES = [
  {
    name: "Video Recorder",
    slug: "video-recorder",
    keywords: /\b(video|dvr|nvr|xvr|recorder|recorders)\b/i,
  },
  {
    name: "CCTV Camera",
    slug: "cctv-camera",
    keywords: /\b(camera|cameras|cctv|4g|ip|hd)\b/i,
  },
  {
    name: "Cables",
    slug: "cables",
    keywords: /\b(cable|cables)\b/i,
  },
  {
    name: "Accessories",
    slug: "accessories",
    keywords: /\b(rack|accessories|housing|caccessories)\b/i,
  },
  {
    name: "Switch",
    slug: "switch",
    keywords: /\b(switch|switches|poe)\b/i,
  },
  {
    name: "IT Devices",
    slug: "it-devices",
    keywords: /\b(keyboard|mouse|monitor|router)\b/i,
  },
  {
    name: "Power Supply",
    slug: "power-supply",
    keywords: /\b(ups|smps|adapter|power supply)\b/i,
  },
];

// GET PRODUCT CATEGORY

const getCategory = (product) => {
  const categories = product?.categories || [];

  for (const elem of categories) {
    const categoryName = elem?.name || "";

    const matchedCategory = CATEGORY_RULES.find((rule) =>
      rule.keywords.test(categoryName)
    );

    if (matchedCategory) {
      return matchedCategory;
    }
  }

  return {
    name: "Other",
    slug: "other",
  };
};

// PRODUCT LOADER

function ProductGridLoader() {
  return (
    <div
      role="status"
      aria-label="Loading product"
      className="bg-white border border-slate-200/80 flex flex-col justify-between p-4 relative rounded-2xl shadow animate-pulse"
    >
      <div>
        <div className="flex justify-between items-center mb-2">
          <div className="h-6 w-20 bg-slate-200 rounded-lg" />
          <div className="h-3 w-16 bg-slate-200 rounded-full" />
        </div>

        <div className="aspect-square bg-slate-100 border border-slate-100 rounded-xl mb-4 relative overflow-hidden flex items-center justify-center">
          <div className="absolute top-2.5 left-2.5 h-6 w-20 bg-slate-200 rounded-md" />
          <div className="absolute top-2.5 right-2.5 h-9 w-9 bg-slate-200 rounded-full" />
          <div className="absolute bottom-2 right-2 h-5 w-16 bg-slate-200 rounded" />
        </div>

        <div className="space-y-2">
          <div className="h-4 bg-slate-200 rounded-full w-full" />
          <div className="h-4 bg-slate-200 rounded-full w-4/5" />
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-2.5 bg-slate-200 rounded-full w-full" />
          <div className="h-2.5 bg-slate-200 rounded-full w-full" />
          <div className="h-2.5 bg-slate-200 rounded-full w-4/5" />
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 flex justify-between items-center">
        <div className="h-5 w-20 bg-slate-200 rounded-full" />

        <div className="flex gap-1.5">
          <div className="h-8 w-24 bg-slate-200 rounded-xl" />
          <div className="h-8 w-20 bg-slate-200 rounded-xl" />
        </div>
      </div>

      <span className="sr-only">Loading product...</span>
    </div>
  );
}

// MAIN COMPONENT

export default function Products({
  products,
  setCurrentPage,
  currentPage,
  wishlist,
  toggleWishlist,
  setSelectedProductForQuickView,
}) {

  const [brands, setBrands] = useState([{
    "id": 1982,
    "name": "ARTIS",
    "slug": "artis",
    "description": "",
    "parent": 0,
    "count": 5,
    "image": {
      "id": 9855,
      "src": "https://woston.in/wp-content/uploads/2026/06/artis-logo.avif",
      "thumbnail": "https://woston.in/wp-content/uploads/2026/06/artis-logo.avif",
      "srcset": "",
      "sizes": "(max-width: 240px) 100vw, 240px",
      "thumbnail_srcset": "",
      "thumbnail_sizes": "(max-width: 240px) 100vw, 240px",
      "name": "artis logo",
      "alt": "Artis Logo"
    },
    "review_count": 0,
    "permalink": "https://woston.in/brands/artis/"
  },
  {
    "id": 2048,
    "name": "Beetel",
    "slug": "beetel",
    "description": "",
    "parent": 0,
    "count": 1,
    "image": {
      "id": 10772,
      "src": "https://woston.in/wp-content/uploads/2026/06/Beetel-logo.jpg",
      "thumbnail": "https://woston.in/wp-content/uploads/2026/06/Beetel-logo.jpg",
      "srcset": "https://woston.in/wp-content/uploads/2026/06/Beetel-logo.jpg 200w, https://woston.in/wp-content/uploads/2026/06/Beetel-logo-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/06/Beetel-logo-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/06/Beetel-logo-50x50.jpg 50w",
      "sizes": "(max-width: 200px) 100vw, 200px",
      "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/06/Beetel-logo.jpg 200w, https://woston.in/wp-content/uploads/2026/06/Beetel-logo-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/06/Beetel-logo-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/06/Beetel-logo-50x50.jpg 50w",
      "thumbnail_sizes": "(max-width: 200px) 100vw, 200px",
      "name": "Beetel logo",
      "alt": "Beetel logo"
    },
    "review_count": 0,
    "permalink": "https://woston.in/brands/beetel/"
  }]);

  const [productCategoryFilter, setProductCategoryFilter] =
    useState("all");

  const [productSortOption, setProductSortOption] =
    useState("default");

  // SERVER SEARCH STATES

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [productSearch, setProductSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [searchPage, setSearchPage] = useState(1);
  const [searchHasNext, setSearchHasNext] = useState(false);

  // SEARCH IS ACTIVE ONLY AFTER TWO CHARACTERS

  const isSearchActive =
    isSearchOpen && productSearch.trim().length >= 2;

  // SERVER-SIDE PRODUCT SEARCH

  const fetchBrands = async () => {
    await axios(`${PRODUCT_API}/brands`).then(res => setBrands(res.data)).catch(e => console.error(e))
  }

  useEffect(() => {
    fetchBrands();
  }, [])

  useEffect(() => {
    const searchTerm = productSearch.trim();

    if (!isSearchOpen || searchTerm.length < 2) {
      setSearchResults([]);
      setSearchLoading(false);
      setSearchError("");
      setSearchHasNext(false);
      return;
    }

    const controller = new AbortController();

    const debounceTimer = setTimeout(async () => {
      try {
        setSearchLoading(true);
        setSearchError("");

        const response = await axios.get(PRODUCT_API, {
          params: {
            search: searchTerm,
            per_page: 12,
            page: searchPage,
          },
          signal: controller.signal,
          timeout: 15000,
        });

        const results = Array.isArray(response.data)
          ? response.data
          : [];

        setSearchResults(results);

        // If 12 products are returned, allow another page.
        setSearchHasNext(results.length === 12);

      } catch (error) {
        if (
          error.code === "ERR_CANCELED" ||
          axios.isCancel(error)
        ) {
          return;
        }

        console.error("Product Search Error:", error);

        setSearchResults([]);
        setSearchHasNext(false);
        setSearchError(
          "Unable to search products. Please try again."
        );

      } finally {
        if (!controller.signal.aborted) {
          setSearchLoading(false);
        }
      }
    }, 450);

    return () => {
      clearTimeout(debounceTimer);
      controller.abort();
    };

  }, [productSearch, searchPage, isSearchOpen]);

  // OPEN SEARCH

  const openProductSearch = () => {
    setIsSearchOpen(true);

    setTimeout(() => {
      document
        .getElementById("product-server-search")
        ?.focus();
    }, 100);
  };

  // CLOSE SEARCH AND RESTORE NORMAL PRODUCTS

  const closeProductSearch = () => {
    setIsSearchOpen(false);
    setProductSearch("");
    setSearchResults([]);
    setSearchPage(1);
    setSearchLoading(false);
    setSearchError("");
    setSearchHasNext(false);
    setProductCategoryFilter("all");
  };

  // HANDLE SEARCH INPUT

  const handleProductSearch = (value) => {
    setProductSearch(value);
    setSearchPage(1);
    setSearchResults([]);
    setSearchError("");
    setSearchHasNext(false);
    setProductCategoryFilter("all");

    setSearchLoading(value.trim().length >= 2);
  };

  // SELECT PRODUCTS FROM NORMAL API OR SEARCH API

  const displayProducts = isSearchActive
    ? searchResults
    : products || [];

  // DYNAMIC PRODUCT CATEGORIES

  const productCategories = useMemo(() => {
    if (
      !Array.isArray(displayProducts) ||
      displayProducts.length === 0
    ) {
      return [];
    }

    const categoryMap = new Map();

    displayProducts.forEach((product) => {
      const category = getCategory(product);

      if (!categoryMap.has(category.slug)) {
        categoryMap.set(category.slug, category);
      }
    });

    return Array.from(categoryMap.values());

  }, [displayProducts]);

  // CATEGORY FILTER

  const filterByCategory = (selectedCategorySlug) => {
    return (displayProducts || []).filter(
      (product) =>
        getCategory(product).slug === selectedCategorySlug
    );
  };

  // FILTER AND SORT PRODUCTS

  const filteredProducts = useMemo(() => {
    let list =
      productCategoryFilter === "all"
        ? [...displayProducts]
        : filterByCategory(productCategoryFilter);

    if (
      !productSortOption ||
      productSortOption === "asce"
    ) {
      list.sort(
        (a, b) =>
          Number(a.prices?.price || 0) -
          Number(b.prices?.price || 0)
      );

    } else if (productSortOption === "desc") {
      list.sort(
        (a, b) =>
          Number(b.prices?.price || 0) -
          Number(a.prices?.price || 0)
      );
    }

    return list;

  }, [
    displayProducts,
    productCategoryFilter,
    productSortOption,
  ]);

  // FORMAT PRICE

  const formatPrice = (amount) => {
    const formatted = new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount || 0);

    return formatted;
  };

  // PAGINATION

  const handlePreviousPage = () => {
    window.scrollTo(0, 720);

    if (isSearchActive) {
      setSearchPage((prev) => Math.max(1, prev - 1));
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    window.scrollTo(0, 720);

    if (isSearchActive) {
      setSearchPage((prev) => prev + 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };

  const isPreviousDisabled = isSearchActive
    ? searchPage === 1 || searchLoading
    : currentPage === 1;

  const isNextDisabled = isSearchActive
    ? !searchHasNext || searchLoading
    : filteredProducts.length < 12;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <section className="py-16 px-8 bg-slate-50 min-h-screen">

        <div className="max-w-7xl mx-auto text-sans">

          {/* HEADER */}

          <div className="text-center">
            <PageHeading tagline={"Woston Security Hardware Catalog"} title={"Professional Surveillance & Infrastructure"} description={"We deal directly with industrial-grade hardware. Browse our active catalogue or connect to our dedicated B2B e-commerce store for wholesale orders and stock telemetry."} />

            <div className="mt-8 p-6 bg-white border border-slate-200/80 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-left rounded-2xl shadow-sm">

              <div>
                <h3 className="text-sm font-bold text-slate-900 uppercase flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-primary" />
                  WOSTON ONLINE SALES PORTAL
                </h3>

                <p className="text-xs text-slate-500 mt-1 max-w-lg leading-relaxed">
                  Our primary secure digital storefront is
                  hosting live stock data, delivery estimates
                  for Nagpur, Pune, and Mumbai regions, and
                  direct credit card merchant channels.
                </p>
              </div>

              <Link
                to="https://woston.in"
                target="_blank"
                className="bg-primary hover:bg-sky-700 text-white px-5 py-2.5 rounded-xl font-bold text-[10px] tracking-widest uppercase border border-primary hover:border-sky-700 transition-all duration-300 flex items-center gap-2 whitespace-nowrap cursor-pointer shadow-sm"
              >
                <span>GO TO WOSTON STORE</span>
                <ExternalLink className="h-3 w-3" />
              </Link>

            </div>
          </div>

          {/* BRAND CAROUSEL */}

          <div className="my-12">
            <BrandCarousel />
          </div>

          {/* PRODUCT FILTER TOOLBAR */}

          <div className="flex flex-col gap-4 mb-10 bg-white border border-slate-200/80 p-5 rounded-2xl shadow-sm">

            {/* EXPANDABLE SERVER SEARCH */}

            {isSearchOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
                className="w-full overflow-hidden"
              >

                <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 focus-within:border-primary focus-within:bg-white rounded-xl px-4 py-3 transition-all">

                  <Search className="h-4 w-4 text-slate-400 shrink-0" />

                  <input
                    id="product-server-search"
                    type="search"
                    autoComplete="off"
                    placeholder="Search products by name, model, SKU or keyword..."
                    value={productSearch}
                    onChange={(e) =>
                      handleProductSearch(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Escape") {
                        closeProductSearch();
                      }
                    }}
                    className="w-full bg-transparent outline-none text-xs md:text-sm text-slate-800 placeholder:text-slate-400"
                  />

                  {searchLoading && (
                    <LoaderCircle className="h-4 w-4 text-primary animate-spin shrink-0" />
                  )}

                  {productSearch && !searchLoading && (
                    <button
                      type="button"
                      onClick={() => handleProductSearch("")}
                      aria-label="Clear product search"
                      className="text-slate-400 hover:text-slate-800 transition-colors"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}

                  <button
                    type="button"
                    onClick={closeProductSearch}
                    aria-label="Close product search"
                    className="text-slate-400 hover:text-rose-500 border-l border-slate-200 pl-3 transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>

                </div>

                <div className="flex flex-wrap justify-between items-center gap-2 px-1 mt-2">

                  <span className="text-[9px] text-slate-400">
                    {productSearch.trim().length === 0
                      ? "Enter a product name or model number to search the complete catalogue."
                      : productSearch.trim().length === 1
                        ? "Enter at least 2 characters to start searching."
                        : searchLoading
                          ? "Searching the product catalogue..."
                          : searchError
                            ? searchError
                            : `${searchResults.length} products found on this page.`}
                  </span>

                  {isSearchActive && (
                    <span className="text-[9px] uppercase tracking-wider font-bold text-sky-600">
                      SERVER SEARCH
                    </span>
                  )}

                </div>

              </motion.div>
            )}

            {/* CATEGORY BUTTONS + SEARCH + SORT */}

            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

              {/* CATEGORY BUTTONS */}

              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">

                {[
                  { name: "All", slug: "all" },
                  ...productCategories,
                ].map((cat) => (

                  <button
                    type="button"
                    id={`categoryFilterBtn-${cat.slug}`}
                    aria-label={`Filter by ${cat.name}`}
                    key={cat.slug}
                    onClick={() =>
                      setProductCategoryFilter(cat.slug)
                    }
                    className={`text-[10px] uppercase tracking-wider px-4.5 py-2.5 border transition-all rounded-full font-bold cursor-pointer ${productCategoryFilter === cat.slug
                      ? "bg-primary border-primary text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50"
                      }`}
                  >
                    {cat.name}
                  </button>

                ))}

              </div>

              {/* SEARCH BUTTON + SORTING */}

              <div className="flex items-center gap-2.5 w-full lg:w-auto self-stretch lg:self-auto shrink-0 justify-end">

                {/* SEARCH TOGGLE */}

                {!isSearchOpen ? (
                  <button
                    type="button"
                    onClick={openProductSearch}
                    aria-label="Open product search"
                    title="Search products"
                    className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all shadow-sm"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={closeProductSearch}
                    aria-label="Close product search"
                    title="Close search"
                    className="h-10 w-10 shrink-0 flex items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 transition-all shadow-sm"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}

                <span className="font-mono text-[9px] text-slate-400 uppercase font-bold tracking-wider whitespace-nowrap">
                  SORT BY:
                </span>

                <select
                  value={productSortOption}
                  onChange={(e) =>
                    setProductSortOption(e.target.value)
                  }
                  className="bg-white border border-slate-200 hover:border-primary text-slate-800 text-xs px-3.5 py-2.5 rounded-xl focus:outline-none focus:ring-1 focus:ring-primary font-sans cursor-pointer transition-colors shadow-sm w-full lg:w-auto min-w-45"
                >
                  <option value="default">
                    Recommended (default)
                  </option>

                  <option value="asce">
                    Price: Low to High
                  </option>

                  <option value="desc">
                    Price: High to Low
                  </option>
                </select>

              </div>

            </div>

          </div>

          {/* SEARCH ERROR */}

          {isSearchActive && searchError && !searchLoading && (
            <div className="bg-white border border-rose-100 rounded-xl p-5 mb-6 text-center">

              <p className="text-xs text-rose-600 font-semibold">
                {searchError}
              </p>

              <button
                type="button"
                onClick={() => setProductSearch((prev) => prev + " ")}
                className="text-xs text-primary font-bold mt-2"
              >
                Retry Search
              </button>

            </div>
          )}

          {/* SEARCH RESULTS HEADER */}

          {isSearchActive && !searchError && !searchLoading && (
            <div className="flex flex-wrap justify-between items-center gap-2 mb-5">

              <div>
                <h2 className="text-sm font-bold text-slate-800 uppercase">
                  Search Results
                </h2>

                <p className="text-[10px] text-slate-400 mt-1">
                  Results for "{productSearch}"
                </p>
              </div>

              <span className="text-[10px] text-sky-600 font-bold uppercase tracking-wider">
                Page {searchPage}
              </span>

            </div>
          )}

          {/* PRODUCT GRID */}

          <motion.div
            key={`${productCategoryFilter}-${productSortOption}-${isSearchActive ? `search-${searchPage}-${productSearch}` : `page-${currentPage}`}`}
            variants={staggerContainer}
            initial="initial"
            animate="whileInView"
            aria-label="Products"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >

            {/* SEARCH LOADER */}

            {searchLoading ? (

              Array.from({ length: 6 }).map((_, index) => (
                <ProductGridLoader key={index} />
              ))

            ) : (

              filteredProducts.length > 0 ? (

                filteredProducts.map((product) => (

                  <motion.div
                    layout
                    variants={staggerItem}
                    key={product.id}
                    whileHover={{
                      scale: 1.02,
                      borderColor: "#0284C7",
                      boxShadow:
                        "0 20px 40px -15px rgba(2, 132, 199, 0.1)",
                    }}
                    className="bg-white border border-slate-200/80 flex flex-col justify-between p-4 relative rounded-2xl group cursor-pointer transition-all duration-300 shadow"
                  >

                    <div>

                      {/* BRAND AND CATEGORY */}

                      <div className="flex justify-between items-center mb-2 text-[9px] text-slate-500 font-bold">

                        <h2 className="uppercase border border-sky-100 tracking-wider px-2.5 py-1 bg-sky-50 text-sky-700 rounded-lg">
                          {product?.brands?.length > 0
                            ? product.brands[0]?.name
                            : "Unknown Brand"}
                        </h2>

                        <h3 className="flex pt-1 items-center tracking-wider uppercase gap-1">
                          {getCategory(product).name}
                        </h3>

                      </div>

                      {/* PRODUCT IMAGE */}

                      <div className="aspect-square bg-slate-100 border border-slate-100 rounded-xl mb-4 relative group-hover:border-sky-200 transition-colors overflow-hidden flex items-center justify-center">

                        <img
                          src={product?.images?.[0]?.src}
                          alt={
                            product?.images?.[0]?.alt ||
                            product?.name ||
                            "Product"
                          }
                          className="object-cover w-full h-full absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                          lang="en"
                          loading="lazy"
                          decoding="async"
                          fetchPriority="medium"
                        />

                        <div className="absolute inset-0 bg-slate-950/15 pointer-events-none" />
                        {/* BRAND LOGO */}

                        <div className="absolute top-2.5 left-2.5 z-20 overflow-hidden backdrop-blur-md rounded-full shadow-sm transition-all duration-300 hover:scale-110">

                          {brands.map((brand) =>
                            brand.name === product?.brands?.[0]?.name ? (
                              <img
                                className="h-10 aspect-square"
                                key={brand?.id}
                                src={brand?.image?.src}
                                alt={brand?.image?.alt}
                              />
                            ) : null
                          )}

                        </div>

                        {/* BESTSELLER / SALE */}

                        <span className="absolute bottom-2.5 left-2.5 text-xs bg-primary text-white px-2.5 pt-2 pb-1 rounded-md uppercase tracking-wider z-20">
                          {!product?.on_sale && "★ Bestseller"}
                          {product?.on_sale && "Sale"}
                        </span>

                        {/* WISHLIST */}

                        <button
                          type="button"
                          aria-label="Wishlist Toggle Button"
                          id={`wishlist-toggle-${product.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleWishlist(product?.id);
                          }}
                          className="absolute top-2.5 right-2.5 z-20 p-2 bg-white/90 hover:bg-white backdrop-blur-md rounded-full border border-slate-100 shadow-sm transition-all duration-300 hover:scale-110 cursor-pointer"
                          title={
                            wishlist?.includes(product?.id)
                              ? "Remove from wishlist"
                              : "Save to wishlist"
                          }
                        >
                          <Heart
                            className={`h-3.5 w-3.5 transition-colors duration-300 ${wishlist?.includes(product.id)
                              ? "fill-rose-500 text-rose-500"
                              : "text-slate-500 hover:text-rose-500"
                              }`}
                          />
                        </button>

                        {/* QUICK VIEW OVERLAY */}

                        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px] z-10">

                          <button
                            type="button"
                            aria-label="Quick View Button"
                            id={`quick-view-btn-img-${product.id}`}
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedProductForQuickView(product);
                            }}
                            className="bg-white text-slate-900 hover:bg-primary hover:text-white px-4 py-2 text-xs font-bold rounded-lg transition-all shadow-md flex items-center gap-1.5 cursor-pointer transform translate-y-2 group-hover:translate-y-0 duration-300 z-20"
                          >
                            <Eye className="h-3.5 w-3.5" />
                            Quick View
                          </button>

                        </div>

                        {/* SKU */}

                        <div className="absolute bottom-2 right-2 text-[8px] font-bold bg-white text-primary backdrop-blur-sm px-2 py-1 uppercase rounded z-20">
                          {product?.sku ||
                            product?.brands?.[0]?.name ||
                            "Unknown Brand"}
                        </div>

                      </div>

                      {/* PRODUCT NAME */}

                      <h3 className="text-sm font-bold text-slate-900 uppercase group-hover:text-primary transition-colors line-clamp-2">
                        {parse(product?.name || "")}
                      </h3>

                      {/* SHORT DESCRIPTION */}

                      <div className="product-short-description text-xs line-clamp-3 mt-4">
                        {parse(product?.short_description || "")}
                      </div>

                    </div>

                    {/* PRODUCT FOOTER */}

                    <div className="mt-2 pt-4 border-t border-slate-100 flex justify-between items-center z-20">

                      <span className="text-base font-extrabold text-slate-900">
                        {formatPrice(
                          !product.prices?.sale_price
                            ? product.prices?.regular_price || 0
                            : product.prices.sale_price
                        )}
                      </span>

                      <div className="flex gap-1.5">

                        {/* QUICK VIEW */}

                        <button
                          type="button"
                          aria-label="Quick View Button"
                          id={`quick-view-btn-footer-${product.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProductForQuickView(product);
                          }}
                          className="bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-100/50 px-3 py-1.5 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center gap-1 cursor-pointer"
                        >
                          <Eye className="h-3.5 w-3.5 text-primary" />
                          Quick View
                        </button>

                        {/* PURCHASE */}

                        <Link
                          to={product.permalink}
                          target="_blank"
                          id={`purchase-btn-${product.id}`}
                          className="bg-slate-50 group-hover:bg-primary border border-primary text-slate-700 group-hover:text-slate-50 px-3 py-1 text-[9px] font-bold uppercase transition-all duration-300 rounded-xl flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ShoppingBag className="h-3.5 w-3.5 text-primary duration-300 group-hover:text-sky-50" />
                          Purchase
                        </Link>

                      </div>

                    </div>

                  </motion.div>

                ))

              ) : (

                <div className="col-span-full bg-white border border-slate-200 rounded-2xl p-12 text-center">

                  <Search className="h-8 w-8 text-slate-300 mx-auto mb-4" />

                  <h3 className="text-sm font-bold text-slate-800">
                    {isSearchActive
                      ? "No Products Found"
                      : "No Products Available"}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2">
                    {isSearchActive
                      ? `No products found for "${productSearch}". Try another product name or model number.`
                      : "There are no products available in this category."}
                  </p>

                  {isSearchActive && (
                    <button
                      type="button"
                      onClick={closeProductSearch}
                      className="mt-5 text-xs font-bold text-primary hover:text-sky-700"
                    >
                      Clear Search
                    </button>
                  )}

                </div>

              )

            )}

          </motion.div>

          {/* PAGINATION */}

          <div className="flex gap-5 mt-5 justify-end">

            <button
              type="button"
              id="prevBtn"
              aria-label="Previous Button"
              onClick={handlePreviousPage}
              className="bg-transparent hover:bg-primary text-primary hover:text-white px-5 py-2 rounded-lg font-semibold text-xs uppercase border cursor-pointer disabled:cursor-default disabled:border-slate-400 disabled:bg-transparent disabled:text-slate-400 border-primary hover:border-primary transition-all duration-300 flex items-center gap-1 shadow-sm"
              disabled={isPreviousDisabled}
            >
              <ChevronLeft className="h-5 w-5 font-semibold" />
              <span>Prev</span>
            </button>

            <button
              type="button"
              id="nextBtn"
              aria-label="Next Button"
              onClick={handleNextPage}
              className="bg-transparent hover:bg-primary text-primary hover:text-white px-5 py-2 rounded-lg font-semibold text-xs uppercase border cursor-pointer disabled:cursor-default disabled:border-slate-400 disabled:bg-transparent disabled:text-slate-400 border-primary hover:border-primary transition-all duration-300 flex items-center gap-1 shadow-sm"
              disabled={isNextDisabled || searchLoading}
            >
              <span>Next</span>
              <ChevronRight className="h-5 w-5" />
            </button>

          </div>

        </div>

      </section>
    </motion.div>
  );
}

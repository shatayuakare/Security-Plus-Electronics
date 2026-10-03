import "./index.css";
import { useState, useEffect, useRef, lazy, Suspense } from "react";
import axios from "axios";
import { X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import { SEOManager } from "./components/SEOManager";

const BrandCarousel = lazy(() => import("./components/BrandCarousel"))
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
const OurThought = lazy(() => import("./components/section/OurThought.jsx"));
const FAQSection = lazy(() => import("./components/section/FAQSection.jsx"));
// const OurBlogs = lazy(() => import("./components/section/OurBlogs.jsx"));
const OurLocation = lazy(() => import("./components/section/OurLocation.jsx"));

// JSON file to fetch data
import TESTIMONIALS_DATA from "./json/testimonials.json"
import GALLERY_ITEMS from "./json/gallary.json"
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

  const [toastMessage, setToastMessage] = useState(null);

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem("spe_customer_wishlist");
    return saved ? JSON.parse(saved) : [];
  });


  const toggleWishlist = (productId) => {
    const index = wishlist.indexOf(productId);
    let newWishlist;
    if (index > -1) {
      newWishlist = wishlist.filter(id => id !== productId);
      setToastMessage("Product removed from your wishlist.");
    } else {
      newWishlist = [...wishlist, productId];
      setToastMessage("Product added to your wishlist!");
    }
    // localStorage.setItem("spe_customer_wishlist")
    setWishlist(newWishlist);
  };
  useEffect(() => {
    localStorage.setItem("spe_customer_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

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
      return [JSON.parse(saved)];
    return [{
      "id": 12259,
      "name": "Consistent 4MP Night Hawk IP Dome Camera with Mic 20m IR CT-CM-IDW4MP",
      "slug": "consistent-4mp-cctv-dome-camera-ct-cm-idw4mp",
      "parent": 0,
      "type": "simple",
      "variation": "",
      "permalink": "https://woston.in/product/consistent-4mp-cctv-dome-camera-ct-cm-idw4mp/",
      "sku": "ct-cm-idw4mp",
      "short_description": "<p>Secure your premises with the <strong>Consistent CT-CM-IDW4MP 4MP Night Hawk IP Dome Camera</strong>. Featuring <strong>4MP high-resolution imaging</strong>, an indoor dome design, multiple-angle adjustment, built-in microphone, up to 20-meter night vision, 3D digital noise reduction, ONVIF support, and reliable network connectivity, it is ideal for homes, offices, shops, and indoor surveillance applications.</p>\n<h2>Key Features</h2>\n<ul data-spread=\"false\">\n<li>4MP High-Resolution IP Dome Camera</li>\n<li>Built-in Microphone for Audio Monitoring</li>\n<li>Up to 20m Night Vision</li>\n<li>Multiple-Angle Adjustment</li>\n<li>3D Digital Noise Reduction</li>\n<li>ONVIF Support for Third-Party Integration</li>\n</ul>",
      "description": "<p class=\"isSelectedEnd\">The <strong>Consistent CT-CM-IDW4MP 4MP Night Hawk Dome Camera</strong> is a compact and reliable network surveillance camera designed to provide clear, detailed, and dependable monitoring for homes, offices, retail stores, commercial properties, and other indoor environments. Combining 4MP high-resolution imaging with an adjustable dome design, built-in microphone, night vision, 3D noise reduction, and ONVIF compatibility, this camera provides an effective solution for modern indoor security systems.</p>\n<p class=\"isSelectedEnd\">The camera is built around a <strong>4MP imaging system</strong> that provides detailed video for everyday security monitoring. The higher resolution helps capture important visual information such as faces, objects, visitors, and activities with greater clarity. This makes the camera suitable for monitoring rooms, entrances, reception areas, retail counters, corridors, offices, and other indoor locations where clear video is important.</p>\n<p class=\"isSelectedEnd\">Its <strong>dome-style construction</strong> provides a compact and discreet appearance that blends naturally into indoor environments. Unlike larger surveillance cameras, the dome form factor can be installed on ceilings or suitable walls while maintaining a professional and unobtrusive appearance. This makes it especially suitable for homes, offices, shops, schools, reception areas, and commercial premises.</p>\n<p class=\"isSelectedEnd\">One of the useful features of the CT-CM-IDW4MP is its <strong>multiple-angle adjustment capability</strong>. The adjustable camera mechanism allows installers to position the viewing direction according to the surveillance area&#8217;s requirements. This provides greater flexibility during installation and helps ensure that important areas remain within the camera&#8217;s field of view.</p>\n<p class=\"isSelectedEnd\">The camera also features an <strong>in-built microphone</strong>, enabling audio capture alongside video where legally permitted. Audio can provide additional context during surveillance and may be useful for monitoring reception areas, offices, retail counters, entrances, and other indoor spaces. Having the microphone integrated into the camera eliminates the need for separate audio hardware in supported installations.</p>\n<p class=\"isSelectedEnd\">For low-light surveillance, the camera provides <strong>night vision up to 20 meters</strong> according to the provided specifications. This allows the camera to continue monitoring during darker conditions and provides additional security after normal daylight hours. Night vision is particularly useful for indoor areas such as corridors, entrances, stairways, warehouses, and rooms with limited lighting.</p>\n<p class=\"isSelectedEnd\">The camera incorporates <strong>3D Digital Noise Reduction (3D DNR)</strong> technology to improve image clarity in challenging lighting conditions. Digital noise reduction helps minimize unwanted visual noise that can become more noticeable in low-light scenes. Cleaner images can make surveillance footage easier to view and can improve the overall quality of recorded video.</p>\n<p class=\"isSelectedEnd\">The CT-CM-IDW4MP supports <strong>ONVIF</strong>, allowing it to integrate with compatible third-party network video recorders and video management systems. This provides greater flexibility for users who already have an existing IP surveillance infrastructure or want to combine cameras and recording equipment from compatible manufacturers.</p>\n<p class=\"isSelectedEnd\">The network-based design allows the camera to be integrated into modern IP surveillance systems. When connected to a compatible network and recording solution, users can monitor and manage surveillance footage through the appropriate system or software.</p>\n<p class=\"isSelectedEnd\">The camera&#8217;s indoor-oriented dome construction makes it suitable for applications where protection from direct outdoor weather exposure is not the primary requirement. It can be installed in homes, offices, retail stores, schools, clinics, reception areas, warehouses, and other indoor locations.</p>\n<p class=\"isSelectedEnd\">For residential applications, the camera can help monitor entrances, living areas, hallways, garages, and other important spaces. In offices and businesses, it can be used to monitor reception desks, work areas, corridors, retail counters, and customer-facing spaces.</p>\n<p class=\"isSelectedEnd\">The combination of <strong>4MP resolution, adjustable viewing angle, built-in microphone, up to 20-meter night vision, 3D noise reduction, and ONVIF compatibility</strong> makes the Consistent CT-CM-IDW4MP a versatile surveillance camera for indoor security requirements.</p>\n<p class=\"isSelectedEnd\">Whether you are upgrading an existing CCTV system or installing a new IP surveillance setup, the <strong>Consistent 4MP Night Hawk Dome Camera</strong> provides a practical balance of image quality, audio capability, installation flexibility, and network compatibility.</p>\n<h2>Technical Specifications</h2>\n<table style=\"height: 403px\" width=\"558\">\n<tbody>\n<tr>\n<th>Specification</th>\n<th>Details</th>\n</tr>\n<tr>\n<td>Brand</td>\n<td>Consistent</td>\n</tr>\n<tr>\n<td>Model</td>\n<td>CT-CM-IDW4MP</td>\n</tr>\n<tr>\n<td>Product Type</td>\n<td>4MP IP Dome Camera</td>\n</tr>\n<tr>\n<td>Resolution</td>\n<td>4MP</td>\n</tr>\n<tr>\n<td>Camera Design</td>\n<td>Indoor Dome</td>\n</tr>\n<tr>\n<td>Angle Adjustment</td>\n<td>Multiple-Angle Adjustment</td>\n</tr>\n<tr>\n<td>Audio</td>\n<td>Built-in Microphone</td>\n</tr>\n<tr>\n<td>Night Vision</td>\n<td>Up to 20 Meters</td>\n</tr>\n<tr>\n<td>Noise Reduction</td>\n<td>3D Digital Noise Reduction</td>\n</tr>\n<tr>\n<td>Network Compatibility</td>\n<td>ONVIF</td>\n</tr>\n<tr>\n<td>Application</td>\n<td>Indoor Surveillance</td>\n</tr>\n<tr>\n<td>Installation</td>\n<td>Ceiling / Wall Mount Suitable</td>\n</tr>\n</tbody>\n</table>\n<h2>Key Features</h2>\n<ul data-spread=\"false\">\n<li>4MP High-Resolution IP Dome Camera</li>\n<li>Built-in Microphone for Audio Monitoring</li>\n<li>Up to 20m Night Vision</li>\n<li>Multiple-Angle Adjustment</li>\n<li>3D Digital Noise Reduction</li>\n<li>ONVIF Support for Third-Party Integration</li>\n</ul>\n<h2>Use Cases</h2>\n<ul data-spread=\"false\">\n<li>Home Security</li>\n<li>Office Surveillance</li>\n<li>Retail Store Monitoring</li>\n<li>Reception Area Security</li>\n<li>Indoor Commercial Surveillance</li>\n<li>School &amp; Classroom Monitoring</li>\n<li>Clinic &amp; Healthcare Monitoring</li>\n<li>Corridor Surveillance</li>\n<li>Apartment Security</li>\n<li>Small Business Security</li>\n</ul>",
      "on_sale": false,
      "prices": {
        "price": "2099",
        "regular_price": "2099",
        "sale_price": "2099",
        "price_range": null,
        "currency_code": "INR",
        "currency_symbol": "₹",
        "currency_minor_unit": 0,
        "currency_decimal_separator": ".",
        "currency_thousand_separator": ",",
        "currency_prefix": "₹",
        "currency_suffix": ""
      },
      "price_html": "<span class=\"electro-price\"><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8377;</span>2,099</span></span>",
      "average_rating": "0",
      "review_count": 0,
      "images": [
        {
          "id": 12348,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp.jpg",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-350x350.jpg",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp.jpg 497w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-300x273.jpg 300w",
          "sizes": "(max-width: 497px) 100vw, 497px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-50x50.jpg 50w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4mp camera night vision ct-cm-idm4mp",
          "alt": "Consistent 4mp camera night vision ct-cm-idm4mp"
        },
        {
          "id": 12349,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1.jpg",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-350x350.jpg",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1.jpg 1500w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-300x300.jpg 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-1024x1024.jpg 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-768x768.jpg 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-600x600.jpg 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-50x50.jpg 50w",
          "sizes": "(max-width: 1500px) 100vw, 1500px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-300x300.jpg 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-1024x1024.jpg 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-768x768.jpg 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-600x600.jpg 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1-50x50.jpg 50w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-1.jpg 1500w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4mp camera night vision ct-cm-idm4mp 1",
          "alt": "Consistent 4mp camera night vision ct-cm-idm4mp 1"
        },
        {
          "id": 12347,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3.jpg",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-350x350.jpg",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3.jpg 1080w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-300x300.jpg 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-1024x1024.jpg 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-768x768.jpg 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-600x600.jpg 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-50x50.jpg 50w",
          "sizes": "(max-width: 1080px) 100vw, 1080px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-300x300.jpg 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-1024x1024.jpg 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-768x768.jpg 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-600x600.jpg 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3-50x50.jpg 50w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-3.jpg 1080w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4mp camera night vision ct-cm-idm4mp 3",
          "alt": "Consistent 4mp camera night vision ct-cm-idm4mp 3"
        },
        {
          "id": 12350,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2.jpg",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-350x350.jpg",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2.jpg 1080w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-300x300.jpg 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-1024x1024.jpg 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-768x768.jpg 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-600x600.jpg 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-50x50.jpg 50w",
          "sizes": "(max-width: 1080px) 100vw, 1080px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-350x350.jpg 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-300x300.jpg 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-1024x1024.jpg 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-768x768.jpg 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-600x600.jpg 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2-50x50.jpg 50w, https://woston.in/wp-content/uploads/2026/08/Consistent-4mp-camera-night-vision-ct-cm-idm4mp-2.jpg 1080w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4mp camera night vision ct-cm-idm4mp 2",
          "alt": "Consistent 4mp camera night vision ct-cm-idm4mp 2"
        }
      ],
      "categories": [
        {
          "id": 19,
          "name": "IP Camera",
          "slug": "ip",
          "link": "https://woston.in/product-category/cctv/ip/"
        },
        {
          "id": 16,
          "name": "CCTV Camera",
          "slug": "cctv",
          "link": "https://woston.in/product-category/cctv/"
        },
        {
          "id": 1972,
          "name": "Dome Camera",
          "slug": "dome-camera",
          "link": "https://woston.in/product-category/cctv/dome-camera/"
        }
      ],
      "tags": [
        {
          "id": 2085,
          "name": "Consistant Surveillance",
          "slug": "consistant-surveillance",
          "link": "https://woston.in/product-tag/consistant-surveillance/"
        }
      ],
      "brands": [
        {
          "id": 2086,
          "name": "Consistant",
          "slug": "consistant",
          "link": "https://woston.in/brands/consistant/"
        }
      ],
      "attributes": [],
      "variations": [],
      "grouped_products": [],
      "has_options": false,
      "is_purchasable": true,
      "is_in_stock": true,
      "is_on_backorder": false,
      "low_stock_remaining": null,
      "stock_availability": {
        "text": "",
        "class": "in-stock"
      },
      "sold_individually": null,
      "weight": "0.2",
      "dimensions": {
        "length": "10",
        "width": "10",
        "height": "10"
      },
      "formatted_weight": "0.2 kg",
      "formatted_dimensions": "10 × 10 × 10 cm",
      "add_to_cart": {
        "text": "Add to cart",
        "description": "Add to cart: &ldquo;Consistent 4MP Night Hawk IP Dome Camera with Mic 20m IR CT-CM-IDW4MP&rdquo;",
        "url": "/wp-json/wc/store/v1/products?per_page=12&#038;page=1&#038;add-to-cart=12259",
        "single_text": "Add to cart",
        "minimum": 1,
        "maximum": 9999,
        "multiple_of": 1
      },
      "is_password_protected": false,
      "extensions": {},
      "_links": {
        "self": [
          {
            "href": "https://woston.in/wp-json/wc/store/v1/products/12259",
            "targetHints": {
              "allow": [
                "GET"
              ]
            }
          }
        ],
        "collection": [
          {
            "href": "https://woston.in/wp-json/wc/store/v1/products"
          }
        ],
        "related": [
          {
            "embeddable": true,
            "href": "https://woston.in/wp-json/wc/store/v1/products?related=12259&per_page=10"
          }
        ]
      }
    },
    {
      "id": 12258,
      "name": "Consistent 4MP Night Hawk IP Bullet Camera with Mic PoE 4mm Lens CT-CM-IBM4MP",
      "slug": "consistent-4mp-cctv-bullet-camera-ct-cm-ibw4mp",
      "parent": 0,
      "type": "simple",
      "variation": "",
      "permalink": "https://woston.in/product/consistent-4mp-cctv-bullet-camera-ct-cm-ibw4mp/",
      "sku": "ct-cm-ibw4mp",
      "short_description": "<p>Secure your premises with the <strong>Consistent CT-CM-IBM4MP 4MP Night Hawk Bullet Camera</strong>. Featuring <strong>4MP high-resolution imaging</strong>, a durable metal body, 4mm fixed lens, built-in microphone, up to 20-meter color night vision, humanoid, motion and vehicle detection, Smart H.265 video compression, 3D DNR, BLC, Digital WDR, ONVIF and RTSP support, built-in PoE, and 12V/1A power support for reliable professional surveillance.</p>\n<h2>Key Features</h2>\n<ul data-spread=\"false\">\n<li>4MP High-Resolution IP Bullet Camera</li>\n<li>20m Color Night Vision with Built-in Microphone</li>\n<li>Humanoid, Motion &amp; Vehicle Detection</li>\n<li>Smart H.265 / H.265 / H.264 Compression</li>\n<li>ONVIF &amp; Third-Party RTSP Support</li>\n<li>Built-in PoE with 12V/1A Power Support</li>\n</ul>",
      "description": "<p class=\"isSelectedEnd\">The <strong>Consistent CT-CM-IBM4MP 4MP Night Hawk Bullet Camera</strong> is a professional IP surveillance camera designed to provide clear, reliable, and intelligent video monitoring for homes, offices, commercial properties, warehouses, retail stores, industrial facilities, and other security-sensitive environments. Combining 4MP high-resolution imaging with intelligent detection capabilities, built-in audio, color night vision, PoE connectivity, and a durable metal housing, this camera provides a comprehensive surveillance solution for modern security systems.</p>\n<p class=\"isSelectedEnd\">At the heart of the camera is a <strong>4MP image sensor</strong> designed to deliver detailed video output for everyday security monitoring. The higher resolution helps capture important visual information such as faces, vehicles, objects, and activities with greater clarity compared with lower-resolution surveillance cameras. This makes the camera suitable for monitoring entrances, gates, parking areas, corridors, shops, offices, warehouses, and building perimeters.</p>\n<p class=\"isSelectedEnd\">The camera is equipped with a <strong>4mm fixed lens</strong>, providing a balanced field of view for a variety of surveillance applications. The fixed focal-length design offers consistent viewing performance and is particularly suitable for locations where the camera position and monitoring area are predetermined. It can be installed at entrances, passageways, outdoor walls, shop fronts, offices, and other areas requiring focused surveillance coverage.</p>\n<p class=\"isSelectedEnd\">A major advantage of the CT-CM-IBM4MP is its <strong>built-in microphone</strong>. Audio capture adds another layer of information to surveillance footage and can help provide additional context during security monitoring or incident investigation, where audio recording is legally permitted. Combining video and audio in a single camera can also simplify installation compared with deploying separate audio equipment.</p>\n<p class=\"isSelectedEnd\">The camera supports <strong>color night vision up to 20 meters</strong>, helping users maintain improved visual information in low-light environments. Color night surveillance can make it easier to distinguish important details such as clothing, vehicle colors, and objects during nighttime monitoring compared with conventional black-and-white infrared footage. The camera also supports operation at very low illumination levels of approximately <strong>0.01 Lux</strong>, according to the provided specifications.</p>\n<p class=\"isSelectedEnd\">For intelligent security monitoring, the camera supports <strong>humanoid, motion, and vehicle detection</strong>. These detection capabilities can help security systems focus on relevant activity and reduce unnecessary attention to ordinary background movement. Human and vehicle classification can be particularly useful for entrances, driveways, parking areas, warehouses, and commercial premises where distinguishing people and vehicles from general movement is important.</p>\n<p class=\"isSelectedEnd\">The CT-CM-IBM4MP supports <strong>Smart H.265, H.265, and H.264 video compression</strong> technologies. Efficient video compression can reduce network bandwidth consumption and storage requirements while maintaining useful image quality. This allows surveillance systems to store more footage within the available storage capacity and can improve remote video transmission efficiency when supported by the connected NVR or video management system.</p>\n<p class=\"isSelectedEnd\">Image enhancement features including <strong>3D Digital Noise Reduction (3D DNR)</strong>, <strong>Backlight Compensation (BLC)</strong>, and <strong>Digital Wide Dynamic Range (Digital WDR)</strong> help the camera maintain usable images in challenging lighting conditions. 3D DNR can help reduce visual noise in low-light footage, while BLC helps compensate for strong light sources behind subjects. Digital WDR assists with balancing areas of different brightness within the scene.</p>\n<p class=\"isSelectedEnd\">The camera supports <strong>ONVIF</strong>, providing compatibility with supported third-party network video recorders and surveillance systems. It also supports <strong>third-party RTSP protocols</strong>, allowing compatible video management platforms and network recording solutions to access the camera&#8217;s video stream.</p>\n<p class=\"isSelectedEnd\">Another important installation advantage is <strong>built-in Power over Ethernet (PoE)</strong>. PoE allows network data and electrical power to be transmitted through a compatible Ethernet cable, reducing the need for separate power wiring. This can make installation cleaner and more convenient, particularly when cameras are mounted at locations where electrical outlets are not easily accessible.</p>\n<p class=\"isSelectedEnd\">In addition to PoE, the camera supports a <strong>12V/1A power supply</strong>, providing an alternative powering method for compatible surveillance installations. This flexibility allows installers to select the appropriate power configuration according to the existing network infrastructure.</p>\n<p class=\"isSelectedEnd\">The <strong>metal body construction</strong> provides a durable housing suitable for professional surveillance deployments. A robust metal enclosure is useful in environments where the camera needs to withstand regular operational conditions while maintaining a professional appearance.</p>\n<p class=\"isSelectedEnd\">The camera&#8217;s combination of high-resolution imaging, intelligent detection, color night vision, audio recording, efficient compression, image enhancement, ONVIF compatibility, RTSP support, and PoE connectivity makes it suitable for a wide range of security applications.</p>\n<p class=\"isSelectedEnd\">Whether used for residential security, office monitoring, retail surveillance, warehouse protection, industrial monitoring, parking areas, or commercial security systems, the <strong>Consistent CT-CM-IBM4MP 4MP Night Hawk Bullet Camera</strong> provides a versatile network surveillance solution designed for dependable day-and-night monitoring.</p>\n<h2>Technical Specifications</h2>\n<table style=\"height: 571px\" width=\"675\">\n<tbody>\n<tr>\n<th>Specification</th>\n<th>Details</th>\n</tr>\n<tr>\n<td>Brand</td>\n<td>Consistent</td>\n</tr>\n<tr>\n<td>Model</td>\n<td>CT-CM-IBM4MP</td>\n</tr>\n<tr>\n<td>Product Type</td>\n<td>4MP IP Bullet Camera</td>\n</tr>\n<tr>\n<td>Resolution</td>\n<td>4MP</td>\n</tr>\n<tr>\n<td>Lens</td>\n<td>4mm Fixed Lens</td>\n</tr>\n<tr>\n<td>Housing</td>\n<td>Metal Body</td>\n</tr>\n<tr>\n<td>Audio</td>\n<td>Built-in Microphone</td>\n</tr>\n<tr>\n<td>Color Night Vision</td>\n<td>Up to 20 Meters</td>\n</tr>\n<tr>\n<td>Low Illumination</td>\n<td>0.01 Lux</td>\n</tr>\n<tr>\n<td>Intelligent Detection</td>\n<td>Humanoid, Motion &amp; Vehicle Detection</td>\n</tr>\n<tr>\n<td>Video Compression</td>\n<td>Smart H.265, H.265, H.264</td>\n</tr>\n<tr>\n<td>Noise Reduction</td>\n<td>3D DNR</td>\n</tr>\n<tr>\n<td>Backlight Compensation</td>\n<td>BLC</td>\n</tr>\n<tr>\n<td>Wide Dynamic Range</td>\n<td>Digital WDR</td>\n</tr>\n<tr>\n<td>Network Compatibility</td>\n<td>ONVIF</td>\n</tr>\n<tr>\n<td>Third-Party Protocol</td>\n<td>RTSP</td>\n</tr>\n<tr>\n<td>PoE</td>\n<td>Built-in</td>\n</tr>\n<tr>\n<td>Power Supply</td>\n<td>12V / 1A</td>\n</tr>\n</tbody>\n</table>\n<h2>Key Features</h2>\n<ul data-spread=\"false\">\n<li>4MP High-Resolution IP Bullet Camera</li>\n<li>20m Color Night Vision with Built-in Microphone</li>\n<li>Humanoid, Motion &amp; Vehicle Detection</li>\n<li>Smart H.265 / H.265 / H.264 Compression</li>\n<li>ONVIF &amp; Third-Party RTSP Support</li>\n<li>Built-in PoE with 12V/1A Power Support</li>\n</ul>\n<h2>Use Cases</h2>\n<ul data-spread=\"false\">\n<li>Home Security</li>\n<li>Office Surveillance</li>\n<li>Retail Store Monitoring</li>\n<li>Warehouse Security</li>\n<li>Industrial Surveillance</li>\n<li>Parking Area Monitoring</li>\n<li>Building Entrance Security</li>\n<li>Commercial Property Protection</li>\n<li>Vehicle Monitoring</li>\n<li>Perimeter Surveillance</li>\n</ul>",
      "on_sale": false,
      "prices": {
        "price": "2199",
        "regular_price": "2199",
        "sale_price": "2199",
        "price_range": null,
        "currency_code": "INR",
        "currency_symbol": "₹",
        "currency_minor_unit": 0,
        "currency_decimal_separator": ".",
        "currency_thousand_separator": ",",
        "currency_prefix": "₹",
        "currency_suffix": ""
      },
      "price_html": "<span class=\"electro-price\"><span class=\"woocommerce-Price-amount amount\"><span class=\"woocommerce-Price-currencySymbol\">&#8377;</span>2,199</span></span>",
      "average_rating": "0",
      "review_count": 0,
      "images": [
        {
          "id": 12360,
          "src": "https://woston.in/wp-content/uploads/2026/08/consistent-bullet.jpg",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/consistent-bullet.jpg",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/consistent-bullet.jpg 300w, https://woston.in/wp-content/uploads/2026/08/consistent-bullet-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/consistent-bullet-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/consistent-bullet-50x50.jpg 50w",
          "sizes": "(max-width: 300px) 100vw, 300px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/consistent-bullet.jpg 300w, https://woston.in/wp-content/uploads/2026/08/consistent-bullet-150x150.jpg 150w, https://woston.in/wp-content/uploads/2026/08/consistent-bullet-100x100.jpg 100w, https://woston.in/wp-content/uploads/2026/08/consistent-bullet-50x50.jpg 50w",
          "thumbnail_sizes": "(max-width: 300px) 100vw, 300px",
          "name": "Consistent 4MP IP Bullet CT-CM-IBM4MP",
          "alt": "Consistent 4MP IP Bullet CT-CM-IBM4MP"
        },
        {
          "id": 12340,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2.png",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-350x350.png",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2.png 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-300x300.png 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-150x150.png 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-768x768.png 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-350x350.png 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-600x600.png 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-100x100.png 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-50x50.png 50w",
          "sizes": "(max-width: 1024px) 100vw, 1024px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-350x350.png 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-300x300.png 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-150x150.png 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-768x768.png 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-600x600.png 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-100x100.png 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2-50x50.png 50w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-2.png 1024w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4MP IP Bullet CT-CM-IBM4MP (2)",
          "alt": "Consistent 4MP IP Bullet CT-CM-IBM4MP (2)"
        },
        {
          "id": 12338,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4.png",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-350x350.png",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4.png 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-300x300.png 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-150x150.png 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-768x768.png 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-350x350.png 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-600x600.png 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-100x100.png 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-50x50.png 50w",
          "sizes": "(max-width: 1024px) 100vw, 1024px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-350x350.png 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-300x300.png 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-150x150.png 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-768x768.png 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-600x600.png 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-100x100.png 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4-50x50.png 50w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-4.png 1024w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4MP IP Bullet CT-CM-IBM4MP (4)",
          "alt": "Consistent 4MP IP Bullet CT-CM-IBM4MP (4)"
        },
        {
          "id": 12337,
          "src": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3.png",
          "thumbnail": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-350x350.png",
          "srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3.png 1024w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-300x300.png 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-150x150.png 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-768x768.png 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-350x350.png 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-600x600.png 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-100x100.png 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-50x50.png 50w",
          "sizes": "(max-width: 1024px) 100vw, 1024px",
          "thumbnail_srcset": "https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-350x350.png 350w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-300x300.png 300w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-150x150.png 150w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-768x768.png 768w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-600x600.png 600w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-100x100.png 100w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3-50x50.png 50w, https://woston.in/wp-content/uploads/2026/08/Consistent-4MP-IP-Bullet-CT-CM-IBM4MP-3.png 1024w",
          "thumbnail_sizes": "(max-width: 350px) 100vw, 350px",
          "name": "Consistent 4MP IP Bullet CT-CM-IBM4MP (3)",
          "alt": "Consistent 4MP IP Bullet CT-CM-IBM4MP (3)"
        }
      ],
      "categories": [
        {
          "id": 19,
          "name": "IP Camera",
          "slug": "ip",
          "link": "https://woston.in/product-category/cctv/ip/"
        },
        {
          "id": 1976,
          "name": "Bullet Camera",
          "slug": "bullet-camera",
          "link": "https://woston.in/product-category/cctv/bullet-camera/"
        },
        {
          "id": 16,
          "name": "CCTV Camera",
          "slug": "cctv",
          "link": "https://woston.in/product-category/cctv/"
        }
      ],
      "tags": [
        {
          "id": 2085,
          "name": "Consistant Surveillance",
          "slug": "consistant-surveillance",
          "link": "https://woston.in/product-tag/consistant-surveillance/"
        }
      ],
      "brands": [
        {
          "id": 2086,
          "name": "Consistant",
          "slug": "consistant",
          "link": "https://woston.in/brands/consistant/"
        }
      ],
      "attributes": [],
      "variations": [],
      "grouped_products": [],
      "has_options": false,
      "is_purchasable": true,
      "is_in_stock": true,
      "is_on_backorder": false,
      "low_stock_remaining": null,
      "stock_availability": {
        "text": "",
        "class": "in-stock"
      },
      "sold_individually": null,
      "weight": "0.2",
      "dimensions": {
        "length": "10",
        "width": "10",
        "height": "10"
      },
      "formatted_weight": "0.2 kg",
      "formatted_dimensions": "10 × 10 × 10 cm",
      "add_to_cart": {
        "text": "Add to cart",
        "description": "Add to cart: &ldquo;Consistent 4MP Night Hawk IP Bullet Camera with Mic PoE 4mm Lens CT-CM-IBM4MP&rdquo;",
        "url": "/wp-json/wc/store/v1/products?per_page=12&#038;page=1&#038;add-to-cart=12258",
        "single_text": "Add to cart",
        "minimum": 1,
        "maximum": 9999,
        "multiple_of": 1
      },
      "is_password_protected": false,
      "extensions": {},
      "_links": {
        "self": [
          {
            "href": "https://woston.in/wp-json/wc/store/v1/products/12258",
            "targetHints": {
              "allow": [
                "GET"
              ]
            }
          }
        ],
        "collection": [
          {
            "href": "https://woston.in/wp-json/wc/store/v1/products"
          }
        ],
        "related": [
          {
            "embeddable": true,
            "href": "https://woston.in/wp-json/wc/store/v1/products?related=12258&per_page=10"
          }
        ]
      }
    }]
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
      <Header wishlist={wishlist} toggleWishlist={toggleWishlist} accountDropdownOpen={accountDropdownOpen} setAccountDropdownOpen={setAccountDropdownOpen} dropdownSubView={dropdownSubView} setDropdownSubView={setDropdownSubView} setToastMessage={setToastMessage} setSelectedProductForQuickView={setSelectedProductForQuickView} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} inquiryList={inquiryList} accountRef={accountRef} mobileHamburgerRef={mobileHamburgerRef} mobileMenuRef={mobileMenuRef} />

      <SEOManager />
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
              <Hero heroSlideIndex={heroSlideIndex} setShowroomExperience={setShowroomExperience} setHeroSlideIndex={setHeroSlideIndex} setShowroomModalOpen={setShowroomModalOpen} />

              <Suspense fallback={<div className="min-h-[200px]" />}>
                <BrandCarousel />
              </Suspense>

              <Suspense fallback={<div className="min-h-[80vh]" />}>
                <ProductCategories loadedImages={loadedImages} setLoadedImages={setLoadedImages} />
              </Suspense>
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
              {/* 
              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <ScrollableTestimonials />
              </Suspense> */}

              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <OurThought />
              </Suspense>

              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <OurLocation contactData={contactData} setShowroomModalOpen={setShowroomModalOpen} setToastMessage={setToastMessage} />
              </Suspense>

              <Suspense fallback={<div className="min-h-[50vh]" />}>
                <FAQSection />
              </Suspense>
            </motion.div>} />

            <Route path="/about" Component={AboutUs} />
            <Route path="/termandcondition" Component={TermsAndConditions} />
            <Route path="/gallery" element={<Gallery galleryItems={GALLERY_ITEMS} />} />
            <Route path="/contact" element={<ContactUs setContactData={setContactData} setToastMessage={setToastMessage} />} />
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
        <Footer />
      </Suspense>
    </>
  )
}
export default App;
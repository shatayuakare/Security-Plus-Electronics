import { useEffect } from "react";
import { companytData } from "../utils/Constant";
import { useLocation } from "react-router-dom";

export const SEOManager = () => {

    const url = companytData.url;
    const pathname = useLocation().pathname;

    useEffect(() => {
        let title = "Security Plus Electronics - Central India's Biggest CCTV & Automation Mall";
        let description = "Central India's leading security system integrator. Premium 4K surveillance cameras, facial recognition biometrics, optical fiber backbone networks, and smart backup grids since 2005.";
        let keywords = "CCTV installation Nagpur, security systems Nagpur, biometric locks Nagpur, surveillance systems Maharashtra, best home security camera, SPE Nagpur";
        let canonical = `${url}${pathname}`;
        let schemaJson = null;
        switch (pathname) {
            case "/":
                title = "Security Plus Electronics - Nagpur's Landmark CCTV & Automation Mall";
                description = "Looking for the best CCTV installation in Nagpur? Security Plus Electronics is Central India's biggest physical showroom for premium 4K surveillance cameras, biometric access grids, and smart home automation. Get customized security blueprints since 2005.";
                keywords = "best CCTV installation Nagpur, security camera system Nagpur, home security systems Nagpur, smart home automation Nagpur, commercial surveillance systems, top security store Maharashtra";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": "Security Plus Electronics",
                    "url": `${url}`,
                    "description": description,
                    "potentialAction": {
                        "@type": "SearchAction",
                        "target": `${url}${pathname}`,
                    }
                };
                break;
            case "/products":
                title = "Buy Premium 4K CCTV Cameras & Biometric Locks | Security Plus Electronics";
                description = "Buy high-grade security cameras, biometric attendance devices, fingerprint door locks, and surveillance network switches in Nagpur. Official authorized distributor for Hikvision, CP Plus, and Dahua at competitive wholesale prices.";
                keywords = "buy CCTV cameras Nagpur, biometric attendance machine price, Hikvision distributor Nagpur, CP Plus cameras wholesale, electronic smart lock price, outdoor security camera Nagpur, NVR storage";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    "name": "Security Products & CCTV Catalog",
                    "url": `${url}${pathname}`,
                    "description": description,
                    "provider": {
                        "@type": "Organization",
                        "name": "Security Plus Electronics",
                        "url": `${url}`
                    }
                };
                break;
            case "/about":
                title = "About Us & 2-Hour SLA Onsite Support | Security Plus Electronics Nagpur";
                description = "Founded in 2005 in Nagpur, SPE is Central India's premier multi-brand security integrator. Learn about our state-of-the-art physical showroom, gold-partner certifications, and signature 2-hour onsite field SLA support guarantee.";
                keywords = "CCTV showroom Nagpur, Security Plus Electronics history, trusted security systems integrator, Nagpur surveillance company, Hikvision gold partner, Dahua distributor Maharashtra";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "AboutPage",
                    "name": "About Security Plus Electronics",
                    "url": `${url}${pathname}`,
                    "description": description,
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Security Plus Electronics",
                        "foundingDate": "2005",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": companytData.address.street,
                            "addressLocality": companytData.address.city,
                            "addressRegion": companytData.address.state,
                            "postalCode": companytData.address.pin,
                            "addressCountry": "India"
                        }
                    }
                };
                break;
            case "/career":
                title = "Careers & Free CCTV Installer Academy | Security Plus Electronics Nagpur";
                description = "Explore high-paying CCTV technician jobs and security system design vacancies in Nagpur. Join our 100% free practical training academy in camera networking, biometrics, and fiber routing.";
                keywords = "CCTV technician jobs Nagpur, security systems engineer vacancy, learn CCTV installation free, surveillance training academy Nagpur, smart home installer careers, fiber optical routing course";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Careers & Training Academy",
                    "url": `${url}${pathname}`,
                    "description": description
                };
                break;
            case "/blogs":
                title = "Security Tech Guides & CCTV System Isolation | SPE Security Academy";
                description = "Learn from Nagpur's top security engineers. Read in-depth technical guides on CCTV VLAN network isolation, high-performance NVR RAID configurations, and backup UPS sizing calculators.";
                keywords = "CCTV network security guide, NVR RAID configuration tutorial, surveillance VLAN setup, biometric database backup, how to install IP security camera, fiber ring network architecture";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "Blogs",
                    "name": "Safety Blog",
                    "url": `${url}${pathname}`,
                    "description": description
                };
                break;
            case "/contact":
                title = "Contact SPE support - WhatsApp, On-Call Hotline | CCTV Dealer Nagpur";
                description = `Connect with Nagpur's premium security system dealers. Reach our desk via WhatsApp Support ${companytData.supportPhone[0]}, Direct Call ${companytData?.supportPhone[1]}, or visit our flagship experience center in ${companytData.address.street}, ${companytData.address.city}, ${companytData.address.state} - ${companytData.address.pin}.`;
                keywords = "CCTV dealer Nagpur, cctv dealer address, cctv support number, cctv camera technician Nagpur, cctv Camera";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "ContactPage",
                    "name": "Contact Support",
                    "url": `${url}${pathname}`,
                    "description": description,
                    "mainEntity": {
                        "@type": "Organization",
                        "name": "Security Plus Electronics",
                        "contactPoint": [
                            {
                                "@type": "ContactPoint",
                                "telephone": "+91-9373456746",
                                "contactType": "customer support",
                                "contactOption": "HearingImpairedSupported",
                                "areaServed": "IN",
                                "availableLanguage": ["en", "hi"]
                            },
                            {
                                "@type": "ContactPoint",
                                "telephone": "9011964620",
                                "contactType": "sales",
                                "areaServed": "IN",
                                "availableLanguage": ["en", "hi"]
                            }
                        ]
                    }
                };
                break;
            case "/gallery":
                title = "SPE Flagship Security Showroom & Tech Gallery | Experience Center Nagpur";
                description = "Take a visual tour of Central India's biggest security and automation showroom on West High Court Road, Nagpur. Explore our live hardware testing lab, high-tech camera arrays, and team culture photos.";
                keywords = "CCTV showroom pictures Nagpur, experience center photos SPE, surveillance testing lab, security systems store gallery, Nagpur local camera shop images";
                schemaJson = {
                    "@context": "https://schema.org",
                    "@type": "ImageGallery",
                    "name": "SPE Flagship Showroom & Technical Gallery",
                    "url": `${url}${pathname}`,
                    "description": description
                };
                break;
            default:
                title = "Security Plus Electronics - Nagpur's Landmark CCTV & Automation Mall";
                description = "Looking for the best CCTV installation in Nagpur? Security Plus Electronics is Central India's biggest physical showroom for premium 4K surveillance cameras, biometric access grids, and smart home automation. Get customized security blueprints since 2005.";
                keywords = "best CCTV installation Nagpur, security camera system Nagpur, home security systems Nagpur, smart home automation Nagpur, commercial surveillance systems, top security store Maharashtra";
                break;
        }
        document.title = title;
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
            metaDesc = document.createElement("meta");
            metaDesc.setAttribute("name", "description");
            document.head.appendChild(metaDesc);
        }
        metaDesc.setAttribute("content", description);
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement("meta");
            metaKeywords.setAttribute("name", "keywords");
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.setAttribute("content", keywords);
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement("meta");
            ogTitle.setAttribute("property", "og:title");
            document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute("content", title);
        // 4. Dynamic OpenGraph Description Tag
        let ogDesc = document.querySelector('meta[property="og:description"]');
        if (!ogDesc) {
            ogDesc = document.createElement("meta");
            ogDesc.setAttribute("property", "og:description");
            document.head.appendChild(ogDesc);
        }
        ogDesc.setAttribute("content", description);
        let ogUrl = document.querySelector('meta[property="og:url"]');
        if (!ogUrl) {
            ogUrl = document.createElement("meta");
            ogUrl.setAttribute("property", "og:url");
            document.head.appendChild(ogUrl);
        }
        ogUrl.setAttribute("content", canonical);
        let ogType = document.querySelector('meta[property="og:type"]');
        if (!ogType) {
            ogType = document.createElement("meta");
            ogType.setAttribute("property", "og:type");
            document.head.appendChild(ogType);
        }
        ogType.setAttribute("content", "website");
        let linkCanonical = document.querySelector('link[rel="canonical"]');
        if (!linkCanonical) {
            linkCanonical = document.createElement("link");
            linkCanonical.setAttribute("rel", "canonical");
            document.head.appendChild(linkCanonical);
        }
        linkCanonical.setAttribute("href", canonical);
        let scriptSchema = document.getElementById("dynamic-seo-schema");
        if (scriptSchema) {
            if (schemaJson) {
                scriptSchema.textContent = JSON.stringify(schemaJson, null, 2);
            }
            else {
                scriptSchema.remove();
            }
        }
        else if (schemaJson) {
            scriptSchema = document.createElement("script");
            scriptSchema.id = "dynamic-seo-schema";
            scriptSchema.type = "application/ld+json";
            scriptSchema.textContent = JSON.stringify(schemaJson, null, 2);
            document.head.appendChild(scriptSchema);
        }
    }, [pathname]);
};

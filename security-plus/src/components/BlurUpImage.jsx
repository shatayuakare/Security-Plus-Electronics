import React, { useState, useEffect } from "react";
export const getProductImageUrls = (imageKey) => {
    switch (imageKey) {
        case "cctv":
            return {
                high: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=30&q=10"
            };
        case "ptz":
            return {
                high: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1522273400909-fd1a8f77637e?auto=format&fit=crop&w=30&q=10"
            };
        case "locks":
            return {
                high: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=30&q=10"
            };
        case "storage":
            return {
                high: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&w=30&q=10"
            };
        case "router":
            return {
                high: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=30&q=10"
            };
        case "battery":
            return {
                high: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1620288627223-53302f4e8c74?auto=format&fit=crop&w=30&q=10"
            };
        default:
            return {
                high: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=600&q=80",
                low: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=30&q=10"
            };
    }
};
export const BlurUpImage = ({ src, placeholderSrc, alt, className = "w-full h-full object-cover", containerClassName = "relative overflow-hidden w-full h-full", }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
    useEffect(() => {
        // Reset state if src changes
        setIsLoaded(false);
        setCurrentSrc(placeholderSrc);
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setCurrentSrc(src);
            setIsLoaded(true);
        };
    }, [src, placeholderSrc]);
    return (<div className={`${containerClassName}`} id={`blur-up-container-${src.slice(-10)}`}>
      {/* Blurred Placeholder */}
      <img src={placeholderSrc} alt={alt} className={`${className} transition-opacity duration-500 absolute inset-0 filter blur-md scale-105`} style={{
            opacity: isLoaded ? 0 : 1,
            pointerEvents: "none",
        }} id={`blur-up-placeholder-${src.slice(-10)}`} referrerPolicy="no-referrer"/>

      {/* Full-res Image */}
      <img src={currentSrc} alt={alt} className={`${className} transition-all duration-700 ease-out ${isLoaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-[2px] scale-[1.02]"}`} id={`blur-up-full-${src.slice(-10)}`} referrerPolicy="no-referrer"/>
    </div>);
};

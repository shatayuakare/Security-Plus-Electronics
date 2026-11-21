import { memo, useEffect, useState } from "react";
import axios from "axios";


const BrandCard = memo(({ brand }) => {
  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200/80 px-2 py-2 rounded-xl shadow-sm hover:border-sky-400 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 shrink-0 select-none group cursor-pointer">
      <div className="h-10 w-10 shadow rounded-lg overflow-hidden group-hover:bg-sky-50 transition-all duration-300">
        <img
          className="h-full w-full rounded-lg p-1 object-contain"
          src={`${brand?.image?.thumbnail}`}
          alt={`${brand?.image?.alt} logo`}
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
          fetchPriority="high"
        />
      </div>

      <div className="flex flex-col text-left">
        <h3 className="font-sans font-bold text-sm text-slate-800 tracking-wide group-hover:text-primary transition-colors duration-200">
          {brand?.name}
        </h3>
      </div>
    </div>
  );
})


const BrandCarousel = () => {
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

  useEffect(() => {
    const fetchBrands = async () => {
      await axios("https://woston.in/wp-json/wc/store/v1/products/brands/").then(res => setBrands(res.data)).catch(e => console.error(e))
    }
    fetchBrands()
  }, [brands])


  return (
    <section className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-end">
        <div>

          <span className="font-sans font-extrabold text-[9px] text-primary-hover tracking-widest uppercase block mb-1">
            CERTIFIED ELITE PARTNERS
          </span>

          <h2 className="font-sans text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider">
            Premium Brands We Integrate & Maintainx
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-2 bg-slate-50/50">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="animate-marquee animate-marquee-hover-pause flex items-center gap-6">
          {brands.map((brand) => (
            <BrandCard
              key={brand.name}
              brand={brand}
            />
          ))}
          {/* {scrollingBrands.map((brand, index) => (
            <BrandCard
              key={`${brand.name} -${index} `}
              brand={brand} 
            />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default memo(BrandCarousel);

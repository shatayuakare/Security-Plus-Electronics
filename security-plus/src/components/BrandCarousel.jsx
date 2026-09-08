import { memo, useMemo } from "react";
import brands from "../json/brands.json";

const getBrandImage = (icon) =>
  new URL(`../assets/brands/${icon}`, import.meta.url).href;

const BrandCard = memo(({ brand }) => {
  const imageSrc = useMemo(
    () => getBrandImage(brand.icon),
    [brand.icon]
  );

  return (
    <div className="flex items-center gap-3 bg-white border border-slate-200/80 px-2 py-2 rounded-xl shadow-sm hover:border-sky-400 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 shrink-0 select-none group cursor-pointer">
      <div className="h-10 w-10 shadow rounded-lg overflow-hidden group-hover:bg-sky-50 transition-all duration-300">
        <img
          className="h-full w-full rounded-lg p-1 object-contain"
          src={imageSrc}
          alt={`${brand.name} logo`}
          width="40"
          height="40"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      <div className="flex flex-col text-left">
        <span className="font-sans font-bold text-sm text-slate-800 tracking-wide group-hover:text-primary transition-colors duration-200">
          {brand.name}
        </span>

        <span className="font-mono text-xs text-slate-400 tracking-tight">
          {brand.category}
        </span>
      </div>
    </div>
  );
});

BrandCard.displayName = "BrandCard";

const BrandCarousel = () => {
  const scrollingBrands = useMemo(
    () => [...brands, ...brands],
    []
  );

  return (
    <section className="w-full py-10 bg-white border-y border-slate-100 overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto px-6 mb-4 flex justify-between items-end">
        <div>
          <span className="font-sans font-extrabold text-[9px] text-primary tracking-widest uppercase block mb-1">
            CERTIFIED ELITE PARTNERS
          </span>

          <h3 className="font-sans text-xs md:text-sm font-bold text-slate-800 uppercase tracking-wider">
            Premium Brands We Integrate & Maintain
          </h3>
        </div>
      </div>

      <div className="relative w-full overflow-hidden flex items-center py-2 bg-slate-50/50">
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />

        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee animate-marquee-hover-pause flex items-center gap-6">
          {scrollingBrands.map((brand, index) => (
            <BrandCard
              key={`${brand.name} -${index} `}
              brand={brand}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(BrandCarousel);

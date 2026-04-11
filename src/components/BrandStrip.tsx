const brands = ["NAFDAC APPROVED", "ISO CERTIFIED", "WHO STANDARD", "100% RECYCLABLE", "RO TECHNOLOGY", "MINERAL BALANCED"];

const BrandStrip = () => {
  return (
    <div className="bg-background py-8 px-6 md:px-[60px] overflow-hidden">
      <div className="flex items-center gap-10 md:gap-[60px] animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((brand, i) => (
          <span key={i} className="flex items-center gap-10 md:gap-[60px]">
            <span className="text-xs font-semibold text-foreground/35 tracking-[2px]">
              {brand}
            </span>
            {i < brands.length * 2 - 1 && (
              <span className="w-1 h-1 bg-foreground/20 rounded-full flex-shrink-0" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default BrandStrip;

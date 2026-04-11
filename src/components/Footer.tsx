import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,20%,8%)] text-[hsl(0,0%,95%)] pt-20 px-6 md:px-[60px] pb-10">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 md:gap-[60px] mb-16">
        <div>
          <img src={logo} alt="Hydrowells" className="h-[50px] w-auto object-contain brightness-0 invert mb-4" />
          <p className="text-sm text-white/40 leading-relaxed max-w-[280px]">
            premium water for premium people. every drop purified, every bottle recycled.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold text-white/35 tracking-[2px] mb-5 uppercase">Company</h4>
          <ul className="space-y-2.5">
            <li><a href="#about" className="text-sm text-white/55 hover:text-white transition-colors">About Us</a></li>
            <li><a href="#products" className="text-sm text-white/55 hover:text-white transition-colors">Products</a></li>
            <li><a href="#process" className="text-sm text-white/55 hover:text-white transition-colors">Process</a></li>
            <li><a href="#reviews" className="text-sm text-white/55 hover:text-white transition-colors">Reviews</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold text-white/35 tracking-[2px] mb-5 uppercase">Support</h4>
          <ul className="space-y-2.5">
            <li><a href="#contact" className="text-sm text-white/55 hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="text-sm text-white/55 hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="text-sm text-white/55 hover:text-white transition-colors">Delivery Info</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] font-semibold text-white/35 tracking-[2px] mb-5 uppercase">Legal</h4>
          <ul className="space-y-2.5">
            <li><a href="#" className="text-sm text-white/55 hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-sm text-white/55 hover:text-white transition-colors">Terms of Service</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-8 flex justify-between items-center">
        <p className="text-[13px] text-white/25">
          © 2026 HYDROWELLS® All rights reserved.
        </p>
        <p className="text-white/25 text-[13px]">Nigeria's Premium Water</p>
      </div>

      <div className="mt-8 overflow-hidden">
        <h2 className="text-[clamp(60px,12vw,180px)] font-extrabold text-white/[0.05] tracking-[-4px] lowercase leading-none select-none">
          hydrowells
        </h2>
      </div>
    </footer>
  );
};

export default Footer;

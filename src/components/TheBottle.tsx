import { motion } from "framer-motion";
import { FadeInScope } from "./FadeInScope";
import heroBottle from "@/assets/hero-bottle.png";

const TheBottle = ({ hideBottle = false }: { hideBottle?: boolean }) => {
  return (
    <section id="the-bottle" className="min-h-screen relative flex items-center bg-[#f8fafc] py-32 overflow-hidden">
      {/* The Section Glow */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,91,237,0.15)] z-0" />
      
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-10 items-center px-6 md:px-[60px] relative z-10 w-full">
        <FadeInScope delay={1.5}>
          <span className="text-primary text-[13px] font-bold tracking-[0.2em] block mb-6">
            the bottle.
          </span>
          <h2 className="text-[clamp(44px,6vw,84px)] font-extrabold text-foreground leading-[1.0] tracking-[-2px] mb-8 max-w-2xl">
            designed to move with you.
          </h2>
          <p className="text-[18px] text-muted-foreground leading-relaxed max-w-md">
            the diamond cut texture isn't just beautiful it's engineered for grip.
          </p>
        </FadeInScope>
        
        {!hideBottle && (
          <FadeInScope delay={0.4} className="flex justify-center md:justify-end items-center">
            <motion.img 
              src={heroBottle}
              alt="Hydrowells Bottle" 
              className="w-full max-w-[340px] md:max-w-[440px] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,91,237,0.2)]"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </FadeInScope>
        )}
      </div>
    </section>
  );
};

export default TheBottle;

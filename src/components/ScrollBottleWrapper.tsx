import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.png";

export const ScrollBottleWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Track scroll over the entire container (Hero + TheBottle)
  const { scrollYProgress: rawScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add physics-based smoothing (Spring) to the scroll input
  const scrollYProgress = useSpring(rawScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate 3D-like float transforms
  // Optimized for 2 sections: Hero (0-0.5) and TheBottle (0.5-1.0)
  // Reaches final size early in Hero (0.35) and stays consistent through arrival and plateau (0.5-1.0)
  // Reversed tilt: now tilts left (-12, -25) during move, then straightens at 0.5
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [1.7, 2.1, 2.1, 2.1]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [0, -12, 0, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [0, -25, 0, 0]);
  
  // Vertical position: parks at 0 on desktop, but +50 on mobile for better centering
  const yDesktop = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [35, -15, 0, 0]);
  const yMobile = useTransform(scrollYProgress, [0, 0.35, 0.5, 1], [35, -15, 50, 50]);
  const yFloat = isMobile ? yMobile : yDesktop;
  
  // Opacity: Always visible throughout Hero and TheBottle (no mobile fade-out)
  const opacity = 1;

  return (
    <div ref={containerRef} className="relative">
      <div className="sticky top-0 h-screen w-full flex items-center px-6 md:px-[60px] pointer-events-none z-50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-[1.5fr,1fr] md:grid-cols-2 gap-4 md:gap-10 items-center w-full h-full">
          <div className="block"></div>
          <div className="flex justify-center md:justify-end items-center relative">
            <motion.div 
              className="w-full max-w-[280px] md:max-w-[265px] flex justify-center origin-center"
              style={{ 
                scale,
                rotateZ,
                rotateY,
                y: yFloat,
                opacity,
                willChange: "transform",
              }}
            >
              <motion.img 
                src={heroBottle}
                alt="Hydrowells Floating Bottle"
                className="w-full h-auto max-h-[85vh] md:max-h-[75vh] object-contain drop-shadow-[0_40px_80px_rgba(0,91,237,0.3)] will-change-transform"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className="-mt-[100vh]">
        {children}
      </div>
    </div>
  );
};

export default ScrollBottleWrapper;

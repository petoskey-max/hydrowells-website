import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.png";

export const ScrollBottleWrapper = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll over the entire container (Hero + TheBottle)
  const { scrollYProgress: rawScroll } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add physics-based smoothing (Spring) to the scroll input
  // This removes "jitters" from mouse wheels and makes it feel like Three.js
  const scrollYProgress = useSpring(rawScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Calculate 3D-like float transforms
  // As it scrolls between sections, it pops out, rotates, and stabilizes
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.3, 1.45, 1.3]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], [0, 12, 0]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, 0]);
  const yFloat = useTransform(scrollYProgress, [0, 0.5, 1], [35, -100, -20]);

  return (
    <div ref={containerRef} className="relative">
      <div className="absolute inset-0 pointer-events-none z-50">
        <div className="sticky top-0 h-screen w-full flex items-center px-6 md:px-[60px]">
          <div className="max-w-[1400px] mx-auto grid grid-cols-[1.2fr,0.8fr] md:grid-cols-2 gap-4 md:gap-10 items-center w-full h-full">
            <div className="block"></div>
            <div className="flex justify-end items-center relative">
              <motion.div 
                className="w-full max-w-[280px] md:max-w-[500px] flex justify-center origin-center"
                style={{ 
                  scale,
                  rotateZ,
                  rotateY,
                  y: yFloat
                }}
              >
                <motion.img 
                  src={heroBottle}
                  alt="Hydrowells Floating Bottle"
                  className="w-full h-auto max-h-[65vh] md:max-h-[80vh] object-contain drop-shadow-[0_40px_80px_rgba(0,91,237,0.3)] will-change-transform"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      {/* The actual page sections (Hero and TheBottle) will render underneath */}
      {children}
    </div>
  );
};

export default ScrollBottleWrapper;

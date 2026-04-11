import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxBackgroundProps {
  src: string;
  alt: string;
  className?: string;
  intensity?: number;
}

export const ParallaxBackground = ({ 
  src, 
  alt, 
  className = "", 
  intensity = 100 
}: ParallaxBackgroundProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-intensity, intensity]);

  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
      />
    </div>
  );
};

export default ParallaxBackground;

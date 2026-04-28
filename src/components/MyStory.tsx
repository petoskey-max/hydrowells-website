import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import heroBottle from "@/assets/hero-bottle.png";

const MyStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Spring-smoothed values for floating effect
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [50, -50]), { stiffness: 100, damping: 30 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [-30, 30]), { stiffness: 100, damping: 30 });
  const rotate1 = useSpring(useTransform(scrollYProgress, [0, 1], [-2, 2]), { stiffness: 100, damping: 30 });
  const rotate2 = useSpring(useTransform(scrollYProgress, [0, 1], [2, -2]), { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} id="about" className="relative py-24 md:py-32 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-16 md:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold text-primary tracking-[3px] uppercase mb-4"
          >
            the narrative
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(40px,7vw,80px)] font-black leading-[0.9] tracking-[-3px] text-foreground text-center lowercase"
          >
            my story.
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[600px]">
          
          {/* Card 1: Brand Narrative */}
          <motion.div 
            style={{ y: y1, rotate: rotate1 }}
            className="relative z-20"
          >
            <div className="bg-card/40 backdrop-blur-3xl border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-black mb-8 leading-tight text-foreground lowercase">
                  my name is hydrowells and i am a bottled water.
                </h3>
                
                <div className="space-y-6 text-muted-foreground leading-relaxed text-sm md:text-base">
                  <p>
                    i've gone through intense purification techniques, microfiltration, reverse osmosis, the works, just to be as clean, crisp, and safe as i am.
                  </p>
                  <p>
                    and you might ask, 'why all that trouble? it's just water.' simple answer: just for you. oh, i don't love you or anything (well, maybe i do), but most of all, i never want to make you sick.
                  </p>
                  <p className="font-medium text-foreground italic">
                    i went through all that so i can give you more vigour with every drop and make you feel alive with every drink.
                  </p>
                </div>
              </div>

              {/* Decorative bottle shadow/silhouette */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </motion.div>

          {/* Card 2: Proposed Experience */}
          <motion.div 
            style={{ y: y2, rotate: rotate2 }}
            className="relative z-10 lg:-mt-12"
          >
            <div className="bg-[#005BED]/5 backdrop-blur-3xl border border-primary/20 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tl from-primary/10 to-transparent opacity-30" />
              
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-10 tracking-tight text-foreground lowercase">
                  your proposed experience.
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {[
                    { step: "buy a bottle", desc: "the first step to your journey of pure mineral balanced hydration." },
                    { step: "twist the cap", desc: "releasing the seal of purity prepared with intense microfiltration." },
                    { step: "sip, drink or gulp", desc: "experience the clean, crisp taste crafted just for you." },
                    { step: "feel refresh", desc: "let the vigour of every drop make you feel alive and vibrant." }
                  ].map((item, idx) => (
                    <div key={idx} className="space-y-2">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-[2px]">0{idx + 1}.</span>
                      <h4 className="font-bold text-foreground lowercase">{item.step}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed italic">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 pt-8 border-t border-white/5">
                  <p className="text-sm font-bold text-primary lowercase tracking-tight mb-2">repeat the process.</p>
                  <p className="text-xs text-muted-foreground/60 italic">not a prophet of doom, but you will definitely feel thirsty again.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Floating background image interaction */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-0 hidden lg:block opacity-20">
             <motion.img 
                src={heroBottle}
                alt=""
                style={{ y: useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), { stiffness: 50, damping: 20 }) }}
                className="w-[400px] mx-auto filter blur-[2px]"
             />
          </div>

        </div>
      </div>
    </section>
  );
};

export default MyStory;

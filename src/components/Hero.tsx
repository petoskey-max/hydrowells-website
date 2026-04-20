import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.png";
import { FadeInScope } from "./FadeInScope";

const Hero = ({ hideBottle = false }: { hideBottle?: boolean }) => {
  return (
    <section id="hero" className="min-h-screen bg-background relative overflow-hidden flex items-center pt-28 pb-20">
      {/* Decorative circles */}
      <div className="absolute -right-[150px] -top-[150px] w-[700px] h-[700px] rounded-full bg-primary/[0.04] pointer-events-none" />
      <div className="absolute -left-[100px] -bottom-[100px] w-[500px] h-[500px] rounded-full bg-primary/[0.04] pointer-events-none z-0" />

      <div className="max-w-[1400px] mx-auto grid grid-cols-[1.5fr,1fr] md:grid-cols-2 gap-4 md:gap-10 items-center px-6 md:px-[60px] w-full z-10 relative">
        <FadeInScope delay={0.2} className="z-10">
        <p className="text-xs font-semibold text-muted-foreground tracking-[2px] lowercase mb-6">
          premium hydration
        </p>
        <h1 className="text-[clamp(32px,6.5vw,96px)] font-extrabold text-foreground leading-[1.0] tracking-[-2px] mb-7">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            }}
          >
            {"water".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, display: "none" },
                  visible: { opacity: 1, display: "inline-block" },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
          <br />
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 1.1, // Start after "water"
                },
              },
            }}
          >
            {"reimagined.".split("").map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0, display: "none" },
                  visible: { opacity: 1, display: "inline-block" },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-[460px]">
          i deliver ultra-pure, mineral balanced water through cutting edge filtration. bottled at the source, i am crafted for those who demand more from every drop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#products"
            className="bg-primary text-primary-foreground px-6 py-4 rounded-full text-[15px] font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all whitespace-nowrap w-fit"
          >
            explore products
          </a>
          <a
            href="#about"
            className="border border-border text-foreground px-6 py-4 rounded-full text-[15px] font-medium hover:border-primary transition-colors whitespace-nowrap w-fit"
          >
            our story
          </a>
        </div>
      </FadeInScope>

        {!hideBottle && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 60 }}
            className="z-10 flex justify-center items-end"
          >
            <motion.img
              src={heroBottle}
              alt="Hydrowells premium water bottle"
              className="w-full max-w-[380px] h-auto object-contain drop-shadow-[0_30px_60px_rgba(0,91,237,0.18)]"
              width={512}
              height={768}
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;

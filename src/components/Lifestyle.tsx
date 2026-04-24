import { motion } from "framer-motion";
import lifestyleImg from "@/assets/lifestyle.jpg";
import ParallaxBackground from "./ParallaxBackground";

const Lifestyle = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] overflow-hidden">
      <div className="overflow-hidden relative group h-[400px] md:h-full">
        <ParallaxBackground
          src={lifestyleImg}
          alt="Natural spring water source"
          intensity={80}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-primary p-12 md:p-[70px] flex flex-col justify-center"
      >
        <p className="text-xs font-semibold text-primary-foreground/60 tracking-[2px] lowercase mb-4">
          sourced with care
        </p>
        <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-primary-foreground">
          from borewells
          <br />
          to your table.
        </h2>
        <p className="text-[17px] text-primary-foreground/75 leading-relaxed mb-11 max-w-[520px]">
          my journey begins deep within pristine borewells. carefully extracted and meticulously purified, i preserve my natural freshness all the way to your glass.
        </p>
        <a
          href="#process"
          className="bg-background text-foreground px-9 py-4 rounded-full text-[15px] font-bold w-fit hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          see our process
        </a>
      </motion.div>
    </section>
  );
};

export default Lifestyle;

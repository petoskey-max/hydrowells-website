import { motion } from "framer-motion";
import ctaBg from "@/assets/cta-bg.jpg";

const CTA = () => {
  return (
    <section
      className="relative text-center py-32 px-6 md:px-[60px] overflow-hidden"
      id="shop"
      style={{
        backgroundImage: `url(${ctaBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay: black to primary blue */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#000000]/80 via-[#000000]/60 to-[#005bed]/70" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <p className="text-xs font-semibold text-white/60 tracking-[2px] lowercase mb-4">
          get started
        </p>
        <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-white max-w-[700px] mx-auto">
          water that moooooves
          <br />
          like you do.
        </h2>
        <p className="text-[17px] text-white/70 leading-relaxed max-w-[520px] mx-auto mb-12">
          premium water delivered to your door. clean, safe and refreshingly innovative.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#products"
            className="bg-primary text-primary-foreground px-9 py-4 rounded-full text-[15px] font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            shop now
          </a>
          <a
            href="#contact"
            className="border border-white/30 text-white px-9 py-4 rounded-full text-[15px] font-medium hover:border-white transition-colors"
          >
            contact us
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;

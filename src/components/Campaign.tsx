import { motion } from "framer-motion";
import campaignImg from "@/assets/campaign.jpg";

const Campaign = () => {
  return (
    <section className="relative min-h-[520px] flex items-center overflow-hidden bg-gradient-to-br from-[#000000] to-[#005bed]">
      <div className="absolute inset-0 z-0">
        <img
          src={campaignImg}
          alt="Water filtration facility"
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
          loading="lazy"
          width={1920}
          height={768}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 p-12 md:p-20 max-w-[700px]"
      >
        <h2 className="text-[clamp(48px,6vw,88px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-white">
          purity you
          <br />
          can trust.
        </h2>
        <p className="text-[17px] text-primary-foreground/80 leading-relaxed mb-11 max-w-[520px]">
          nafdac approved. iso certified. every drop meets the highest international safety and quality standards.
        </p>
        <a
          href="#about"
          className="bg-background text-foreground px-9 py-4 rounded-full text-[15px] font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all"
        >
          Learn More
        </a>
      </motion.div>
    </section>
  );
};

export default Campaign;

import { motion } from "framer-motion";
import { FadeInScope } from "./FadeInScope";

const steps = [
  { num: "01", title: "source", desc: "water drawn from deep, protected underground aquifers." },
  { num: "02", title: "purify", desc: "3 stage reverse osmosis and uv treatment for absolute purity." },
  { num: "03", title: "enrich", desc: "minerals added back for optimal taste and health benefits." },
  { num: "04", title: "bottle", desc: "sealed in eco friendly, bpa free bottles for freshness." },
];

const Process = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-background" id="process">
      <FadeInScope className="text-center max-w-[600px] mx-auto mb-20">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4"
        >
          our process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-foreground"
        >
          from the source
          <br />
          to your door.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[17px] text-muted-foreground leading-relaxed mx-auto"
        >
          four precise steps that guarantee every bottle meets the hydrowells standard.
        </motion.p>
      </FadeInScope>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-0 relative">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="hidden md:block absolute top-8 left-[12%] right-[12%] h-px bg-border z-0 origin-left"
        />
        {steps.map((s, i) => (
          <FadeInScope
            key={i}
            delay={0.2 + i * 0.15}
            className="text-center px-5 relative z-10"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15, type: "spring", stiffness: 200, damping: 15 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-extrabold mx-auto mb-6 shadow-[0_8px_24px_rgba(0,91,237,0.3)]"
            >
              {s.num}
            </motion.div>
            <h3 className="text-base font-bold mb-2.5 text-foreground">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </FadeInScope>
        ))}
      </div>
    </section>
  );
};

export default Process;

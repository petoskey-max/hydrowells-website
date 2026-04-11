import { motion } from "framer-motion";

const values = [
  { icon: "💧", title: "Pure Source", desc: "Sourced from deep aquifers, naturally protected from surface contaminants." },
  { icon: "⚡", title: "3x Filtered", desc: "Triple-stage reverse osmosis for the cleanest water you can drink." },
  { icon: "🧊", title: "Mineral Rich", desc: "Enhanced with essential minerals for the perfect taste and health balance." },
  { icon: "♻️", title: "Eco-Friendly", desc: "100% recyclable bottles and carbon-neutral production process." },
  { icon: "🚚", title: "Fast Delivery", desc: "Delivered fresh to your doorstep — Lagos, Abuja and nationwide." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const Values = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-gradient-to-br from-[#000000] to-[#005bed] text-white" id="about">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4"
        >
          why hydrowells
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-white"
        >
          water that works
          <br />
          as hard as you.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-[17px] text-white/70 leading-relaxed max-w-[520px]"
        >
          every bottle is a promise — clean, pure and responsibly made. we go beyond industry standards so you can drink with confidence.
        </motion.p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-5 mt-14 border border-white/20 rounded-3xl overflow-hidden"
      >
        {values.map((v, i) => (
          <motion.div
            key={i}
            variants={cardVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="group p-8 md:p-7 border-r border-white/10 last:border-r-0 hover:bg-white/10 transition-colors duration-300 cursor-default"
          >
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
              className="w-12 h-12 bg-white/10 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 text-xl transition-colors"
            >
              {v.icon}
            </motion.div>
            <h3 className="text-[15px] font-bold mb-2.5 text-white transition-colors">
              {v.title}
            </h3>
            <p className="text-[13px] text-white/60 group-hover:text-white/80 leading-relaxed transition-colors">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Values;

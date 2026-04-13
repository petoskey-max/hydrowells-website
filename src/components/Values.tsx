import { motion } from "framer-motion";

import { 
  Drop, 
  ShieldCheck, 
  SealCheck, 
  Handshake, 
  Lightning 
} from "@phosphor-icons/react";

const values = [
  { icon: <Drop size={28} weight="duotone" />, title: "cleanliness", desc: "committed to the highest standards of hygiene." },
  { icon: <ShieldCheck size={28} weight="duotone" />, title: "safety", desc: "ensuring water that is safe and trustworthy." },
  { icon: <SealCheck size={28} weight="duotone" />, title: "integrity", desc: "transparency in every process, from production to delivery." },
  { icon: <Handshake size={28} weight="duotone" />, title: "commitment", desc: "dedicated to improving lives through access to quality water." },
  { icon: <Lightning size={28} weight="duotone" />, title: "vitality", desc: "supporting life and energy in every sip." },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, rotateX: 25, z: -100, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    z: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const Values = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-gradient-to-br from-[#000000] to-[#005bed] text-white [perspective:2000px] overflow-hidden" id="about">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[1.8fr,1fr] xl:grid-cols-[2.2fr,1fr] gap-20 items-start">
        {/* Left column: Content */}
        <div className="relative z-10">
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
              our values
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-white"
            >
              why
              <br />
              hydrowells
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-[17px] text-white/70 leading-relaxed max-w-[520px]"
            >
              every bottle is clean, pure and responsibly made. we go beyond industry standards so you can drink with confidence.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
          >
            {values.map((v, i) => (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-primary/40 transition-all duration-300 cursor-default shadow-lg shadow-black/20"
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.4 } }}
                    className="w-14 h-14 flex-shrink-0 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-2xl flex items-center justify-center transition-all duration-300 shadow-inner"
                  >
                    {v.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 text-white transition-colors">
                      {v.title}
                    </h3>
                    <p className="text-sm text-white/50 group-hover:text-white/80 leading-relaxed transition-colors">
                      {v.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Right column: Empty space for the scrolling bottle */}
        <div className="hidden md:block h-full pointer-events-none" />
      </div>
    </section>
  );
};

export default Values;

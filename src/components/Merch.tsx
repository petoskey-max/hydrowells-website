import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

const merch = [
  {
    name: "Hydrowells Cap",
    price: "₦5,500",
    desc: "Premium cotton cap with embroidered logo. Adjustable fit.",
    emoji: "🧢",
  },
  {
    name: "Hydrowells Tote",
    price: "₦4,000",
    desc: "Eco-friendly canvas tote — carry your bottles in style.",
    emoji: "👜",
  },
  {
    name: "Hydrowells Hoodie",
    price: "₦18,000",
    desc: "Premium heavyweight hoodie with minimalist branding.",
    emoji: "🧥",
  },
  {
    name: "Hydrowells Tumbler",
    price: "₦12,000",
    desc: "Insulated stainless steel tumbler — keeps water cold for 24hrs.",
    emoji: "🥤",
  },
];

const Merch = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-gradient-to-br from-[#000000] to-[#005bed]" id="merch">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-semibold text-white/50 tracking-[2px] lowercase mb-4">
          merch
        </p>
        <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-white">
          wear the
          <br />
          movement.
        </h2>
        <p className="text-[17px] text-white/60 leading-relaxed max-w-[520px] mt-5">
          rep hydrowells beyond the bottle. limited-edition apparel and accessories for those who live the lifestyle.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
        {merch.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-7 hover:border-white/30 transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
              {m.emoji}
            </div>
            <h3 className="text-base font-bold text-white mb-1">{m.name}</h3>
            <p className="text-xs text-white/50 leading-relaxed mb-4">{m.desc}</p>
            <div className="flex items-center justify-between">
              <span className="text-lg font-extrabold text-primary">{m.price}</span>
              <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground text-white/50 transition-all duration-300">
                <ShoppingBag className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Merch;

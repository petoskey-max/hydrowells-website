import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.png";

const moments = [
  { label: "Weddings", icon: "💍" },
  { label: "Celebrations", icon: "🥂" },
  { label: "Corporate", icon: "🏢" },
  { label: "Wellness", icon: "🧘" },
];

const PreciousMoments = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-[60px] overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto">
        {/* Visual side with orbiting text */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center min-h-[450px]"
        >
          {/* Orbiting "hydrowells" text ring */}
          <div className="absolute w-[340px] h-[340px] md:w-[420px] md:h-[420px] animate-[spin_15s_linear_infinite]">
            <svg viewBox="0 0 420 420" className="w-full h-full">
              <defs>
                <path
                  id="textCircle"
                  d="M 210,210 m -170,0 a 170,170 0 1,1 340,0 a 170,170 0 1,1 -340,0"
                />
              </defs>
              <text className="fill-primary/30 text-[22px] font-extrabold tracking-[12px] lowercase">
                <textPath href="#textCircle" startOffset="0%">
                  hydrowells • hydrowells • hydrowells • hydrowells •
                </textPath>
              </text>
            </svg>
          </div>

          {/* Inner decorative ring */}
          <div className="absolute w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-full border border-primary/10" />

          {/* Glow */}
          <div className="absolute w-[200px] h-[200px] md:w-[280px] md:h-[280px] rounded-full bg-gradient-to-br from-primary/10 to-primary/5 blur-2xl" />

          {/* Bottle */}
          <motion.img
            src={heroBottle}
            alt="Hydrowells premium water"
            className="relative z-10 w-[160px] md:w-[220px] h-auto drop-shadow-[0_20px_50px_rgba(0,91,237,0.2)]"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold text-primary tracking-[3px] uppercase mb-4">
            crafted for elegance
          </p>
          <h2 className="text-[clamp(36px,4.5vw,68px)] font-extrabold text-foreground leading-[1.05] tracking-[-2px] mb-6">
            water for the
            <br />
            <span className="text-primary">very precious</span>
            <br />
            moments.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed mb-10 max-w-[480px]">
            from intimate gatherings to grand celebrations, hydrowells elevates every occasion with water that's as refined as the moment itself.
          </p>

          {/* Moment tags */}
          <div className="flex flex-wrap gap-3 mb-10">
            {moments.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2 bg-card border border-border rounded-full px-5 py-2.5 text-sm font-medium text-foreground hover:border-primary/40 hover:shadow-md transition-all cursor-default"
              >
                <span className="text-lg">{m.icon}</span>
                {m.label}
              </motion.div>
            ))}
          </div>

          <a
            href="#products"
            className="inline-block bg-primary text-primary-foreground px-9 py-4 rounded-full text-[15px] font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            Discover Our Range
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PreciousMoments;

import { motion } from "framer-motion";
import { FadeInScope } from "./FadeInScope";

const stats = [
  { num: "100%", label: "recyclable bottle material" },
  { num: "3x", label: "filtration stages before bottling" },
  { num: "0", label: "unnecessary additives or chemicals" },
  { num: "ro", label: "reverse osmosis technology" },
];

const cycle = [
  { icon: "♻️", label: "collect" },
  { icon: "🔄", label: "process" },
  { icon: "✅", label: "certify" },
  { icon: "🌿", label: "reduce" },
];

const Eco = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-secondary grid grid-cols-1 md:grid-cols-2 gap-20 items-center" id="recycling">
      <FadeInScope>
        <p className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4">
          recycling journey
        </p>
        <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-foreground">
          we are eco friendly
          <br />
          because we actually recycle.
        </h2>
        <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[520px]">
          not just because we use 100% recyclable material we go further. our recycling journey is a commitment to the earth and nigeria's future.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-11">
          {stats.map((s, i) => (
            <FadeInScope
              key={i}
              delay={i * 0.1}
              className="bg-background rounded-2xl p-7 border border-border"
            >
              <p className="text-[42px] font-extrabold text-primary tracking-[-2px] leading-none mb-1.5">
                {s.num}
              </p>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{s.label}</p>
            </FadeInScope>
          ))}
        </div>
      </FadeInScope>

      <FadeInScope>
        <div className="grid grid-cols-2 gap-4">
          {cycle.map((c, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl p-8 text-center border border-primary/20"
            >
              <div className="text-3xl mb-3">{c.icon}</div>
              <p className="text-sm font-bold text-primary">{c.label}</p>
            </div>
          ))}
        </div>
        <p className="text-[13px] text-muted-foreground mt-4 text-center leading-relaxed">
          our recycling journey from your hands back to the earth.
        </p>
      </FadeInScope>
    </section>
  );
};

export default Eco;

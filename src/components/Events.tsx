import { motion } from "framer-motion";
import { Calendar, Users, Star, Sparkles } from "lucide-react";

const events = [
  {
    title: "lagos water festival",
    date: "july 2026",
    desc: "join us at nigeria's largest hydration and wellness festival tastings, panels and more.",
    icon: <Sparkles className="w-6 h-6" />,
    tag: "upcoming",
  },
  {
    title: "corporate wellness day",
    date: "august 2026",
    desc: "partner with hydrowells to bring pure hydration to your team's wellness initiatives.",
    icon: <Users className="w-6 h-6" />,
    tag: "open for booking",
  },
  {
    title: "hydrowells run club",
    date: "every saturday",
    desc: "weekly community runs across lagos free hydrowells bottles for every finisher.",
    icon: <Calendar className="w-6 h-6" />,
    tag: "recurring",
  },
  {
    title: "premium tasting experience",
    date: "september 2026",
    desc: "an exclusive invite-only tasting where you experience the purity of every drop.",
    icon: <Star className="w-6 h-6" />,
    tag: "exclusive",
  },
];

const Events = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-background" id="events">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <p className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4">
          events
        </p>
        <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-foreground">
          where we
          <br />
          show up.
        </h2>
        <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[520px] mt-5">
          hydrowells is more than a bottle it's a movement. catch us at events, pop ups and experiences across nigeria.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {events.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="group relative bg-card border border-border rounded-3xl p-9 hover:border-primary/40 transition-all duration-300 overflow-hidden"
          >
            {/* Hover gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {e.icon}
                </div>
                <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full">
                  {e.tag}
                </span>
              </div>
              <p className="text-xs font-semibold text-primary tracking-wider lowercase mb-2">{e.date}</p>
              <h3 className="text-xl font-extrabold text-foreground tracking-[-0.5px] mb-3">{e.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{e.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;

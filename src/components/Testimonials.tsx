import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "hydrowells changed how I think about drinking water. it's cleaner, smoother and I can actually taste the difference.",
    name: "Adeola Johnson",
    role: "Fitness Coach, Lagos",
    initials: "AJ",
  },
  {
    quote: "we switched our entire office to hydrowells. the delivery is consistent and the team loves the taste. no complaints, only compliments.",
    name: "Emeka Obi",
    role: "CEO, TechSpace",
    initials: "EO",
  },
  {
    quote: "as a mum, water quality is non-negotiable. hydrowells gives me peace of mind knowing my family is drinking safe, clean water every day.",
    name: "Fatima Bello",
    role: "Mother of 3, Abuja",
    initials: "FB",
  },
];

const Star = () => (
  <div
    className="w-3.5 h-3.5 bg-primary"
    style={{
      clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
    }}
  />
);

const Testimonials = () => {
  return (
    <section className="bg-background py-24 px-6 md:px-[60px]" id="reviews">
      <div className="flex justify-between items-end mb-14 gap-6 flex-wrap">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-muted-foreground tracking-[2px] lowercase mb-4">
            testimonials
          </p>
          <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-foreground">
            what people like you
            <br />
            think about us.
          </h2>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card border border-border rounded-3xl p-9 hover:border-primary hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => <Star key={j} />)}
            </div>
            <p className="text-[15px] leading-relaxed text-muted-foreground mb-7">
              "{t.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-[42px] h-[42px] rounded-full bg-primary flex items-center justify-center text-[13px] font-bold text-primary-foreground flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from "framer-motion";
import { Handshake, Building2, Trophy, Globe } from "lucide-react";

const partners = [
  { name: "TechSpace", type: "Corporate Partner", icon: <Building2 className="w-5 h-5" /> },
  { name: "Fit Lagos", type: "Wellness Partner", icon: <Trophy className="w-5 h-5" /> },
  { name: "Green Nigeria", type: "Sustainability Partner", icon: <Globe className="w-5 h-5" /> },
  { name: "EventNG", type: "Events Partner", icon: <Handshake className="w-5 h-5" /> },
];

const pillars = [
  {
    title: "Brand Ambassadors",
    desc: "Join our community of ambassadors who embody the hydrowells lifestyle and spread the message of premium hydration.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    title: "Corporate Partnerships",
    desc: "We partner with forward-thinking companies to provide premium hydration solutions for their teams and events.",
    gradient: "from-primary/10 to-transparent",
  },
  {
    title: "Community Impact",
    desc: "Through strategic partnerships, we're bringing clean water access and recycling awareness to communities across Nigeria.",
    gradient: "from-primary/15 to-primary/5",
  },
];

const BrandPartners = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-secondary" id="partners">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start max-w-[1400px] mx-auto">
        {/* Left: Brand info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4">
            brand & partners
          </p>
          <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-foreground mb-5">
            building the
            <br />
            movement.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[480px] mb-12">
            hydrowells isn't just a water brand — it's a lifestyle. we collaborate with partners who share our vision of purity, quality and sustainability.
          </p>

          {/* Partner logos */}
          <div className="grid grid-cols-2 gap-3">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-background border border-border rounded-2xl p-5 flex items-center gap-3 hover:border-primary/30 transition-all cursor-default"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {p.icon}
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">{p.name}</p>
                  <p className="text-[11px] text-muted-foreground">{p.type}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right: Pillars */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-5"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ x: 4 }}
              className={`bg-gradient-to-r ${p.gradient} rounded-3xl p-8 border border-border hover:border-primary/20 transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.a
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full text-[15px] font-bold hover:shadow-xl transition-all mt-4"
          >
            <Handshake className="w-4 h-4" />
            Become a Partner
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandPartners;

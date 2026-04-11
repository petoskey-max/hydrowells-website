import { motion } from "framer-motion";
import heroBottle from "@/assets/hero-bottle.png";

const products = [
  {
    name: "Hydrowells 750ml",
    desc: "Our flagship bottle — crisp, clean and perfectly balanced for everyday hydration. The go-to choice for homes, offices and events.",
    tag: "Best Seller",
    volume: "750ml",
  },
  {
    name: "Hydrowells 500ml",
    desc: "The perfect on-the-go companion. Fits in your bag, your car, your gym kit — pure hydration wherever life takes you.",
    tag: "Popular",
    volume: "500ml",
  },
  {
    name: "Hydrowells 350ml",
    desc: "Compact and elegant. Perfect for meetings, events and intimate gatherings where every detail matters.",
    tag: "Compact",
    volume: "350ml",
  },
];

const Products = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-secondary" id="products">
      <div className="mb-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4">
            our products
          </p>
          <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-foreground">
            crafted for every
            <br />
            moment.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[520px] mt-5">
            from workout sessions to family dinners, hydrowells has a bottle for every occasion.
          </p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-card rounded-[28px] overflow-hidden border border-border hover:-translate-y-2.5 hover:shadow-2xl transition-all duration-300 group"
          >
            <div className="h-[340px] flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-primary/5 to-primary/10">
              <img
                src={heroBottle}
                alt={p.name}
                className="h-[280px] w-auto object-contain group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(0,91,237,0.15)]"
                loading="lazy"
              />
              <span className="absolute bottom-5 right-5 bg-foreground/10 backdrop-blur-lg border border-foreground/20 text-foreground text-[13px] font-bold px-4 py-2 rounded-full">
                {p.volume}
              </span>
            </div>
            <div className="p-7">
              <h3 className="text-[22px] font-extrabold tracking-[-0.5px] mb-2 text-foreground">
                {p.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.desc}
              </p>
              <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-4 py-1.5 rounded-full">
                {p.tag}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;

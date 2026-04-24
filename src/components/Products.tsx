import { motion } from "framer-motion";
import { FadeInScope } from "./FadeInScope";
import product750 from "@/assets/product-750ml.png";
import product500 from "@/assets/product-500ml.png";
import product350 from "@/assets/product-350ml.png";

const products = [
  {
    name: "hydrowells 750ml",
    desc: "our flagship bottle crisp, clean and perfectly balanced for everyday hydration. the go to choice for homes, offices and events.",
    tag: "best seller",
    volume: "750ml",
    image: product750,
  },
  {
    name: "hydrowells 500ml",
    desc: "the perfect on the go companion. fits in your bag, your car, your gym kit pure hydration wherever life takes you.",
    tag: "popular",
    volume: "500ml",
    image: product500,
  },
  {
    name: "hydrowells 350ml",
    desc: "compact and elegant. perfect for meetings, events and intimate gatherings where every detail matters.",
    tag: "compact",
    volume: "350ml",
    image: product350,
  },
];

const Products = () => {
  return (
    <section className="py-24 px-6 md:px-[60px] bg-secondary" id="products">
      <div className="mb-14">
        <FadeInScope>
          <p className="text-xs font-semibold text-primary tracking-[2px] lowercase mb-4">
            our products
          </p>
          <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] text-foreground">
            crafted for every
            <br />
            moment.
          </h2>
          <p className="text-[17px] text-muted-foreground leading-relaxed max-w-[520px] mt-5">
            from workout sessions to family dinners, i have a bottle for every occasion.
          </p>
        </FadeInScope>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 [perspective:1500px]">
        {products.map((p, i) => (
          <FadeInScope
            key={i}
            delay={i * 0.15}
            className="bg-card rounded-[28px] overflow-hidden border border-border hover:-translate-y-2.5 hover:shadow-2xl transition-all duration-300 group"
            initial={{ rotateX: 25, z: -100, opacity: 0 }}
            whileInView={{ rotateX: 0, z: 0, opacity: 1 }}
          >
            <div className="h-[340px] flex items-center justify-center overflow-hidden relative bg-gradient-to-br from-primary/5 to-primary/10">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_15px_30px_rgba(0,91,237,0.15)]"
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
          </FadeInScope>
        ))}
      </div>
    </section>
  );
};

export default Products;

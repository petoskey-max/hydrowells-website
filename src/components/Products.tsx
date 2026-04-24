import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import img750 from "@/assets/product-750ml.png";
import img500 from "@/assets/product-500ml.png";
import img350 from "@/assets/product-350ml.png";

const products = [
  {
    name: "hydrowells 750ml",
    desc: "our flagship bottle — crisp, clean and perfectly balanced for everyday hydration. the go-to choice for homes, offices and events.",
    tag: "best seller",
    volume: "750ml",
    image: img750,
  },
  {
    name: "hydrowells 500ml",
    desc: "the perfect on-the-go companion. fits in your bag, your car, your gym kit — pure hydration wherever life takes you.",
    tag: "popular",
    volume: "500ml",
    image: img350,
  },
  {
    name: "hydrowells 350ml",
    desc: "compact and elegant. perfect for meetings, events and intimate gatherings where every detail matters.",
    tag: "compact",
    volume: "350ml",
    image: img500,
  },
];

// Individual animated card using useScroll + useTransform + useSpring
const ProductCard = ({ product, index }: { product: typeof products[number]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const rawY = useTransform(scrollYProgress, [0, 0.4, 1], [80, 0, -20]);
  const rawOpacity = useTransform(scrollYProgress, [0, 0.25, 0.85, 1], [0, 1, 1, 0.6]);
  const rawScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.92, 1, 0.98]);

  const y = useSpring(rawY, { stiffness: 80, damping: 20 });
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      transition={{ delay: index * 0.1 }}
      className="group flex flex-col bg-card border border-border rounded-[2rem] overflow-hidden hover:border-primary/40 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl"
    >
      {/* Image Section */}
      <div className="relative w-full h-72 overflow-hidden bg-gradient-to-br from-primary/5 to-secondary">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out p-4"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5 right-5 flex justify-between items-center">
          <span className="text-xs font-bold text-white bg-primary/80 backdrop-blur-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            {product.tag}
          </span>
          <span className="text-[10px] font-semibold text-white/90 bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-widest">
            {product.volume}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative p-8 flex flex-col flex-grow">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-[2rem]" />
        <div className="relative z-10 flex flex-col h-full">
          <h3 className="text-2xl font-black text-foreground tracking-[-0.5px] mb-4 lowercase">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
            {product.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start center"],
  });

  const rawHeaderY = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const rawHeaderOpacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const headerY = useSpring(rawHeaderY, { stiffness: 70, damping: 18 });
  const headerOpacity = useSpring(rawHeaderOpacity, { stiffness: 70, damping: 18 });

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-[60px] bg-secondary" id="products">
      <motion.div style={{ y: headerY, opacity: headerOpacity }} className="mb-16">
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
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, i) => (
          <ProductCard key={product.volume} product={product} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Products;

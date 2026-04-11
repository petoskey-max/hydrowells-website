import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@/assets/weekend-1-starting.jpg";
import img2 from "@/assets/weekend-2-wakeup.jpg";
import img3 from "@/assets/weekend-3-run.jpg";
import img4 from "@/assets/weekend-4-meditate.jpg";
import img5 from "@/assets/weekend-5-ready.jpg";
import img6 from "@/assets/weekend-6-slay.jpg";

const slides = [
  { img: img1, title: "starting your weekend.", step: "01", desc: "It all begins here. A fresh start, a clean slate — and the perfect glass of water to set the tone." },
  { img: img2, title: "wake up.", step: "02", desc: "Rise with intention. Hydrate first, everything else follows. Your body craves it." },
  { img: img3, title: "go for a run.", step: "03", desc: "Push your limits. Every stride powered by pure hydration — clean water fuels clean energy." },
  { img: img4, title: "pray. meditate. journal.", step: "04", desc: "Still your mind. Nourish your soul. A moment of clarity deserves the purest water." },
  { img: img5, title: "get ready.", step: "05", desc: "Your best self starts from within. Hydrate, glow, and step into the world with confidence." },
  { img: img6, title: "slay.", step: "06", desc: "You've earned this moment. Hydrowells — with you from sunrise to spotlight." },
];

const WeekendLifestyle = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  // Auto-play
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      if (emblaApi) emblaApi.scrollNext();
    }, 4000);
  }, [emblaApi]);

  const stopAutoplay = useCallback(() => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    startAutoplay();
    return () => {
      emblaApi.off("select", onSelect);
      stopAutoplay();
    };
  }, [emblaApi, onSelect, startAutoplay, stopAutoplay]);

  return (
    <section className="py-28 bg-background overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="px-6 md:px-[60px] mb-16 max-w-[1400px] mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-semibold text-primary tracking-[3px] uppercase mb-4"
        >
          your weekend ritual
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[clamp(36px,5vw,72px)] font-extrabold leading-[1.02] tracking-[-3px] text-foreground lowercase"
        >
          starting your
          <br />
          weekend <span className="text-primary">right.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-[16px] text-muted-foreground leading-relaxed max-w-[520px] mt-4"
        >
          hydrowells is more than water — it's the thread that ties every moment of your perfect weekend together.
        </motion.p>
      </motion.div>

      {/* Carousel */}
      <div className="relative" onMouseEnter={stopAutoplay} onMouseLeave={startAutoplay}>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={i}
                className="flex-[0_0_80%] md:flex-[0_0_45%] lg:flex-[0_0_35%] min-w-0 pl-4 md:pl-6"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ${
                    selectedIndex === i
                      ? "shadow-[0_20px_60px_rgba(0,91,237,0.2)] scale-100"
                      : "opacity-60 scale-[0.95]"
                  }`}
                >
                  <div className="aspect-[3/4] relative">
                    <img
                      src={slide.img}
                      alt={slide.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Step number */}
                    <div className="absolute top-5 left-5 w-10 h-10 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center text-primary-foreground text-xs font-bold">
                      {slide.step}
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-2 tracking-[-1px]">
                        {slide.title}
                      </h3>
                      <AnimatePresence>
                        {selectedIndex === i && (
                          <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="text-white/80 text-sm leading-relaxed"
                          >
                            {slide.desc}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between px-6 md:px-[60px] mt-10 max-w-[1400px] mx-auto">
          {/* Dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  selectedIndex === i
                    ? "w-8 bg-primary"
                    : "w-2 bg-border hover:bg-muted-foreground/40"
                }`}
              />
            ))}
          </div>

          {/* Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canScrollPrev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-30"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canScrollNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all disabled:opacity-30"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeekendLifestyle;

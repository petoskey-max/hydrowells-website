import { motion } from "framer-motion";
import { useEvents } from "@/hooks/useEvents";

const Events = () => {
  const { events } = useEvents();

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
          i am more than a bottle, i am a movement. catch me at events, pop ups and experiences across nigeria.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((e, i) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="group flex flex-col bg-card border border-border rounded-[2rem] overflow-hidden hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            {/* Image Section */}
            <div className="relative w-full h-64 overflow-hidden bg-muted">
              <img
                src={e.image}
                alt={e.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 flex justify-between items-center">
                <span className="text-xs font-bold text-white bg-primary/80 backdrop-blur-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
                  {e.tag}
                </span>
                <span className="text-[10px] font-semibold text-white/90 drop-shadow-md bg-black/30 backdrop-blur-md px-3 py-1.5 rounded-full uppercase tracking-widest">
                  {e.date}
                </span>
              </div>
            </div>

            {/* Content Section */}
            <div className="relative p-8 flex flex-col flex-grow">
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-2xl font-black text-foreground tracking-[-0.5px] mb-4 capitalize">
                  {e.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                  {e.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Events;

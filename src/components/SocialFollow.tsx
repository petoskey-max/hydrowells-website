import { motion } from "framer-motion";
import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";

const SocialFollow = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <InstagramLogo size={36} weight="duotone" />,
      link: "#",
      delay: 0.1,
    },
    {
      name: "Facebook",
      icon: <FacebookLogo size={36} weight="duotone" />,
      link: "#",
      delay: 0.2,
    },
    {
      name: "TikTok",
      icon: <TiktokLogo size={36} weight="duotone" />,
      link: "#",
      delay: 0.3,
    },
  ];

  return (
    <section className="relative py-32 px-6 md:px-[60px] overflow-hidden" style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}>
      {/* Background gradient overlay - matching contact section */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#005bed]/90 via-[#000000]/85 to-[#000000]/95" />
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-bold tracking-[0.3em] lowercase text-xs mb-6">
            join the movement
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-[-2px] mb-16 text-white leading-tight lowercase">
            follow the wave.
            <br />
            <span className="text-white/40">connect with hydrowells.</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 mt-12">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12 }}
              viewport={{ once: true }}
              transition={{
                delay: social.delay,
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              className="group flex flex-col items-center gap-6"
            >
              <div className="relative">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-primary/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:border-primary/50 group-hover:bg-white/10 group-hover:scale-105 shadow-2xl">
                  <div className="text-primary transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(0,91,237,0.8)]">
                    {social.icon}
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xs font-black lowercase tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors duration-300">
                  {social.name.toLowerCase()}
                </span>
                <div className="w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-500 mt-2" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;

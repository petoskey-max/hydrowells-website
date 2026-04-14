import { motion } from "framer-motion";
import { InstagramLogo, FacebookLogo, TiktokLogo } from "@phosphor-icons/react";

const SocialFollow = () => {
  const socials = [
    {
      name: "Instagram",
      icon: <InstagramLogo size={32} weight="bold" />,
      link: "#",
      color: "hover:text-[#E4405F]",
      delay: 0.1,
    },
    {
      name: "Facebook",
      icon: <FacebookLogo size={32} weight="bold" />,
      link: "#",
      color: "hover:text-[#1877F2]",
      delay: 0.2,
    },
    {
      name: "TikTok",
      icon: <TiktokLogo size={32} weight="bold" />,
      link: "#",
      color: "hover:text-[#000000]",
      delay: 0.3,
    },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Connect with us
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-12 text-slate-900">
            Follow the wave.
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {socials.map((social) => (
            <motion.a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{
                delay: social.delay,
                duration: 0.5,
                type: "spring",
                stiffness: 200,
              }}
              className={`flex flex-col items-center gap-3 text-slate-400 transition-colors duration-300 ${social.color}`}
            >
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-white group">
                <div className="transition-transform duration-300 group-hover:scale-110">
                  {social.icon}
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialFollow;

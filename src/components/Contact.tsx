import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you! We'll get back to you shortly.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-24 px-6 md:px-[60px] overflow-hidden" id="contact">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#003a95] via-[#001a50] to-[#001030]" />
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold text-white/60 tracking-[2px] lowercase mb-4">
            get in touch
          </p>
          <h2 className="text-[clamp(36px,4vw,64px)] font-extrabold leading-[1.05] tracking-[-2px] mb-5 text-white">
            let's talk
            <br />
            hydration.
          </h2>
          <p className="text-[17px] text-white/70 leading-relaxed max-w-[460px] mb-12">
            have questions, need a bulk order, or want to partner with us? reach out and we'll get back to you within 24 hours.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">email</p>
                <p className="text-sm text-white/60">hello@hydrowells.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">phone</p>
                <p className="text-sm text-white/60">+234 800 HYDRO WELLS</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">location</p>
                <p className="text-sm text-white/60">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-9 space-y-5"
        >
          <div>
            <label className="text-sm font-semibold text-white mb-2 block">name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white mb-2 block">email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="text-sm font-semibold text-white mb-2 block">message</label>
            <textarea
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 transition-all resize-none"
              placeholder="How can we help?"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-full text-[15px] font-bold hover:-translate-y-0.5 hover:shadow-xl transition-all"
          >
            send message
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

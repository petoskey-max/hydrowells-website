import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#process", label: "Process", subLinks: [{ href: "#recycling", label: "Recycling Journey" }] },
    { href: "#reviews", label: "Reviews" },
    { href: "#events", label: "Events" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-[60px] py-4 max-w-[1600px] mx-auto relative">
        <a href="#" className="shrink-0">
          <img src={logo} alt="Hydrowells" className="h-[50px] w-auto object-contain" />
        </a>

        {/* Desktop nav - centered links */}
        <ul className="hidden lg:flex items-center gap-8 list-none absolute left-1/2 -translate-x-1/2">
          {links.map((link) => (
            <li key={link.href} className="relative group">
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
              {link.subLinks && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-background border border-border rounded-xl shadow-lg p-2 min-w-[180px]">
                    {link.subLinks.map((sub) => (
                      <a
                        key={sub.href}
                        href={sub.href}
                        className="block text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Order Now button - right aligned */}
        <a
          href="#shop"
          className="hidden lg:inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          Order Now
        </a>

        {/* Tablet/Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile/Tablet menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border px-6 pb-6"
        >
          <ul className="flex flex-col gap-4 list-none">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/70 hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#shop"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors w-full text-center"
              >
                Order Now
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;

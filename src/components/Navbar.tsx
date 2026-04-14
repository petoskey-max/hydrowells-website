import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [navState, setNavState] = useState<"top" | "hidden" | "sticky">("top");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const bottleSection = document.getElementById("the-bottle");
      let threshold = window.innerHeight * 3; // fallback
      
      if (bottleSection) {
        // Calculate the exact bottom pixel of 'The Bottle' section in the document
        threshold = bottleSection.getBoundingClientRect().bottom + y - 80;
      }

      if (y < 50) {
        setNavState("top");
      } else if (y >= 50 && y < threshold) {
        setNavState("hidden");
      } else {
        setNavState("sticky");
      }
    };
    
    // Initial check
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { href: "#about", label: "our story" },
    { href: "#products", label: "products" },
    { href: "#process", label: "process", subLinks: [{ href: "#recycling", label: "recycling journey" }] },
    { href: "#reviews", label: "reviews" },
    { href: "#events", label: "events" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: navState === "hidden" ? -100 : 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-[60] transition-colors duration-300 ${
        navState === "sticky"
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-[60px] py-4 max-w-[1600px] mx-auto relative">
        <a href="#" className="shrink-0">
          <img src={logo} alt="Hydrowells" className="h-[50px] w-auto object-contain" />
        </a>

        {/* Desktop nav centered links */}
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

        {/* Order Now button right aligned */}
        <a
          href="#shop"
          className="hidden lg:inline-flex items-center justify-center bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors whitespace-nowrap"
        >
          order now
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
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[70] bg-background lg:hidden flex flex-col p-6"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between mb-12">
              <a href="#" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="Hydrowells" className="h-[50px] w-auto object-contain" />
              </a>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-foreground"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            <ul className="flex flex-col gap-6 list-none overflow-y-auto">
              {links.map((link) => (
                <li key={link.href} className="flex flex-col gap-3">
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-bold text-foreground hover:text-primary transition-colors lowercase"
                  >
                    {link.label}
                  </a>
                  {link.subLinks && (
                    <ul className="flex flex-col gap-3 pl-4 border-l border-border ml-1">
                      {link.subLinks.map((sub) => (
                        <li key={sub.href}>
                          <a
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-lg font-medium text-foreground/50 hover:text-primary transition-colors lowercase"
                          >
                            {sub.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="mt-4">
                <a
                  href="#shop"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-base font-bold hover:bg-primary/90 transition-colors w-full text-center"
                >
                  order now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;

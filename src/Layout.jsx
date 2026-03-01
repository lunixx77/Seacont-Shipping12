import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import seacontLogo from "@/assets/seacont-logo.png";
import ContactButton from "@/components/ui/ContactButton";
import NavButton from "@/components/ui/NavButton";

const navLinks = [
  { label: "About", section: "about" },
  { label: "Services", section: "services" },
  { label: "Historie", section: "leadership" },
];
const HEADER_OFFSET = 80;

function smoothScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return false;
  const y = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: "smooth" });
  return true;
}

function waitAndScroll(id, attempts = 20) {
  if (smoothScrollTo(id)) return;
  if (attempts <= 0) return;
  setTimeout(() => waitAndScroll(id, attempts - 1), 80);
}

export default function Layout({ children }) {
  const [scrolled, setScrolled] = useState(false);
  const [darkBackground, setDarkBackground] = useState(true);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const updateHeaderState = useCallback(() => {
    setScrolled(window.scrollY > 50);

    if (location.pathname !== "/") {
      setDarkBackground(false);
      return;
    }

    const about = document.getElementById("about");
    const contact = document.getElementById("contact");
    const checkY = window.scrollY + HEADER_OFFSET;

    const aboutTop = about?.offsetTop ?? Infinity;
    const contactTop = contact?.offsetTop ?? Infinity;
    const contactBottom = contact ? contactTop + contact.offsetHeight : -Infinity;

    const isInHero = checkY < aboutTop - 20;
    const isInDarkContact = checkY >= contactTop - 20 && checkY <= contactBottom;
    setDarkBackground(isInHero || isInDarkContact);
  }, [location.pathname]);

  useEffect(() => {
    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState);
    window.addEventListener("resize", updateHeaderState);
    return () => {
      window.removeEventListener("scroll", updateHeaderState);
      window.removeEventListener("resize", updateHeaderState);
    };
  }, [updateHeaderState]);

  const goToSection = useCallback(
    (sectionId) => {
      setMobileOpen(false);

      if (location.pathname === "/") {
        setTimeout(() => smoothScrollTo(sectionId), 350);
        return;
      }

      navigate("/");
      setTimeout(() => waitAndScroll(sectionId, 25), 400);
    },
    [location.pathname, navigate]
  );

  const goToPage = useCallback(
    (page) => {
      setMobileOpen(false);
      navigate(`/${page}`);
    },
    [navigate]
  );

  const goHome = useCallback(() => {
    if (location.pathname !== "/") {
      navigate("/");
      return;
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, navigate]);

  const headerBg = "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm py-2";

  const iconColor = "text-[#0B1D3A] hover:text-[#0B1D3A]";

  return (
    <div className="font-sans antialiased">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={goHome} className="flex items-center text-left shrink-0">
            <img
              src={seacontLogo}
              alt="Seacont Shipping LLC"
              className="h-[88px] w-auto object-contain"
            />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <NavButton
                key={link.label}
                label={link.label}
                onClick={() => link.page ? goToPage(link.page) : goToSection(link.section)}
                className="text-sm font-medium tracking-wide text-[#0B1D3A]/70 hover:text-[#0B1D3A]"
              />
            ))}
            <ContactButton variant="pill" className="ml-4" />
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition-colors duration-200 ${iconColor}`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-6 py-5 flex flex-col items-start gap-2 border-t border-slate-100">
                {navLinks.map((link) => (
                  <NavButton
                    key={link.label}
                    label={link.label}
                    onClick={() => link.page ? goToPage(link.page) : goToSection(link.section)}
                    className="inline-block text-[#0B1D3A] hover:text-white text-base font-medium text-left"
                  />
                ))}
                <ContactButton variant="pill-mobile" onClick={() => setMobileOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>{children}</main>
    </div>
  );
}

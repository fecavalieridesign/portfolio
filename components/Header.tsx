"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const navLinks = ["about", "experience", "skills", "projects", "contact"] as const;

export default function Header() {
  const { lang, toggleLang, t } = useLanguage();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-white/5"
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-display text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-indigo to-pink bg-clip-text text-transparent">
            FC
          </span>
          <span className="text-foreground/60">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                className="text-sm text-muted hover:text-foreground transition-colors duration-300 font-body"
              >
                {t.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="relative px-3 py-1.5 text-xs font-bold font-display rounded-full border border-white/10 bg-surface hover:bg-surface-light transition-colors overflow-hidden"
          >
            <span className="relative z-10">{lang === "pt" ? "EN" : "PT"}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo/20 to-pink/20 opacity-0 hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="block w-5 h-0.5 bg-foreground"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="block w-5 h-0.5 bg-foreground"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-xl"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((key, i) => (
                <motion.li
                  key={key}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={`#${key}`}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-display text-muted hover:text-foreground transition-colors"
                  >
                    {t.nav[key]}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

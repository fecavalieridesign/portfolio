"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Aurora from "@/components/reactbits/Aurora";
import BlurText from "@/components/reactbits/BlurText";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <Aurora
          colorStops={["#6366f1", "#ec4899", "#06b6d4"]}
          amplitude={1.2}
          blend={0.6}
          speed={0.8}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm md:text-base font-body text-muted tracking-widest uppercase mb-4"
        >
          {t.hero.greeting}
        </motion.p>

        <div className="mb-4">
          <BlurText
            text={t.hero.name}
            className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-none tracking-tight text-foreground justify-center"
            delay={80}
            animateBy="words"
            direction="bottom"
            stepDuration={0.4}
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mb-6"
        >
          <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold text-indigo-light">
            {t.hero.title}
          </p>
          <p className="font-display text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink to-amber bg-clip-text text-transparent">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="max-w-xl mx-auto text-muted text-base md:text-lg font-body leading-relaxed mb-10"
        >
          {t.hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 font-display font-bold text-sm rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo via-pink to-indigo bg-[length:200%_auto] transition-all duration-500 group-hover:bg-right" />
            <span className="relative z-10 text-white">{t.hero.cta}</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center px-8 py-3.5 font-display font-bold text-sm text-foreground rounded-full border border-white/10 bg-surface hover:bg-surface-light hover:border-white/20 transition-all duration-300"
          >
            {t.hero.resume}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border-2 border-white/20 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 rounded-full bg-indigo" />
        </motion.div>
      </motion.div>
    </section>
  );
}

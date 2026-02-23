"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BlurText from "@/components/reactbits/BlurText";

export default function About() {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -25;
    const rotateY = (x - 0.5) * 25;
    setTilt({ rotateX, rotateY });
    setGlare({ x: x * 100, y: y * 100 });
  }

  function handleMouseLeave() {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }

  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <BlurText
            text={t.about.title}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-light"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-indigo to-cyan rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex justify-center"
            style={{ perspective: 800 }}
          >
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative cursor-pointer"
              style={{
                transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-indigo via-pink to-cyan blur-lg"
                style={{
                  opacity: isHovered ? 0.5 : 0.3,
                  transition: "opacity 0.3s ease-out",
                }}
              />
              <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl bg-gradient-to-br from-surface to-surface-light border border-white/10 flex items-center justify-center overflow-hidden">
                <div
                  className="absolute inset-0 pointer-events-none rounded-2xl"
                  style={{
                    background: isHovered
                      ? `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.15) 0%, transparent 60%)`
                      : "none",
                    transition: "background 0.1s ease-out",
                  }}
                />
                <div
                  className="text-7xl font-display font-extrabold bg-gradient-to-br from-indigo to-pink bg-clip-text text-transparent"
                  style={{ transform: "translateZ(40px)" }}
                >
                  FC
                </div>
                <div
                  className="absolute top-3 right-3 flex gap-1"
                  style={{ transform: "translateZ(20px)" }}
                >
                  <div className="w-2 h-2 rounded-full bg-indigo" />
                  <div className="w-2 h-2 rounded-full bg-pink" />
                  <div className="w-2 h-2 rounded-full bg-amber" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-3 space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted text-base md:text-lg leading-relaxed font-body"
            >
              {t.about.description}
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {t.about.stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="group relative p-4 rounded-xl border border-white/5 bg-surface hover:border-indigo/30 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="text-xl md:text-2xl font-display font-extrabold whitespace-nowrap bg-gradient-to-r from-indigo to-pink bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted mt-1 font-body">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

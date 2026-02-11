"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BlurText from "@/components/reactbits/BlurText";

const categoryStyles = [
  {
    gradient: "from-indigo to-cyan",
    tagBg: "bg-indigo/10",
    tagBorder: "border-indigo/20",
    tagText: "text-indigo-light",
    hoverBorder: "hover:border-indigo/30",
    glow: "from-indigo/5",
  },
  {
    gradient: "from-pink to-amber",
    tagBg: "bg-pink/10",
    tagBorder: "border-pink/20",
    tagText: "text-pink-light",
    hoverBorder: "hover:border-pink/30",
    glow: "from-pink/5",
  },
  {
    gradient: "from-cyan to-indigo",
    tagBg: "bg-cyan/10",
    tagBorder: "border-cyan/20",
    tagText: "text-cyan",
    hoverBorder: "hover:border-cyan/30",
    glow: "from-cyan/5",
  },
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] bg-cyan" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <BlurText
            text={t.skills.title}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-cyan to-indigo rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {t.skills.categories.map((category, i) => {
            const style = categoryStyles[i % categoryStyles.length];
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`group relative p-6 md:p-8 rounded-2xl border border-white/5 bg-surface/80 backdrop-blur-sm ${style.hoverBorder} transition-all duration-500`}
              >
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${style.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="relative">
                  <h3 className={`font-display text-lg font-bold mb-6 bg-gradient-to-r ${style.gradient} bg-clip-text text-transparent`}>
                    {category.name}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item, j) => (
                      <motion.span
                        key={item}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: 0.3 + j * 0.05 }}
                        className={`px-3 py-1.5 text-xs font-body font-medium rounded-full border ${style.tagBg} ${style.tagBorder} ${style.tagText} hover:scale-105 transition-transform duration-200`}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

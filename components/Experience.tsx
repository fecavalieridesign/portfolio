"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BlurText from "@/components/reactbits/BlurText";

export default function Experience() {
  const { t } = useLanguage();

  const accentColors = [
    { from: "from-pink", to: "to-amber", dot: "bg-pink", border: "border-pink/30", glow: "from-pink/10" },
    { from: "from-indigo", to: "to-cyan", dot: "bg-indigo", border: "border-indigo/30", glow: "from-indigo/10" },
  ];

  return (
    <section id="experience" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full opacity-10 blur-[100px] bg-pink" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <BlurText
            text={t.experience.title}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-pink"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-pink to-amber rounded-full" />
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-pink/40 via-indigo/40 to-transparent" />

          <div className="space-y-12">
            {t.experience.jobs.map((job, i) => {
              const colors = accentColors[i % accentColors.length];
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="relative pl-12 md:pl-20"
                >
                  <div className={`absolute left-2.5 md:left-6.5 top-2 w-3 h-3 rounded-full ${colors.dot} ring-4 ring-background`} />

                  <div className={`group relative p-6 md:p-8 rounded-2xl border border-white/5 ${colors.border} bg-surface/80 backdrop-blur-sm hover:border-white/10 transition-all duration-500`}>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                    <div className="relative">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                        <div>
                          <h3 className={`font-display text-xl md:text-2xl font-bold bg-gradient-to-r ${colors.from} ${colors.to} bg-clip-text text-transparent`}>
                            {job.company}
                          </h3>
                          <p className="text-foreground/80 font-display text-sm font-semibold mt-0.5">
                            {job.role}
                          </p>
                        </div>
                        <span className="text-xs text-muted font-body bg-surface-light px-3 py-1 rounded-full border border-white/5 w-fit">
                          {job.period}
                        </span>
                      </div>

                      <ul className="space-y-2">
                        {job.tasks.map((task, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.3 + j * 0.05 }}
                            className="flex items-start gap-3 text-sm text-muted font-body"
                          >
                            <span className={`mt-1.5 w-1.5 h-1.5 rounded-full ${colors.dot} shrink-0`} />
                            {task}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

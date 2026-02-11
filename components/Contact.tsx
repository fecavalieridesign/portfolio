"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import BlurText from "@/components/reactbits/BlurText";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[600px] h-[300px] rounded-full opacity-15 blur-[120px] bg-gradient-to-r from-indigo to-pink" />

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <BlurText
            text={t.contact.title}
            className="font-display text-3xl sm:text-4xl md:text-6xl font-extrabold text-pink justify-center mb-4"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <p className="text-muted font-body text-base md:text-lg max-w-md mx-auto mb-12">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          <motion.a
            href={`mailto:${t.contact.email}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative p-6 rounded-2xl border border-white/5 bg-surface/80 backdrop-blur-sm hover:border-indigo/30 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="text-2xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-indigo mx-auto"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <p className="text-xs text-muted font-body mb-1">Email</p>
              <p className="text-sm font-display font-semibold text-foreground group-hover:text-indigo-light transition-colors">
                {t.contact.email}
              </p>
            </div>
          </motion.a>

          <motion.a
            href="https://wa.me/5515997767724"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="group relative p-6 rounded-2xl border border-white/5 bg-surface/80 backdrop-blur-sm hover:border-green-500/30 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="text-2xl mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 mx-auto"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <p className="text-xs text-muted font-body mb-1">WhatsApp</p>
              <p className="text-sm font-display font-semibold text-foreground group-hover:text-green-400 transition-colors">
                {t.contact.phone}
              </p>
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href={`mailto:${t.contact.email}`}
            className="group relative inline-flex items-center justify-center px-10 py-4 font-display font-bold text-base rounded-full overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo via-pink to-amber bg-[length:200%_auto] transition-all duration-500 group-hover:bg-right" />
            <span className="relative z-10 text-white flex items-center gap-2">
              {t.contact.cta}
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

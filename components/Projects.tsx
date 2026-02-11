"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import StarBorder from "@/components/reactbits/StarBorder";
import BlurText from "@/components/reactbits/BlurText";

const GITHUB_USER = "fecavalieridesign";
const REPOS_TO_SHOW = 6;

const HIDDEN_REPOS = ["fecavalieridesign", "fecavalieridesign.github.io"];

const gradients = [
  "from-indigo via-purple-500 to-pink",
  "from-pink via-rose-500 to-amber",
  "from-cyan via-teal-500 to-indigo",
  "from-amber via-orange-500 to-pink",
  "from-indigo via-blue-500 to-cyan",
  "from-pink via-fuchsia-500 to-indigo",
];

const langColors: Record<string, string> = {
  HTML: "bg-orange-500",
  CSS: "bg-blue-500",
  SCSS: "bg-pink",
  JavaScript: "bg-amber",
  TypeScript: "bg-blue-400",
};

type Repo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  languages: string[];
  updated_at: string;
};

type GHRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  languages_url: string;
  updated_at: string;
};

export default function Projects() {
  const { t } = useLanguage();
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=30`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(async (data: GHRepo[]) => {
        const filtered = data
          .filter((r) => !HIDDEN_REPOS.includes(r.name))
          .slice(0, REPOS_TO_SHOW);

        const withLangs = await Promise.all(
          filtered.map(async (r) => {
            try {
              const langRes = await fetch(r.languages_url);
              const langData: Record<string, number> = await langRes.json();
              const topLangs = Object.keys(langData).slice(0, 2);
              return { ...r, languages: topLangs };
            } catch {
              return { ...r, languages: [] };
            }
          })
        );

        setRepos(withLangs);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  function formatName(name: string) {
    return name.replace(/-/g, " ").replace(/\.github\.io/g, "").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  return (
    <section id="projects" className="relative py-28 px-6 overflow-hidden">
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] bg-indigo" />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <BlurText
            text={t.projects.title}
            className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-amber"
            delay={60}
            animateBy="words"
            direction="bottom"
          />
          <div className="mt-3 h-1 w-20 bg-gradient-to-r from-amber to-pink rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-muted font-body mb-12"
        >
          {t.projects.subtitle}
        </motion.p>

        {loading && (
          <div className="flex items-center justify-center py-20">
            <div className="w-6 h-6 border-2 border-indigo border-t-transparent rounded-full animate-spin" />
            <span className="ml-3 text-muted font-body text-sm">{t.projects.loading}</span>
          </div>
        )}

        {error && (
          <p className="text-center text-muted font-body py-20">{t.projects.error}</p>
        )}

        {!loading && !error && (
          <>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo, i) => (
                <motion.div
                  key={repo.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="group relative"
                >
                  <StarBorder
                    color={["#6366f1", "#ec4899", "#06b6d4", "#f59e0b", "#818cf8", "#f472b6"][i % 6]}
                    speed="8s"
                    className="h-full w-full"
                  >
                    <div className={`relative h-32 bg-gradient-to-br ${gradients[i % gradients.length]} overflow-hidden rounded-t-2xl`}>
                      <div
                        className="absolute inset-0 opacity-10"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)",
                          backgroundSize: "20px 20px",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl font-display font-bold text-white/30 group-hover:scale-110 transition-transform duration-500">
                          {formatName(repo.name).slice(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>

                    <div className="p-5">
                      <h3 className="font-display text-base font-bold text-foreground mb-2 group-hover:text-indigo-light transition-colors duration-300">
                        {formatName(repo.name)}
                      </h3>

                      {repo.description && (
                        <p className="text-xs text-muted font-body leading-relaxed mb-3">
                          {repo.description}
                        </p>
                      )}

                      <div className="flex items-center justify-between mt-auto pt-2">
                        {repo.languages.length > 0 && (
                          <div className="flex items-center gap-3">
                            {repo.languages.map((lang) => (
                              <div key={lang} className="flex items-center gap-1.5">
                                <span className={`w-2.5 h-2.5 rounded-full ${langColors[lang] || "bg-muted"}`} />
                                <span className="text-[11px] text-muted font-body">{lang}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex items-center gap-3 ml-auto">
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] text-indigo-light hover:text-foreground font-body font-medium transition-colors"
                            >
                              {t.projects.viewProject} &rarr;
                            </a>
                          )}
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] text-muted hover:text-foreground font-body transition-colors"
                          >
                            {t.projects.viewCode}
                          </a>
                        </div>
                      </div>
                    </div>
                  </StarBorder>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-10"
            >
              <a
                href={`https://github.com/${GITHUB_USER}?tab=repositories`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted hover:text-indigo-light font-body transition-colors duration-300"
              >
                {t.projects.viewAll}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              </a>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
}

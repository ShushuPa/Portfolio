import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  return (
   <section id="about" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start p-6 md:p-10 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm">
              {/* Left side - "About" heading */}
            <div className="flex flex-col justify-start">
              <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">
                  {t("about.title")}
              </h2>
                <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-blue-400 dark:to-transparent bg-gradient-to-r from-[#FF833D] to-transparent rounded-full"></div>
            </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  {t("about.description")}
                </p>
                
                {/* Skills */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-primary mb-4">{t("about.skills")}</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MySQL', 'Oracle SQL Developer'].map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
        </div>
      </div>
    </section>
  );
};

import { useTranslation } from "react-i18next";

interface ExperienceItem {
  date: string
  title: string
  company: string
  description: string
}

export default function Experience() {
  const { t } = useTranslation();
  const experienceData = t("experience.items", { returnObjects: true }) as ExperienceItem[];
  return (
    <section id="experience" className="py-20 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start p-6 md:p-10 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm">
            <div className="order-2 md:order-1">
              <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">
                <div className="space-y-12 relative pl-8">
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 dark:bg-gradient-to-b dark:from-blue-500 dark:to-blue-400 bg-gradient-to-b from-[#2577FF] to-[#FF833D]"></div>

                  {experienceData.map((item, index) => (
                    <div key={index} className="absolute relative pl-8">
                      <div className="absolute left-[-15px] top-2 w-6 h-6 bg-background border-4 dark:border-blue-500 border-[#2577FF] rounded-full"></div>
                      <div>
                        <p className="text-sm font-semibold dark:text-blue-400 text-[#2577FF] mb-1">{item.date}</p>
                        <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              <div className="order-1 md:order-2">
                <div className="flex flex-col justify-start items-start">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4 ">
                    {t("experience.title")}
                  </h2>
                  <div className="w-20 h-1 dark:bg-gradient-to-l dark:from-blue-400 dark:to-transparent bg-gradient-to-l from-[#FF833D] to-transparent rounded-full"></div>
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    {t("experience.description")}
                  </p>
                </div>
              </div>
          </div>
      </div>
    </section>
  );
};

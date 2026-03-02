import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useTranslation } from "react-i18next";
import ExpandableText from './ExpandableText';

interface ProjectsItem {
  title: string
  description: string
  stack: string
  status: string
  images: string[]
}

export default function Projects() {
    const { t } = useTranslation();
    const projectsData = t("projects.items", { returnObjects: true }) as ProjectsItem[];

    return (
        <section id="projects" className="py-20 px-4 md:px-8 scroll-mt-20">
            <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary dark:text-white mb-4">{t("projects.title")}</h2>
                    <div className="w-20 h-1 dark:bg-gradient-to-r dark:from-blue-400 dark:to-transparent bg-gradient-to-r from-[#FF833D] to-transparent rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-2 gap-8 dark:text-white text-[#131360]">
                    {projectsData.map((project, index) => (
                        <div 
                            key={index} 
                            className="dark:bg-slate-800 bg-white rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="h-64 dark:bg-slate-700 bg-[#EBE9E9]">
                            <Swiper
                                spaceBetween={0}
                                centeredSlides={true}
                                pagination={{
                                    clickable: true,
                                }}
                                navigation={true} 
                                modules={[Autoplay, Pagination, Navigation]}
                                className="mySwiper h-full w-full"
                            >
                                {project.images.map((img, i) => (
                                    <SwiperSlide key={i}>
                                        <img 
                                            src={img} 
                                            alt="Project screenshot" 
                                            className="w-full h-full object-cover" 
                                        />
                                    </SwiperSlide>
                                ))}
                                <div className="absolute top-4 right-4 z-10">
                                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                        project.status === 'In Progress'
                                            ? 'dark:bg-blue-900 bg-[#2577FF] dark:text-blue-200 text-white'
                                            : project.status === 'Inactive'
                                            ? 'dark:bg-red-900 bg-red-500 dark:text-red-200 text-white'
                                            : project.status === 'Active'
                                            ? 'dark:bg-green-900 bg-green-500 dark:text-green-200 text-white'
                                            : 'dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-[#131360]'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                                </Swiper>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <ExpandableText
                                    text={project.description}
                                    className="dark:text-gray-300 text-[#131360]/70 mb-2 leading-relaxed"
                                    buttonClassName="mb-4"
                                />
                                <div className="pt-4 border-t dark:border-gray-700 border-[#c2c0c0]">
                                    <p className="text-sm dark:text-gray-400 text-[#131360]/60">
                                        <span className="font-semibold">{t("projects.subtitle")}:</span> {project.stack}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
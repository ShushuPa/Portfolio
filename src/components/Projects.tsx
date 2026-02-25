import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Projects() {
    const projectsData = [
    {
      title: 'Tipear',
      description: 'A full-stack e-commerce platform with product management, shopping cart, and payment integration. Built with Next.js, TypeScript, and Stripe API.',
      tech: 'Next.js, TypeScript, Tailwind CSS, Stripe',
      images: [
        'https://flowbite.com/docs/images/carousel/carousel-1.svg',
        'https://flowbite.com/docs/images/carousel/carousel-2.svg', 
        'https://flowbite.com/docs/images/carousel/carousel-3.svg', 
      ],
      status: 'In Progress',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features. Developed using React, Firebase, and WebSockets.',
      tech: 'React, Firebase, WebSockets, Material-UI',
      images: [
        'https://flowbite.com/docs/images/carousel/carousel-4.svg',
        'https://flowbite.com/docs/images/carousel/carousel-5.svg',
        '/placeholder.svg?key=dn0n0',
      ],
      status: 'Inactive',
    }
    ];

    return (
        <section id="projects" className="py-20 px-4 md:px-8 scroll-mt-20">
            <div className="max-w-6xl mx-auto p-6 md:p-10 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm">
                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Projects</h2>
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
                                navigation={true} // arrows - yes - no
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
                                            : 'dark:bg-gray-700 bg-gray-200 dark:text-gray-200 text-[#131360]'
                                    }`}>
                                        {project.status}
                                    </span>
                                </div>
                                </Swiper>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                                <p className="dark:text-gray-300 text-[#131360]/70 mb-4 leading-relaxed">{project.description}</p>
                                <div className="pt-4 border-t dark:border-gray-700 border-[#c2c0c0]">
                                    <p className="text-sm dark:text-gray-400 text-[#131360]/60">
                                        <span className="font-semibold">Tech Stack:</span> {project.tech}
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
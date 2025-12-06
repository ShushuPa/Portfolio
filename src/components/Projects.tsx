export default function Projects() {
const projectsData = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with product management, shopping cart, and payment integration. Built with Next.js, TypeScript, and Stripe API.',
      tech: 'Next.js, TypeScript, Tailwind CSS, Stripe',
      image: '/placeholder.svg?key=7ikit',
      status: 'In Progress',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team collaboration features. Developed using React, Firebase, and WebSockets.',
      tech: 'React, Firebase, WebSockets, Material-UI',
      image: '/placeholder.svg?key=dn0n0',
      status: 'Inactive',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio showcasing projects and experience with a modern dark theme design. Built with Next.js and Tailwind CSS for optimal performance.',
      tech: 'Next.js, Tailwind CSS, React',
      image: '/placeholder.svg?key=8k9na',
      status: 'In Progress',
    },
    {
      title: 'AI Chat Assistant',
      description: 'Intelligent chat application powered by OpenAI API with conversation history and context awareness. Features include user authentication and chat persistence.',
      tech: 'Next.js, OpenAI API, PostgreSQL, TypeScript',
      image: '/placeholder.svg?key=gzhvl',
      status: 'In Progress',
    },
  ];

return (
<section className="py-20 px-4 md:px-8">
    <div className="max-w-6xl mx-auto">
        <div className="mb-12">
            <h2 className="text-4xl font-bold">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
                <div key={index} className="bg-slate-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 bg-slate-700">
                        <img src="/moon.svg" alt="moon" />
                        <div className="absolute top-4 right-4">
                            <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                project.status === 'In Progress'
                                ? 'bg-blue-900 text-blue-200'
                                : 'bg-gray-700 text-gray-200'
                            }`}>
                                {project.status}
                            </span>
                        </div>
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                        <div className="pt-4 border-t border-gray-700">
                            <p className="text-sm text-gray-400">
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

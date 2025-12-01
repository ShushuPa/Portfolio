export default function About() {
  return (
   <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-white">
              {/* Left side - "About" heading */}
            <div className="flex flex-col justify-start">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                  About
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
              </div>

              {/* Right side - Content */}
              <div className="space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I'm a passionate software developer with a keen interest in creating elegant solutions to complex problems. With years of experience in full-stack development, I specialize in building scalable and user-friendly applications.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  My expertise spans across modern web technologies, cloud infrastructure, and DevOps practices. I'm committed to continuous learning and staying updated with the latest industry trends and best practices.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
                
                {/* Skills */}
                <div className="pt-4">
                  <h3 className="text-xl font-semibold text-primary mb-4">Key Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'].map((skill) => (
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

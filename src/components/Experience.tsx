interface ExperienceItem {
  date: string
  title: string
  company: string
  description: string
}

const experienceData: ExperienceItem[] = [
  {
    date: 'April 2022',
    title: 'Peoplesoft Developer',
    company: 'Abtio',
    description: 'Developed and maintained web applications using Peopletools Kit Development, improving performance by 40%.',
  },
  {
    date: 'December 2025',
    title: '',
    company: 'Innovation Labs',
    description: 'Led a team of 5 developers, architected microservices, and implemented CI/CD pipelines.',
  },
]

export default function Experience() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* <CHANGE> Mobile-first: Content appears above timeline on mobile, timeline on left and title on right on desktop */}
            <div className="order-2 md:order-1">
              {/* Left side - Experience Content */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 gap-10">
                {/* Left: Timeline Items */}
                <div className="space-y-12 relative pl-8">
                  {/* Vertical Line */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-400"></div>

                  {experienceData.map((item, index) => (
                    <div key={index} className="absolute relative pl-8">
                      {/* Timeline Dot */}
                      <div className="absolute left-[-15px] top-2 w-6 h-6 bg-background border-4 border-blue-500 rounded-full"></div>
                      <div>
                        <p className="text-sm font-semibold text-blue-400 mb-1">{item.date}</p>
                        <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-muted-foreground font-medium mb-2">{item.company}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
              {/* Right side - "Experience" heading */}
              {/* <CHANGE> Experience title appears below timeline on mobile, on the right on desktop */}
              <div className="order-1 md:order-2">
                <div className="flex flex-col justify-start items-start">
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 ">
                    Experience
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-l from-blue-400 to-transparent rounded-full"></div>
                  <p className="text-muted-foreground mt-6 leading-relaxed">
                    Throughout my career, I've had the opportunity to work on diverse projects 
                    and collaborate with talented teams. Each experience has contributed to my 
                    growth as a developer and shaped my approach to problem-solving.
                  </p>
                </div>
              </div>
          </div>
      </div>
    </section>
  );
};

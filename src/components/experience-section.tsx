export function ExperienceSection() {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'HNG.',
      period: '2024 - 2025',
      description:
        'Developed custom web applications for clients across various industries. Worked with Node.js, Nest.js, and PostgreSQL to build scalable solutions. Managed project timelines and client communications.',
    },
    {
      title: 'Junior Web Developer',
      company: 'Smartech Global',
      period: '2023 - 2024',
      description:
        'Built responsive websites and web applications using modern web technologies. Gained experience in HTML, CSS, JavaScript, Node, and various CMS platforms. Collaborated with designers to implement pixel-perfect designs.',
    },
  ];

  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
        Experience
      </h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-border">
            <div className="absolute w-4 h-4 bg-accent rounded-full -left-2 top-0"></div>
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                {exp.title}
              </h3>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                <span className="text-accent font-medium">{exp.company}</span>
                <span className="text-muted-foreground text-sm">
                  {exp.period}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {exp.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

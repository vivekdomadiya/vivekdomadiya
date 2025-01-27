const Projects = () => {
  const projects = [
    {
      title: 'API Transformation Project',
      description: 'Led the development and migration of 35+ APIs using Spring Boot, handling over 10,000 requests per minute. Implemented comprehensive solutions for a UK-based Insurance company.',
      technologies: ['Java Spring Boot', 'Apache Camel', 'AWS EKS', 'Active MQ', 'JUnit 5'],
      role: 'Java Developer',
      achievements: [
        'Migrated 35+ APIs with minimal downtime',
        'Reduced deployment time by 40% using CI/CD pipelines',
        'Achieved 90% test coverage with JUnit 5 and Mockito',
        'Reduced vulnerabilities by 50% using SonarQube and Checkmarx',
      ]
    },
    {
      title: 'Student Portal',
      description: 'Developed a comprehensive web service for online certificate applications, serving 1000+ students with features for document verification and profile management.',
      technologies: ['Java Spring Boot', 'React.js', 'MySQL', 'Bootstrap'],
      role: 'Full Stack Developer',
      achievements: [
        'Served 1000+ users in LDCE college network',
        'Achieved 95% faculty approval rate',
        'Increased user satisfaction by 30%',
        'Implemented three-tier user role system'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Role</h4>
                <p className="text-gray-300">{project.role}</p>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Achievements</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
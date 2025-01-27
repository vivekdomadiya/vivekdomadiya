const Experience = () => {
  const experiences = [
    {
      company: 'Tata Consultancy Services (TCS)',
      role: 'Software Engineer',
      period: 'August 2021 - Present',
      responsibilities: [
        'Developed and maintained 10+ microservices and migrated 35+ APIs using Spring Boot',
        'Implemented RESTful APIs with Kong Mesh, handling over 10,000 requests per minute',
        'Optimized databases (PostgreSQL, MySQL, MongoDB) and enhanced system security with OAuth 2.0 and JWT',
        'Streamlined deployments using AWS EKS and improved CI/CD processes with Azure DevOps pipelines',
        'Improved customer satisfaction by 20% through Agile collaboration and efficient delivery',
        'Ensured code quality with SonarQube, Checkmarx, and AquaScan'
      ],
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Professional Experience
        </h2>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-gray-800 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                  <p className="text-blue-400">{exp.role}</p>
                </div>
                <p className="text-gray-400 mt-2 md:mt-0">{exp.period}</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
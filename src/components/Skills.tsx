const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Technologies',
      skills: ['Java', 'Spring Boot', 'J2EE', 'Multithreading', 'Data Structures'],
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS EKS', 'Docker', 'Jenkins', 'Azure DevOps', 'CI/CD'],
    },
    {
      title: 'Integration',
      skills: ['REST', 'SOAP', 'Apache Camel', 'CXF', 'ActiveMQ', 'AWS SQS'],
    },
    {
      title: 'Databases',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'IBM DB', 'Redis'],
    },
    {
      title: 'Testing & Quality',
      skills: ['JUnit', 'Mockito', 'Cucumber BDD', 'Wire Mock', 'SonarQube'],
    },
    {
      title: 'Frontend & Tools',
      skills: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-800 rounded-full text-gray-300 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
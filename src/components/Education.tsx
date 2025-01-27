const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Engineering in Information Technology',
      institution: 'LD College of Engineering',
      period: '2017 - 2021',
      achievement: 'CGPA: 9.17',
    },
    {
      degree: 'Higher Secondary Certificate (H.S.C)',
      institution: 'Aditi Science School',
      period: '2015 - 2017',
      achievement: 'Percentage: 93.63%',
    },
    {
      degree: 'Secondary School Certificate (S.S.C)',
      institution: 'Zen School',
      period: '2015',
      achievement: 'Percentage: 84.16%',
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Education
        </h2>
        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="mb-12 bg-gray-900 rounded-lg p-6 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-blue-400">{edu.institution}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-400 mt-2 md:mt-0">{edu.period}</p>
                  <p className="text-green-400 font-semibold">{edu.achievement}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
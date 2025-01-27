
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
          <p className="text-lg leading-relaxed">
            I am a dedicated Java Developer with over 3.5+ years of experience in designing and 
            implementing robust software solutions. My expertise encompasses popular Java frameworks, 
            RESTful services, and front-end development.
          </p>
          <p className="text-lg leading-relaxed">
            With extensive hands-on experience in J2EE Technologies, Multithreading, Data Structures, 
            and the Spring Framework (including Spring MVC, Spring JDBC, Spring Security, and Spring Boot), 
            I bring comprehensive knowledge to every project. I'm proficient in Dependency Injection, Git, 
            JUnit, Jenkins, JSON, XML/XSL, Hibernate, and ReactJs.
          </p>
          <p className="text-lg leading-relaxed">
            My experience extends to cloud technologies, particularly Amazon Web Services (AWS) Elastic 
            Kubernetes Service (EKS) and Docker for containerized deployments. I focus on delivering 
            high availability and performance, contributing to all phases of the development lifecycle, 
            and writing well-designed, efficient, and testable code.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
              Hi, I'm <span className="text-blue-500">Vivek Domadiya</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 animate-fade-in-delay">
            Software Engineer specializing in Java, Spring Boot, and React.js
            </p>
            <div className="flex space-x-4 justify-center md:justify-start animate-fade-in-delay-2">
              <a href="https://github.com/vivekdomadiya" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                <Github size={24} />
              </a>
              <a href="http://www.linkedin.com/in/vivek-domadiya" target="_blank" rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                <Linkedin size={24} />
              </a>
              <a href="mailto:vivekmdomadiya@gmail.com"
                className="p-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 animate-fade-in">
                <img
                  src="/photo.jpg"
                  alt="Vivek Domadiya"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
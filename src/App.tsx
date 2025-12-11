import  {useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';


// 🎯 CONFIGURATION - Modifiez vos informations ici
const CONFIG = {
  name: "AIT DAOUD  Achraf",
  title: "Développeur Full Stack",
  description: "Passionné par la création de solutions modernes et performantes",
  email: "aitdaoudachraf@gmail.com",
  github: "https://github.com/achraf27",
  linkedin: "https://www.linkedin.com/in/achraf-ait-daoud-129a04355/",
  
  // 📁 Ajoutez vos projets ici
  projects: [
   
    {
      id: 1,
      title: "Logiciel de gestion d'inventaire",
      description: "Logiciel full-stack de gestion d’inventaire avec suivi des stocks, CRUD produits et interface intuitive",
      tech: ["React", "Express.js","Node.js", "SQL", "Tailwind","JWT"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      github: "https://github.com/achraf27/inventory-app"
    },
    {
      id: 2,
      title: "Application de messagerie instantanée",
      description: "Application de chat en temps réel avec gestion des utilisateurs et échanges instantanés de messages.",
      tech: ["React Native", "Express.js", "PostgreSQL", "Socket.io"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      github: "https://github.com/achraf27/socket_chat_app.git",
    },
     {
      id: 3,
      title: "PageBlocker",
      description: "Une extension chrome permettant de bloquer des pages webs ",
      tech: ["JavaScript", "Chrome API"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
      github: "",
      demo: "https://chromewebstore.google.com/detail/pageblocker/bclopoicblmkamoagdllhlgaeajhoppi"
    },
  ],



skillsCategories: [
    {
      title: "Langages",
      skills: ["C++", "Python", "Java", "JavaScript / TypeScript", "Dart", "PHP"]
    },
    {
      title: "Frontend",
      skills: ["React", "Angular", "Flutter", "Tailwind CSS"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Nest.js", "Laravel"]
    },
    {
      title: "Bases de données",
      skills: ["PostgreSQL","MongoDB"]
    },
    {
      title: "Outils/Méthodologies",
      skills: ["Git", "Docker", "Méthode Agile"]
    }
  ]

};

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  


  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) {
  document.documentElement.classList.add('dark');
    } else {
  document.documentElement.classList.remove('dark');
}

  }, [darkMode]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? 'bg-gray-900/95 border-gray-800' : 'bg-white/95 border-gray-200'
      } backdrop-blur-sm border-b`}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="cursor-pointer  hover:text-orange-500 transition">Accueil</button>
            <button onClick={() => scrollToSection('projects')} className="cursor-pointer  hover:text-orange-500 transition">Projets</button>
            <button onClick={() => scrollToSection('skills')} className="cursor-pointer  hover:text-orange-500 transition">Compétences</button>
            <button onClick={() => scrollToSection('contact')} className="cursor-pointer  hover:text-orange-500 transition">Contact</button>
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className={` cursor-pointer p-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="p-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex flex-col p-4 gap-4">
              <button onClick={() => scrollToSection('home')} className="text-left hover:text-orange-500">Accueil</button>
              <button onClick={() => scrollToSection('projects')} className="text-left hover:text-orange-500">Projets</button>
              <button onClick={() => scrollToSection('skills')} className="text-left hover:text-orange-500">Compétences</button>
              <button onClick={() => scrollToSection('contact')} className="text-left hover:text-orange-500">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 bg-clip-text text-transparent">
              {CONFIG.name}
            </h2>
            <p className="text-2xl md:text-3xl mb-4 font-semibold text-orange-500">{CONFIG.title}</p>
            <p className={`text-lg md:text-xl max-w-2xl mx-auto ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {CONFIG.description}
            </p>
            <div className="flex justify-center gap-6 mt-8">
              <a href={CONFIG.github} target="_blank" rel="noopener noreferrer" 
                className={`p-3 rounded-full transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg`}>
                <Github size={24} />
              </a>
              <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
                className={`p-3 rounded-full transition ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-100'} shadow-lg`}>
                <Linkedin size={24} />
              </a>
              
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 text-center">Mes Projets</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFIG.projects.map((project) => (
              <div key={project.id} 
                className={`rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                } shadow-xl`}>
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                  <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} 
                        className={`px-3 py-1 rounded-full text-sm ${
                          darkMode ? 'bg-gray-700 text-orange-400' : 'bg-orange-100 text-orange-600'
                        }`}>
                        {tech}
                      </span>
                    ))}
                  </div>
              <div className="flex gap-4">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition">
                    <Github size={18} /> Code
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition">
                    <ExternalLink size={18} /> Demo
                  </a>
                )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Skills Section */}
<section id="skills" className="py-24 px-6 transition-colors duration-500">
  <div className="max-w-6xl mx-auto text-center">
    <h3 className="text-4xl md:text-5xl font-extrabold mb-16">
     <h3 className="text-4xl font-bold mb-12 text-center">Mes Compétences</h3>
    </h3>

    {/* Grille fluide qui s'adapte au contenu */}
    <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-center">
      {CONFIG.skillsCategories.map((category, idx) => (
        <div
          key={idx}
          className={`p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl ${
            darkMode
              ? 'bg-gray-800 hover:bg-gray-700 text-white'
              : 'bg-white hover:bg-gray-50 text-gray-900'
          }`}
        >
          <h4 className="text-xl font-semibold mb-6 border-b pb-2 border-gray-700 dark:border-gray-600">
            {category.title}
          </h4>
          <div className="flex flex-col justify-center gap-3">
            {category.skills.map((skill, i) => (
              <span
                key={i}
                className={`px-4 py-2 text-sm md:text-base rounded-full font-medium transition-all duration-200 ${
                  darkMode
                    ? ' hover:bg-gray-600 text-gray-100'
                    : ' hover:bg-gray-200 text-gray-800'
                }`}
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




     {/* Contact Section */}
<section id="contact" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
  <div className="max-w-3xl mx-auto text-center">
    <h3 className="text-4xl font-bold mb-6">Contactez-moi</h3>

    <div className="flex justify-center gap-6 mt-10">
      <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
        className="text-orange-500 hover:text-orange-600 transition">
        <Linkedin size={28} />
      </a>
      <a href={`mailto:${CONFIG.email}`}
        className="text-orange-500 hover:text-orange-600 transition">
        <Mail size={28} />
      </a>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className={`py-8 text-center ${darkMode ? 'bg-gray-900 border-t border-gray-800' : 'bg-gray-50 border-t border-gray-200'}`}>
        <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          © 2025 {CONFIG.name}. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}
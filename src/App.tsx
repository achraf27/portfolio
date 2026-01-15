import  {useState, useEffect } from 'react';
import { Moon, Sun, Github, Linkedin, Mail, ExternalLink, Menu, X } from 'lucide-react';

import inventory from './assets/inventory.png'


const CONFIG = {
  name: "AIT DAOUD  Achraf",
  title: "Développeur Full Stack",
  description: "Passionné par la création de solutions modernes et performantes",
  email: "aitdaoudachraf@gmail.com",
  github: "https://github.com/achraf27",
  linkedin: "https://www.linkedin.com/in/achraf-ait-daoud-129a04355/",
  
  projects: [
   
  {
      id: 1,
      title: "Logiciel de gestion d'inventaire",
      description: "Logiciel full-stack de gestion d’inventaire avec suivi des stocks, CRUD produits et interface intuitive",
      tech: [
        "React.js",
        "Express.js",
        "Node.js",
        "PostgreSQL",
        "Bootstrap",
        "JWT"
      ],
      image: inventory,
      github: "https://github.com/achraf27/inventory-app",
      Lien: "https://inventory-app-b1xc-kvtk657ev-achraf27s-projects.vercel.app",

      features: [
        "Authentification sécurisée avec gestion des rôles (Admin / Utilisateur)",
        "CRUD complet des produits",
        "Suivi des stocks en temps réel",
        "Interface responsive et intuitive",
        "Gestion des utilisateurs"
      ],

      challenges: [
        "Mise en place d’une architecture full-stack cohérente",
        "Gestion de l’authentification et des autorisations avec JWT",
        "Communication sécurisée entre le frontend et le backend",
        "Déploiement et configuration de l’application en production"
      ],

      competences: [
        "Architecture full-stack",
        "Développement d’API REST",
        "Authentification JWT",
        "Gestion de base de données PostgreSQL",
        "Déploiement d’application web"
      ],

      pourquoi: `
    J'ai réalisé ce projet afin de démontrer concrètement mes compétences en développement full-stack.

    Ce projet a représenté un véritable challenge, notamment sur les aspects architecturaux, 
    la communication entre le frontend et le backend, ainsi que le déploiement de l’application.

    Il m’a permis de gagner en confiance et de mieux comprendre les problématiques rencontrées dans une application professionnelle.

    Identifiants de test :

    Rôle : Admin  
    Nom d'utilisateur : JeanDupont  
    Mot de passe : password123  

    Rôle : Utilisateur  
    Nom d'utilisateur : MarieMartin  
    Mot de passe : password123
    `
    },

 {
      id: 2,
      title: "Application de messagerie instantanée (en cours)",
      description: "Application de chat en temps réel avec gestion des utilisateurs et échanges instantanés de messages",
      tech: [
        "React Native",
        "Express.js",
        "PostgreSQL",
        "Socket.io"
      ],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      github: "https://github.com/achraf27/socket_chat_app.git",

      features: [
        "Messagerie en temps réel via WebSocket",
        "Gestion des utilisateurs",
        "Envoi et réception instantanée de messages",
        "Persistance des messages en base de données"
      ],

      challenges: [
        "Compréhension du fonctionnement des WebSockets",
        "Gestion des connexions en temps réel",
        "Synchronisation entre frontend mobile et backend",
        "Structuration d’un projet React Native"
      ],

      competences: [
        "Communication temps réel avec Socket.io",
        "Développement mobile avec React Native",
        "Gestion d’API backend",
        "Modélisation de base de données"
      ],

      pourquoi: `
      J’ai toujours été curieux de comprendre le fonctionnement des applications de messagerie instantanée.

      Ce projet est né de cette curiosité et m’a permis d’explorer les problématiques liées 
      au temps réel, à la gestion des connexions et aux échanges de données instantanés.

      Le projet est encore en cours de développement et continue d’évoluer au fil de mes apprentissages.
      `
      },

      {
        id: 3,
        title: "PageBlocker",
        description: "Une extension chrome permettant de bloquer des pages webs ",
        tech: ["JavaScript", "Chrome API"],
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
        github: "",
        Lien: "https://chromewebstore.google.com/detail/pageblocker/bclopoicblmkamoagdllhlgaeajhoppi",
        features: [
        "Blocage de pages par URL",
        "Activation / désactivation rapide depuis l'icône",
        "Liste personnalisée de sites bloqués",
        "Redirection vers une page neutre"
      ],
      challenges: [
        "Comprendre et utiliser l'API Chrome pour intercepter les requêtes",
        "Gérer la persistance des données via le stockage local",
        "Créer une UX simple malgré les contraintes des extensions Chrome"
        ],
        
        competences: [
          "Manipulation des Chrome Extensions API",
          "JavaScript événementiel",
          "Gestion d'état local",
          "Déploiement sur le Chrome Web Store"
        ],



        pourquoi: `
        J'ai demarré ce projet dans le but de repondre à un besoin que j'ai moi même ressenti: celui de pouvoir bloquer 
        des pages susceptibles de me distraire. Bien qu'il y ai deja des outils a disposition j'ai quand même décide de créer l'outil
        dans un esprit de challenge et pour pouvoir également monter en compètence.

        Au final j'ai pu produire un outil fonctionnel, que j'ai par ailleurs publié sur le chrome store.
        `

      },
  ],



skillsCategories: [
    {
      title: "Langages",
      skills: ["JavaScript / TypeScript","C++", "Python", "Java", "Dart", "PHP"]
    },
    {
      title: "Frontend",
      skills: ["React.js", "Angular", "Flutter", "Tailwind CSS","Bootstrap"]
    },
    {
      title: "Backend",
      skills: ["Express.js", "Node.js", "Laravel" ,"Nest.js",]
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
  const [selectedProject, setSelectedProject] = useState<any | null>(null);


  


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
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-center items-center">

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
             <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className={`cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-xl`}
                >
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
                {project.Lien && (
                  <a href={project.Lien} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-orange-500 hover:text-orange-600 transition">
                    <ExternalLink size={18} /> Lien
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

      {/*Modal section*/}
  {selectedProject && (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
    onClick={() => setSelectedProject(null)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className={`max-w-2xl w-full mx-4 rounded-2xl p-6 shadow-2xl max-h-[90vh] overflow-y-auto ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      {/* Image */}
      <img
        src={selectedProject.image}
        alt={selectedProject.title}
        className="w-full h-56 object-cover rounded-xl mb-6"
      />

      {/* Titre */}
      <h3 className="text-2xl font-bold mb-2">
        {selectedProject.title}
      </h3>

      {/* Description */}
      <p className={`mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
        {selectedProject.description}
      </p>

      {/* Fonctionnalités */}
      {selectedProject.features && (
        <>
          <h4 className="font-semibold mb-2">Fonctionnalités</h4>
          <ul
            className={`mb-4 list-disc list-inside ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {selectedProject.features.map((feature: string, idx: number) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </>
      )}

      {/* Défis techniques */}
      {selectedProject.challenges && (
        <>
          <h4 className="font-semibold mb-2">Défis techniques</h4>
          <ul
            className={`mb-4 list-disc list-inside ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {selectedProject.challenges.map((challenge: string, idx: number) => (
              <li key={idx}>{challenge}</li>
            ))}
          </ul>
        </>
      )}

      {/* Compétences acquises */}
      {selectedProject.competences && (
        <>
          <h4 className="font-semibold mb-2">Compétences développées</h4>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedProject.competences.map((skill: string, idx: number) => (
              <span
                key={idx}
                className={`px-3 py-1 rounded-full text-sm border ${
                  darkMode
                    ? 'border-gray-700 text-gray-300'
                    : 'border-gray-300 text-gray-700'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Technologies */}
      <h4 className="font-semibold mb-2">Technologies</h4>
      <div className="flex flex-wrap gap-2 mb-6">
        {selectedProject.tech.map((tech: string, idx: number) => (
          <span
            key={idx}
            className={`px-3 py-1 rounded-full text-sm ${
              darkMode
                ? 'bg-gray-700 text-orange-400'
                : 'bg-orange-100 text-orange-600'
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Contexte / Pourquoi */}
      {selectedProject.pourquoi && (
        <>
          <h4 className="font-semibold mb-2">Contexte du projet</h4>
          <p
            className={`mb-6 whitespace-pre-line ${
              darkMode ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {selectedProject.pourquoi}
          </p>
        </>
      )}

      {/* Liens */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          {selectedProject.github && (
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
            >
              <Github size={18} />
              Code
            </a>
          )}

          {selectedProject.Lien && (
            <a
              href={selectedProject.Lien}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-orange-500 hover:text-orange-600"
            >
              <ExternalLink size={18} />
              Lien
            </a>
          )}
        </div>

        <button
          onClick={() => setSelectedProject(null)}
          className="text-sm px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
        >
          Fermer
        </button>
      </div>
    </div>
  </div>
)}
</div>
    
  );
}
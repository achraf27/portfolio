import { useState, useEffect } from 'react';
import { Moon, Sun, Mail, ExternalLink, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const GitHubIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const LinkedInIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

import inventory from './assets/inventory.png'
import inventoryAdminSupplier from './assets/inventory_admin_supplier_page.png'
import inventoryAdminPage from './assets/inventory_admin_page.png'
import inventoryDashboard from './assets/inventory_user_dashboard.png'
import UserInventory from './assets/inventory_user_inventory.png'

import pageblockerMain from './assets/pageblocker_1.png'
import pageblocker2 from './assets/pageblocker_2.png'
import pageblocker3 from './assets/pageblocker_3.png'

import iotDashboard from './assets/dashboard.png'


const CONFIG = {
  name: "AIT DAOUD Achraf",
  title: "Développement logiciel · IoT · Systèmes communicants",
  description: "Admis à l’ENSEA en cycle ingénieur par apprentissage, je recherche une alternance de 36 mois en développement logiciel, IoT, systèmes embarqués ou systèmes communicants.",
  email: "aitdaoudachraf@gmail.com",
  github: "https://github.com/achraf27",
  linkedin: "https://www.linkedin.com/in/ait-daoud-achraf-129a04355/",

  projects: [
    {
      id: 4,
      title: "Simulateur de capteurs IoT",
      description: "Pipeline IoT simulant des capteurs environnementaux et persistant les données via MQTT",
      tech: ["Python", "MQTT", "Node.js", "SQLite"],
      image: iotDashboard,
      images: [iotDashboard],
      github: "https://github.com/achraf27/iot-sensor-simulator",
      features: [
        "Simulation de capteurs température (-10°C à +50°C) et humidité (30-80%)",
        "Publication des données toutes les 4 secondes via protocole MQTT",
        "Souscription Node.js au broker EMQX et réception en temps réel",
        "Persistance des données capteurs dans une base SQLite"
      ],
      challenges: [
        "Comprendre et implémenter le protocole MQTT et l'architecture publish/subscribe",
        "Synchronisation entre le publisher Python et le subscriber Node.js",
        "Gestion des reconnexions et de la fiabilité du broker"
      ],
      competences: [
        "Protocole MQTT et communication IoT",
        "Architecture publish/subscribe",
        "Simulation de flux de données capteurs",
        "Persistance de données temps réel"
      ],
      pourquoi: `
J'ai initié ce projet pour explorer concrètement les problématiques IoT sans avoir de matériel physique.

L'idée était de simuler un vrai pipeline de données : un capteur publie des mesures via MQTT,
un serveur souscrit au topic et stocke les données en base   exactement ce qu'on retrouve dans des architectures industrielles réelles.

Ce projet m'a permis de comprendre les protocoles de communication IoT et l'architecture distribuée publish/subscribe.
      `
    },
    {
      id: 1,
      title: "Logiciel de gestion d'inventaire",
      description: "Logiciel full-stack de gestion d'inventaire avec suivi des stocks, CRUD produits et interface intuitive",
      tech: ["React.js", "Express.js", "Node.js", "PostgreSQL", "Bootstrap", "JWT", "Vercel", "Render"],
      image: inventory,
      images: [inventoryDashboard, inventoryAdminPage, UserInventory, inventoryAdminSupplier],
      github: "https://github.com/achraf27/inventory-app",
      Lien: "https://inventory-app-drab-mu.vercel.app",
      features: [
        "Authentification sécurisée avec gestion des rôles (Admin / Utilisateur)",
        "CRUD complet des produits",
        "Suivi des stocks en temps réel",
        "Interface responsive et intuitive",
        "Gestion des utilisateurs"
      ],
      challenges: [
        "Mise en place d'une architecture full-stack cohérente",
        "Gestion de l'authentification et des autorisations avec JWT",
        "Communication sécurisée entre le frontend et le backend",
        "Déploiement et configuration de l'application en production"
      ],
      competences: [
        "Architecture full-stack",
        "Développement d'API REST",
        "Authentification JWT",
        "Gestion de base de données PostgreSQL",
        "Déploiement d'application web"
      ],
      pourquoi: `
J'ai réalisé ce projet afin de démontrer concrètement mes compétences en développement full-stack.

Ce projet a représenté un véritable challenge, notamment sur les aspects architecturaux,
la communication entre le frontend et le backend, ainsi que le déploiement de l'application.

Il m'a permis de gagner en confiance et de mieux comprendre les problématiques rencontrées dans une application professionnelle.
      `,
      credentials: {
        admin: { username: "JeanDupont", password: "password123" },
        user:  { username: "MarieMartin", password: "password123" }
      },
      backendLink: "https://inventory-app-ospi.onrender.com/"
    },
    {
      id: 2,
      title: "Application de messagerie instantanée (en cours)",
      description: "Application de chat en temps réel avec gestion des utilisateurs et échanges instantanés de messages",
      tech: ["React Native", "Express.js", "PostgreSQL", "Socket.io"],
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
        "Structuration d'un projet React Native"
      ],
      competences: [
        "Communication temps réel avec Socket.io",
        "Développement mobile avec React Native",
        "Gestion d'API backend",
        "Modélisation de base de données"
      ],
      pourquoi: `
J'ai toujours été curieux de comprendre le fonctionnement des applications de messagerie instantanée.

Ce projet est né de cette curiosité et m'a permis d'explorer les problématiques liées
au temps réel, à la gestion des connexions et aux échanges de données instantanés.

Le projet est encore en cours de développement et continue d'évoluer au fil de mes apprentissages.
      `
    },
    {
      id: 3,
      title: "PageBlocker",
      description: "Extension Chrome permettant de bloquer des pages web distrayantes, publiée sur le Chrome Web Store",
      tech: ["JavaScript", "Chrome API"],
      image: pageblockerMain,
      images: [pageblocker2, pageblocker3],
      github: "",
      Lien: "https://chromewebstore.google.com/detail/pageblocker/bclopoicblmkamoagdllhlgaeajhoppi",
      features: [
        "Blocage de pages par URL",
        "Activation / désactivation rapide depuis l'icône",
        "Liste personnalisée de sites bloqués"
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
J'ai démarré ce projet dans le but de répondre à un besoin que j'ai moi-même ressenti : celui de pouvoir bloquer
des pages susceptibles de me distraire. Bien qu'il y ait déjà des outils disponibles, j'ai décidé de créer le mien
dans un esprit de challenge et pour monter en compétence.

Au final j'ai pu produire un outil fonctionnel, que j'ai par ailleurs publié sur le Chrome Store.
      `
    }
  ],

 skillsCategories: [
    { title: "Langages", skills: ["Python", "C++", "JavaScript / TypeScript", "Dart", "Java", "PHP", "WinDev"] },
    { title: "Développement logiciel", skills: ["API REST", "Tests unitaires", "Architecture applicative", "Automatisation"] },
    { title: "Web & API", skills: ["React.js", "Node.js", "Express.js", "Flask", "Angular", "Laravel"] },
    { title: "IoT & systèmes", skills: ["MQTT", "EMQX", "Simulation de capteurs", "Publisher / Subscriber"] },
    { title: "Bases de données", skills: ["PostgreSQL", "SQLite", "SQL", "MongoDB"] },
    { title: "Outils / Méthodes", skills: ["Git", "Docker", "Postman", "n8n", "Méthode Agile"] }
  ]
};

export default function App() {
  const [darkMode, setDarkMode]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [currentImage, setCurrentImage]   = useState(0);

  useEffect(() => { setCurrentImage(0); }, [selectedProject]);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString());
    if (darkMode) document.documentElement.classList.add('dark');
    else          document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const dm = darkMode;

  return (
    <div className={`min-h-screen transition-colors duration-300 ${dm ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>

      {/* ── Navigation ──────────────────────────────────────────────────── */}
      <nav className={`fixed top-0 w-full z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        dm ? 'bg-gray-900/90 border-gray-800' : 'bg-white/90 border-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Monogram */}
          <button onClick={() => scrollToSection('home')} className="text-xl font-black tracking-tight cursor-pointer select-none">
            <span className="text-green-500">A</span>
            <span className={dm ? 'text-white' : 'text-gray-900'}>A</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {(['home','projects','skills','contact'] as const).map((id, i) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-sm font-medium transition-colors hover:text-green-500 cursor-pointer ${dm ? 'text-gray-400' : 'text-gray-600'}`}
              >
                {['Accueil','Projets','Compétences','Contact'][i]}
              </button>
            ))}
            <button
              onClick={() => setDarkMode(!dm)}
              className={`p-2 rounded-full transition cursor-pointer ${dm ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              {dm ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setDarkMode(!dm)} className="p-2">
              {dm ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className={`md:hidden border-t px-6 py-4 flex flex-col gap-4 ${dm ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-100'}`}>
            {[['home','Accueil'],['projects','Projets'],['skills','Compétences'],['contact','Contact']].map(([id, label]) => (
              <button key={id} onClick={() => scrollToSection(id)} className="text-left text-sm font-medium hover:text-green-500 transition cursor-pointer">
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden">
        {/* Decorative blobs */}
        <div className={`absolute top-1/3 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl pointer-events-none ${dm ? 'bg-green-500/5' : 'bg-green-400/8'}`} />
        <div className={`absolute bottom-1/4 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none ${dm ? 'bg-pink-500/5' : 'bg-pink-400/8'}`} />

        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-5 gap-16 items-center">

            {/* Left   text */}
            <div className="md:col-span-3 animate-fade-in-up">

              {/* Badge disponibilité */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-8 border border-green-500/30 text-green-500 bg-green-500/5">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Opérationel pour une alternance
                </div>

              {/* Nom */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight mb-4">
                AIT DAOUD
                <br />
                <span className="bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Achraf
                </span>
              </h1>

              {/* Titre */}
              <p className={`text-lg md:text-xl font-semibold mb-5 ${dm ? 'text-gray-300' : 'text-gray-700'}`}>
                Développement logiciel &nbsp;·&nbsp; IoT &nbsp;·&nbsp; Systèmes communicants
              </p>

              {/* Description */}
              <p className={`text-base md:text-lg max-w-xl leading-relaxed mb-10 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                {CONFIG.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-10">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-green-500 text-white font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/25 cursor-pointer"
                >
                  Voir mes projets <ArrowRight size={18} />
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`flex items-center gap-2 px-7 py-3.5 rounded-full border-2 font-semibold transition-all cursor-pointer ${
                    dm ? 'border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-500'
                       : 'border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500'
                  }`}
                >
                  Me contacter
                </button>
              </div>

              {/* Socials */}
              <div className="flex items-center gap-5">
                <a href={CONFIG.github} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm font-medium transition hover:text-green-500 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                  <GitHubIcon size={16} /> GitHub
                </a>
                <span className={`h-4 w-px ${dm ? 'bg-gray-700' : 'bg-gray-300'}`} />
                <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer"
                  className={`flex items-center gap-1.5 text-sm font-medium transition hover:text-green-500 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                  <LinkedInIcon size={16} /> LinkedIn
                </a>
                <span className={`h-4 w-px ${dm ? 'bg-gray-700' : 'bg-gray-300'}`} />
                <a href={`mailto:${CONFIG.email}`}
                  className={`flex items-center gap-1.5 text-sm font-medium transition hover:text-green-500 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                  <Mail size={16} /> Email
                </a>
              </div>
            </div>

            {/* Right   terminal card */}
            <div className="hidden md:flex md:col-span-2 justify-center animate-fade-in anim-delay-400">
              <div
                className={`w-full max-w-xs rounded-2xl overflow-hidden border ${
                  dm ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
                }`}
                style={dm ? { boxShadow: '0 25px 50px -12px rgba(249,115,22,0.12)' } : { boxShadow: '0 25px 50px -12px rgba(0,0,0,0.08)' }}
              >
                {/* Barre terminal */}
                <div className={`flex items-center gap-1.5 px-4 py-3 border-b ${dm ? 'bg-gray-900 border-gray-700' : 'bg-gray-200 border-gray-300'}`}>
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <span className={`ml-3 text-xs tracking-wide ${dm ? 'text-gray-500' : 'text-gray-400'}`}>portfolio.sh</span>
                </div>

                {/* Corps terminal */}
                <div className="p-5 font-mono text-sm space-y-2">
                  <div>
                    <span className="text-green-500">$ </span>
                    <span className={dm ? 'text-gray-300' : 'text-gray-600'}>whoami</span>
                  </div>
                  <div className={`pl-4 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>Développeur logiciel orienté IoT</div>

                  <div className="pt-1">
                    <span className="text-green-500">$ </span>
                    <span className={dm ? 'text-gray-300' : 'text-gray-600'}>skills --top</span>
                  </div>
                  <div className={`pl-4 space-y-1 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                    <div><span className="text-green-400">▸ </span>Python, C++, TypeScript</div>
                    <div><span className="text-green-400">▸ </span>API REST, Docker, PostgreSQL</div>
                    <div><span className="text-green-400">▸ </span>MQTT, IoT, systèmes communicants</div>
                  </div>

                  <div className="pt-1">
                    <span className="text-green-500">$ </span>
                    <span className={dm ? 'text-gray-300' : 'text-gray-600'}>projects --count</span>
                  </div>
                  <div className={`pl-4 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                    <span className="text-green-400 font-bold">4</span> projets réalisés
                  </div>

                  <div className="pt-1 flex items-center gap-1">
                    <span className="text-green-500">$ </span>
                    <span className={`inline-block w-2 h-4 animate-pulse rounded-sm ${dm ? 'bg-gray-300' : 'bg-gray-500'}`} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={() => scrollToSection('projects')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer opacity-50 hover:opacity-90 transition"
        >
          <span className={`text-xs font-semibold tracking-widest uppercase ${dm ? 'text-gray-600' : 'text-gray-400'}`}>scroll</span>
          <ChevronDown size={16} className={`animate-bounce ${dm ? 'text-gray-600' : 'text-gray-400'}`} />
        </button>
      </section>

      {/* ── Projets ─────────────────────────────────────────────────────── */}
      <section id="projects" className={`py-24 px-6 ${dm ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Mes réalisations</p>
            <h2 className="text-4xl md:text-5xl font-black">Projets</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CONFIG.projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  dm
                    ? 'bg-gray-900 border border-gray-700 hover:border-green-500/40 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]'
                    : 'bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-green-200'
                }`}
              >
                {/* Image avec overlay au hover */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 left-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold hover:bg-gray-100 transition">
                        <GitHubIcon size={12} /> Code
                      </a>
                    )}
                    {project.Lien && (
                      <a href={project.Lien} target="_blank" rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500 text-white text-xs font-semibold hover:bg-green-600 transition">
                        <ExternalLink size={12} /> Démo
                      </a>
                    )}
                  </div>
                </div>

                {/* Corps de la carte */}
                <div className="p-5">
                  <h4 className={`text-base font-bold mb-2 transition-colors group-hover:text-green-500 ${dm ? 'text-gray-100' : 'text-gray-900'}`}>
                    {project.title}
                  </h4>
                  <p className={`text-sm mb-4 leading-relaxed line-clamp-2 ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        dm ? 'bg-gray-800 text-green-400' : 'bg-green-50 text-green-600'
                      }`}>
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        dm ? 'bg-gray-800 text-gray-500' : 'bg-gray-100 text-gray-500'
                      }`}>
                        +{project.tech.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Compétences ─────────────────────────────────────────────────── */}
      <section id="skills" className={`py-24 px-6 ${dm ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs font-bold text-green-500 uppercase tracking-widest mb-3">Ce que je maîtrise</p>
            <h2 className="text-4xl md:text-5xl font-black">Compétences</h2>
          </div>

          <div className="space-y-10">
            {CONFIG.skillsCategories.map((category, idx) => (
              <div key={idx}>
                {/* Titre de catégorie + ligne */}
                <div className="flex items-center gap-4 mb-5">
                  <h3 className={`text-lg font-black tracking-tight whitespace-nowrap ${dm ? 'text-white' : 'text-gray-900'}`}>
                    {category.title}
                  </h3>
                  <div className={`flex-1 h-px ${dm ? 'bg-gray-600' : 'bg-gray-300'}`} />
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span key={i} className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-default ${
                      dm
                        ? 'bg-gray-700 text-gray-100 border border-gray-600 hover:bg-green-500 hover:border-green-500 hover:text-white'
                        : 'bg-white text-gray-800 border border-gray-200 shadow-sm hover:border-green-400 hover:text-green-600 hover:shadow-green-100 hover:shadow-md'
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ─────────────────────────────────────────────────────── */}
      <section id="contact" className={`py-24 px-6 ${dm ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Échangeons<br />ensemble
          </h2>
          <p className={`text-lg mb-12 leading-relaxed ${dm ? 'text-gray-400' : 'text-gray-500'}`}>
            Vous pouvez me contacter pour une opportunité d’alternance, un échange ou toute information complémentaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${CONFIG.email}`}
              className="flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-green-500 text-white font-semibold hover:bg-green-600 transition shadow-lg shadow-green-500/20"
            >
              <Mail size={20} />
              {CONFIG.email}
            </a>
            <a
              href={CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl border-2 font-semibold transition ${
                dm ? 'border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-500'
                   : 'border-gray-200 text-gray-700 bg-white hover:border-green-500 hover:text-green-500'
              }`}
            >
              <LinkedInIcon size={20} />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────────── */}
      <footer className={`py-6 text-center border-t ${dm ? 'bg-gray-900 border-gray-800 text-gray-600' : 'bg-white border-gray-100 text-gray-400'}`}>
        <p className="text-sm">© 2026 {CONFIG.name}. Tous droits réservés.</p>
      </footer>

      {/* ── Modal projet ────────────────────────────────────────────────── */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`max-w-3xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto border ${
              dm ? 'bg-gray-900 text-white border-gray-800' : 'bg-white text-gray-900 border-gray-100'
            }`}
          >
            {/* ── Image / Carrousel ── */}
            {selectedProject.images && selectedProject.images.length > 1 ? (
              <div className="relative">
                <div className={`w-full flex items-center justify-center ${dm ? 'bg-gray-950' : 'bg-gray-100'}`} style={{ minHeight: '20rem', maxHeight: '55vh' }}>
                  <img
                    src={selectedProject.images[currentImage]}
                    alt={`${selectedProject.title} - ${currentImage + 1}`}
                    className="w-full object-contain"
                    style={{ maxHeight: '55vh' }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                {/* Compteur */}
                <div className="absolute top-3 right-3 bg-black/40 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm font-medium">
                  {currentImage + 1} / {selectedProject.images.length}
                </div>
                {/* Flèches */}
                <button
                  onClick={() => setCurrentImage(currentImage === 0 ? selectedProject.images.length - 1 : currentImage - 1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-black/65 text-white text-xl font-bold rounded-full backdrop-blur-sm transition"
                >
                  ‹
                </button>
                <button
                  onClick={() => setCurrentImage(currentImage === selectedProject.images.length - 1 ? 0 : currentImage + 1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-black/40 hover:bg-black/65 text-white text-xl font-bold rounded-full backdrop-blur-sm transition"
                >
                  ›
                </button>
                {/* Indicateurs (pill active) */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                  {selectedProject.images.map((_: string, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImage(idx)}
                      className={`rounded-full transition-all ${idx === currentImage ? 'w-5 h-2 bg-green-500' : 'w-2 h-2 bg-white/50 hover:bg-white/80'}`}
                    />
                  ))}
                </div>
              </div>
            ) : (
              <div className={`relative w-full flex items-center justify-center ${dm ? 'bg-gray-950' : 'bg-gray-100'}`} style={{ minHeight: '16rem', maxHeight: '50vh' }}>
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-contain" style={{ maxHeight: '50vh' }} />
              </div>
            )}

            {/* ── Corps ── */}
            <div className="p-6 md:p-8">

              {/* Titre + description */}
              <div className="mb-7">
                <h3 className="text-2xl md:text-3xl font-black leading-tight mb-2">{selectedProject.title}</h3>
                <p className={`text-sm leading-relaxed ${dm ? 'text-gray-400' : 'text-gray-500'}`}>{selectedProject.description}</p>
              </div>

              {/* Contexte */}
              {selectedProject.pourquoi && (
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500">Contexte</span>
                    <div className={`flex-1 h-px ${dm ? 'bg-gray-800' : 'bg-gray-100'}`} />
                  </div>
                  <div className={`border-l-2 border-green-500/40 pl-4 ${dm ? 'text-gray-400' : 'text-gray-600'}`}>
                    <p className="text-sm leading-relaxed whitespace-pre-line">{selectedProject.pourquoi.trim()}</p>
                  </div>
                </div>
              )}

              {/* Backend link */}
              {selectedProject.backendLink && (
                <div className={`mb-7 flex items-start gap-3 rounded-xl px-4 py-3 text-sm ${dm ? 'bg-gray-800' : 'bg-gray-50'}`}>
                  <span className="text-green-500 mt-0.5 flex-shrink-0">⚙</span>
                  <span>
                    <span className={dm ? 'text-gray-400' : 'text-gray-600'}>Backend : </span>
                    <a href={selectedProject.backendLink} target="_blank" rel="noopener noreferrer"
                      className="font-semibold text-green-500 hover:text-green-600 underline underline-offset-2 break-all">
                      {selectedProject.backendLink}
                    </a>
                  </span>
                </div>
              )}

              {/* Fonctionnalités */}
              {selectedProject.features && (
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500">Fonctionnalités</span>
                    <div className={`flex-1 h-px ${dm ? 'bg-gray-800' : 'bg-gray-100'}`} />
                  </div>
                  <div className="space-y-2">
                    {selectedProject.features.map((f: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 text-green-500 font-bold flex-shrink-0">✓</span>
                        <span className={`text-sm ${dm ? 'text-gray-400' : 'text-gray-600'}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Défis techniques */}
              {selectedProject.challenges && (
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500">Défis techniques</span>
                    <div className={`flex-1 h-px ${dm ? 'bg-gray-800' : 'bg-gray-100'}`} />
                  </div>
                  <div className="space-y-2">
                    {selectedProject.challenges.map((c: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-0.5 text-green-500 flex-shrink-0">⚡</span>
                        <span className={`text-sm ${dm ? 'text-gray-400' : 'text-gray-600'}`}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Identifiants */}
              {selectedProject.credentials && (
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500">Identifiants de test</span>
                    <div className={`flex-1 h-px ${dm ? 'bg-gray-800' : 'bg-gray-100'}`} />
                  </div>
                  <div className={`grid sm:grid-cols-2 gap-4 rounded-xl p-4 font-mono text-sm ${dm ? 'bg-gray-800' : 'bg-gray-50'}`}>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2">Admin</p>
                      <p className={dm ? 'text-gray-300' : 'text-gray-700'}>
                        <span className={`${dm ? 'text-gray-500' : 'text-gray-400'} mr-1`}>user</span>
                        {selectedProject.credentials.admin.username}
                      </p>
                      <p className={dm ? 'text-gray-300' : 'text-gray-700'}>
                        <span className={`${dm ? 'text-gray-500' : 'text-gray-400'} mr-1`}>pass</span>
                        {selectedProject.credentials.admin.password}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2">Utilisateur</p>
                      <p className={dm ? 'text-gray-300' : 'text-gray-700'}>
                        <span className={`${dm ? 'text-gray-500' : 'text-gray-400'} mr-1`}>user</span>
                        {selectedProject.credentials.user.username}
                      </p>
                      <p className={dm ? 'text-gray-300' : 'text-gray-700'}>
                        <span className={`${dm ? 'text-gray-500' : 'text-gray-400'} mr-1`}>pass</span>
                        {selectedProject.credentials.user.password}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Compétences développées */}
              {selectedProject.competences && (
                <div className="mb-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-bold uppercase tracking-widest text-green-500">Compétences développées</span>
                    <div className={`flex-1 h-px ${dm ? 'bg-gray-800' : 'bg-gray-100'}`} />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.competences.map((s: string, idx: number) => (
                      <span key={idx} className={`px-3 py-1.5 rounded-full text-xs font-medium border ${
                        dm ? 'border-gray-700 text-gray-300 bg-gray-800/50' : 'border-gray-200 text-gray-600 bg-gray-50'
                      }`}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-green-500">Technologies</span>
                  <div className={`flex-1 h-px ${dm ? 'bg-gray-800' : 'bg-gray-100'}`} />
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string, idx: number) => (
                    <span key={idx} className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${
                      dm ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-green-50 text-green-600 border-green-200'
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Pied de modal */}
              <div className={`flex justify-between items-center pt-5 border-t ${dm ? 'border-gray-800' : 'border-gray-100'}`}>
                <div className="flex gap-3">
                  {selectedProject.github && (
                    <a href={selectedProject.github} target="_blank" rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border transition ${
                        dm ? 'border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-500'
                           : 'border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500'
                      }`}>
                      <GitHubIcon size={15} /> Code
                    </a>
                  )}
                  {selectedProject.Lien && (
                    <a href={selectedProject.Lien} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-green-500 text-white hover:bg-green-600 transition">
                      <ExternalLink size={15} /> Voir le projet
                    </a>
                  )}
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className={`p-2 rounded-xl transition cursor-pointer ${dm ? 'hover:bg-gray-800 text-gray-500 hover:text-gray-300' : 'hover:bg-gray-100 text-gray-400 hover:text-gray-600'}`}
                >
                  <X size={20} />
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

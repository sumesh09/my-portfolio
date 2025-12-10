export default function Navbar({ activeSection }) {
    const navItems = [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" }
    ];
const handleNavClick = (id) => {    
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav className="fixed top-0 left-0 w-full flex justify-center gap-8 py-6 bg-black/40 backdrop-blur-xl z-50">
        {navItems.map((n) => (
          <button
            key={n.id}
            onClick={() => handleNavClick(n.id)}
            className={`text-lg transition-all ${activeSection === n.id ? "text-cyan-400 font-semibold" : "text-gray-400"}`}
          >
            {n.label}
          </button>
        ))}
        
         <a
          href="/resume.pdf"
          download
          className="px-4 py-2 rounded-xl border border-blue-400 text-blue-400 dark:text-blue-300 dark:border-blue-300 
          transition-all hover:bg-blue-400 hover:text-black dark:hover:text-black"
        >
          Download Resume
        </a>
      </nav>
  );
}

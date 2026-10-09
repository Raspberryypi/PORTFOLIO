import { Moon, Sun } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const links = ['Home', 'Projects', 'Certifications', 'Contact'];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-xl tracking-tight">KL<span className="text-accent dark:text-accentDark">.</span></span>
        
        <div className="flex items-center gap-6">
          <ul className="hidden md:flex gap-6 text-sm font-medium">
            {links.map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-accent dark:hover:text-accentDark transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
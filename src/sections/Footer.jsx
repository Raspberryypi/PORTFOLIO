import { portfolioData } from '../data/content';

export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-slate-200 dark:border-slate-800 mt-20 text-center">
      <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
        I'm currently looking for new opportunities. Whether you have a question or just want to say hi, my inbox is always open!
      </p>
      <a href={portfolioData.hero.email} className="px-8 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accentDark transition">
        Say Hello
      </a>
      <p className="mt-16 text-sm text-slate-500">
        © {new Date().getFullYear()} {portfolioData.hero.name}. Built with React & Tailwind.
      </p>
    </footer>
  );
}
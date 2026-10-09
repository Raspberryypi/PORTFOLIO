import { useTheme} from './hooks/useTheme';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import Certifications from './sections/Certifications';
import Footer from './sections/Footer';

function App() {
  const [theme, toggleTheme] = useTheme();

  return (
    <div className="font-sans antialiased selection:bg-accent/30 selection:text-accentDark min-h-screen">
     <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Projects />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}

export default App; 
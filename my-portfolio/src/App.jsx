import './index.css';
import Portfolio from "./components/Portfolio";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100">
      {/* <Navbar />
      <Hero />
      <Skills skills={skills} />
      <Projects data={projects} />
      <Contact />
      <Footer /> */}
      <Portfolio />
    </div>
  );
}

import Navbar from "./components/Navbar";
import Hero from "./components/sections/Hero";
import Skills from "./components/sections/Skills"; 
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />
      
      <main>
        <Hero />
        
        <Skills /> 
        
        <Projects />

        <div className="h-20"></div>
      </main>
    </div>
  );
}

export default App;
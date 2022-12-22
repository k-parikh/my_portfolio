import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Certificate from "./components/Certificate";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Skills />
      <Certificate />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;

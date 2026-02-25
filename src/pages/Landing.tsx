import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import '../styles/Home.css';
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

export default function Landing() {
  return (
    <div className="dark:bg-[#010e28] bg-[#EBE9E9] dark:[background-image:linear-gradient(to_bottom,_#082740_1px,_transparent_1px),linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-image:linear-gradient(to_bottom,_#c2c0c0_1px,_transparent_1px),linear-gradient(to_right,_#c2c0c0_1px,_transparent_1px)] [background-size:30px_30px,30px_30px] bg-center animate-bgmove text-[#131360] dark:text-white">
      <NavBar /> 
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
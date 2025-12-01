import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import About from "../components/About";
import '../styles/Home.css';
import Experience from "../components/Experience";

export default function LandingEs() {
  return (
    <div className="dark:bg-gray-800  bg-[#010e28] [background-image:linear-gradient(to_bottom,_#082740_1px,_transparent_1px),linear-gradient(to_right,_#082740_1px,_transparent_1px)] [background-size:30px_30px,30px_30px] bg-center animate-bgmove">
      <NavBar /> 
      <Hero />
      <About />
      <Experience />
      {/*<Contact />*/}
    </div>
  );
}
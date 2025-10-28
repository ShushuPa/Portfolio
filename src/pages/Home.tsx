import DotGrid from "../components/DotGrid";
import Buttons from "../components/Buttons";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router";

export default function Home() {

  return (
    <div className="relative w-full h-screen transition">
      <NavBar />
      <DotGrid />
      <section className="min-h-screen flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
        <NavLink to="/en">
          <Buttons label={"Click Here"}/>
        </NavLink>
        <NavLink to="/es">
          <Buttons label={"Clickea Acá"}/>
        </NavLink>
      </section>
    </div>
  );
}

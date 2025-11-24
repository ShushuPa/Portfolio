import DotGrid from "../components/DotGrid";
import Buttons from "../components/Buttons";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { i18n } = useTranslation();

  return (
    <div className="relative w-full h-screen transition overflow-hidden">
      <NavBar />
      <DotGrid />
      <section className="min-h-screen flex flex-col items-center justify-center md:flex-row md:items-center md:justify-center">
        <div className="m-8">
        <NavLink to="/landing" onClick={() => i18n.changeLanguage("en")}>
            <Buttons label={"Click Here"}/>
        </NavLink>
        </div>
        <div className="m-8">
        <NavLink to="/landing" onClick={() => i18n.changeLanguage("es")}>
            <Buttons label={"Clickea Acá"}/>
        </NavLink>
        </div>
      </section>
    </div>
  );
}

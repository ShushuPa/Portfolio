import NavBar from "../components/NavBar";
import Yo from '../assets/yo.webp';

export default function LandingEs() {
  return (
    <div className="relative w-full h-screen transition dark:bg-gray-800">
      <NavBar />
      <section className="min-h-screen flex flex-col items-center justify-center">
        <div >
            <img src={Yo} alt="Foto Perfil" width={200} height={200} className="aspect-square rounded-full object-cover border-radius border-2 border-gray-800 dark:border-gray-300"/>
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4 dark:text-white text-gray-800">Bienvenido a mi Portafolio</h1>
        </div>
      </section>
    </div>
  );
}
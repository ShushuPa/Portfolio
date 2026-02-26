import Yo from '../assets/yo.webp';
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
    <section id="hero" className="min-h-screen pt-24 pb-20 px-4 scroll-mt-20 flex items-center">
        <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 justify-items-center p-6 md:p-10 rounded-lg border border-border/50 bg-background/40 backdrop-blur-sm">
                <div>
                    <img src={Yo} alt="Foto Perfil" width={200} height={200} className="aspect-square rounded-full object-cover border-radius border-2 border-[#2577FF] dark:border-gray-300"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4 dark:text-white text-[#131360]">Pablo Maitini</h1>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6 dark:text-gray-300 text-[#131360]/80">{t("hero.title")}</h2>
                </div>
            </div>
        </div>
    </section>
    );
};
      
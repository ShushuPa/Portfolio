import Yo from '../assets/yo.webp';
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <div>
            <section className="min-h-screen flex flex-col items-center justify-center">
                <div>
                    <img src={Yo} alt="Foto Perfil" width={200} height={200} className="aspect-square rounded-full object-cover border-radius border-2 border-gray-800 dark:border-gray-300"/>
                </div>
                <div>
                    <h1 className="text-4xl font-bold mb-4 dark:text-white text-gray-800">Pablo Maitini</h1>
                </div>
                <div>
                    <h2 className="text-2xl font-bold mb-6 dark:text-gray-300 text-gray-500">{t("home.title")}</h2>
                </div>
            </section>
        </div> 
    );
};
      
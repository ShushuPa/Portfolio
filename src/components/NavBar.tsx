import { NavLink } from "react-router";
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import useTheme  from '../hooks/useTheme';
import Home_Dark from '../assets/home_dark.svg';
import Home_Light from '../assets/home_light.svg';
import Language_light from '../assets/language-light.svg';
import Language_dark from '../assets/language-dark.svg';
import { useTranslation } from "react-i18next";

export default function NavBar() {
 const { theme, toggleTheme } = useTheme();
 const { i18n } = useTranslation();

 return (
        <nav className="p-4 dark:bg-gray-800 flex justify-between items-center">
            <NavLink to="/">
                <img src={theme ? Home_Light : Home_Dark} alt="Home" width="30" height="30" className="ml-12 cursor-pointer"/>
            </NavLink>
            <div onClick={() => { i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}} className="flex ml-auto mr-4 hover:underline">
                <img src={theme ? Language_light : Language_dark} alt="Home" width="24" height="24" className="dark:hover:bg-gray-50/50 hover:rounded-lg hover:bg-gray-200 rounded-lg cursor-pointer" style={{display: location.pathname === "/landing" ? "block": "none"}}/>
            </div>
            <img src={theme ? Sun : Moon} className="dark:hover:bg-gray-50/50 hover:rounded-md hover:bg-gray-200 rounded-md cursor-pointer" alt="Theme Toggle" width="32" height="32" onClick={toggleTheme} />
        </nav>
    );
};

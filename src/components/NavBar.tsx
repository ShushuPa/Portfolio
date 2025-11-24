import { NavLink } from "react-router";
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import useTheme  from '../hooks/useTheme';
import Home_Dark from '../assets/home_dark.svg';
import Home_Light from '../assets/home_light.svg';
import { useTranslation } from "react-i18next";

export default function NavBar() {
 const { theme, toggleTheme } = useTheme();
 const { i18n } = useTranslation();

 return (
        <nav className="p-4 dark:bg-gray-800 flex justify-between items-center">
            <NavLink to="/">
                <img src={theme ? Home_Light : Home_Dark} alt="Home" width="32" height="32" className="ml-12"/>
            </NavLink>
            <NavLink to="/landing" onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")} className="flex ml-auto mr-4 hover:underline">ES</NavLink>
            <img src={theme ? Sun : Moon} className="dark:hover:bg-gray-50/50 hover:rounded-md hover:bg-gray-200 rounded-md" alt="Theme Toggle" width="32" height="32" onClick={toggleTheme} />
        </nav>
    );
};

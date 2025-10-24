import { NavLink } from "react-router";
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import useTheme  from '../hooks/useTheme';

export default function NavBar() {
 const { theme, toggleTheme } = useTheme();

 return (
        <nav className="flex justify-end-safe items-center p-4 dark:bg-gray-800">
            <NavLink to="/" className="hover:underline">
                <img src={theme ? Sun : Moon} className="dark:hover:bg-gray-50/50 hover:rounded-md hover:bg-gray-200 rounded-md" alt="Theme Toggle" width="32" height="32" onClick={toggleTheme} />
            </NavLink>
        </nav>
    );
};

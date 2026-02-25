import { NavLink, useLocation } from "react-router";
import { useState } from "react";
import Moon from '../assets/moon.svg';
import Sun from '../assets/sun.svg';
import useTheme  from '../hooks/useTheme';
import Home_Dark from '../assets/home_dark.svg';
import Home_Light from '../assets/home_light.svg';
import Language_light from '../assets/language-light.svg';
import Language_dark from '../assets/language-dark.svg';
import { useTranslation } from "react-i18next";

const sections = ["about", "experience", "projects", "contact"] as const;

export default function NavBar() {
 const { theme, toggleTheme } = useTheme();
 const { t, i18n } = useTranslation();
 const location = useLocation();
 const isLanding = location.pathname === "/landing";
 const [menuOpen, setMenuOpen] = useState(false);

 const scrollTo = (id: string) => {
   document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
   setMenuOpen(false);
 };

 return (
   <>
     <nav className="px-4 py-3 md:px-8 bg-background/10 backdrop-blur-sm flex items-center fixed top-0 left-0 right-0 z-50 border-b border-border/30">
       <NavLink to="/" className="shrink-0 group">
         <img src={theme === "dark" ? Home_Light : Home_Dark} alt="Home" width="28" height="28" className="cursor-pointer transition-transform duration-200 group-hover:scale-110"/>
       </NavLink>

       {isLanding && (
         <ul className="hidden md:flex items-center gap-6 ml-8">
           {sections.map(id => (
             <li key={id}>
               <button
                 onClick={() => scrollTo(id)}
                 className="relative text-sm font-medium text-foreground/70 hover:text-primary transition-all duration-200 cursor-pointer pb-1 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:rounded-full after:transition-all after:duration-300"
               >
                 {t(`navbar.${id}`)}
               </button>
             </li>
           ))}
         </ul>
       )}

       <div className="flex items-center gap-3 ml-auto">
         {isLanding && (
           <button
             onClick={() => i18n.changeLanguage(i18n.language === "es" ? "en" : "es")}
             className="cursor-pointer rounded-lg p-1 dark:hover:bg-gray-50/50 hover:bg-[#131360]/10 transition"
           >
             <img src={theme === "dark" ? Language_light : Language_dark} alt="Language" width="22" height="22"/>
           </button>
         )}

         <button
           onClick={toggleTheme}
           className="cursor-pointer rounded-md p-1 dark:hover:bg-gray-50/50 hover:bg-[#131360]/10 transition"
         >
           <img src={theme === "dark" ? Sun : Moon} alt="Theme Toggle" width="28" height="28"/>
         </button>

         {isLanding && (
           <button
             onClick={() => setMenuOpen(prev => !prev)}
             className="md:hidden p-1.5 rounded-md cursor-pointer dark:hover:bg-gray-50/50 hover:bg-[#131360]/10 transition"
             aria-label="Toggle menu"
           >
             {menuOpen ? (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="18" y1="6" x2="6" y2="18"/>
                 <line x1="6" y1="6" x2="18" y2="18"/>
               </svg>
             ) : (
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                 <line x1="3" y1="6" x2="21" y2="6"/>
                 <line x1="3" y1="12" x2="21" y2="12"/>
                 <line x1="3" y1="18" x2="21" y2="18"/>
               </svg>
             )}
           </button>
         )}
       </div>
     </nav>

     {/* Mobile menu overlay */}
     {isLanding && menuOpen && (
       <div className="fixed inset-0 top-[57px] z-40 bg-background/95 backdrop-blur-md md:hidden flex flex-col items-center pt-10 gap-6">
         {sections.map(id => (
           <button
             key={id}
             onClick={() => scrollTo(id)}
             className="text-lg font-semibold text-foreground hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer px-6 py-2 rounded-lg hover:bg-primary/10"
           >
             {t(`navbar.${id}`)}
           </button>
         ))}
       </div>
     )}
   </>
 );
}

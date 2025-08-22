
// import React, { useState, useEffect, useRef } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { useMediaQuery } from "react-responsive";
// import "./NavBar.css";
// import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

// import MobileNavBar from "./MobileNavBar";
// import navbarData from "../../json/data.json"; // ✅ import JSON directly

// const ResponsiveNavBar = () => {
//   const [menu, setMenu] = useState([]);
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const location = useLocation();
//   const navRef = useRef(null);

//   useEffect(() => {
//     if (navbarData && navbarData["0"]) {
//       const localMenu = navbarData["0"].menu || [];
//       setMenu(localMenu);
//     }

//     const handleScroll = () => setIsScrolled(window.scrollY > 30);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleMouseEnter = (index) => {
//     setActiveIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setActiveIndex(null);
//   };

//   const handleClickOutside = (event) => {
//     if (navRef.current && !navRef.current.contains(event.target)) {
//       setActiveIndex(null);
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const isActive = (item) => {
//     if (location.pathname === item.link) return true;
//     if (item.submenu) {
//       return item.submenu.some((sub) => location.pathname === sub.link);
//     }
//     return false;
//   };

//   return (
//     <nav
//       className={`NavBarContainer ${isScrolled ? "scrolled" : "transparent"}`}
//       ref={navRef}
//     >
//       {/* Left: Logo */}
//       <div className="NavLogo">
//         <Link to="/">
//           <img src={navbarData["0"].logo} alt="Logo" className="LogoImage" />
//         </Link>
//         <h2>AMIT SAHA</h2>
//       </div>

//       {/* Right: Menu + Hamburger */}
//       <div className="NavContent">
//         <ul className="NavBarList">
//           {menu.map((item, index) => (
//             <li
//               key={index}
//               className={`NavBarItem ${isActive(item) ? "active" : ""}`}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//             >
//               {item.link && item.link !== "na" ? (
//                 <Link
//                   to={item.link}
//                   className={`NavBarLink ${isActive(item) ? "active" : ""}`}
//                 >
//                   {item.name}
//                   {item.submenu && (
//                     <FaChevronDown
//                       className={`ChevronIcon ${
//                         activeIndex === index ? "rotate-up" : ""
//                       }`}
//                     />
//                   )}
//                 </Link>
//               ) : (
//                 <span className={`NavBarLink ${isActive(item) ? "active" : ""}`}>
//                   {item.name}
//                   {item.submenu && (
//                     <FaChevronDown
//                       className={`ChevronIcon ${
//                         activeIndex === index ? "rotate-up" : ""
//                       }`}
//                     />
//                   )}
//                 </span>
//               )}

//               {/* Submenu */}
//               {item.submenu && (
//                 <ul
//                   className={`SubMenuList ${
//                     activeIndex === index ? "show" : ""
//                   }`}
//                 >
//                   {item.submenu.map((subItem, subIndex) => (
//                     <li key={subIndex} className="SubMenuItem">
//                       <Link
//                         to={subItem.link}
//                         className={`SubMenuLink ${
//                           location.pathname === subItem.link ? "active" : ""
//                         }`}
//                       >
//                         {subItem.name}
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Hamburger Button */}
//         <button className="HamburgerBtn" onClick={() => setIsPopupOpen(true)}>
//           <FaBars />
//         </button>
//       </div>

//       {/* Popup Menu */}
//       {isPopupOpen && (
//         <div className="PopupOverlay">
//           <div className="PopupMenu">
//             <button className="CloseBtn" onClick={() => setIsPopupOpen(false)}>
//               <FaTimes />
//             </button>
//             <ul className="PopupList">
//               {menu.map((item, index) => (
//                 <li key={index} className="PopupItem">
//                   <Link
//                     to={item.link}
//                     className="PopupLink"
//                     onClick={() => setIsPopupOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// const NavBar = () => {
//   const isMobile = useMediaQuery({ maxWidth: 1249 });
//   return isMobile ? <MobileNavBar /> : <ResponsiveNavBar />;
// };

// export default NavBar;








import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import "./NavBar.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

import MobileNavBar from "./MobileNavBar";
import { useLanguage } from "../../pages/LanguageContext/LanguageContext";

const ResponsiveNavBar = () => {
  const { data, toggleLanguage, language } = useLanguage();
  const [menu, setMenu] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  useEffect(() => {
    if (data && data["0"]) {
      const localMenu = data["0"].menu || [];
      setMenu(localMenu);
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [data]);

  const handleMouseEnter = (index) => setActiveIndex(index);
  const handleMouseLeave = () => setActiveIndex(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isActive = (item) => {
    if (location.pathname === item.link) return true;
    if (item.submenu) {
      return item.submenu.some((sub) => location.pathname === sub.link);
    }
    return false;
  };

  return (
    <nav
      className={`NavBarContainer ${isScrolled ? "scrolled" : "transparent"}`}
      ref={navRef}
    >
      {/* Left: Logo */}
      <div className="NavLogo">
        <Link to="/">
          <img src={data["0"].logo} alt="Logo" className="LogoImage" />
        </Link>
        {/* <h2>Anopkumar Pandey</h2> */}
        <h2>ANOPKUMAR PANDEY</h2>
      </div>

      {/* Right: Menu + Hamburger */}
      <div className="NavContent">
        <ul className="NavBarList">
          {menu.map((item, index) => (
            <li
              key={index}
              className={`NavBarItem ${isActive(item) ? "active" : ""}`}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {item.link && item.link !== "na" ? (
                <Link
                  to={item.link}
                  className={`NavBarLink ${isActive(item) ? "active" : ""}`}
                >
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown
                      className={`ChevronIcon ${
                        activeIndex === index ? "rotate-up" : ""
                      }`}
                    />
                  )}
                </Link>
              ) : (
                <span className={`NavBarLink ${isActive(item) ? "active" : ""}`}>
                  {item.name}
                  {item.submenu && (
                    <FaChevronDown
                      className={`ChevronIcon ${
                        activeIndex === index ? "rotate-up" : ""
                      }`}
                    />
                  )}
                </span>
              )}

              {/* Submenu */}
              {item.submenu && (
                <ul
                  className={`SubMenuList ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="SubMenuItem">
                      <Link
                        to={subItem.link}
                        className={`SubMenuLink ${
                          location.pathname === subItem.link ? "active" : ""
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* Language Toggle */}
        <button className="LangBtn" onClick={toggleLanguage}>
          {language === "en" ? "हिंदी" : "EN"}
        </button>

        {/* Hamburger Button */}
        <button className="HamburgerBtn" onClick={() => setIsPopupOpen(true)}>
          <FaBars />
        </button>
      </div>

      {/* Popup Menu */}
      {isPopupOpen && (
        <div className="PopupOverlay">
          <div className="PopupMenu">
            <button className="CloseBtn" onClick={() => setIsPopupOpen(false)}>
              <FaTimes />
            </button>
            <ul className="PopupList">
              {menu.map((item, index) => (
                <li key={index} className="PopupItem">
                  <Link
                    to={item.link}
                    className="PopupLink"
                    onClick={() => setIsPopupOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavBar = () => {
  const isMobile = useMediaQuery({ maxWidth: 1249 });
  return isMobile ? <MobileNavBar /> : <ResponsiveNavBar />;
};

export default NavBar;

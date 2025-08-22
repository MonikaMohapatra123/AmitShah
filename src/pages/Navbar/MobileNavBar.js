import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import "./MobileNavBar.css";
import { useLanguage } from "../../pages/LanguageContext/LanguageContext"; // ✅ import context

const MobileNavBar = () => {
  const { data, toggleLanguage, language } = useLanguage(); // ✅ use language context
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (data && data["0"]) {
      setMenuData(data["0"].menu);
    }
  }, [data]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const toggleSubMenu = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const isActive = (item) => {
    if (location.pathname === item.link) return true;
    if (item.submenu) {
      return item.submenu.some((subItem) => location.pathname === subItem.link);
    }
    return false;
  };

  const storedLogo = data?.["0"]?.logo || "";

  return (
    <nav className="MobileNavBarContainer">
      {/* Header with Logo + Hamburger */}
      <div className="MobileNavBarHeader">
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src={storedLogo} alt="Logo" className="MobileLogoImage" />
        </Link>
        <div className="MobileMenuIcon" onClick={toggleMenu}>
          <div className={`MenuIconTransition ${menuOpen ? "open" : ""}`}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>
      </div>

      {/* Mobile Menu List */}
      <ul className={`MobileNavBarList ${menuOpen ? "show" : ""}`}>
        {menuData.map((item, index) => (
          <li key={index} className="MobileNavBarItem">
            {item.submenu ? (
              <>
                <div
                  className={`MobileNavBarLinkWithIcon ${
                    isActive(item) ? "active" : ""
                  }`}
                  onClick={() => toggleSubMenu(index)}
                >
                  {item.name}
                  <FaPlus
                    className={`MobileMenuIcon-ChevronIcon ${
                      activeIndex === index
                        ? "MobileMenuIcon-rotate-up"
                        : "MobileMenuIcon-rotate-down"
                    }`}
                  />
                </div>
                <ul
                  className={`MobileSubMenuList ${
                    activeIndex === index ? "show" : ""
                  }`}
                >
                  {item.submenu.map((subItem, subIndex) => (
                    <li key={subIndex} className="MobileSubMenuItem">
                      <Link
                        to={subItem.link}
                        className={`MobileSubMenuLink ${
                          location.pathname === subItem.link ? "active" : ""
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                to={item.link}
                className={`MobileNavBarLink ${
                  location.pathname === item.link ? "active" : ""
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}

        {/* ✅ Language Toggle at Bottom */}
        <li className="MobileNavBarItem lang-toggle">
          <button className="MobileLangBtn" onClick={toggleLanguage}>
            {language === "en" ? "हिंदी" : "EN"}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;

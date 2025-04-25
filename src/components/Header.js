"use client";

import { useState } from "react";
import "./Header.css";
import { BiCaretDown } from "react-icons/bi";
import menuData from "../data/Header.json";
import Link from "next/link";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menuKey) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMainMenuClick = (menuLabel) => {
    if (
      menuLabel === "About Us" ||
      menuLabel === "Services" ||
      menuLabel === "Solutions"
    ) {
      <Link href="/" />;
    }
  };

  return (
    <div className="main-container">
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="logo">
            <img
              src="/image/logo-1.png"
              alt="Omega Prime Trading Logo"
              className="logo-img"
            />
          </Link>

          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <span className="hamburger-icon">≡</span>
            )}
          </button>

          <div className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}>
            <ul className="menu-list">
              {menuData.map((menu, index) =>
                menu.items ? (
                  <li className="menu-dropdown" key={index}>
                    <div
                      className="menu-link"
                      onClick={() => handleMainMenuClick(menu.label)}
                    >
                      {menu.label}
                      {menu.dropdownKey && (
                        <BiCaretDown
                          className="menu-icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleDropdown(menu.dropdownKey);
                          }}
                        />
                      )}
                    </div>
                    {menu.dropdownKey && (
                      <ul
                        className={`dropdown ${
                          activeDropdown === menu.dropdownKey ? "active" : ""
                        }`}
                      >
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link href={item.href}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={index}>
                    <Link
                      href={menu.href}
                      className={`menu-link ${menu.isButton ? "btn-contact" : ""}`}
                    >
                      {menu.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
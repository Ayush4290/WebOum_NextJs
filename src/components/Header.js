"use client";

import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { BiCaretDown } from "react-icons/bi";
import menuData from "../data/Header.json";
import Link from "next/link";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleDropdown = (menuKey) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setActiveDropdown(null); // Reset dropdown when toggling mobile menu
  };

  const handleMainMenuClick = (menuKey, event) => {
    event.stopPropagation(); // Prevent event bubbling to document
    toggleDropdown(menuKey);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="main-container">
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="logo">
            <img
              src="/image/logo-1.png"
              alt="Omega Prime Trading Logo"
              className="logo-img"
              width={150}
              height={50}
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

          <div
            className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}
            ref={menuRef}
          >
            <ul className="menu-list">
              {menuData.map((menu, index) =>
                menu.items ? (
                  <li className="menu-dropdown" key={index}>
                    <div
                      className="menu-link"
                      onClick={(event) => handleMainMenuClick(menu.dropdownKey, event)}
                    >
                      {menu.label}
                      {menu.dropdownKey && (
                        <BiCaretDown className="menu-icon" />
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
                            <Link href={item.href} onClick={handleDropdownItemClick}>
                              {item.label}
                            </Link>
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
                      onClick={() => {
                        setMobileMenuOpen(false);
                      }}
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
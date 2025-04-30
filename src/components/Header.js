"use client";

import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { BiCaretDown } from "react-icons/bi";
import menuData from "../data/Header.json";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  const toggleDropdown = (menuKey) => {
    setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "auto" : "hidden";
  };

  // Modified to handle icon click only
  const handleIconClick = (menuKey, event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleDropdown(menuKey);
  };

  const handleDropdownItemClick = () => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Skip if clicking on the toggle button
      if (
        toggleButtonRef.current &&
        toggleButtonRef.current.contains(event.target)
      ) {
        return;
      }

      // Close menu if clicking outside
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveDropdown(null);
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, []);

  // Debug logs
  useEffect(() => {
    console.log("Mobile menu state:", mobileMenuOpen);
  }, [mobileMenuOpen]);

  return (
    <div className="main-container">
      <header className="navbar">
        <div className="navbar-inner">
          <Link href="/" className="logo">
            <Image
              src="/image/logo-1.png"
              alt="Weboum Logo"
              className="logo-img"
              width={150}
              height={50}
            />
          </Link>

          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            ref={toggleButtonRef}
          >
            {mobileMenuOpen ? (
              <span className="close-icon">✕</span>
            ) : (
              <span className="hamburger-icon">≡</span>
            )}
          </button>

          <div
            className={`menu-overlay ${mobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
          ></div>

          <nav
            className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}
            ref={menuRef}
          >
            <ul className="menu-list">
              {menuData.map((menu, index) =>
                menu.items ? (
                  <li className="menu-dropdown" key={index}>
                    <div className="menu-link">
                      <span >
                        {menu.label}
                        {menu.dropdownKey && (
                          <BiCaretDown 
                            className="menu-icon" 
                            onClick={(event) => handleIconClick(menu.dropdownKey, event)}
                          />
                        )}
                      </span>
                    </div>
                    {menu.dropdownKey && (
                      <ul
                        className={`dropdown ${
                          activeDropdown === menu.dropdownKey ? "active" : ""
                        }`}
                      >
                        {menu.items.map((item, subIndex) => (
                          <li key={subIndex}>
                            <Link
                              href={item.href}
                              onClick={handleDropdownItemClick}
                              className="dropdown-link"
                            >
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
                      className={`menu-link ${
                        menu.isButton ? "btn-contact" : ""
                      }`}
                      onClick={handleDropdownItemClick}
                    >
                      {menu.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
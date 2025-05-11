"use client";

import { useState, useEffect, useRef } from "react";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import menuData from "../data/Header.json";
import "./Header.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

  // Check if we're in mobile view on initial load and window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    // Toggle body scroll when menu is opened/closed
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  const handleMouseEnter = (menuKey) => {
    if (!isMobile) {
      // No need to set activeDropdown since CSS handles hover
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // No need to clear activeDropdown since CSS handles hover
    }
  };

  const handleMenuItemClick = (menuKey, event) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();
      setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
    }
  };

  const handleIconClick = (menuKey, event) => {
    event.stopPropagation();
    if (isMobile) {
      setActiveDropdown((prev) => (prev === menuKey ? null : menuKey));
    }
  };

  const handleDropdownItemClick = () => {
    // Close everything when a dropdown item is clicked
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  // Handle clicks outside the menu
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        toggleButtonRef.current &&
        toggleButtonRef.current.contains(event.target)
      ) {
        return;
      }

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

  // Reset mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileMenuOpen]);

  const renderDropdownItems = (items, isServicesMenu = false) => {
    if (isMobile || !isServicesMenu) {
      return items.map((item, subIndex) => (
        <li key={subIndex}>
          <Link
            href={item.href}
            onClick={handleDropdownItemClick}
            className="dropdown-link"
          >
            {item.label}
          </Link>
        </li>
      ));
    }

    const midPoint = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, midPoint);
    const rightColumn = items.slice(midPoint);

    return (
      <>
        <div className="dropdown-column">
          {leftColumn.map((item, subIndex) => (
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
        </div>
        <div className="dropdown-column">
          {rightColumn.map((item, subIndex) => (
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
        </div>
      </>
    );
  };

  // Render contact button separately for clarity
  const renderContactButton = (menu) => {
    return (
      <Link
        href={menu.href}
        className="btn-contact"
        onClick={handleDropdownItemClick}
      >
        {menu.label}
      </Link>
    );
  };

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
              priority
            />
          </Link>

          <button
            className="menu-toggle"
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation"
            ref={toggleButtonRef}
          >
            <span className={mobileMenuOpen ? "close-icon" : "hamburger-icon"}>
              {mobileMenuOpen ? "✕" : "≡"}
            </span>
          </button>

          {/* Menu overlay for mobile */}
          {isMobile && (
            <div
              className={`menu-overlay ${mobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
            ></div>
          )}

          <nav
            className={`menu ${mobileMenuOpen ? "menu-open" : ""}`}
            ref={menuRef}
          >
            <ul className="menu-list">
              {menuData.map((menu, index) => {
                // Handle the contact button separately
                if (menu.isButton) {
                  return (
                    <li key={index}>
                      {renderContactButton(menu)}
                    </li>
                  );
                }

                // Handle dropdown menus
                if (menu.items) {
                  return (
                    <li
                      className={`menu-dropdown ${menu.dropdownKey}`}
                      key={index}
                      onMouseEnter={() => handleMouseEnter(menu.dropdownKey)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div
                        className="menu-link"
                        onClick={(event) =>
                          handleMenuItemClick(menu.dropdownKey, event)
                        }
                      >
                        <span className="menu-item-content">
                          {menu.label}
                          <BiCaretDown
                            className={`menu-icon ${
                              activeDropdown === menu.dropdownKey ? "rotate" : ""
                            }`}
                            onClick={(event) =>
                              handleIconClick(menu.dropdownKey, event)
                            }
                          />
                        </span>
                      </div>
                      {menu.dropdownKey && (
                        <ul
                          className={`dropdown ${
                            activeDropdown === menu.dropdownKey ? "active" : ""
                          }`}
                        >
                          {renderDropdownItems(
                            menu.items,
                            menu.dropdownKey === "services"
                          )}
                        </ul>
                      )}
                    </li>
                  );
                }

                // Handle regular menu items
                return (
                  <li key={index}>
                    <Link
                      href={menu.href}
                      className="menu-link"
                      onClick={handleDropdownItemClick}
                    >
                      {menu.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
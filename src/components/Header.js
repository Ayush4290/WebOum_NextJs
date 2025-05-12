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
  const dropdownRefs = useRef({});
  const timeoutRefs = useRef({});
  const hoverTimeoutRefs = useRef({});

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
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  // FIXED: Added proper hover handling with delays
  const handleMouseEnter = (menuKey) => {
    if (!isMobile) {
      // Clear any existing timeouts
      if (timeoutRefs.current[menuKey]) {
        clearTimeout(timeoutRefs.current[menuKey]);
      }
      
      // Clear any previous hover timeout
      if (hoverTimeoutRefs.current[menuKey]) {
        clearTimeout(hoverTimeoutRefs.current[menuKey]);
      }

      // Set a timeout to show dropdown after a short delay
      hoverTimeoutRefs.current[menuKey] = setTimeout(() => {
        setActiveDropdown(menuKey);
      }, 200); // Slight delay to prevent accidental triggering
    }
  };

  const handleMouseLeave = (menuKey) => {
    if (!isMobile) {
      // Clear the hover timeout if it exists
      if (hoverTimeoutRefs.current[menuKey]) {
        clearTimeout(hoverTimeoutRefs.current[menuKey]);
      }

      // Set a timeout to close dropdown
      timeoutRefs.current[menuKey] = setTimeout(() => {
        const dropdownElement = dropdownRefs.current[menuKey];
        if (dropdownElement && !dropdownElement.matches(':hover')) {
          setActiveDropdown(null);
        }
      }, 300);
    }
  };

  const handleDropdownMouseEnter = (menuKey) => {
    if (!isMobile) {
      // Clear any existing timeouts
      if (timeoutRefs.current[menuKey]) {
        clearTimeout(timeoutRefs.current[menuKey]);
      }
      
      // Clear any hover timeout
      if (hoverTimeoutRefs.current[menuKey]) {
        clearTimeout(hoverTimeoutRefs.current[menuKey]);
      }

      // Keep dropdown open
      setActiveDropdown(menuKey);
    }
  };

  const handleDropdownMouseLeave = (menuKey) => {
    if (!isMobile) {
      // Set a timeout to close dropdown
      timeoutRefs.current[menuKey] = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
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
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

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

  useEffect(() => {
    return () => {
      // Clear all timeouts on unmount
      Object.values(timeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
      Object.values(hoverTimeoutRefs.current).forEach(timeout => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

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
                if (menu.isButton) {
                  return (
                    <li key={index}>
                      {renderContactButton(menu)}
                    </li>
                  );
                }

                if (menu.items) {
                  return (
                    <li
                      className={`menu-dropdown ${menu.dropdownKey}`}
                      key={index}
                      onMouseEnter={() => handleMouseEnter(menu.dropdownKey)}
                      onMouseLeave={() => handleMouseLeave(menu.dropdownKey)}
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
                          ref={(el) => (dropdownRefs.current[menu.dropdownKey] = el)}
                          onMouseEnter={() => handleDropdownMouseEnter(menu.dropdownKey)}
                          onMouseLeave={() => handleDropdownMouseLeave(menu.dropdownKey)}
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
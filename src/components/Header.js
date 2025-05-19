"use client";

import { useState, useEffect, useRef } from "react";
import { BiCaretDown } from "react-icons/bi";
import Link from "next/link";
import Image from "next/image";
import menuData from "../data/Header.json";
import "./header.css";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // New state for fixed header
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const headerRef = useRef(null); // Ref for header element
  const dropdownRefs = useRef({});
  const timeoutRefs = useRef({});
  const clickTimeoutRef = useRef(null);
  const hoverDelayRef = useRef(null);

  // Handle mobile detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsFixed(scrollTop > 150); // Fix header after 150px
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount to handle page refresh

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update placeholder height on resize
  useEffect(() => {
    const updatePlaceholderHeight = () => {
      if (headerRef.current) {
        const placeholder = headerRef.current.nextSibling;
        if (
          placeholder &&
          placeholder.classList.contains("header-placeholder")
        ) {
          placeholder.style.height = `${headerRef.current.offsetHeight}px`;
        }
      }
    };

    window.addEventListener("resize", updatePlaceholderHeight);
    updatePlaceholderHeight(); // Run initially

    return () => window.removeEventListener("resize", updatePlaceholderHeight);
  }, [isFixed]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  const handleMouseEnter = (menuKey) => {
    if (!isMobile) {
      if (timeoutRefs.current[menuKey]) {
        clearTimeout(timeoutRefs.current[menuKey]);
      }
      hoverDelayRef.current = setTimeout(() => {
        setActiveDropdown(menuKey);
      }, 100);
    }
  };

  const handleMouseLeave = (menuKey) => {
    if (!isMobile) {
      if (hoverDelayRef.current) {
        clearTimeout(hoverDelayRef.current);
      }
      timeoutRefs.current[menuKey] = setTimeout(() => {
        setActiveDropdown(null);
      }, 800);
    }
  };

  const handleDropdownMouseEnter = (menuKey) => {
    if (!isMobile) {
      if (timeoutRefs.current[menuKey]) {
        clearTimeout(timeoutRefs.current[menuKey]);
      }
      setActiveDropdown(menuKey);
    }
  };

  const handleDropdownMouseLeave = (menuKey) => {
    if (!isMobile) {
      timeoutRefs.current[menuKey] = setTimeout(() => {
        setActiveDropdown(null);
      }, 600);
    }
  };

  const debounceClick = (callback, menuKey, event) => {
    if (clickTimeoutRef.current) {
      clearTimeout(clickTimeoutRef.current);
    }
    clickTimeoutRef.current = setTimeout(() => {
      callback(menuKey, event);
    }, 300);
  };

  const handleMenuItemClick = (menuKey, event) => {
    if (isMobile) {
      event.preventDefault();
      event.stopPropagation();
      debounceClick(
        (key) => {
          setActiveDropdown((prev) => (prev === key ? null : key));
        },
        menuKey,
        event
      );
    }
  };

  const handleIconClick = (menuKey, event) => {
    event.stopPropagation();
    if (isMobile) {
      debounceClick(
        (key) => {
          setActiveDropdown((prev) => (prev === key ? null : key));
        },
        menuKey,
        event
      );
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
  // Capture current ref values
  const currentTimeoutRefs = timeoutRefs.current;
  const currentClickTimeout = clickTimeoutRef.current;
  const currentHoverDelay = hoverDelayRef.current;

  return () => {
    // Use captured values in cleanup
    Object.values(currentTimeoutRefs).forEach((timeout) => {
      if (timeout) clearTimeout(timeout);
    });
    if (currentClickTimeout) {
      clearTimeout(currentClickTimeout);
    }
    if (currentHoverDelay) {
      clearTimeout(currentHoverDelay);
    }
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
    <>
      <div
        className={`main-container ${isFixed ? "fixed" : ""}`}
        ref={headerRef}
      >
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
              <span
                className={mobileMenuOpen ? "close-icon" : "hamburger-icon"}
              >
                {mobileMenuOpen ? "✕" : "≡"}
              </span>
            </button>

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
                    return <li key={index}>{renderContactButton(menu)}</li>;
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
                                activeDropdown === menu.dropdownKey
                                  ? "rotate"
                                  : ""
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
                              activeDropdown === menu.dropdownKey
                                ? "active"
                                : ""
                            }`}
                            ref={(el) =>
                              (dropdownRefs.current[menu.dropdownKey] = el)
                            }
                            onMouseEnter={() =>
                              handleDropdownMouseEnter(menu.dropdownKey)
                            }
                            onMouseLeave={() =>
                              handleDropdownMouseLeave(menu.dropdownKey)
                            }
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
      {/* Placeholder div to prevent content jump */}
      {isFixed && <div className="header-placeholder"></div>}
    </>
  );
};

export default Header;

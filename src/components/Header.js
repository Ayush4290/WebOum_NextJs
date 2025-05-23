"use client";

import { useState, useEffect, useRef } from "react";
import { BiCaretDown } from "react-icons/bi";
import {
  FaUserFriends,
  FaListOl,
  FaCogs,
  FaLightbulb,
  FaDatabase,
  FaLink,
  FaPen,
  FaShieldAlt,
  FaChartBar,
  FaBullhorn,
  FaPaintBrush,
  FaServer,
  FaComments,
  FaBox,
  FaCheckCircle,
  FaShoppingCart,
  FaHandshake,
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaAngular,
  FaReact,
  FaVuejs,
  FaAndroid,
  FaApple,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaMicrosoft,
  FaMagento,
  FaShopify,
  FaShoppingBag,
  FaWordpress,
  FaLayerGroup,
  FaBrain,
  FaMobile,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BsStars, BsGrid3X3GapFill, BsGlobe } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
import menuData from "../../public/data/Header.json";
import "./header.css";

const iconMap = {
  FaUserFriends,
  FaListOl,
  FaCogs,
  FaLightbulb,
  FaDatabase,
  FaLink,
  FaPen,
  FaShieldAlt,
  FaChartBar,
  FaBullhorn,
  FaPaintBrush,
  FaServer,
  FaComments,
  FaBox,
  FaCheckCircle,
  FaShoppingCart,
  FaHandshake,
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaCloud,
  BsStars,
  BsGrid3X3GapFill,
  BsGlobe,
  FaAngular,
  FaReact,
  SiNextdotjs,
  FaVuejs,
  FaAndroid,
  FaApple,
  FaJava,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaMicrosoft,
  FaMagento,
  FaShopify,
  FaShoppingBag,
  FaWordpress,
  FaLayerGroup,
  FaBrain,
  FaMobile,
};

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [scrolledLogo, setScrolledLogo] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);
  const headerRef = useRef(null);
  const dropdownRefs = useRef({});
  const timeoutRefs = useRef({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 992);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const newIsFixed = scrollTop > 150;
      setIsFixed(newIsFixed);
      setScrolledLogo(newIsFixed);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    updatePlaceholderHeight();
    return () => window.removeEventListener("resize", updatePlaceholderHeight);
  }, [isFixed]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setActiveDropdown(null);
    document.body.style.overflow = !mobileMenuOpen ? "hidden" : "auto";
  };

  const handleMouseEnter = (menuKey) => {
    if (!isMobile) {
      if (timeoutRefs.current[menuKey]) {
        clearTimeout(timeoutRefs.current[menuKey]);
      }
      setActiveDropdown(menuKey);
    }
  };

  const handleMouseLeave = (menuKey) => {
    if (!isMobile) {
      timeoutRefs.current[menuKey] = setTimeout(() => {
        setActiveDropdown(null);
      }, 300);
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
        if (isMobile) {
          setActiveDropdown(null);
          setMobileMenuOpen(false);
          document.body.style.overflow = "auto";
        } else {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.body.style.overflow = "auto";
    };
  }, [isMobile]);

  useEffect(() => {
    const currentTimeoutRefs = timeoutRefs.current;
    return () => {
      Object.values(currentTimeoutRefs).forEach((timeout) => {
        if (timeout) clearTimeout(timeout);
      });
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992 && mobileMenuOpen) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
        document.body.style.overflow = "auto";
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  const renderDropdownItems = (items, isTwoColumn = false, dropdownKey) => {
    if (!Array.isArray(items)) return null;

    if (isMobile) {
      if (dropdownKey === "technology") {
        const frontEndItems = items.filter(
          (item) => item.category === "Front End"
        );
        const mobileItems = items.filter((item) => item.category === "Mobile");
        const backendItems = items.filter((item) => item.category === "Backend");
        const ecommerceItems = items.filter(
          (item) => item.category === "Ecommerce"
        );
        const othersItems = items.filter((item) => item.category === "Others");

        return (
          <div className="mobile-dropdown-content">
            {frontEndItems.length > 0 && (
              <div className="mobile-category-section">
                <h4 className="mobile-category-header">Front-End</h4>
                <ul className="mobile-category-list">
                  {frontEndItems.map((item, subIndex) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={`front-end-${subIndex}`}>
                        <Link
                          href={item.href}
                          onClick={handleDropdownItemClick}
                          className="mobile-dropdown-link"
                        >
                          {IconComponent && (
                            <IconComponent className="mobile-link-icon" />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {mobileItems.length > 0 && (
              <div className="mobile-category-section">
                <h4 className="mobile-category-header">Mobile App</h4>
                <ul className="mobile-category-list">
                  {mobileItems.map((item, subIndex) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={`mobile-${subIndex}`}>
                        <Link
                          href={item.href}
                          onClick={handleDropdownItemClick}
                          className="mobile-dropdown-link"
                        >
                          {IconComponent && (
                            <IconComponent className="mobile-link-icon" />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {backendItems.length > 0 && (
              <div className="mobile-category-section">
                <h4 className="mobile-category-header">Back-End</h4>
                <ul className="mobile-category-list">
                  {backendItems.map((item, subIndex) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={`backend-${subIndex}`}>
                        <Link
                          href={item.href}
                          onClick={handleDropdownItemClick}
                          className="mobile-dropdown-link"
                        >
                          {IconComponent && (
                            <IconComponent className="mobile-link-icon" />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {ecommerceItems.length > 0 && (
              <div className="mobile-category-section">
                <h4 className="mobile-category-header">E-commerce</h4>
                <ul className="mobile-category-list">
                  {ecommerceItems.map((item, subIndex) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={`ecommerce-${subIndex}`}>
                        <Link
                          href={item.href}
                          onClick={handleDropdownItemClick}
                          className="mobile-dropdown-link"
                        >
                          {IconComponent && (
                            <IconComponent className="mobile-link-icon" />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {othersItems.length > 0 && (
              <div className="mobile-category-section">
                <h4 className="mobile-category-header">Others / Miscellaneous</h4>
                <ul className="mobile-category-list">
                  {othersItems.map((item, subIndex) => {
                    const IconComponent = iconMap[item.icon];
                    return (
                      <li key={`others-${subIndex}`}>
                        <Link
                          href={item.href}
                          onClick={handleDropdownItemClick}
                          className="mobile-dropdown-link"
                        >
                          {IconComponent && (
                            <IconComponent className="mobile-link-icon" />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        );
      }

      // Mobile rendering for Services and About dropdowns
      return (
        <ul className="mobile-simple-list">
          {items.map((item, subIndex) => {
            const IconComponent = iconMap[item.icon];
            return (
              <li key={subIndex}>
                <Link
                  href={item.href}
                  onClick={handleDropdownItemClick}
                  className="mobile-dropdown-link"
                >
                  {IconComponent && (
                    <IconComponent className="mobile-link-icon" />
                  )}
                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      );
    }

    if (dropdownKey === "services") {
      const row1 = items.slice(0, 4);
      const row2 = items.slice(4);

      return (
        <>
          <div className="dropdown-row services-row">
            {row1.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={subIndex} className="service-item">
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link service-link"
                  >
                    <div className="service-icon-container">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="service-icon-image"
                        />
                      ) : (
                        IconComponent && (
                          <IconComponent className="service-icon" />
                        )
                      )}
                    </div>
                    <span className="service-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="dropdown-row services-row">
            {row2.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={subIndex + 4} className="service-item">
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link service-link"
                  >
                    <div className="service-icon-container">
                      {item.img ? (
                        <Image
                          src={item.img}
                          alt={item.label}
                          width={32}
                          height={32}
                          className="service-icon-image"
                        />
                      ) : (
                        IconComponent && (
                          <IconComponent className="service-icon" />
                        )
                      )}
                    </div>
                    <span className="service-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </div>
        </>
      );
    }

    if (dropdownKey === "technology") {
      const frontEndItems = items.filter(
        (item) => item.category === "Front End"
      );
      const mobileItems = items.filter((item) => item.category === "Mobile");
      const backendItems = items.filter((item) => item.category === "Backend");
      const ecommerceItems = items.filter(
        (item) => item.category === "Ecommerce"
      );
      const othersItems = items.filter((item) => item.category === "Others");

      return (
        <div className="dropdown-columns">
          <div className="dropdown-column">
            <h3 className="column-header">Front End</h3>
            {frontEndItems.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={`front-end-${subIndex}`}>
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link"
                  >
                    {IconComponent && <IconComponent />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="dropdown-column">
            <h3 className="column-header">Mobile</h3>
            {mobileItems.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={`mobile-${subIndex}`}>
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link"
                  >
                    {IconComponent && <IconComponent />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="dropdown-column">
            <h3 className="column-header">Backend</h3>
            {backendItems.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={`backend-${subIndex}`}>
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link"
                  >
                    {IconComponent && <IconComponent />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="dropdown-column">
            <h3 className="column-header">Ecommerce</h3>
            {ecommerceItems.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={`ecommerce-${subIndex}`}>
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link"
                  >
                    {IconComponent && <IconComponent />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </div>
          <div className="dropdown-column">
            <h3 className="column-header">Others / Miscellaneous</h3>
            {othersItems.map((item, subIndex) => {
              const IconComponent = iconMap[item.icon];
              return (
                <li key={`others-${subIndex}`}>
                  <Link
                    href={item.href}
                    onClick={handleDropdownItemClick}
                    className="dropdown-link"
                  >
                    {IconComponent && <IconComponent />}
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </div>
        </div>
      );
    }

    const midPoint = Math.ceil(items.length / 2);
    const leftColumn = items.slice(0, midPoint);
    const rightColumn = items.slice(midPoint);

    return (
      <>
        <div className="dropdown-column">
          {leftColumn.map((item, subIndex) => {
            const IconComponent = iconMap[item.icon];
            return (
              <li key={subIndex}>
                <Link
                  href={item.href}
                  onClick={handleDropdownItemClick}
                  className="dropdown-link"
                >
                  {IconComponent && <IconComponent />}
                  {item.label}
                </Link>
              </li>
            );
          })}
        </div>
        <div className="dropdown-column">
          {rightColumn.map((item, subIndex) => {
            const IconComponent = iconMap[item.icon];
            return (
              <li key={subIndex}>
                <Link
                  href={item.href}
                  onClick={handleDropdownItemClick}
                  className="dropdown-link"
                >
                  {IconComponent && <IconComponent />}
                  {item.label}
                </Link>
              </li>
            );
          })}
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
              {scrolledLogo ? (
                <Image
                  src="https://weboum.com/wp-content/uploads/2024/10/weboum-footer-logo-1.png"
                  alt="Weboum Logo"
                  className="logo-img"
                  width={150}
                  height={50}
                  priority
                />
              ) : (
                <Image
                  src="/image/logo-1.png"
                  alt="Weboum Logo"
                  className="logo-img"
                  width={150}
                  height={50}
                  priority
                />
              )}
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
                            />
                          </span>
                        </div>
                        {menu.dropdownKey && (
                          <div
                            className={`dropdown ${
                              activeDropdown === menu.dropdownKey
                                ? "active"
                                : ""
                            } ${
                              menu.dropdownKey === "services"
                                ? "services-dropdown"
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
                              menu.dropdownKey === "services" ||
                                menu.dropdownKey === "technology",
                              menu.dropdownKey
                            )}
                          </div>
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
      {isFixed && <div className="header-placeholder"></div>}
    </>
  );
};

export default Header;
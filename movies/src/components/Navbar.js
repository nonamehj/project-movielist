import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect, useCallback } from "react";
import { useGlobalContext } from "./../context";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../movielogo.webp";

const menus = ["Home", "Popular", "Theatre", "Kids", "Comedie"];

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { setIndex, setUrl } = useGlobalContext();
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const getPage = useCallback(
    (page) => {
      let url = "";
      setIndex(1);
      setIsSidebarOpen(false);
      if (page === "Home") {
        url = "/discover/movie?sort_by=popularity.desc&page=";
      }
      if (page === "Popular") {
        url = "/discover/movie?sort_by=popularity.desc&page=";
      }

      if (page === "Theatre") {
        url =
          "/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2023-11-10&page=";
      }
      if (page === "Kids") {
        url =
          "/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&page=";
      }
      if (page === "Comedie") {
        url =
          "/discover/movie?with_genres=35&cast_with=23659&sor_by=revenue.esc&page=";
      }

      return setUrl(url);
    },
    [setIndex, setUrl]
  );
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isSidebarOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [isSidebarOpen]);
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo-img" className="logo" />
          </Link>
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? (
              <button className="nav-toggle">
                <FaTimes />
              </button>
            ) : (
              <button className="nav-toggle">
                <FaBars />
              </button>
            )}
          </div>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            {menus.map((menu) => {
              return (
                <li key={menu}>
                  {menu === "Home" ? (
                    <Link to="/" onClick={() => getPage(menu)}>
                      {menu}
                    </Link>
                  ) : (
                    <Link to={menu} onClick={() => getPage(menu)}>
                      {menu}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

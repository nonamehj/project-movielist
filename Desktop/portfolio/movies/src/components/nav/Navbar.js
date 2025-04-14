import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
// import logo from "../../movielogo.webp";
import NavItem from "./NavItem";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (isSidebarOpen) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [isSidebarOpen]);
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            {/* <img src={logo} alt="logo-img" className="logo" /> */}

            <div className="logo">
              <span>m</span>
              <span>o</span>
              <span>v</span>
              <span>i</span>
              <span>e</span>
            </div>
          </Link>
          <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            <button className="nav-toggle">
              {isSidebarOpen ? <FaTimes /> : <FaBars />}
            </button>
            {/* {isSidebarOpen ? (
              <button className="nav-toggle">
                <FaTimes />
              </button>
            ) : (
              <button className="nav-toggle">
                <FaBars />
              </button>
            )} */}
          </div>
        </div>
        <div className="links-container" ref={linksContainerRef}>
          <ul className="links" ref={linksRef}>
            <NavItem setIsSidebarOpen={setIsSidebarOpen} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

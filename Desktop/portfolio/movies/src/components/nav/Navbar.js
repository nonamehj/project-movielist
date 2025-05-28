import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
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
            <div className="logo">
              <MdMovie className="logo-icon" />
              <span className="logo-title">cinema</span>
            </div>
          </Link>
          <button
            className="nav-toggle"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
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

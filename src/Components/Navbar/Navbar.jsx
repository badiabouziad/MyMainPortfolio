import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-scroll";
import "./Navbar.css";
const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Define the scroll threshold to show/hide the header
      const scrollThreshold = 50;

      // Check if the scroll position is beyond the threshold
      const navbar = document.getElementById("navbar");
      if (scrollPosition > scrollThreshold) {
        navbar.classList.add("navbar-on-scroll"); // Show the header
      } else {
        navbar.classList.remove("navbar-on-scroll"); // Hide the header
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeColor = (index) => {
    // Remove active-link class from all links
    const links = document.querySelectorAll(".nav-link");
    links.forEach((link) => link.classList.remove("active-link"));

    // Add active-link class to the clicked link
    const clickedLink = links[index];
    clickedLink.classList.add("active-link");
  };

  const magnify3 = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("magnify-3");
  };

  const removeMagnify3 = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.remove("magnify-3");
  };
  const magnify5 = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.add("magnify-5");
  };

  const removeMagnify5 = () => {
    const cursor = document.getElementById("cursor");
    cursor.classList.remove("magnify-5");
  };

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    if (!darkMode) {
      // Dark mode
      document.documentElement.style.setProperty("--primary-color", "#2b2b2b"); // Dark background color
      document.documentElement.style.setProperty("--secondary-color", "#3e3e3e"); // Slightly lighter background color
      document.documentElement.style.setProperty("--third-color", "#d1d5c3"); // Light color for text and elements
      document.documentElement.style.setProperty("--fourth-color", "#8a795d"); // Accent color for elements
      document.documentElement.style.setProperty("--links-color", "#e9edc9"); // Color for links
      document.documentElement.style.setProperty("--navbar-blured-color", "#33333354"); // Blurred background color for navbar
      document.documentElement.style.setProperty("--hero-text", "#ffe"); // Light text color
      document.documentElement.style.setProperty("--hero-span", "#d1d5c3"); // Light span color
    } else {
      // Light mode
      document.documentElement.style.setProperty("--primary-color", "#fefae0");
      document.documentElement.style.setProperty("--secondary-color", "#ccd5ae");
      document.documentElement.style.setProperty("--third-color", "#283618");
      document.documentElement.style.setProperty("--fourth-color", "#e6c5a48e");
      document.documentElement.style.setProperty("--links-color", "#283618");
      document.documentElement.style.setProperty("--navbar-blured-color", "#f9741617");
      document.documentElement.style.setProperty("--hero-text", "#bc6c25");
      document.documentElement.style.setProperty("--hero-span", "#283618");
    }
    setDarkMode(!darkMode);
  };
  
  return (
    <>
      <div className="logo-mode">
        <h1
          className="logo"
          id="logo"
          onMouseOver={magnify5}
          onMouseOut={removeMagnify5}
        >
          Badia B.
        </h1>
        <button
          className={`mode ${darkMode ? "mode-inactif" : ""} night-btn`}
          onClick={toggleDarkMode}
        >
          <div
            className="mode-night"
            onMouseOver={magnify3}
            onMouseOut={removeMagnify3}
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
                  fill="var(--hero-text)"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                  fill="var(--hero-text)"
                />{" "}
              </g>
            </svg>
          </div>
        </button>
        <button
          className={`mode ${darkMode ? "" : "mode-inactif"} light-btn`}
          onClick={toggleDarkMode}
        >
          <div
            className="mode-light"
            id="mode"
            onMouseOver={magnify3}
            onMouseOut={removeMagnify3}
          >
            <svg
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              transform="matrix(1, 0, 0, 1, 0, 0)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0" />

              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z"
                  fill="#fff"
                />{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                  fill="#fff"
                />{" "}
              </g>
            </svg>
          </div>
        </button>
      </div>
      <nav className="navbar" id="navbar">
        <ul id="links" className="nav-links">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={-350}
            duration={500}
            onClick={() => {
              changeColor(0);
            }}
            onMouseOver={magnify3}
            onMouseOut={removeMagnify3}
            className="nav-link "
          >
            Home
          </Link>

          <Link
            to="ProjectsSlider"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-150}
            duration={500}
            onClick={() => {
              changeColor(2);
            }}
            onMouseOver={magnify3}
            onMouseOut={removeMagnify3}
            className="nav-link"
          >
            Work
          </Link>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-75}
            duration={500}
            onClick={() => changeColor(1)}
            onMouseOver={magnify3}
            onMouseOut={removeMagnify3}
            className="nav-link"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={() => changeColor(3)}
            onMouseOver={magnify3}
            onMouseOut={removeMagnify3}
            className="nav-link"
          >
            Contact
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

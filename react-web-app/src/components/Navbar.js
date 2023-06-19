import { Button } from "./Button";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';


function Navbar() {
  // using useState to set the values for onclick
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    // Upon clicking it closes the mobile menu

  /**
   * The function checks the width of the window and sets a button to be visible or hidden based on the
   * width.
   */
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }
      else{
        setButton(true)
      }
    }

    useEffect(() => {
      showButton();
    }, []);

    // effect will run once because of the empty Array
    // upon by calling the showButton function the Sign up button will disappear
  
    /* `window.addEventListener('resize', showButton)` is adding an event listener to the window object
    that listens for a change in the size of the window. When the window is resized, the
    `showButton` function is called, which checks the width of the window and sets the `button`
    state to either true or false, depending on the width. This allows the Navbar component to
    dynamically show or hide the "SIGN UP" button based on the size of the window. */
    window.addEventListener('resize', showButton)


  return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            TRVL <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" alt="Hamburger_Menu" onClick={handleClick}> 
          {/* allows onClick of logo to close hamburger menu */}
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
            {/* using a className to toggle between the hamburger menu
                    when not clicked it is the hamburger menu
                    when clicked it is the times[cancel] icon */}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
  );
}

export default Navbar;

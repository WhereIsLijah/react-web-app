import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
// using useState to set the values for onclick
const [click, setClick] = useState(false)
  return (
    <>
        <nav className='navbar'>
           <div className='navbar-container'>
                <Link to="/" className='navbar-logo'>
                    TRVL <i className='fab fa-typo3'/> 
                </Link>
                <div className='menu-icon' alt="Hamburger_Menu">
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    {/* using a className to toggle between the hamburger menu
                    when not clicked it is the hamburger menu
                    when clicked it is the times[cancel] icon */}
                </div>
            </div> 
        </nav>
    </>
  )
}

export default Navbar
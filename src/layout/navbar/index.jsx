import React from 'react'
import NavbarBottom from '../../components/navbar/navbar-bottom';
import NavbarUpper from '../../components/navbar/navbar-upper';

function Navbar() {
  return (
    <header className='navbar'>
        <NavbarUpper/>
        <NavbarBottom/>
    </header>
  )
}

export default Navbar;
/* eslint-disable no-unused-vars */
import React ,{useState} from 'react'
import NavbarBottom from '../../components/navbar/navbar-bottom.jsx';
import NavbarUpper from '../../components/navbar/navbar-upper.jsx';
import NavbarMenu from '../../components/navbar/navbar-mob.jsx';

function Navbar() {
  const [visibility,setVisibility]=useState('vshide');

  function handelvisibility(){
   if(visibility==="vshide"){
    setVisibility("vsshow")
   }else{
    setVisibility("vshide")
   }
  }
  return (
    <header className='navbar'>
        <NavbarUpper/>
        <NavbarBottom handelvisibility={handelvisibility}/>
        <NavbarMenu visibility={visibility} />
    </header>
  )
}

export default Navbar;
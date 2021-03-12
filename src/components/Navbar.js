import React from 'react'
import {HiMoon } from "react-icons/hi";
import {HiOutlineMoon } from "react-icons/hi";
function Navbar({toggle,theme}) {


    return (

        <div className="navbar" >

<div className="container">
  <h1>  Where in the world ?</h1>
  <button onClick={toggle}> {theme==='Dark'?<HiMoon /> :<HiOutlineMoon  /> } {theme} Mode </button>
</div>
        </div>
    )
}

export default Navbar

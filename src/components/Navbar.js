import React ,{useContext} from 'react'
import {HiMoon } from "react-icons/hi";
import {HiOutlineMoon } from "react-icons/hi";
import {ThemeContext,ThemeUpdateContext} from './ThemeProvider';

function Navbar() {

  const theme = useContext(ThemeContext)
 

  const themeToggler = useContext(ThemeUpdateContext)

    return (

        <div  className={theme==='Dark'? 'navbar dark-bg': 'navbar'} >

<div  className={theme==='Dark'? 'container dark-bg': 'container'}>
  <h1>  Where in the world ?</h1>
  <button onClick={themeToggler}> {theme==='Dark'?<HiMoon /> :<HiOutlineMoon  /> } {theme} Mode </button>
</div>
        </div>
    )
}

export default Navbar

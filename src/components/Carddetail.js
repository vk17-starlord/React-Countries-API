import React,{useContext} from 'react'
import Navbar from './Navbar'
import {ThemeContext,ThemeUpdateContext} from './ThemeProvider';

function Carddetail({country}) {
    const theme = useContext(ThemeContext)
 

    const themeToggler = useContext(ThemeUpdateContext)
    return (
        <div>
<Navbar  ></Navbar>
            <h1>card detail</h1>
        </div>
    )
}

export default Carddetail

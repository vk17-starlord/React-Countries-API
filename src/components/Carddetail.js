import React,{useContext} from 'react'
import Navbar from './Navbar'
import {ThemeContext} from './ThemeProvider';

function Carddetail() {
    const theme = useContext(ThemeContext)

    return (
        <div className={theme==='Dark'? 'dark d-container' :'light d-container'}>
<Navbar  ></Navbar>
            <h1>card detail</h1>
        </div>
    )
}

export default Carddetail

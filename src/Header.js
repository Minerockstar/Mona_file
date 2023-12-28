import React from 'react'
import {Link} from "react-router-dom"


const Header = () => {
  return (
    <header>
        <div className='container'>
            <div className='divcontainer'>
                <div className='logo'>
                    <Link to='/' className='brand' id='linkallid'><img src="./240_F_431993182_P2Wh1hlOgxj79jVU4m69tDdId9f0JjmZ.jpg" alt="image" /></Link>
                </div>
                <div className='nav_bar'>
                <Link to='/' className='' id='linkallid'>Home</Link >
                <Link to='about' className='' id='linkallid'>About</Link >
                <Link to='products' className='' id='linkallid'>Proucts</Link >
                </div>
                
            </div>
        </div>
    </header>
  )
}

export default Header
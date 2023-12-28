import React from 'react'
import {Link, NavLink} from "react-router-dom"


const Footer = () => {
  return (
    <footer className='footer'>
        <div>
        <div className='nav_bar'>
                <Link to='' className=''>Home</Link >
                <Link to='about' className=''>About</Link >
                <Link to='products' className=''>Proucts</Link >
                </div>
        </div>
    </footer>
  )
}

export default Footer
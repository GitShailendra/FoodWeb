import React from 'react'
import './header.css'
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div className="header">
        <header className="header-contents">
            
            <h2>"Satisfy your cravings with <span>FoodWeb!</span></h2>
            <p>From zesty appetizers to fiery main courses, ignite your taste buds and get your favorite flavors delivered fast. Order now and spice up your meal game!"</p>
            <button>view menu</button>
        </header>
    </div>
  )
}

export default Header
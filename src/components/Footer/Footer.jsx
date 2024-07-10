import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'
import head_logo from '../../../public/foodweb.png'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={head_logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ab in ipsa placeat asperiores suscipit reiciendis magni voluptate officiis, earum nemo iste quia illum quidem tenetur quisquam dolorem blanditiis atque!</p>
                <div className="footer-social-icons">
                    <img src={assets.linkedin_icon} alt="" />
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li> Contact Us</li>
                    <li>Delivery</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 222 333 444</li>
                    <li>contact@foodweb.com</li>
                </ul>
            </div>
        </div>
        <hr />
    <p className='footer-copyright'>Company 2024 ©️ FoodWeb.com - All rights reserved</p>
    </div>
  )
}

export default Footer
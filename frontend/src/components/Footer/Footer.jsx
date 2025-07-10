import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className="footer-content-left">
                <img src={assets.logo} className="footer-logo" />
                <p>Expensive restaurants offer premium dining experiences with gourmet cuisine, top-tier ingredients, and exceptional service in a luxurious ambiance. They often feature renowned chefs, exclusive menus, and high-end décor, catering to elite clientele.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91-6382865964</li>
                    <li>naveenkarthikeyan88@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="fotter-copyright">Copyright 2025 @ KKS.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer

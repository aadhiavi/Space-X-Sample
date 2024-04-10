import React from 'react'
import { Link } from 'react-router-dom'
import fb from "../../assets/icon1.png"
import insta from "../../assets/icon2.png"
import twitter from "../../assets/icon3.png"
import lin from "../../assets/icon4.png"
import yt from "../../assets/icon5.png"
import github from "../../assets/icon.png"
import wtsap from "../../assets/icon7.png"

import "./Footer.css"


const Footer = () => {

    const social = [fb, insta, twitter, lin, yt, github, wtsap]


    return (
        <footer>
            <h1>Avin-ash</h1>

            <div className="links">
                <h3>Usefull links</h3>
                <div className="link">
                    <Link to="/">Home</Link>
                    <Link to="/training">Training</Link>
                    <Link to="/pricing">Pricing</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </div>

            <div className="social">
                {social.map((item) => {
                    return <img src={item} alt="" />
                })}
            </div>
        </footer>
    )
}

export default Footer
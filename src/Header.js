import './App.css';

import React, { Component } from 'react'

import twitter from "./assets/twit-icon.png"
import facebook from "./assets/fb-icon.png"
import googlePlus from "./assets/gp-icon.png"
import instagram from "./assets/insta-icon.png"
import flicker from "./assets/flic-icon.png"
import pintrest from "./assets/pint-icon.png"
import rss from "./assets/rss-icon.png"
import mail from "./assets/mail-icon.png"
import logo from "./assets/logo.png"




export default class Header extends Component {
    render() {
        return (
            <div>
            

            <header className="hdr1"> 
        <div><img src={logo} alt="logo"></img> </div>
        <div className="logo">
        <span>Delicious
        <p className="blog"> BEST FOOD BLOG ON THE WEB</p> </span>
    </div>

    <div className="social"> 
        <a href="#"><img src={facebook} alt='facebook link' /></a>
        <a href="#"><img src={twitter} alt="twitter link" /></a>
        <a href="#"><img src={googlePlus} alt="google plus link" /></a>
        <a href="#"><img src={instagram} alt="instagram link" /></a>
        <a href="#"><img src={flicker} alt="flicker link" /></a>
        <a href="#"><img src={pintrest} alt=" pintrest link" /></a>
        <a href="#"><img src={rss} alt="rss link"></img></a>
        <a href="#"><img src={mail} alt="email link" /></a>
    </div>

    </header>
            

            
            </div>
        )
    }
}

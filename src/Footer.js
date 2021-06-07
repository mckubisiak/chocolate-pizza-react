import React, { Component } from 'react'

import smallLogo from "./assets/small-logo.png"
import vanPic from "./assets/van-pic.png"

export default class Footer extends Component {
    render() {
        return (
            <div>
                
                <div className="share">
                <div className="name-image">
                <img src={vanPic} alt="vanessa stevenson"/>
                Vanessa Stevenson</div>
                <div className="share-center">
            <p className="bio">
                Food Enthusiast, photography fan. Add a pinch of raw foodism and that's pretty much who I am.
            </p></div>
        </div>
        <p> <button className="share-button">SHARE</button> </p>
                <footer>
                    <img src={smallLogo}  alt="logo" /> {"\n"}  
        Delicious &copy; All rights reserved. {"\n"}  
        Proudly published with Ghost.
                </footer>          
            </div>
        )
    }
}

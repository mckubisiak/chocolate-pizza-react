import React, { Component } from 'react'

import print from "./assets/print-icon.png"
import pizza from "./assets/choco-pizza.png"

export default class ImageSection extends Component {
    render() {
        return (
            <div>
                <h1>
            <div>Chocolate Pizza</div>
            <div className="subheading">  POSTED ON 15 DEC/DESSERTS </div>
            <div className="prints"><img src={print} alt="print page" /> </div>
            </h1>
        <article>
            <img src={pizza} alt="choco pizza" />

        </article> 
            </div>
        )
    }
}

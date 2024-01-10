import React, { Component } from "react";
// import images of the pokeballs here to display
import { Link } from 'react-router-dom'
import ultraball from '../assets/ultraball_icon.png'
import pokeball from '../assets/pokeball_icon.png'
import greatball from '../assets/greatball_icon.png'



const renderImg = (value) => {
    switch(value) {
        case 'short_term':
            return pokeball;
        case 'medium_term':
            return greatball;
        case 'long_term':
            return ultraball;
        default:
            return null
    }
}

export default class SelectOptions extends Component {
    constructor() {
        super()
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick() {
        const { value, clickHandler } = this.props;
        clickHandler(value);
    }
    
    
    render() {
        const { value, children }= this.props;
        return (
            // Render the images of each button
            // use value to determine the image to render
            // Display the 3 buttons for timeframe
            <div className="options">
                <img src={renderImg(value)} alt={value}/>
                <Link
                    //to={`?time-range=${value}`}
                    onClick={this.handleClick}
                >
                    {children}
                </Link>
                
            </div>

        );
    }
}

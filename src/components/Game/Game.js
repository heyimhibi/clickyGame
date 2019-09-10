import React, { Component } from "react";
import "./Game.css";
import Navigation from "../Navigation";

//  es6 took over what we used as class in html, now if you want to use is as before its called class name
// component is from react, class allows to bring in properties from another component
class Game extends Component {
    state = {
        //refers to the pictures (objects) and they'll have id, location and click status array of 12 objects
        // pokemon,
        score : 0,
        topScore: 0
    };

    render(){
        return(
            <div className = "Game"> 
                <Navigation />
            </div>
        )
    }

}

export default Game;
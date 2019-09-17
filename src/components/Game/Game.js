import React, { Component } from "react";
import "./Game.css";
import Navigation from "../Navigation";
import pokemons from "../../pokemons.json";
import Card from "../Card";

//  es6 took over what we used as class in html, now if you want to use is as before its called class name
// component is from react, class allows to bring in properties from another component
class Game extends Component {
    state = {
        //refers to the pictures (objects) and they'll have id, location and click status array of 12 objects
        pokemons,
        score : 0,
        topScore: 0
    };
    
    handleClick = id => {
        let doubleClicked = false;

        let update = {
            pokemons: [...this.state.pokemons], //...spread operator
            score: this.state.score,
            topScore: this.state.topScore
        };

        update.pokemons.forEach(pokemon => {
            if (pokemon.id === id) {
                if (pokemon.clicked === true) { //if you write just -if (pokemon.clicked)- without anything else, it will evaluate it as true, JS logic
                    doubleClicked = true;
                };

                pokemon.clicked = true;
                update.score++;

                if (update.score > update.topScore) {
                    update.topScore = update.score;
                };
            }
        })

        if (doubleClicked === true) { //if you write just -if (doubleClicked)- without anything else, it will evaluate it as true, JS logic
            update.pokemons.forEach(pokemon => pokemon.clicked = false) //updates all pokemon back to unclicked
            update.score = 0; //updates score to 0
        };

        //randomize cards
        update.pokemons = update.pokemons.sort(() => 0.5 - Math.random()); //it will randomize because half the time it will be positive or negative so it will sort to the left or right

        this.setState({
            pokemons: update.pokemons,
            score: update.score,
            topScore: update.topScore
        });
    }

    render(){
        return(
            <div className = "Game"> 
                <Navigation score={this.state.score} topScore={this.state.topScore} />
                <Card image = {this.state.pokemons[1].image} />
            </div>
        )
    }

}

export default Game;
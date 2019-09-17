import React from "react";
import "./Card.css";

const Card = props => (
<div className="card" id={props.id} onClick={props.handleClick}>
  <img className="card-img" src={props.image} alt="Card image" />
  <div className="card-img-overlay"> </div>
</div>    
)

export default Card;

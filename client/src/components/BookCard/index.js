
import React from "react";
import Buttons from "../Buttons";
import "./style.css";


function BookCard(props) {
  return (
    <div className="card" key={props.id}>
        <img src={props.image} className="card-img-top" alt={props.title}/>
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text"> Written by{" "}
            {props.authors ? props.authors.join(`, `) : "Unknown author"}</p>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                View
              </a>
            <p className= "card-text">{props.description}</p>
        <Buttons  />
        </div>
    </div>
  );
}

export default BookCard;
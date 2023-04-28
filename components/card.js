import React, { useState, useRef } from "react";
import back from "./../public/imgs/back.png";

const Card = (props) => {
  //const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if(!props.disabled){
      props.handleChoice(props.card);
    }    
  };

  return (
    <>            
        <div className="cardContainer" onClick={handleClick}>
            <img             
              src={back} 
              className={props.flipped ? "unflipped" : "flipped"}
            />
             <img
              src={props.img}
              className={props.flipped ? "flipped" : "unflipped"}          
              alt="Card back"
            />
        </div>         
    </>
  );
};

export default Card;
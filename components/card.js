import React, { useState } from "react";
import back from "./../public/imgs/back.png";


const Card = (props) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    if(!flipped){
      setFlipped(!flipped);
      props.onClick();
    }    
    props.handleChoice(props.img)
  };

  const unflip = () => {
    if (flipped) {
      setFlipped(false);
    }
  }



  return (
    <>            
        <div className="cardContainer" onClick={handleClick}>
            <img             
              src={back} 
              className={flipped ? "unflipped" : "flipped"}
            />
             <img
              src={props.img}
              className={flipped ? "flipped" : "unflipped"}          
              alt="Card back"
            />
            
        </div>         
    </>
  );
};

export default Card;
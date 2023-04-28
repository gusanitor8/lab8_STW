import React, { useState } from "react";
import Card from "./card"
import MovesDisplay from "./movesDisplay";
import kitty from "./../public/imgs/kitty.png";
import frog from "./../public/imgs/frog.png";
import fish from "./../public/imgs/fish.png";
import boy from "./../public/imgs/boy.png";
import bear from "./../public/imgs/bear.png";
import strawberry from "./../public/imgs/strawberry.png";
import melody from "./../public/imgs/melody.png";

const card_images = [{"img":kitty},{"img":frog},{"img":fish},{"img":boy},{"img":bear},{"img":melody},{"img":strawberry},{"img":kitty}];

const CardContainer = () => {
    const [moves, setMoves] = useState(0);
    const [cards, setCards] = useState([]);

    const shuffleCards = () => {
        const shuffledCards = [...card_images, ...card_images]
            .sort(()=> Math.random() - 0.5)
            .map((card)=>({...card, id: Math.random()}));

        setCards(shuffledCards);
        setMoves(0);        
    }

    const handleMoves = () => {
        setMoves(moves + 1);            
        console.log("clicked");
    }

    const handleChoice = (card) => {
        console.log(card);
    }

    return(
        <>           
            <button onClick={shuffleCards}>Shuffle</button> 
            <MovesDisplay moves={moves}/>        
            <div className="grid-container">
                
                {cards.map(card =>(
                    <Card key={card.id} img={card.img} onClick={handleMoves} handleChoice={handleChoice}/>
                ))}
                                
            </div>            
        </>
    );
}

export default CardContainer;
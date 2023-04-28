import React, { useState, useRef, useEffect } from "react";
import Card from "./card"
import MovesDisplay from "./movesDisplay";
import kitty from "./../public/imgs/kitty.png";
import frog from "./../public/imgs/frog.png";
import fish from "./../public/imgs/fish.png";
import boy from "./../public/imgs/boy.png";
import bear from "./../public/imgs/bear.png";
import strawberry from "./../public/imgs/strawberry.png";
import melody from "./../public/imgs/melody.png";
import pinwi from "./../public/imgs/pinwi.png";

const card_images = [
    {"img":kitty, matched: false},
    {"img":frog, matched: false},
    {"img":fish, matched: false},
    {"img":boy, matched: false},
    {"img":bear, matched: false},
    {"img":melody, matched: false},
    {"img":strawberry, matched: false},
    {"img":pinwi, matched: false}
];

const CardContainer = () => {
    const [moves, setMoves] = useState(0);
    const [cards, setCards] = useState([]);
    const [cardOne, setCardOne] = useState(null);
    const [cardTwo, setCardTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);


    const shuffleCards = () => {
        const shuffledCards = [...card_images, ...card_images]
            .sort(()=> Math.random() - 0.5)
            .map((card)=>({...card, id: Math.random()}));

        setCards(shuffledCards);
        setMoves(0);        
    }

    const handleClick = () => {
        setMoves(moves + 1);            
        console.log("clicked");
    }


    const handleChoice = (card) => {
        cardOne ? setCardTwo(card) : setCardOne(card);        
    }

    useEffect(()=>{
        if(cardOne && cardTwo){
            setDisabled(true);  
            if(cardOne.img === cardTwo.img){
                setCards(prevCards=>{
                    return prevCards.map(card=>{
                        if(card.img == cardOne.img){
                            return {...card, matched: true}
                        }else{
                            return card;
                        }
                    })
                });
                resetTurn();                
            }else{
                console.log(cardOne.img);
                console.log(cardTwo.img);
                console.log("no match");
                setTimeout(resetTurn, 1000);
                
            }
        }
    },[cardOne, cardTwo])

    useEffect(()=>{checkWin()},[cards])

    const checkWin = () => {
        if(cards.every(card=>card.matched)){   
            alert("You win!");
        }
    }

    const resetTurn = () => {
        setCardOne(null);
        setCardTwo(null);
        setMoves(moves + 1); 
        setDisabled(false);        
    }

    

    return(
        <>                       
            <MovesDisplay moves={moves}/>      
            <div className="button-container">
                <button className="new-game-button" onClick={shuffleCards}>New Game</button>          
            </div>
            <div className="game-container">       
                <div className="grid-container">
                    {cards.map(card =>(
                        // Pass the cardRef as a prop to the Card component
                        <Card 
                            key={card.id} 
                            img={card.img} 
                            card={card}
                            onClick={handleClick} 
                            handleChoice={handleChoice} 
                            flipped={card === cardTwo||card === cardOne||card.matched} 
                            disabled = {disabled}                       
                        />
                    ))}             
                </div> 
            </div>   
        </>
    );
}

export default CardContainer;
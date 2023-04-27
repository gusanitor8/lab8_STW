import React, { useState } from "react";
import Card from "./card"
import kitty from "./../public/imgs/kitty.png";
import frog from "./../public/imgs/frog.png";
import fish from "./../public/imgs/fish.png";
import boy from "./../public/imgs/boy.png";
import bear from "./../public/imgs/bear.png";
import melody from "./../public/imgs/melody.png";

const CardContainer = () => {
    const [moves, setMoves] = useState(0);

    const handleMoves = () => {
        setMoves(moves + 1);    
        console.log(moves);
    }

    return(
        <>
            <div className="grid-container">
                <Card img={melody} onClick = {handleMoves}/>
                <Card img={fish}/>
                <Card img={kitty}/>
                <Card img={boy}/>
                
                <Card img={frog}/>
                <Card img={boy}/>
                <Card img={fish}/>
                <Card img={melody}/>

                <Card img={kitty}/>
                <Card img={frog}/>
                <Card img={kitty}/>
                <Card img={fish}/>

                <Card img={fish}/>
                <Card img={frog}/>
                <Card img={bear}/>
                <Card img={bear}/>            
            </div>
        </>
    );
}

export default CardContainer;
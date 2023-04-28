import React, { useState } from "react";

const MovesDisplay = (props) => {    
    return(
        <>            
            <div className="movesDisplay">
                <h1 className="tittle">Sanrio Memory Game</h1>
                <p className="counter">Moves: {props.moves}</p>
            </div>
        </>
    );
};

export default MovesDisplay;
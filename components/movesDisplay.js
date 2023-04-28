import React, { useState } from "react";

const MovesDisplay = (props) => {    
    return(
        <>            
            <div className="movesDisplay">
                <p>Moves: {props.moves}</p>
            </div>
        </>
    );
};

export default MovesDisplay;
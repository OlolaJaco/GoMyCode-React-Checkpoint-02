import Players from "./Players.jsx";
import Player from "./Player.jsx";
import React from "react";

function PlayerList() {
    // console.log(Players)
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
            {Players.map((player, index) => {
                return <Player key={index}  {...player}/>
            })}
        </div>
    )
}

export default PlayerList;
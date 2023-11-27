import players from "./play";
import Player from "./Player";
import React from 'react';


const PlayersList = () => {
  return (
    <div>
        {players.map((player,x)=>
        (<Player key={x}{...player}/>))}
    </div>
  )
}

export default PlayersList
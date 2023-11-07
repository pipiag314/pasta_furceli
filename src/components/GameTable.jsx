import React, { useEffect, useState } from "react";
import "./GameTable.css";
import Joystick from "./Joystick";

const GameTable = ({ players, setPlayers, settings, setSettings }) => {
  
  const placeDealerLast = (dealer_id) => {
    const playersWithoutDealer = Object.values(players).filter(player => player.id !== dealer_id)
    const dealer = Object.values(players).filter( player => player.id === dealer_id)

    const newPlayers = [
      ...playersWithoutDealer,
      ...dealer,
    ];
    console.log(newPlayers);
    setPlayers(newPlayers)
  }

  useEffect(() => {
    placeDealerLast(settings.dealerId)
  }, [])

  useEffect(() => {
    
  }, [settings.dealerId])
  
  return (
    <>
      <div className="GameTable">
        <div className="table">
          <div className="head">
            {Object.values(players).map((player, index) => (
              <div key={index}>{player.name}</div>
            ))}
          </div>
          <div className="body">
            <div>1</div>
            <div>1</div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
      <Joystick />
    </>
  );
};

export default GameTable;

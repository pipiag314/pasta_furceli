import React, { useEffect, useState } from "react";
import "./GameTable.css";
import Joystick from "./Joystick";

const GameTable = ({ players, settings, setSettings }) => {
  const [playersArray, setPlayersArray] = useState(Object.values(players));
  const [gameLogs, setGameLogs] = useState([]);
  const [round, setRound] = useState(1);

  const [gameLog, setGameLog] = useState({
    player1: {
      id: playersArray[0].id,
      wanna_collect: null,
      collected: null,
      point: 0,
    },
    player2: {
      id: playersArray[1].id,
      wanna_collect: null,
      collected: null,
      point: 0,
    },
    player3: {
      id: playersArray[2].id,
      wanna_collect: null,
      collected: null,
      point: 0,
    },
    player4: {
      id: playersArray[3].id,
      wanna_collect: null,
      collected: null,
      point: 0,
    },
  });



  const placeDealerLast = (dealerId) => {
    let dealer = {};
    const filteredArray = playersArray.filter((player) => {
      if (player.id != dealerId) {
        return true;
      } else {
        dealer = player;
      }
    });
    return [...filteredArray, dealer];
  };

  useEffect(() => {
    setPlayersArray(placeDealerLast(settings.dealerId));
  }, []);

  return (
    <>
      <div className="GameTable">
        <table>
          <tr>
            {playersArray.map((player) => {
              return (
                <th
                  key={player.id}
                  className={
                    player.id == settings.dealerId ? "dealer" : undefined
                  }>
                  {player.name}
                </th>
              );
            })}
          </tr>
          {gameLogs.map((logEntries, index) => (
            <tr key={index}>
              {Object.values(logEntries).map((playerN, i) => (
                <td key={i}>
                  {playerN.wanna_collect === 0 ? "პასი" : playerN.wanna_collect} - <span>{playerN.point}</span>
                </td>
              ))}
            </tr>
          ))}
          {
            <tr>
              {Object.values(gameLog).map((playerN) => (
                <td>
                  {playerN.wanna_collect === 0 ? "პასი" : playerN.wanna_collect} - <span>{playerN.point}</span>
                </td>
              ))}
            </tr>
          }
        </table>
      </div>
      <Joystick
        setGameLog={setGameLog}
        gameLog={gameLog}
        setGameLogs={setGameLogs}
        gameLogs={gameLogs}
        playersArray={playersArray}
        settings={settings}
        setRound={setRound}
        round={round}
        setSettings={setSettings}
      />
    </>
  );
};

export default GameTable;

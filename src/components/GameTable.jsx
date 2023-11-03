import React, { useEffect, useState } from 'react'
import "./GameTable.css"

const GameTable = ({ players, settings }) => {
  const [playersArray, setPlayersArray] = useState(Object.values(players))
  const [gameLogs, setGameLog] = useState([])


  const gameLog = {
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
  };

  useEffect(() => {
    setGameLog(prev => ([
      ...prev,
      gameLog,
    ]))
  }, [])

  const placeDealerLast = (dealerId) => {
    let dealer = {};
    const filteredArray = playersArray.filter(player => {
      if(player.id != dealerId) {
        return true;
      } else {
        dealer = player
      }
    });
    return [...filteredArray, dealer]
  }

  useEffect(() => {
    setPlayersArray(placeDealerLast(settings.dealerId))
  }, [])

  
  return (
    <div className='GameTable'>
      <table>
          <tr>
              {playersArray.map(player => {
                return (
                  <th key={player.id} className={player.id == settings.dealerId && "dealer"}>{player.name}</th>
                )
              })}
          </tr>
          {gameLogs.map(logEntries => (
            <tr>
              {Object.values(logEntries).map(playerN => (
                <td key={playerN.id}>{playerN.wanna_collect} - <span>{playerN.point}</span></td>
              ))}
            </tr>
          ))}
      </table>
    </div>
  )
}

export default GameTable
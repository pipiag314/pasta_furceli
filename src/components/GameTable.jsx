import React, { useEffect, useState } from 'react'
import "./GameTable.css"

const GameTable = ({ players, settings }) => {
  const [playersArray, setPlayersArray] = useState(Object.values(players))

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
                  <>
                    <th className={player.id == settings.dealerId && "dealer"}>{player.name}</th>
                  </>
                )
              })}
          </tr>
          <tr>
              <td>3 <span>200</span></td>
              <td>5 <span>300</span></td>
              <td>1 <span>100</span></td>
              <td>1 <span>|--|</span></td>
          </tr>
      </table>
    </div>
  )
}

export default GameTable
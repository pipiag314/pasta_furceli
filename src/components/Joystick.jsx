import React, { useEffect, useState, useSyncExternalStore } from 'react'
import './Joystick.css'
import { SCORES } from '../utils'

const buttons = [1,2,3,4,5,6,7,8,9,0]

const Joystick = ({ setGameLog, gameLog, playersArray, settings, gameLogs, setGameLogs, setRound, round, setSettings }) => {
    const [steps, setSteps] = useState(1);
    const [isWanna_collectFilled, setIsWanna_collectFilled] = useState(false);
    const [dealerCantchoose, setDealerCantchoose] = useState(9);
    
    const cantSay = (button) => {
        return dealerCantchoose === button && settings.dealerId === playersArray[steps-1].id;
    }

    const resetGameLog = () => {
        setGameLog({
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
          })
    }
    
    const handleClick = (numberInButton, n) => {
        if(!isWanna_collectFilled) {
            setGameLog(prev => ({
                ...prev,
                [`player${n}`]: {
                    ...prev[`player${n}`],
                    wanna_collect: numberInButton,
                }
            }))
            setDealerCantchoose(dealerCantchoose - numberInButton)
            if(steps === 4) {
                setSteps(1)
                setDealerCantchoose(9)
                setIsWanna_collectFilled(() => true)
            } else {
                setSteps(steps + 1)
            }
        } else {
            setGameLog(prev => ({
                ...prev,
                [`player${n}`]: {
                    ...prev[`player${n}`],
                    point: numberInButton === prev[`player${n}`].wanna_collect ? SCORES[numberInButton] : numberInButton * 10,
                    collected: numberInButton,
                }
            }))

            if(steps === 4) {
                setGameLog(prev => ({
                    ...prev,
                    [`player${n}`]: {
                        ...prev[`player${n}`],
                        point: numberInButton === prev[`player${n}`].wanna_collect ? SCORES[numberInButton] : numberInButton * 10,
                        collected: numberInButton,
                    }
                }))
                setGameLogs((prev) => [...prev, gameLog]);
                setRound((prevValue) => prevValue + 1)
                setIsWanna_collectFilled(() => false)
                setSteps(() => 1)
                setSettings(prev => ({
                    ...prev,
                    dealerId: prev.dealerId + 1 > 4 ? 1 : prev.dealerId + 1,
                }))
                // setGameLog({
                //     player1: {
                //       id: playersArray[0].id,
                //       wanna_collect: null,
                //       collected: null,
                //       point: 0,
                //     },
                //     player2: {
                //       id: playersArray[1].id,
                //       wanna_collect: null,
                //       collected: null,
                //       point: 0,
                //     },
                //     player3: {
                //       id: playersArray[2].id,
                //       wanna_collect: null,
                //       collected: null,
                //       point: 0,
                //     },
                //     player4: {
                //       id: playersArray[3].id,
                //       wanna_collect: null,
                //       collected: null,
                //       point: 0,
                //     },
                //   })
            } else {
                setSteps(steps +1)
            }

        }
    }
    
  return (
    <div className='Joystick'>
        {!isWanna_collectFilled ? (
            <>
                <div className='title'>რამდენს ამბობ {playersArray[steps-1].name}?</div>
                
                <div className='grid'>
                    {buttons.map((button, idx) => (
                        <button disabled={cantSay(button)} onClick={() => handleClick(button, steps)} key={idx} className={!button ? "span-3" : undefined}>{button ? button : "პასი"}</button>
                    ))}
                </div>
            </>
        ) : (
            <>
                <div className='title'>რამდენი წაიღო {playersArray[steps-1].name}?</div>
                
                <div className='grid'>
                    {buttons.map((button, idx) => (
                        <button onClick={() => handleClick(button, steps)} key={idx} className={!button ? "span-3" : undefined}>{button ? button : "პასი"}</button>
                    ))}
                </div>
            </>
        )}
    </div>
  )
}

export default Joystick;
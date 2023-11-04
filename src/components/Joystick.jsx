import React, { useState, useSyncExternalStore } from 'react'
import './Joystick.css'

const buttons = [1,2,3,4,5,6,7,8,9,0]

const Joystick = ({ setGameLog, gameLog, playersArray, settings }) => {
    const [steps, setSteps] = useState(1);
    const [dealerCantchoose, setDealerCantchoose] = useState(9);
    console.log(dealerCantchoose)
    
    const handleClick = (numberInButton, n) => {
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
        } else {
            setSteps(steps + 1)
        }
    }
    
    
  return (
    <div className='Joystick'>
        <div className='title'>რამდენს ამბობ {playersArray[steps-1].name}?</div>
        <div className='grid'>
            {buttons.map((button, idx) => (
                <button disabled={dealerCantchoose === button && settings.dealerId === playersArray[steps-1].id} onClick={() => handleClick(button, steps)} key={idx} className={!button ? "span-3" : undefined}>{button ? button : "პასი"}</button>
            ))}
        </div>
    </div>
  )
}

export default Joystick
import React, { useEffect, useState } from 'react'
import './Joystick.css'
import { SCORES } from '../utils'

const buttons = [1,2,3,4,5,6,7,8,9,0]

const Joystick = () => {
    
  return (
    <div className='Joystick'>
            <div className='title'>რამდენს ამბობ?</div>
            <div className='grid'>
                {buttons.map((button, idx) => (
                    <button key={idx} className={!button ? "span-3" : undefined}>{!button ? "პასი" : button}</button>
                ))}
            </div>
    </div>
  )
}

export default Joystick;
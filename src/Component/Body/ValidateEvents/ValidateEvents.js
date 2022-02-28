import React from 'react'
import {validateData} from "./ValidateData"
import { CountdownCircleTimer, useCountdown } from 'react-countdown-circle-timer'
import Countdown from 'react-countdown';
import validateEvent from '../../Image/validateevent.png'

const ValidateEvents = () => {
    // Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
   
      return <span>{hours}:{minutes}:{seconds}</span>;
    
  };

  return (
    <div className="overview bet_slip">
        <div className="price bet_category">
            {validateData.map((val, ind)=>{
            return (
                <div className="price_box_content" style={{borderLeft: val.color}} key={ind}>
                <div className="border">
                        <p className="description">{val.desc}</p>
                        <p className="name" style={{borderBottom: val.color}}>{val.name}</p>
                        <p className="box_content_price">${val.price}</p>
                </div>
                </div>
            )
            })}
        </div>
        <div className="validate_events">
            <div className="validate_events_content">
                <div className="timer">
                <CountdownCircleTimer
                    isPlaying
                    duration={248}
                    colors={['#004777', '#F7B801', '#A30000', '#A30000']}
                    size={380}
                >
                    {"time"}
                </CountdownCircleTimer>
                <Countdown date={Date.now() + 248000 } renderer={renderer} intervalDelay={1000} zeroPadTime ={1} />
                </div>
                <div className="validate_timer_data">
                    <div className="validate_events_show">
                        <img src={validateEvent}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ValidateEvents
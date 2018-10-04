import React from 'react'
import './volume.css'
import Figure from "../../icons/components/figure";

const Volume = props => (
    <button
        className="Volume"
    >
        <div onClick={props.handleVolumeToggle}>

            <Figure.Volume
                color="white"
                size={25}
            />
        </div>
         <div className="Volume-range">

            <input
                type="range"
                min={0}
                max={1}
                step={.05}
                onChange={props.handleVolumeChange}
            />
         </div>
    </button>
)

export default Volume
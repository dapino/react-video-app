import React from 'react'
import Figure from "../../icons/components/figure";
import './play-pause.css'

const PlayPause = props => (
    <div className="PlayPause">
        {
            props.pause ?
                <button
                    onClick={props.handleClick}
                >
                    <Figure.Play
                        color="white"
                        size={25}
                    />
                </button>

            :
                <button
                    onClick={props.handleClick}
                >
                    <Figure.Pause
                        color="white"
                        size={25}
                    />
                </button>
        }

    </div>
)

export default PlayPause
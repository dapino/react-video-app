import React from 'react'
import Figure from "../../icons/components/figure";

const PlayPause = props => (
    <div className="PlayPause">
        {
            props.pause ?
                <button
                    onClick={props.handleClick}
                >
                    <Figure.Play
                        fill="white"
                        size={24}
                    />
                </button>

            :
                <button
                    onClick={props.handleClick}
                >
                    <Figure.Pause
                        fill="white"
                        size={24}
                    />
                </button>
        }

    </div>
)

export default PlayPause
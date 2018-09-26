import React from 'react';
import Media from './media';
import './playlist.css';
import Figure from '../../icons/components/figure'

function Playlist(props) {
    const playlist = props.data.categories[0].playlist
    console.log(props.data.categories)
    return (
        <div className="Playlist">

            <Figure.Play
                size={32}
                color="lightgray"
            />
            <Figure.Volume
                size={32}
                color="lightgray"
            />
            <Figure.Pause
                size={32}
                color="lightgray"
            />
            <Figure.Fullscreen
                size={32}
                color="lightgray"
            />

            {
                playlist.map((item) => {
                    return <Media {...item} key={item.id}/>
                })
            }
        </div>
    )
}

export default Playlist;
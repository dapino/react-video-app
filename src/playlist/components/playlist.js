import React from 'react';
import Media from './media';
import './playlist.css';

const Playlist = props => (
    <div className="Playlist">
        {
            props.playlist.map((item) => {
                return <Media
                    openModal={props.handleOpenModal}
                    {...item}
                    key={item.id}
                />
            })
        }
    </div>
)

export default Playlist;
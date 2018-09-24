import React from 'react';
import { render } from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json'

const app = document.getElementById('app');

//ReactDOM.render( que renderizar, donde)
render( <Playlist data={data} />, app)
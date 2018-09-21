import React from 'react';
import { render } from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');

//ReactDOM.render( que renderizar, donde)
render( <Media type="video" title="Resposnive Design" author="Daniel" image="./images/covers/gorillaz.jpg"/>, app);
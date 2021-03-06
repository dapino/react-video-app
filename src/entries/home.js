import React from 'react';
import { render } from 'react-dom';
import Home from "../pages/containers/home";
import data from '../api.json'
import normalizedData from '../schemas/index'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers/data'
const initialState = {
    data: {
        ...data,
    },
    search: [],
}
console.log(normalizedData)
const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const homeContainer = document.getElementById('home-container');

render(
    <Provider store={store}>
        <Home />
    </Provider>
    , homeContainer)
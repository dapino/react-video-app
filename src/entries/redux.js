
import React from 'react'
import { createStore } from 'redux'

const $form = document.getElementById('form')

const handleSubmit = e => {
    e.preventDefault()
    const data = new FormData($form)
    const title = data.get('title')
    $form.title.value = ''
    store.dispatch({
        type: 'ADD_SONG',
        payload: {
            title,
        }
    })
}

const initialState = [
    {
        "title": "De",
    },
]

const reducer = (state, action) => {
    switch (action.type) {
    case 'ADD_SONG':
        return [ ...state, action.payload ]
    default:
        return state
    }
}

const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const render = e => {
    const playlist = store.getState()
    const $container = document.getElementById('playlist')
    $container.innerHTML = '';
    playlist.forEach( item => {
        const template = document.createElement('p')
        template.textContent = item.title
        $container.appendChild(template)
    })
}

render()

const handleChange = e => {
    render()
}

store.subscribe(handleChange)

$form.addEventListener('submit', handleSubmit)

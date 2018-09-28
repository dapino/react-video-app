import React from 'react'
import './search.css'

const Search = props => (
    <form
          className="Search"
          onSubmit={props.handleSubmit}
    >
        <input
            ref={props.setRef}
            type="text"
            placeholder="Buscador"
            className="Search-input"
            name="search"
            value={props.value}
            onChange={props.handleChange}
            //defaultValue=" "
        />
    </form>
)

export default Search
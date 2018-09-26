import React from 'react'
import Category from "./category"
import './categories.css'

const Categories = props => (
    <div className="Categories">
        {
            props.categories.map( item => (
                <Category key={item.id} {...item}/>
            ))
        }
    </div>
)

export default Categories
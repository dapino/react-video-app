import React from 'react'
import Category from "./category"
import './categories.css'
import Search from "../widgets/components/search";

const Categories = props => (
    <div className="Categories">
        <Search/>
        {
            props.categories.map( item => (
                <Category
                    key={item.id}
                    {...item}
                    handleOpenModal={props.handleOpenModal}
                />
            ))
        }
    </div>
)

export default Categories
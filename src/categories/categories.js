import React from 'react'
import Category from "./category"
import './categories.css'
import SearchContainer from "../widgets/containers/search";
import Media from "../playlist/components/media";

const Categories = props => (
    <div className="Categories">
        <SearchContainer/>
        {
            props.search.map( item => {
                return <Media {...item} key={item.id}/>
            })
        }
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
import React, { Component } from 'react'
import Search from "../components/search";
import { connect } from 'react-redux'

class SearchContainer extends Component {
    state = {
        value: 'Responsive'
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.input.value,'submit')
        this.props.dispatch({
            type: 'SEARCH_VIDEO',
            payload:{
                query: this.input.value
            }
        })
    }
    setInputRef = element => {
        this.input = element
    }
    handleInputChange = event => {
        this.setState({
            value: this.input.value.replace( ' ', '-').toLocaleLowerCase()
            //event.target.value
        })
    }
    render() {
        return (
            <Search
                setRef={this.setInputRef}
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
            />
        )
    }

}

export default connect()(SearchContainer)
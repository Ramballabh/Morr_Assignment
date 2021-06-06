import React, { Component } from 'react'
import './../css/content.css'

const div_data = (e) =>{
    return (
        <div className = "card1">
            <img src = {e.images["Poster Art"].url} alt="image" />
            <p>{e.title}</p>
        </div>
    )
}
export default class SeriesContent extends Component {
    constructor(props){
        super(props);
        this.data = this.props.data;
    }
    render() {
        return (
            <div className="content">
                <div className = "title1">
                    <h2>{this.props.title}</h2>
                </div>
                <div className = "card_content">
                    {this.data.map(div_data)}
                </div>
            </div>
        )
    }
}

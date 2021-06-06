import React, { Component } from 'react'
import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import data from '../data.json'
import Content from '../Components/Content'

const compare = (first, second) =>{
    if(first.title > second.title)
        return 1;
    else
        return -1;
}
const row_data = data.entries;
const filter_data = row_data.filter((curr_data)=>{
return (curr_data.releaseYear >= 2010 && curr_data.programType === "movie");
})
const filter_data1 = filter_data.slice(0,21);
const filter_data2 = filter_data1.sort(compare);

export default class Movies extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <Content title = "Popular Movies" data = {filter_data2} />
                <Footer />
            </div>
        )
    }
}

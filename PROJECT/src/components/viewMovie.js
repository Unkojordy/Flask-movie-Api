import React, { Component } from 'react';

import UpdateMovie from "./updateMovie";
import RemoveMovie from "./removeMovie";


export default class ViewMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            singleMovie: []
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        fetch(`http://localhost:5000/movie/${id}`, {
            method: "GET",
            headers: {
                "accepts": "application.json",
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .then(data => {this.setState({singleMovie: data})})
        .catch(err => {
            console.log("Fetch Error" + err)
        })
    }

  render() {
    return (
      <div className='view-movie'>
        <h1>Movie Information</h1>
        <div>
        {this.state.singleMovie[1]}
        </div>     
        <div>
        {this.state.singleMovie[2]}
        </div>    
        <RemoveMovie id = {this.state.singleMovie[0]}></RemoveMovie>
        <UpdateMovie ourProp = {this.state.singleMovie}></UpdateMovie>
  
      </div>
    );
  }
}
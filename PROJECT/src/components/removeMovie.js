import React, { Component } from 'react';

import {withRouter} from "react-router";

class RemoveMovie extends Component {
    constructor(props) {
        super(props)

        this.state = {
            removeMovie: []
        }
    }

    // componentDidMount() {
    //     fetch(`http://localhost:5000/movie/${id}`, {
    //         method: "DETELE",
    //         headers: {
    //             "accepts": "application.json",
    //             "Content-Type": "application/json"
    //         }
    //     })
    //     .then(response => {return response.json()})
    //     .then(data => {this.setState({removeMovie: data})})
    //     .catch(err => {
    //         console.log("Fetch Error" + err)
    //     })
    // }

  render() {
    return (
        <div className="">
            <h1>Remove Movie</h1>
            <button> Delete Movie </button>
            
        </div>
    );
  }
}

export default withRouter(RemoveMovie);
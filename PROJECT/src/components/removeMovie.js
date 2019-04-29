import React from 'react';

import { Link } from "react-router-dom"

export default function RemoveMovie(props) {
    function MovieDelete() {
        fetch(`http://localhost:5000/remove-movie/${props.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {return response.json()})
        .catch(err => {
            console.log("Delete Error" + err)
        })
    }

    return (
        <div className="">
            <h1>Remove Movie</h1>
            <Link onClick={MovieDelete} to={"/"}>Delete</Link>
        </div>
    );
}

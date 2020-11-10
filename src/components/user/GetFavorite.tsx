import {Button, Form} from "react-bootstrap";
import React, {useEffect, useState} from "react";

const GetFavorite = (props:any) => {
    const book = props.book;
    const [Result, setResult] = useState<any>()

    //Checks the database if the user has the book marked as favorite
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch("http://localhost:4000/favorite/find/"+user._id+"/"+book+"")
            .then(response => response.json())
            .then((data) => {
                console.log(data);
                setResult(data)
            })
    },[book])

    //Adds the book to favorite after pressing the button
    const handleAddFavoriteSubmit = (event:any) => {
        event.preventDefault()
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch('http://localhost:4000/favorite/add', {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: user._id,
                book: book
            })
        })
            .then(response => response.json())
            .then((data) => {
                setResult(data)
            })
            .then( (response) => {
                console.log(Result)
                alert("Favoritt lagt til!")
            });
    }

    //Removes the book as favorite after pressing the button
    const handleRemoveFavoriteSubmit = (event:any) => {
        event.preventDefault()
        const user = JSON.parse(sessionStorage.getItem("user") || "");
        fetch('http://localhost:4000/favorite/remove', {
            method: "put",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                user: user._id,
                book: book
            })
        })
            .then(response => response.json())
            .then((data) => {
                setResult(data)
            })
            .then( (response) => {
                console.log(Result)
                alert("Favoritt fjernet!")
            });
    }

    // If the user has the book marked as favorite, show button to remove it
    if(Result != null) {
        return (
            <div className={"favoriteDiv"}>
                <Form onSubmit={handleRemoveFavoriteSubmit}>
                    <Button className="favoriteButton" variant="danger" type="submit">Fjern favoritt</Button>
                </Form>
            </div>
        )
        // If not, show button to add it as favorite
    } else {
        return (
            <div className={"favoriteDiv"}>
                <Form onSubmit={handleAddFavoriteSubmit}>
                    <Button className="favoriteButton" variant="primary" type="submit">Legg til favoritt</Button>
                </Form>
            </div>
        )
    }

}

export default GetFavorite;
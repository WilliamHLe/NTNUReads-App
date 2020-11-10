import React from "react";
import GetFavorite from "./GetFavorite"

const AddFavorite = (props:any) => {
    const book = props.book;

    //Checks if the user is logged in, and displays button to add or remove the book as favorite
    if(sessionStorage.getItem("user")) {
        return <GetFavorite book={book} />
        //If not, don't display anything
    } else {
        return (
            <div className="favoriteDiv">

            </div>
        )
    }
}

export default AddFavorite;

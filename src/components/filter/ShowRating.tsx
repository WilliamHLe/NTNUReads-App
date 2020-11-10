import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import "./ShowRating.css"

//string should be "filledStar" or "emptyStar"
interface RatingProps {
    star1: "filledStar" | "emptyStar";
    star2: "filledStar" | "emptyStar";
    star3: "filledStar" | "emptyStar";
    star4: "filledStar" | "emptyStar";
    star5: "filledStar" | "emptyStar";
}



const ShowRating = ({star1, star2, star3, star4, star5}: RatingProps) => {

    return (
        <div>
            <span><FontAwesomeIcon icon={faStar} className={star1}/></span>
            <span><FontAwesomeIcon icon={faStar} className={star2}/></span>
            <span><FontAwesomeIcon icon={faStar} className={star3}/></span>
            <span><FontAwesomeIcon icon={faStar} className={star4}/></span>
            <span><FontAwesomeIcon icon={faStar} className={star5}/></span>
        </div>
    );
}

export default ShowRating;

import React from "react";
import {useHistory} from "react-router-dom";
import {Button} from "react-bootstrap";

/**
 * Predefined search buttons - clicking on them will result in same action as searching for the string defined on button
 */

const PopularSearches = () => {

    const history = useHistory();

    return (
        <div>
            <div style={{marginTop:"2em"}} className={"mb-4"}>
                <h4>Populære søk:</h4>
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/Harry%20Potter")}>Harry Potter</Button>{' '}
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/J.R.R.%20Tolkien")}>J.R.R. Tolkien</Button>{' '}
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/Oscar%20Wilde")}>Oscar Wilde</Button>{' '}
                <Button size="sm" variant="primary" type="submit" onClick={() => history.push("/results/Jane%20Austen")}>Jane Austen</Button>
            </div>
        </div>
    );
}

export default PopularSearches;

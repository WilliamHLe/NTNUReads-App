import React, {useState} from "react";
import ShowRating from "./ShowRating";
import {Button, Form} from "react-bootstrap";

/**
 * Filter rating of the result set
 */
interface SideBarProps {
    changeFilter: (ct:string) => void
}
const Sidebar = ({changeFilter}: SideBarProps) => {
    const [radio, setRadio] = useState<string>("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeFilter(e.target.value)
    }
    const reset = () => {
        setRadio("")
        changeFilter("")
    }

    const changeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRadio(e.target.value)
    }


    return (
        <div>
            <Form>
                <h5>Filtrer vurdering</h5>
                <Form.Group controlId={"FormRating"} onChange={handleChange}>
                    <Form.Check onChange={changeRadio} checked={radio==="1"} type="radio" name="rating" value="1" label={<ShowRating star1={"filledStar"} star2={"emptyStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check onChange={changeRadio} checked={radio==="2"} type="radio" name="rating" value="2" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"emptyStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check onChange={changeRadio} checked={radio==="3"} type="radio" name="rating" value="3" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"emptyStar"} star5={"emptyStar"}/>}/>
                    <Form.Check onChange={changeRadio} checked={radio==="4"} type="radio" name="rating" value="4" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"emptyStar"}/>}/>
                    <Form.Check onChange={changeRadio} checked={radio==="5"} type="radio" name="rating" value="5" label={<ShowRating star1={"filledStar"} star2={"filledStar"} star3={"filledStar"} star4={"filledStar"} star5={"filledStar"}/>}/>
                </Form.Group>
                <Button onClick={reset} variant="outline-primary">Nullstill</Button>{' '}
            </Form>
        </div>
    );
}

export default Sidebar;

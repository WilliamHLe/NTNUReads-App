import React, {useState} from "react";
import {Button, Form, FormControl, InputGroup} from "react-bootstrap";

/**
 * Adding review to database for a specific book
 */
const CreateReview = (props:any) => {
    const book = props.book;

    const [name, setName] = useState("")
    const [rating, setRating]    = useState(0)
    const [review, setReview] = useState("")

    const onFormSubmit = (event:any) => {
        event.preventDefault();

        fetch('http://localhost:4000/review/add', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                name: name,
                rating: rating,
                review: review,
                book: book
            })
        })
            .then( (response) => {
                console.log("Success")
            });
    }

    const onChangeRadio = (e:any) => {
        const r = parseInt(e.target.value)
        setRating(r)
    }

    return(
        <div className="reviewForm">
            <Form onSubmit={onFormSubmit}>
                <InputGroup size="sm" className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-sm">Navn</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={name} onChange={(e) => {setName(e.target.value)}} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
                </InputGroup>

                <div key={`inline-${'radio'}`} className="mb-3">
                    <Form.Check inline label="1" type='radio' name="gender" value="1" onChange={onChangeRadio}/>
                    <Form.Check inline label="2" type='radio' name="gender" value="2" onChange={onChangeRadio}/>
                    <Form.Check inline label="3" type='radio' name="gender" value="3" onChange={onChangeRadio}/>
                    <Form.Check inline label="4" type='radio' name="gender" value="4" onChange={onChangeRadio}/>
                    <Form.Check inline label="5" type='radio' name="gender" value="5" onChange={onChangeRadio}/>
                </div>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="textarea">Anmeldelse</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl value={review} onChange={(e) => {setReview(e.target.value)}} as="textarea" aria-label="With textarea" />
                </InputGroup>
                <br/>
                <Button type="submit">Legg til</Button>
            </Form>
        </div>
    )
}

export default CreateReview


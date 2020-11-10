import React from "react";
import {Form} from "react-bootstrap";

interface SortingProps {
    changeSort: (ct:string) => void
}

/**
 * Component for sorting the set of result from search
 */
const Sorting = ({changeSort}: SortingProps) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeSort(e.target.value)
    }

    return(
        <div>
            <div className="my-3">Sorter etter:</div>
            <Form.Group className="mb-3" controlId={"FormLanguage"}>
                <Form.Control onChange={handleChange} className="col-10" as="select" custom>
                    <option value={""}>Relevant</option>
                    <option value="authors">Forfatter A-Z</option>
                    <option value="title">Tittel A-Z</option>
                    <option value="average_rating">Vurdering lav-høy</option>
                </Form.Control>
            </Form.Group>
        </div>
    )
}

export default Sorting

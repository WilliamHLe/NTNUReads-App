import {Button, Form, FormControl} from "react-bootstrap";
import React, {useState} from "react";
import {useHistory} from "react-router-dom";

/**
 * Component for showing a searchbar
 * The search word will be sent to the result page for further database fetch
 */
const Search = () => {
    const [searchText, setSearchText] = useState<string>("")
    const history = useHistory();


    const handleSearchSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()


        if (searchText !== "") {
            history.push(`/results/${searchText}`)
        } else {
            alert("Vennligst fyll inn søketekst!");
        }

    };

    return (
        <div>
            <Form inline onSubmit={handleSearchSubmit}>
                <FormControl id="search" type="text" placeholder="Tittel, forfatter eller ISBN" value={searchText} onChange={event => {setSearchText(event.target.value)}} className="col" />
                <Button variant="primary" type="submit">Søk</Button>
            </Form>
        </div>
    );
}

export default Search;


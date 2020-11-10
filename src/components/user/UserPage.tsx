import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router-dom"
import {Button, Table} from "react-bootstrap";
import {useSelector} from "react-redux";
import {AppState} from "../../store/rootStore";

const UserPage = () => {

    const history = useHistory();
    const [searchResult, setSearchResult] = useState<any[]>([])

    const user = JSON.parse(sessionStorage.getItem("user") || "");

    const theme = useSelector((state:AppState) => state.themeReducer.theme)

    //Finds all the books the user has marked as favorites
    useEffect(()=>{
        fetch("http://localhost:4000/favorite/user/"+user._id+"")
            .then(response => response.json())
            .then((data) => {
                //console.log(data.books);
                setSearchResult(data.books)
            })
    },[user])

    //Redirects to the detailed page of the book
    const toDetails = (id:any) => {
        console.log(id);
        history.push(`/book/${id}`)
    }

    return (
        <div className={"page-wrapper-"+theme}>
            <h2>Hei, {user.username}!</h2>
            <p>Her har du en oversikt over dine favorittbøker. Gå til detaljer for mer informasjon eller for å fjerne en favoritt.</p>
            <br/>
            <Table striped bordered hover responsive variant={theme} style={{tableLayout: "auto"}}>
                <thead>
                <tr>
                    <th>ISBN</th>
                    <th>Forfatter</th>
                    <th>Tittel</th>
                    <th>Vurdering</th>
                    <th>Detaljer</th>
                </tr>
                </thead>
                <tbody>
                {searchResult.map(item =>
                    <tr>
                        <td>{item.isbn}</td>
                        <td>{item.authors}</td>
                        <td>{item.title}</td>
                        <td>{item.average_rating}</td>
                        <td><Button onClick={() => toDetails(item._id)}>Detaljer</Button></td>
                    </tr>
                )}

                </tbody>
            </Table>
        </div>
    );
}

export default UserPage;

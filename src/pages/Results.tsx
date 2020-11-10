import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {Container, Row, Col, Button, Table} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

import Page from "../components/Page";
import Sorting from "../components/Sorting";
import Sidebar from "../components/filter/Sidebar";
import {useSelector} from "react-redux";
import {AppState} from "../store/rootStore";

/**
 * This component shows the result of the search
 */
const Results = () => {
    const { searchText } = useParams()
    const [searchResult, setSearchResult] = useState<any[]>([])
    const [count, setCount] = useState(0)
    const [countRes, setCountRes] = useState(0)
    const [sortBy, setSortBy] = useState<string | null>(null)
    const [filter, setFilter] = useState<any>("")
    //const [bookId,setBookId] = useState<any>()
    const history = useHistory();

    const theme = useSelector((state:AppState) => state.themeReducer.theme)

    // Count the amount of elements from result
    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}/${filter}`)
            .then(response => response.json())
            .then((data) => {
                setCountRes(data)
            })

    }, [filter, countRes, searchText])

    // Fetch result from database using the searchText
    useEffect(()=>{
        fetch(`http://localhost:4000/books/search/${searchText}/${count}/${sortBy}/${filter}`)
            .then(response => response.json())
            .then((data) => {
                setSearchResult(data)
            })

    }, [searchText, filter, sortBy, count])


    // These three functions are used to update the result based on change from the user
    const handlePagination = (ct:number) => {
        setCount(ct)
    }

    const handleSort = (ct:string) => {
        setSortBy(ct)
    }

    const handleFilter = (ct:string) => {
        setFilter(ct)
    }



    const [showFilters, setShowFilters] = useState(false)

    const toggleFilters = () => {
        setShowFilters(!showFilters)
    }

    const toDetails = (id:any) => {
        history.push(`/book/${id}`)
    }

    const show = showFilters ? "show" : "" ;

    return (
        <div className={"page-wrapper-"+theme}>
            <Container fluid>
                <Row>
                    {/*This column is hidden at screens wider than md*/}
                    <Col md={3} className={"d-md-none"}>
                        <Button className="btn-group-toggle" type="button" variant={"primary"} onClick={ toggleFilters } block>
                            Filtrer
                        </Button>
                        <br/>
                        <div className={"collapse" + show}>
                            <Sidebar changeFilter={handleFilter}/>
                        </div>
                    </Col>
                    {/*This column is hidden at screens smaller than md*/}
                    <Col md={3} className={"d-none d-md-block"}>
                        <Sidebar changeFilter={handleFilter}/>
                    </Col>
                    <Col  md={9} className="page-content-wrapper">
                        <h5>Dette er resultatene fra søket: {searchText}</h5>
                        <Sorting changeSort={handleSort} />
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
                        <Page change={handlePagination} countRes={countRes}/>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default Results;

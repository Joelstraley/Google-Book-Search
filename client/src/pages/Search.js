import React, { useEffect, useState }from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchCards from "../components/SearchCards";
import SearchBar from "../components/SearchBar";



function SearchPage() {

      // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, [])


  // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>Google Book Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
          <SearchBar>

          </SearchBar>
            <SearchCards>
            </SearchCards>
          </Col>
        </Row>
      </Container>
    );
  }


export default SearchPage;

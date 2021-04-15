import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SavedCards from "../components/SavedCards";

class Saved extends Component  {

  state = {
      result: [],
      search: ""
  };

 /*  componentDidMount() {
    this.searchBooks("Catch-22");
  } */

/*     fetch("/books", {
        method: "GET", 
        body: JSON.stringify(bookInfo)
      .then(res => this.setState({ result: body }))
      .catch(err => console.log(err));
  }; */

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

databaseDelete = (title, subtitle, description, author, image) => {
    console.log(title, subtitle, description, author, image)
    let bookInfo = {
        title,
        subtitle,
        description,
        author,
        image
    }
      fetch("localhost:3001/books", {
        method: "POST", 
        body: JSON.stringify(bookInfo)
    }) 
}


  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

render() {

 
return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Navbar />
          <Jumbotron>
            <h1>Google Book Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron> 
        {this.state.result.map(book => (
                 <SavedCards
                 title={book.volumeInfo.title}
                 subtitle={book.volumeInfo.subtitle}
                 description={book.volumeInfo.description}
                 author={book.volumeInfo.authors}
                 image={book.volumeInfo.imageLinks.thumbnail}
                 databaseDelete={this.databaseDelete}
               />
            ))} 
          </Col>
        </Row>
      </Container>
    );
  }
};


export default Saved;

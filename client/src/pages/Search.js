import React, { Component }from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SearchCards from "../components/SearchCards";
import SearchBar from "../components/SearchBar";




class Search extends Component  {

/*       // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, []) */

  state = {
      result: [],
      images: [],
      search: ""
  };

  componentDidMount() {
    this.searchBooks("Catch-22");
  }


  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data.items }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

databaseSave = (title, subtitle, description) => {
    console.log(title, subtitle, description)
    let bookInfo = {
        title,
        subtitle,
        description
    }
      fetch("localhost:3001/books", {
        method: "POST", 
        body: JSON.stringify(bookInfo)
    }) 
}


  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.result)
    console.log(this.state.images)
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
          <SearchBar 
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                />  
        {this.state.result.map(book => (
                 <SearchCards
                 title={book.volumeInfo.title}
                 subtitle={book.volumeInfo.subtitle}
                 description={book.volumeInfo.description}
                 author={book.volumeInfo.authors}
                 image={book.volumeInfo}
                 databaseSave={this.databaseSave}
               />
            ))} 
          </Col>
        </Row>
      </Container>
    );
  }
};


export default Search;

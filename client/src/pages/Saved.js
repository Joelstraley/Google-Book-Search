import React, { Component }from "react";
import Jumbotron from "../components/Jumbotron";
import Navbar from "../components/Navbar";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import SavedCards from "../components/SavedCards";
import SearchBar from "../components/SearchBar";



class Search extends Component  {

/*       // Setting our component's initial state
  const [books, setBooks] = useState([])

  // Load all books and store them with setBooks
  useEffect(() => {
    loadBooks()
  }, []) */

  state = {
      result: {},
      search: ""
  };

  componentDidMount() {
    this.searchBooks("Catch-22");
  }


  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.result.items[0].volumeInfo)
    this.searchBooks(this.state.search);
  };


/*   // Loads all books and sets them to books
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }; */



  //Handleinput Change
  //HandleForm Submit 

render() {
    let books = this.state.result;
    console.log(books)
  /*   let booksInfo = books.map(book => {
        console.log(book.volumeInfo)
    } )  */
 
return (
    <Container fluid>
      <Row>
        <Col size="md-12">
        <Navbar />
          <Jumbotron>
            <h1>Google Book Search</h1>
            <h3>Search for and Save Books of Interest</h3>
          </Jumbotron>
          <SearchBar />
           
            <SavedCards />
      
          </Col>
        </Row>
      </Container>
    );
  }
};


export default Search;

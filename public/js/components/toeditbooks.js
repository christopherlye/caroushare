// This page is for the user to edit its own products only
// Currently, it's editing all the products

class BooksEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currentUser : this.props.currentUser,
      title: "",
      author: "",
      image: "",
      books: []
    };
  }

  //Component did mount
  componentDidMount = () => {
    fetch("/books")
      .then(response => response.json())
      .then(books => {
        this.setState({ books: books });
      });
  };

  //handle change and submit
  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    fetch("/books", {
      body: JSON.stringify({ title: this.state.title }),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdBook => {
        return createdBook.json();
      })
      .then(jsonedBook => {
        // reset the form
        // add person to list
        this.setState({
          title: "",
          books: [jsonedBook, ...this.state.books]
        });
        console.log(books);
      })
      .catch(error => console.log(error));
  };

  //Update Book
  updateBook(book, index) {
    fetch("/books" + book._id, {
      body: JSON.stringify(book),
      method: "PUT",
      headers: {
        // Accept         : 'application/json, text/plain, */*',
        "Content-Type": "application/json"
      }
    })
      .then(updatedBook => updatedBook.json())
      .then(jsonedBook => {
        fetch("/books")
          .then(response => response.json())
          .then(books => {
            this.setState({ books: books });
          });
      });
  }

  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <br />
        <br />
        <div class="container">
          <br />
          <h1>To edit book</h1>
          <div class="row">
            <form onSubmit={this.handleSubmit}>
              <label for="title" />
              <input
                type="text"
                placeholder="Title"
                value={this.state.title}
                onChange={this.handleChange}
                id="title"
              />
              <br />
              <label for="author" />
              <input
                type="text"
                placeholder="Author"
                value={this.state.author}
                onChange={this.handleChange}
                id="author"
              />
              <br />
              <label for="image" />
              <input
                type="text"
                placeholder="Image URL"
                value={this.state.url}
                onChange={this.handleChange}
                id="image"
              />
              <br />
              <input type="submit" value="Edit Book!" />
            </form>
          </div>
          <div class="row"></div>
        </div>
      </React.Fragment>
    );
  }
}

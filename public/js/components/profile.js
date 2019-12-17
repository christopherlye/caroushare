class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      currentUser: this.props.currentUser,
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
        // add book to list
        this.setState({
          title: "",
          books: [jsonedBook, ...this.state.books]
        });
        console.log(books);
      })
      .catch(error => console.log(error));
  };

  //Delete Book
  deleteBook(id, index) {
    fetch("/books/" + id, {
      method: "DELETE"
    }).then(data => {
      this.setState({
        books: [
          ...this.state.books.slice(0, index),
          ...this.state.books.slice(index + 1)
        ]
      });
    });
  }

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

  ///////////////////////////////////Render
  render() {
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="jumbo5">
          <div className="container profileContainer">
            <div className="row">
              <h1>My Profile</h1>
            </div>
            {/* Display Container Area */}
            <div class="container-fluid card main ">
              <div class="card-body">
                {console.log("user:", this.state.currentUser.username)}
                <h1>Hi {this.state.currentUser.username}!</h1>

                <h4>What would you like to do today?</h4>
                <Link
                  to="/newbook"
                  className="btn btn-secondary btn-lg btn-custom"
                >
                  Add new books
                </Link>
                <br />
                <br />
                <p>These are your current listings:</p>
                {/* Show all only my books */}

                <div class="row">
                  {this.state.books.map((book, index) => {
                    return this.state.currentUser._id === book.user._id ? (
                      <div className="col-4">
                        {/* {console.log(book)} */}
                        <Link
                          to={{
                            pathname: "/showbook",
                            state: {
                              book: book
                            }
                          }}
                        >
                          <img
                            src={book.image}
                            className="img-fluid img-thumb shadow"
                          />
                          <h6>{book.title}</h6>
                        </Link>
                        <p>{book.author}</p>
                        <Link to="/toeditbooks">Edit Listing</Link>
                        <p onClick={() => this.deleteBook(book._id, index)}>
                          Delete Listing
                        </p>
                      </div>
                    ) : (
                      ""
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

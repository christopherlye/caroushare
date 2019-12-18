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
      books: [],
      redirectToProfile: false
    };
  }

  // //NEW REDIRECT TRY
  // redirectToTarget = () => {
  // 	this.props.history.push(`/target`);
  // };

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
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        image: this.state.image
      }),
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
          image: "",
          author: "",
          books: [jsonedBook, ...this.state.books]
        });
        console.log(books);
      })
      .catch(error => console.log(error));
  };

  // this.props.location.state.book._id,

  //Update Book
  //   updateBook(book, index) {
  // 	fetch("/books" + book._id, {
  // 	  body: JSON.stringify(book),
  // 	  method: "PUT",
  // 	  headers: {
  // 		// Accept         : 'application/json, text/plain, */*',
  // 		"Content-Type": "application/json"
  // 	  }
  // 	})
  // 	  .then(updatedBook => updatedBook.json())
  // 	  .then(jsonedBook => {
  // 		fetch("/books")
  // 		  .then(response => response.json())
  // 		  .then(books => {
  // 			this.setState({ books: books });
  // 		  });
  // 	  });
  //   }

  //Update Book (working version)
  updateBook = event => {
    fetch("/books/" + this.props.location.state.book._id, {
      body: JSON.stringify({
        title: this.state.title,
        author: this.state.author,
        image: this.state.image
      }),
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
      })
      .then(() => {
        this.setState({
          redirectToProfile: true
        });
      });
    event.preventDefault();
    console.log(event.target);
  };

  render() {
    if (this.state.redirectToProfile === true) {
      return <Redirect to="/profile" />;
    }

    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="jumbo7">
          <div class="container jumbo7words">
            <h1>Edit book listing</h1>
            <div class="row">
              <form onSubmit={this.updateBook}>
                <label for="title">Title</label>
                <input
                  type="text"
                  placeholder={this.state.title}
                  value={this.state.title}
                  onChange={this.handleChange}
                  id="title"
                />
                <br />
                <label for="author">Author</label>
                <input
                  type="text"
                  placeholder={this.state.author}
                  value={this.state.author}
                  onChange={this.handleChange}
                  id="author"
                />
                <br />
                <label for="image">Image URL</label>
                <input
                  type="text"
                  placeholder={this.state.image}
                  value={this.state.image}
                  onChange={this.handleChange}
                  id="image"
                />
                <br />
                <input
                  className="btn btn-success"
                  type="submit"
                  value="Edit Book!"
                />
              </form>
            </div>
            <div class="row">
              <Link className="back-button btn btn-primary" to="/profile">
                Back
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

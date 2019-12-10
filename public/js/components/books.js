class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <h6>Books Catalogue</h6>
        <br />
        <div class="row">
          {this.state.books.map((book, index) => {
            return (
              <div>
                <a href="" />
                <img
                  src="{book.image}"
                  className="img-fluid img-thumb shadow"
                />
                <h6>{book.title}</h6>
                <p>{book.author}</p>
                <p onClick={() => this.deleteBook(book._id, index)}> X </p>
                <p onClick={() => this.updateBook(book, index)}> Edit Book </p>
              </div>
            );
          })}
        </div>
        {/* <table>
					<tbody>
						{this.state.books.map((book, index) => {
							return (
								<tr>
									<td>Title: {book.title}</td> <td>{book.image}</td>
									<td onClick={() => this.deleteBook(book._id, index)}> X </td>
									<td onClick={() => this.updateBook(book, index)}> Edit Book </td>
								</tr>
							);
						})}
					</tbody>
				</table> */}
      </React.Fragment>
    );
  }
}

class Showbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.location.state.book,
      index: this.props.location.state.index
    };
  }

  //Delete Book
  deleteBook(id, index) {
    fetch("/books/" + id, {
      method: "DELETE"
    }).then(response =>
      response.json().then(json => {
        return json;
      })
    );
  }

  render() {
    console.log(this.state.index);
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <br />
        <br />
        <br />
        <div class="container">
          <p>{this.state.book.title}</p>
          <p>{this.state.book.author}</p>
          <img src={this.state.book.image}></img>
          <p>
            Owner:{" "}
            {this.state.book.user ? this.state.book.user.username : "No Owner"}
          </p>
          <Link
            to={{
              pathname: "/toeditbooks",
              state: {
                book: this.state.book
              }
            }}
          >
            <p>Edit this book: {this.state.book.title}</p>
          </Link>
          <p
            onClick={() =>
              this.deleteBook(this.state.book._id, this.state.index)
            }
          >
            X
          </p>
        </div>
      </React.Fragment>
    );
  }
}

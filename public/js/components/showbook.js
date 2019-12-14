class Showbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      image: "",
      book: this.props.location.state.book
    };
  }

  // componentDidMount = event => {
  //   fetch("/books")
  //     .then(response => response.json())
  //     .then(books => {
  //       this.setState({ books: books });
  //     });
  //   // console.log(this.state.books);
  // };

  render() {
    console.log(this.state.book);
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
          <p>Owner: {this.state.book.user.username}</p>
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
        </div>
      </React.Fragment>
    );
  }
}

class Showbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      image: "",
      books: []
    };
  }

  componentDidMount = event => {
    fetch("/books")
      .then(response => response.json())
      .then(books => {
        this.setState({ books: books });
      });
    // console.log(this.state.books);
  };

  //   async componentDidMount() {
  //     console.log("running");
  //     let bookStore = await fetch("/books");
  //     console.log(bookStore.title);
  //     console.log(bookStore);
  //     this.setState(state => {
  //       title: bookStore.title;
  //     });
  //   }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          {this.state.books.map((book, index) => {
            return (
              <tr>
                <td>{book.title}</td>
              </tr>
            );
          })}
        </div>

        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

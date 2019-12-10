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

  async componentDidMount() {
    console.log("runing");
    let bookStore = await fetch("/books");

    console.log(bookStore);
    this.setState(state => {
      title: bookStore.title;
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          {this.state.books.map(book => {
            <tr>
              <td>{book.title}</td>
            </tr>;
          })}
        </div>

        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

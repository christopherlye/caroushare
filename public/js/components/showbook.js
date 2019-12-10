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
  componentDidMount = () => {
    fetch("/books")
      .then(response => response.json())
      .then(books => {
        this.setState({ books: books });
      });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <table>
          <tbody>
            {this.state.books.map(book => {
              <tr>
                <td>{book.title}</td>
              </tr>;
            })}
          </tbody>
        </table>

        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

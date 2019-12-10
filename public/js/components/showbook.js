class Showbook extends React.Component {
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
        <br />
        <br />
        <br />
      </React.Fragment>
    );
  }
}

class Collection extends React.Component {
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

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <Books />
      </React.Fragment>
    );
  }
}

class Newbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      image: "",
      books: []
    };
  }

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
    //Still shows error
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label for="title" />
            <input
              type="text"
              placeholder="title"
              value={this.state.title}
              onChange={this.handleChange}
              id="title"
            />
            <label for="author" />
            <input
              type="text"
              placeholder="Author"
              value={this.state.author}
              onChange={this.handleChange}
              id="author"
            />
            <label for="image" />
            <input
              type="text"
              placeholder="Image URL"
              value={this.state.url}
              onChange={this.handleChange}
              id="image"
            />
            <input type="submit" value="Upload Book!" />
          </form>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

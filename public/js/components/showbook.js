class Showbook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: this.props.location.state.book,
      index: this.props.location.state.index,
      isDeleted: false,
      currentUser: this.props.currentUser
    };
  }

  //Component Did Mount
  // componentDidMount() {
  // 	fetch('/users').then((response) => response.json()).then((users) => {
  // 		this.setState({
  // 			users : users
  // 		});
  // 	});
  // }

  //Delete Book
  // deleteBook(id, index) {
  // 	fetch('/books/' + id, {
  // 		method : 'DELETE'
  // 	}).then(() => this.props.history.push('/books'));
  // }

  render() {
    // console.log('testing for index', this.state.index);
    console.log("book", this.state.book);
    return (
      <React.Fragment>
        <div className="jumbo5">
          <div className="container showDescription">
            <h3 className="jumbo5words">{this.state.book.title}</h3>
            <img
              src={this.state.book.image}
              className="showBook img-fluid img-thumb"
            />
            <h5 className="book-title">{this.state.book.title}</h5>
            <p className="listed-by">Author: {this.state.book.author}</p>
            <p className="listed-by">
              Owner:{" "}
              {this.state.book.user
                ? this.state.book.user.username
                : "No Owner"}
            </p>
            <Link to="/books">Back</Link>
            {console.log(
              "testing for whether loggin in or not. user:",
              this.props.currentUser
            )}
            {console.log(
              "testing for owner of book:",
              this.state.book.user.username
            )}

            {/* {this.state.book.user.username ? (
						<Link
							to={{
								pathname : '/toeditbooks',
								state    : {
									book : this.state.book
								}
							}}
						>
							Edit this book!
						</Link>
					) : (
						<p onClick={() => this.deleteBook(this.state.book._id, this.state.index)}>X</p>
						''
					)} */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

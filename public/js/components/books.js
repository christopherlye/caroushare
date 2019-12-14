class Books extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title  : '',
			author : '',
			image  : '',
			books  : []
		};
	}

	//Component did mount
	componentDidMount = () => {
		fetch('/books').then((response) => response.json()).then((books) => {
			this.setState({ books: books });
		});
	};

	//handle change and submit
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		console.log(this.state);
		fetch('/books', {
			body    : JSON.stringify({ title: this.state.title }),
			method  : 'POST',
			headers : {
				Accept         : 'application/json, text/plain, */*',
				'Content-Type' : 'application/json'
			}
		})
			.then((createdBook) => {
				return createdBook.json();
			})
			.then((jsonedBook) => {
				// reset the form
				// add person to list
				this.setState({
					title : '',
					books : [jsonedBook, ...this.state.books]
				});
				console.log(books);
			})
			.catch((error) => console.log(error));
	};

	//Delete Book
	deleteBook(id, index) {
		fetch('/books/' + id, {
			method : 'DELETE'
		}).then((data) => {
			this.setState({
				books : [...this.state.books.slice(0, index), ...this.state.books.slice(index + 1)]
			});
		});
	}

	//Update Book
	updateBook(book, index) {
		fetch('/books' + book._id, {
			body    : JSON.stringify(book),
			method  : 'PUT',
			headers : {
				// Accept         : 'application/json, text/plain, */*',
				'Content-Type' : 'application/json'
			}
		})
			.then((updatedBook) => updatedBook.json())
			.then((jsonedBook) => {
				fetch('/books').then((response) => response.json()).then((books) => {
					this.setState({ books: books });
				});
			});
	}

	render() {
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<br />
				<br />
				<div class="container">
					<br />
					<div class="row">
						<h6>Books Catalogue</h6>
					</div>
					<div class="row">
						{this.state.books.map((book, index) => {
							return (
								<div>
									<img src="{book.image}" className="img-fluid img-thumb shadow" />
									<Link
										to={{
											pathname : '/showbook',
											state    : {
												book : book
											}
										}}
									>
										<h6>{book.title}</h6>
									</Link>
									<p>{book.author}</p>
									{/* <p onClick={() => this.deleteBook(book._id, index)}> X </p>
                  <Link to="/toeditbooks"> Edit Book </Link> */}
								</div>
							);
						})}
					</div>
				</div>
				<table>
					<tbody>
						{this.state.books.map((book, index) => {
							console.log(book);
							return (
								<tr>
									<td>Title: {book.title}</td>
									<td>{book.user ? book.user.username : 'no user'}</td>
									<td>{book.image}</td>
									<td onClick={() => this.deleteBook(book._id, index)}> X </td>
									<Link
										to={{
											pathname : '/toeditbooks',
											state    : {
												book : book
											}
										}}
									>
										<td>Edit {book.title}</td>
									</Link>
								</tr>
							);
						})}
					</tbody>
				</table>
			</React.Fragment>
		);
	}
}

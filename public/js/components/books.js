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
				<div className="container">
					<br />
					<div className="row">
						<h3>Books Catalogue</h3>
						<br />
					</div>
					<div class="row">
						{this.state.books.map((book, index) => {
							return (
								<div className="col listingCard col-sm-3">
									<Link
										to={{
											pathname : '/showbook',
											state    : {
												book  : book,
												index : index
											}
										}}
									>
										<img src={book.image} className="img-fluid img-thumb shadow" />
									</Link>

									<h6>{book.title}</h6>
									<p>Listed by: {book.user ? book.user.username : 'no user'}</p>
								</div>
							);
						})}
					</div>
				</div>
				{/* <table>
					<tbody>
						{this.state.books.map((book, index) => {
							return (
								<tr>
									<td>Title: {book.title}</td>
									<td>{book.user ? book.user.username : 'no user'}</td>
								</tr>
							);
						})}
					</tbody>
				</table> */}
			</React.Fragment>
		);
	}
}

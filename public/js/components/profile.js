class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username    : '',
			currentUser : this.props.currentUser,
			title       : '',
			author      : '',
			image       : '',
			books       : []
		};
	}
	//Component did mount etc
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

	///////////////////////////////////Render
	render() {
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<br />
				<br />
				<br />
				<div className="container profileContainer">
					<div className="row">
						<h1>My Profile</h1>
					</div>
					{/* Display Container Area */}
					<div class="container-fluid card main ">
						<div class="card-body">
							<h1>Hi {this.props.currentUser.username}!</h1>
							<p>What would you like to do today?</p>

							{/* Show all only my books */}
							<div className="row">
								{this.state.books.map((book) => {
									console.log(book);
									console.log('2:', this.props.currentUser);
									console.log('1:', book.user._id);

									return this.props.currentUser._id === book.user._id ? (
										<p>
											{book.title} {book.author}
										</p>
									) : (
										''
									);
								})}
							</div>
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

						<div class="buttonContainer">
							<Link to="/newbook" className="btn btn-secondary btn-lg btn-custom">
								Add new books
							</Link>
							<Link to="/toeditbooks" className="btn btn-secondary btn-lg btn-custom">
								Edit your books!
							</Link>
							{/* <a
									href="/products/"
									class="btn btn-secondary btn-lg btn-custom"
									role="button"
									aria-pressed="true"
								>
									Edit Products
								</a> */}
						</div>
						<h1>Log Out Not working yet</h1>
						<form action="/sessions?_method=DELETE" method="POST">
							<input type="submit" value="Log out" className="btn btn-secondary btn-lg " />
						</form>
					</div>
				</div>

				{/* <Navbar />
				<br />
				<br />
				<br />
				<div className="container profileContainer">
					<div className="row">
						<h1>My Profile</h1>
					</div>
					<div className="row">
						<Link to="/newbook">Add new books</Link>
					</div>
					<Books />
				</div> */}
			</React.Fragment>
		);
	}
}

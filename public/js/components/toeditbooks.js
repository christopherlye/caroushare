// This page is for the user to edit its own products only
// Currently, it's editing all the products

class BooksEdit extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			// currentUser : this.props.currentUser,
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
		// console.log(this.state);
		fetch('/books', {
			body    : JSON.stringify({
				title : this.state.title
				// author : this.state.author,
				// image  : this.state.image
			}),
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
				// add book to list
				this.setState({
					title : '',
					// image  : '',
					// author : '',
					books : [jsonedBook, ...this.state.books]
				});
				console.log(books);
			})
			.catch((error) => console.log(error));
	};

	// this.props.location.state.book._id,

	//Update Book
	updateBook = (event) => {
		fetch('/books/' + this.props.location.state.book._id, {
			body    : JSON.stringify({
				title  : this.state.title,
				author : this.state.author,
				image  : this.state.image
			}),
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
		// event.preventDefault();
		// console.log(event.target);
	};

	render() {
		console.log('check props', this.props);
		console.log('check state', this.state);
		// console.log('222', this.props.location.state.book._id);
		console.log('check state title', this.state.title);

		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<br />
				<br />
				<div class="container">
					<br />
					<h1>Edit book listing</h1>
					<div class="row">
						<form onSubmit={this.updateBook}>
							<label for="title">Title</label>

							<input
								type="text"
								placeholder={this.state.title}
								value={this.state.title}
								onChange={this.handleChange}
								id="title"
							/>
							<br />
							<label for="author">Author</label>
							<input
								type="text"
								placeholder={this.state.author}
								value={this.state.author}
								onChange={this.handleChange}
								id="author"
							/>
							<br />
							<label for="image">Image URL</label>
							<input
								type="text"
								placeholder={this.state.image}
								value={this.state.image}
								onChange={this.handleChange}
								id="image"
							/>
							<br />
							<input type="submit" value="Edit Book!" />
						</form>
					</div>
					<div class="row">
						<Link to="/profile">Back</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

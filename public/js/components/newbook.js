class Newbook extends React.Component {
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
		console.log(this.state);
		fetch('/books', {
			body    : JSON.stringify({
				title  : this.state.title,
				author : this.state.author,
				image  : this.state.image,
				user   : this.state.user
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
				// add person to list
				this.setState({
					title : '',
					books : [jsonedBook, ...this.state.books]
				});
				console.log(books);
			})
			.catch((error) => console.log(error));
	};
	render() {
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<br />
				<br />
				<br />
				<div className="container">
					<form onSubmit={this.handleSubmit}>
						<label for="title" />
						<input
							type="text"
							placeholder="Title"
							value={this.state.title}
							onChange={this.handleChange}
							id="title"
						/>
						<br />
						<label for="author" />
						<input
							type="text"
							placeholder="Author"
							value={this.state.author}
							onChange={this.handleChange}
							id="author"
						/>
						<br />
						<label for="image" />
						<input
							type="text"
							placeholder="Image URL"
							value={this.state.url}
							onChange={this.handleChange}
							id="image"
						/>
						<br />
						<label for="user" />
						<input
							type="text"
							placeholder="username"
							value={this.state.user}
							onChange={this.handleChange}
							id="user"
						/>
						<br />
						<input type="submit" value="Upload Book!" />
					</form>
					<br />
					<div class="row">
						<Link to="/profile">Back</Link>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

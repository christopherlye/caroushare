class Newbook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title             : '',
			author            : '',
			image             : '',
			books             : [],
			users             : [],
			currentUser       : this.props.currentUser,
			redirectToProfile : false
		};
	}

	//Component did mount
	componentDidMount = () => {
		console.log(this.props.currentUser);
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
				user   : this.props.currentUser._id
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
					title             : '',
					author            : '',
					image             : '',
					books             : [jsonedBook, ...this.state.books],
					redirectToProfile : true
				});
				console.log(jsonedBook);
			})
			.catch((error) => console.log(error));
	};
	render() {
		if (this.state.redirectToProfile === true) {
			return <Redirect to="/profile" />;
		}
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
						{/* <label for="user" />
						<input
							type="text"
							placeholder="username"
							value={this.state.user}
							onChange={this.handleChange}
							id="user"
						/>
						<br /> */}
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

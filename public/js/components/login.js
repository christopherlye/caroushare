class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username    : '',
			password    : '',
			currentUser : ''
		};
	}

	// HandleChange & handleSubmit
	handleChange = (event) => {
		this.setState({ [event.target.id]: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		fetch('/sessions', {
			body    : JSON.stringify(this.state),
			method  : 'POST',
			headers : {
				Accept         : 'application/json, text/plain, */*',
				'Content-Type' : 'application/json'
			}
		})
			.then((loggedInUser) => {
				return loggedInUser.json();
			})
			.then((jsonedUser) => {
				this.setState({
					currentUser : jsonedUser
				});
				console.log('Current User is:', this.state.currentUser);
			})
			.then(() => {
				this.props.userState(this.state.currentUser);
			})
			.catch((error) => console.log(error));
	};

	render() {
		return (
			<React.Fragment>
				<Navbar />
				<br />
				<br />
				<br />

				<div className="container card main">
					<h1>Login</h1>

					<img src="../img/login.jpg" className="card-img-top" alt="Caroushare log in" />
					<div className="card-body">
						<form onSubmit={this.handleSubmit}>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								id="username"
								value={this.state.username}
								onChange={this.handleChange}
							/>
							<label htmlFor="password">Password</label>
							<input
								type="text"
								name="password"
								id="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
							<input type="submit" value="Submit" />
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

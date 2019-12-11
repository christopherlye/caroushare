const { Redirect, BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser : ''
		};
	}

	userState = (user) => {
		this.setState(
			{
				currentUser : user
			},
			() => {
				console.log('user logged in');
			}
		);
	};

	render() {
		return (
			<BrowserRouter>
				<div>
					{/* Nav current user    */}
					<Switch>
						{/* User login and diff view  */}
						<Route exact path="/">
							<Home currentUser={this.state.currentUser} />
						</Route>
						<Route path="/login">
							{this.state.currentUser ? <Redirect to="/profile"/> : <Login userState={this.userState} /> }
						</Route>
						<Route path="/signup">
							<Signup currentUser={this.state.currentUser} />
						</Route>

						{/* Others */}
						<Route path="/about">
							<About />
						</Route>
						<Route path="/books">
							<Books />
						</Route>
						<Route path="/profile">
							<Profile />
						</Route>
						<Route path="/newbook">
							<Newbook />
						</Route>
						<Route path="/showbook">
							<Showbook />
						</Route>
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.main-loader'));

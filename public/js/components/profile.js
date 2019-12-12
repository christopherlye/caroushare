class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username    : '',
			currentUser : this.props.currentUser
		};
	}
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
							<h1>Hi {this.props.currentUser}!</h1>
							<p>What would you like to do today?</p>
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

class Profile extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
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
				</div>
			</React.Fragment>
		);
	}
}

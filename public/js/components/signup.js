class Signup extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<br />
				<br />
				<br />
				<div className="container">
					<h6>Log in or sign up page</h6>
				</div>

				<div className="container card main">
					<img src="../img/login.jpg" className="card-img-top" alt="Caroushare log in" />
					<div className="card-body">
						{/* To edit the action tag */}
						<form className="col s12 form-signin" action="" method="POST">
							<h1 className="h3 mb-3 font-weight-normal">Sign Up</h1>
							<input
								placeholder="username"
								id="username"
								type="text"
								className="validate"
								name="username"
								required
							/>
							<label for="username" className="sr-only">
								User Name
							</label>
							<br />
							<input
								placeholder="password"
								id="password"
								type="password"
								className="validate"
								name="password"
								required
							/>
							<label for="password" className="sr-only">
								Password
							</label>
							<br />
							<button className="btn waves-effect waves-light" type="submit" name="action">
								Submit
							</button>
						</form>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

class Home extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		currentUser : this.props.currentUser
	// 	};
	// }
	render() {
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<div className="jumotron jumbo1">
					<div className="container">
						<h1 className="display-4 jumbo1words">
							Priceless education,<br />Expensive textbooks
						</h1>
						<div class="container">
							<p className="words">
								Education is priceless but textbooks are expensive, so why not share / trade / swap your
								old textbooks with someone who needs it!
							</p>
						</div>
					</div>
				</div>

				<h6>About Us section</h6>
				<p>(this part can do an if else - if logged in, show dashboard Home, if not, show homepage homepage</p>
			</React.Fragment>
		);
	}
}

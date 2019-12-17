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
        <div className="jumbo1">
          <div className="container">
            <h1 className="display-4 jumbo1words">
              Priceless education,
              <br />
              Expensive textbooks
            </h1>
            <div class="container">
              <p className="words">
                Education is priceless but textbooks are expensive, so why not
                share / trade / swap your old textbooks with someone who needs
                it!
              </p>
              <button class="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </div>

        <div className="divider">
          <p className="quote">
            "the best time to plant a tree was 20 years ago. <br />
            the second best time is now."
          </p>
        </div>

        <div className="jumbo2">
          <div className="container">
            <h1 className="display-4 jumbo1words">The Caroushare Vision</h1>
            <div class="container">
              <p className="words">
                Every year, about 40,000 students progress to the level of
                education. This means that the amount of new textbooks being
                printed each year is at least 400,000, counting both primary and
                secondary levels. We believe that going green starts from the
                textbooks. Our dream is to create a more cohesive and generous
                society beginning with the little that we have.
              </p>
            </div>
          </div>
        </div>

        {/* <h6>About Us section</h6>
        <p>
          (this part can do an if else - if logged in, show dashboard Home, if
          not, show homepage homepage
        </p> */}
      </React.Fragment>
    );
  }
}

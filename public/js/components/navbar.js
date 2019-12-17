class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser
    };
  }
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top">
        <a className="navbar-brand" href="/">
          Caroushare
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Navigation b  */}
        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/books" className="nav-link">
                Books
              </Link>
            </li>
            {/* To profile button  */}
            {this.props.currentUser ? (
              <li className="nav-item">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            ) : (
              ""
            )}

            {/* To toggle log in or log out button  */}
            {this.props.currentUser ? (
              <li className="nav-item nav-link" onClick={this.props.toLogout}>
                <Link to="/">Logout</Link>
              </li>
            ) : (
              <li className="nav-item">
                <Link to="/login" className="nav-link">
                  Log In
                </Link>
              </li>
            )}

            {/* for signup */}
            {this.props.currentUser ? (
              ""
            ) : (
              <li className="nav-item">
                <Link to="/signup" className="nav-link">
                  Sign Up
                </Link>
              </li>
            )}

            {/* <li className="nav-item">
							<Link to="/profile" className="nav-link">
								My Profile
							</Link>
						</li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

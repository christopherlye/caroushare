class NavBar extends React.Component {
  render() {
    // taken from https://getbootstrap.com/docs/4.0/examples/sticky-footer-navbar/#
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand">Caroushare Logo</a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">About Us</li>
              <li className="nav-item active">Books</li>
              <li className="nav-item active">Log In</li>
              <li className="nav-item active">Sign Up</li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

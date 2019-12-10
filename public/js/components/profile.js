class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            <h1 className="display-4">Profile</h1>
            <div class="row">
              <Link to="/newbook">Add new books</Link>
              <Books />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

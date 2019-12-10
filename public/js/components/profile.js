class Profile extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <div className="row">
            <h1 className="display-4">Profile</h1>
            <div class="row">
              <Link to="/newbook">Add new books</Link>
              <Books />
            </div>
          </div>
        </div>
        <div>
          <BrowserRouter>
            <Switch>
              <Route path="/newbook">
                <Newbook />
              </Route>
            </Switch>
          </BrowserRouter>
        </div>
      </React.Fragment>
    );
  }
}

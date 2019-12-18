class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      redirect: false
    };
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    fetch("/users", {
      body: JSON.stringify(this.state),
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      }
    })
      .then(createdUser => {
        return createdUser.json();
      })
      .then(() => {
        // to toggle to true to redirect
        this.setState({
          redirect: true
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/login" />;
    }
    return (
      <React.Fragment>
        {/* <Navbar /> */}
        <div className="jumbo4 login-container">
          <div className="container card main" style={{ width: "30rem" }}>
            <img
              src="../img/login.jpg"
              className="card-img-top"
              alt="Caroushare signup"
            />

            <div className="card-body">
              <h1>Sign Up</h1>
              <form onSubmit={this.handleSubmit} className="">
                <label for="username" className="labels">
                  Username
                </label>
                <input
                  // placeholder="username"
                  id="username"
                  type="text"
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                <br />
                <label for="password" className="labels">
                  Password
                </label>
                <input
                  // placeholder="password"
                  id="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />

                <br />
                <input
                  className="btn btn-success"
                  type="submit"
                  value="submit"
                />
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

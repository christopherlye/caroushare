const {
  Redirect,
  BrowserRouter,
  Link,
  Switch,
  Route,
  browserHistory
} = ReactRouterDOM;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: "",
      delete: false
    };
  }

  userState = user => {
    this.setState(
      {
        currentUser: user
      },
      () => {
        console.log("user logged in");
      }
    );
  };

  // Function to logout
  toLogout = () => {
    this.setState({
      currentUser: ""
    });
  };

  toDelete = () => {
    this.setState({
      delete: true
    });
  };

  // {/* <Route path="/showbook" component={Showbook} /> */}

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* Might be working */}
          <Navbar
            currentUser={this.state.currentUser}
            toLogout={this.toLogout}
          />

          {/* Nav current user    */}
          <Switch>
            {/* User login and diff view  */}
            <Route exact path="/">
              <Home currentUser={this.state.currentUser} />
            </Route>
            <Route path="/login">
              {this.state.currentUser ? (
                <Redirect to="/profile" />
              ) : (
                <Login userState={this.userState} />
              )}
            </Route>
            <Route path="/signup">
              <Signup currentUser={this.state.currentUser} />
            </Route>

            {/* Others */}
            <Route path="/about">
              <About />
            </Route>
            <Route path="/books">
              <Books />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/newbook">
              <Newbook />
            </Route>
            <Route path="/showbook" component={Showbook} />
            <Route path="/toeditbooks" component={BooksEdit} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".main-loader"));

// const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
  render() {
    return <NavBar />;
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

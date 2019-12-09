const { BrowserRouter, Link, Switch, Route, browserHistory } = ReactRouterDOM;

class App extends React.Component {
	render() {
		return (
            
			<BrowserRouter>
                <div>
                    <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/books">
                        <Books />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    </Switch>
                </div>     
			</BrowserRouter>
		);
	}
}




ReactDOM.render(<App />, document.querySelector('.container'));


class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container">
          <h1 className="display-4 jumbo1words">Fluid jumbotron</h1>
          <div class="container">
            <p className="words">
              Education is priceless, but textbooks are expensive
            </p>
            <p className="words">
              To do: Stretch this out to the sides, and cover the navbar
            </p>
          </div>
        </div>

        <h6>About Us section</h6>
        <p>
          (this part can do an if else - if logged in, show dashboard Home, if
          not, show homepage homepage
        </p>
      </React.Fragment>
    );
  }
}

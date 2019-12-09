class Navbar extends React.Component {
    render() {
        return ( 
            <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                <a className="navbar-brand" href="#">Caroushare</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation b  */}
                <div className="collapse navbar-collapse" id="navbarsExampleDefault">

                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                            <li className="nav-item">
                                <Link to="/books" className="nav-link">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Log In</Link>
                            </li>
                        </ul>
                    </div>

				</nav>


        )
    }
}


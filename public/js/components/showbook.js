class Showbook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title  : '',
			author : '',
			image  : '',
			book   : this.props.location.state.book
		};
	}

	// componentDidMount = event => {
	//   fetch("/books")
	//     .then(response => response.json())
	//     .then(books => {
	//       this.setState({ books: books });
	//     });
	//   // console.log(this.state.books);
	// };

	//   async componentDidMount() {
	//     console.log("running");
	//     let bookStore = await fetch("/books");
	//     console.log(bookStore);
	//     this.setState(state => {
	//       title: bookStore.title;
	//     });
	//   }

	render() {
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<br />
				<br />
				<br />
				<div class="container">
					<p>{this.state.book.title}</p>
					<p>{this.state.book.author}</p>
				</div>
			</React.Fragment>
		);
	}
}

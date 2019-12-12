class Showbook extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title  : '',
			author : '',
			image  : '',
			books  : []
		};
	}

<<<<<<< HEAD
  // componentDidMount = event => {
  //   fetch("/books")
  //     .then(response => response.json())
  //     .then(books => {
  //       this.setState({ books: books });
  //     });
  //   // console.log(this.state.books);
  // };

  async componentDidMount() {
    console.log("running");
    let bookStore = await fetch("/books");
    console.log(bookStore);
    this.setState(state => {
      title: bookStore.title;
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div>
          {this.state.books.map((book, index) => {
            return (
              <tr>
                <td>{book.title}</td>
              </tr>
            );
          })}
        </div>
=======
	async componentDidMount() {
		console.log('runing');
		let bookStore = await fetch('/books');

		console.log(bookStore);
		this.setState((state) => {
			title: bookStore.title;
		});
	}

	render() {
		return (
			<React.Fragment>
				{/* <Navbar /> */}
				<div>
					{this.state.books.map((book) => {
						<tr>
							<td>{book.title}</td>
						</tr>;
					})}
				</div>
>>>>>>> 64fff62f4bb0d9c97e554ec44caff4210a90c8aa

				<br />
				<br />
				<br />
			</React.Fragment>
		);
	}
}

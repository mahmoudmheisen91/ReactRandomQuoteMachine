const api_url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

let QuoteBoxComp = props => {
  return (
    <div id="quote-box">
      <p id="text">{props.quote}</p>
      <p id="author">{props.author}</p>
      <div id="btns">
        <button id="new-quote" onClick={props.clickHandler}>
          New Quote
        </button>
        <a id="tweet-quote" href="twitter.com/intent/tweet">
          Tweet Quote
        </a>
      </div>
    </div>
  );
};

class QuoteController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: "",
      author: ""
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch(api_url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          quotes: data.quotes,
          quote: data.quotes[1].quote,
          author: data.quotes[1].author
        });
      })
      .catch(err => console.log(err));
  }

  handleClick() {
    let index = Math.floor(Math.random() * this.state.quotes.length);
    this.setState({
      quote: this.state.quotes[index].quote,
      author: this.state.quotes[index].author
    });
  }

  render() {
    return (
      <div>
        <QuoteBoxComp
          quote={'" ' + this.state.quote + ' "'}
          author={"- " + this.state.author}
          clickHandler={this.handleClick}
        />
      </div>
    );
  }
}

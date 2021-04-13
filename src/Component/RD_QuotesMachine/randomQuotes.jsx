import React, { Component } from "react";
import Quote from "./quote";
class RandomQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      opacity: false,
      url:
        "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",
    };
    this.colors = [
      "#16a085",
      "#27ae60",
      "#2c3e50",
      "#f39c12",
      "#e74c3c",
      "#9b59b6",
      "#FB6964",
      "#342224",
      "#472E32",
      "#BDBB99",
      "#77B1A9",
      "#73A857",
    ];
  }
  componentDidMount() {
    const url = this.state.url;
    this.fetchData(url);
  }
  handleClick = () => {
    this.randomQuote(this.state.quotes);
    this.randomColor(this.colors);
    this.setState({ opacity: !this.state.opacity });
  };
  handleAnimationEnd = () => {
    this.setState({ opacity: !this.state.opacity });
  };
  fetchData = async (url) => {
    await fetch(url)
      .then((data) => data.json())
      .then((res) => {
        this.setState({ quotes: res.quotes });
        this.randomQuote(res.quotes);
        this.randomColor(this.colors);
      });
  };
  randomQuote = (quotes) => {
    const quote = quotes[Math.floor(Math.random() * (quotes.length - 1))];
    this.setState({ quote: quote });
  };
  randomColor = (colors) => {
    const color = colors[Math.floor(Math.random() * (colors.length - 1))];
    this.setState({ color: color });
  };
  render() {
    const quote = this.state.quote;
    const opacity = this.state.opacity;
    const color = { backgroundColor: this.state.color };
    return (
      <div className="display_quotes w-1/2 m-auto ">
        <Quote
          quote={quote && quote.quote}
          author={quote && quote.author}
          color={color}
          opacity={opacity}
        ></Quote>
        <button
          onClick={this.handleClick}
          onAnimationEnd={this.handleAnimationEnd}
          className={`block rounded px-2 py-1 text-white focus:outline-none hover:opacity-80 ml-auto transition-all duration-300  ${
            opacity ? "fade" : ""
          }`}
          style={color}
        >
          Random Quote
        </button>
      </div>
    );
  }
}

export default RandomQuotes;

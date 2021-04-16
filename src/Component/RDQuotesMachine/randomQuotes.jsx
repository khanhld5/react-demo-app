import React, { Component } from "react";
import Quote from "./quote";
import { connect } from "react-redux";
import { updateQuotes } from "../../state/actions/rdQuotesAction";

class RandomQuotes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {},
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
  //get Data
  fetchData = async (url) => {
    await fetch(url)
      .then((data) => data.json())
      .then((res) => {
        this.props.updateQuotes(res.quotes);
        this.randomQuote(res.quotes);
      });
  };

  handleRandomQuote = () => {
    this.randomQuote(this.props.quotes);
    this.randomColor(this.colors);
    this.setState({ opacity: !this.state.opacity });
  };
  handleAnimationEnd = () => {
    this.setState({ opacity: !this.state.opacity });
  };

  randomQuote = (quotes) => {
    const quote = quotes[Math.floor(Math.random() * (quotes.length - 1))];
    this.setState({ quote: quote });
  };
  randomColor = (colors) => {
    const color = colors[Math.floor(Math.random() * (colors.length - 1))];
    this.setState({ color: color });
  };

  //life cycle
  componentDidMount() {
    this.randomColor(this.colors);
    const url = this.state.url;
    setTimeout(() => this.fetchData(url), 5000);
  }

  render() {
    const quote = this.state.quote;
    const opacity = this.state.opacity;
    const color = { backgroundColor: this.state.color };
    return (
      <div className="display_quotes w-1/2 m-auto ">
        <Quote
          quote={
            Object.keys(quote).length
              ? quote
              : { quote: "Loading...", author: "" }
          }
          color={color}
          opacity={opacity}
        ></Quote>
        <button
          onClick={this.handleRandomQuote}
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

export default connect(
  (state) => ({
    quotes: state.quotes,
  }),
  { updateQuotes }
)(RandomQuotes);

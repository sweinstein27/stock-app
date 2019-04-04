
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stocks: {},
    };
  }

  componentDidMount() {
    fetch('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&apikey=3GD1L60R2ALY2NRG&datatype=json')
    .then(response => response.json())
    .then(data => this.setState({ stocks: data["Time Series (Daily)"] }));
    debugger
  }

  render() {
    const { stocks } = this.state;

    return (
      "hi"
    );
  }

  

}


export default App;

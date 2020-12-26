import React, { Component } from 'react';
import './App.css';
import TradingView from './tradingview';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0
    };
  }
  render(){   
    return (
      <div className="row">
        <TradingView />
      </div>  
    );
  }
 
}

export default App;

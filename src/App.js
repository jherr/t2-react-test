import React, { Component } from 'react';
import Slider from 'react-rangeslider';
import './App.css';
import 'react-rangeslider/lib/index.css'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: 90,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(position) {
    this.setState({ position });
    fetch('/api/position', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        position: this.state.position,
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Slider
          min={0}
          max={180}
          value={this.state.position}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default App;

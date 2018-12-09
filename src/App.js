import React, { useState, useEffect } from 'react';
import Slider from 'react-rangeslider';
import './App.css';
import 'react-rangeslider/lib/index.css'

const App = () => {
  const [position, setPosition] = useState(90);

  useEffect(() => {
    fetch('/api/position', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        position,
      })
    });
  });

  return (
    <div className="App">
      <Slider
        min={0}
        max={180}
        value={position}
        onChange={setPosition}
      />
    </div>
  );
};

export default App;

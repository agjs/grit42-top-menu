import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

import Toolbar from './components/Toolbar';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Toolbar />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));

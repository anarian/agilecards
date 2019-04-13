import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavHeader from '../components/NavHeader';
import FibonacciCards from '../pages/FibonacciCards';
import StandardCards from '../pages/StandardCards';
import TShirtCards from '../pages/TShirtCards';
import ColorContext from '../styles/ColorContext';
import colors, { useDark } from '../styles/colors';
import './App.css';


export default class App extends Component {
  constructor() {
    super();

    this.state = {
      color: localStorage.getItem('colorScheme') || colors.blue
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.color !== this.state.color) {
      localStorage.setItem('colorScheme', this.state.color);
    }
  }
  render() {
    return <Router>
      <ColorContext.Provider value={{ color: this.state.color, dark: useDark(this.state.color) }}>
        <div className="app">
          <NavHeader />
          <Route path="/" exact component={StandardCards} />
          <Route path="/fibonacci" component={FibonacciCards} />
          <Route path="/tshirt" component={TShirtCards} />
        </div>
      </ColorContext.Provider>
    </Router>;
  }
}

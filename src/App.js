import React, { Component } from 'react'
import { BrowserRouter as Router, Link, Route, } from 'react-router-dom'
import RouterChild from './routes/RouterChild';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <RouterChild />
        </div>
      </Router>

    )
  }
}

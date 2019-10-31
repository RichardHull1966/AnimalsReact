import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HamsterEdit extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <p>Welcome to Hamster Edit Component!!</p>
      </div>
    )
  }
}

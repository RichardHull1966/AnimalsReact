import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CatEdit extends Component {
  render() {
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <p>Welcome to Cat Edit Component!!</p>
      </div>
    )
  }
}

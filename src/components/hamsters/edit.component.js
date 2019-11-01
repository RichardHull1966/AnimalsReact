import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HamsterEdit extends Component {
  render() {
    const { params } = this.props.match;
    return (
      <div>
        <Link to={'/'}>Back</Link>
        <p>Welcome to Hamster Edit Component!!</p>
          <p>You are editing hamster number { params.id }</p>
      </div>
    )
  }
}

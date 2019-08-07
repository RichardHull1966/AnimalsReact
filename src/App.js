import React from 'react';
import './App.css';

class Cats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cats: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/cats")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isLoaded: true,
                cats: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
  }

  render() {
    const { error, isLoaded, cats } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <ul>
            {cats.map(cat => (
                <li key={cat.name}>
                  {cat.type} {cat.yearOfBirth}
                </li>
            ))}
          </ul>
      );
    }
  }
}

export default Cats;

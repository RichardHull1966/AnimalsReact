import React from 'react';
import './App.css';

export class Container extends React.Component {
  render() {
    return (
        <div>
          <h2>Game</h2>
          <Game />
          <h2>Animals</h2>
          <Animals />
        </div>
    );
  }
}

class Animals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isCatsLoaded: false,
      isHamstersLoaded: false,
      cats: [],
      hamsters: []
    };
  }

  componentDidMount() {
    fetch("https://localhost:5001/api/cats")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isCatsLoaded: true,
                cats: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isCatsLoaded: true,
                error
              });
            }
        );
    fetch("https://localhost:5001/api/hamsters")
        .then(res => res.json())
        .then(
            (result) => {
              this.setState({
                isHamstersLoaded: true,
                hamsters: result
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isHamstersLoaded: true,
                error
              });
            }
        )
  }

  render() {
    const { error, isCatsLoaded, cats, isHamstersLoaded, hamsters } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isCatsLoaded || !isHamstersLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
          <div>
            <ul>
              {cats.map(cat => (
                  <li key={cat.id}>
                    {cat.name + cat.type + cat.yearOfBirth}
                  </li>
              ))}
            </ul>
            <ul>
              {hamsters.map(hamster => (
                  <li key={hamster.id}>
                    {hamster.name + hamster.age}
                  </li>
              ))}
            </ul>
          </div>
      );
    }
  }
}

class Square extends React.Component {
  render() {
    return (
        <button className="square">
          {/* TODO */}
        </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
    );
  }
}


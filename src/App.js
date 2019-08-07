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
            <h3>Cats</h3>
            <ul>
              {cats.map(cat => (
                  <li key={cat.id}>
                    Name: {cat.name} Type: {cat.type}, Year of birth: {cat.yearOfBirth}
                  </li>
              ))}
            </ul>
            <h3>Hamsters</h3>
            <ul>
              {hamsters.map(hamster => (
                  <li key={hamster.id}>
                    Name: {hamster.name}, Age: {hamster.age}
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
  static renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {Board.renderSquare(0)}
            {Board.renderSquare(1)}
            {Board.renderSquare(2)}
          </div>
          <div className="board-row">
            {Board.renderSquare(3)}
            {Board.renderSquare(4)}
            {Board.renderSquare(5)}
          </div>
          <div className="board-row">
            {Board.renderSquare(6)}
            {Board.renderSquare(7)}
            {Board.renderSquare(8)}
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


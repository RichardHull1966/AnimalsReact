import React from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Edit from './components/edit.component';

const REACT_VERSION = React.version;

export class Container extends React.Component {
  render() {
    return (
        <div>
          <h2>Animals Ap - React version: { REACT_VERSION }</h2>
          <Animals />
            <ul>
                <li>
                    <Link to={'/'}>Cancel</Link>
                </li>
                <li>
                    <Link to={'/create'}>Create</Link>
                </li>
            </ul>
            <Switch>
                <Route exact path='/create' component={ Create } />
            </Switch>
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
      cats: []
    };
  }

  componentDidMount() {
      axios.get("https://localhost:5001/api/cats")
          .then((result) => {
              this.setState({
                  isCatsLoaded: true,
                  cats: result.data
              });
          })
          .catch(function (error) {
              console.log(error);
          });
      axios.get("https://localhost:5001/api/hamsters")
          .then((result) => {
              this.setState({
                  isHamstersLoaded: true,
                  hamsters: result.data
              });
          })
          .catch(function (error) {
              console.log(error);
          });
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
                    Name: {cat.name} Type: {cat.type}, Year of birth: {cat.yearOfBirth} - <button>Edit</button> <button>Delete</button>
                </li>
            ))}
            </ul>
            <h3>Hamsters</h3>
            <ul>
                {hamsters.map(hamster => (
                <li key={hamster.id}>
                    Name: {hamster.name}, Age: {hamster.age} - <button>Edit</button> <button>Delete</button>
                </li>
            ))}
            </ul>
        </div>
      );
    }
  }
}

// fetch("https://localhost:5001/api/cats")
//     .then(res => res.json())
//     .then(
//         (result) => {
//           this.setState({
//             isCatsLoaded: true,
//             cats: result
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isCatsLoaded: true,
//             error
//           });
//         }
//     );
// fetch("")
//     .then(res => res.json())
//     .then(
//         (result) => {
//           this.setState({
//             isHamstersLoaded: true,
//             hamsters: result
//           });
//         },
//         // Note: it's important to handle errors here
//         // instead of a catch() block so that we don't swallow
//         // exceptions from actual bugs in components.
//         (error) => {
//           this.setState({
//             isHamstersLoaded: true,
//             error
//           });
//         }
//     )

// Hooks example
//
// function HookExample() {
//     // Declare a new state variable, which we'll call "count"
//     const [count, setCount] = useState(0);
//     let bgcolor = `#${count}${count}${count}`;
//     // Similar to componentDidMount and componentDidUpdate:
//     useEffect(() => {
//         // Update the document title using the browser API
//         document.title = `You clicked ${count} times`;
//     }, [count]);
//
//     useEffect(() => {
//         // Update the background color
//         document.body.style.backgroundColor = bgcolor;
//     });
//
//     return (
//         <div>
//             <p>Count stands at {count}</p>
//             <p>Background color = {bgcolor}</p>
//             <button onClick={() => setCount(count + 1)}>
//                 Click to increase
//             </button>
//             <button onClick={() => setCount(count - 1)}>
//                 Click to decrease
//             </button>
//         </div>
//     );
// }

// Game code

// export class Container extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h2>Game</h2>
//                 <Game />
//             </div>
//         );
//     }
// }
//
// class Square extends React.Component {
//   render() {
//     return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//     );
//   }
// }
//
// class Board extends React.Component {
//   static renderSquare(i) {
//     return <Square />;
//   }
//
//   render() {
//     const status = 'Next player: X';
//
//     return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {Board.renderSquare(0)}
//             {Board.renderSquare(1)}
//             {Board.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {Board.renderSquare(3)}
//             {Board.renderSquare(4)}
//             {Board.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {Board.renderSquare(6)}
//             {Board.renderSquare(7)}
//             {Board.renderSquare(8)}
//           </div>
//         </div>
//     );
//   }
// }
//
// class Game extends React.Component {
//   render() {
//     return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//     );
//   }
// }


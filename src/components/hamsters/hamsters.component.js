import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import withRouter from "react-router-dom/es/withRouter";

class Hamsters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isHamstersLoaded: false,
            hamsters: []
        };
    }
    getHamsters() {
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
    componentDidMount() {
        this.getHamsters();
    }
    onEdit = (number) => {
        this.props.history.push(`/hamsters/edit/${number}`);
    };
    onDelete = (number) => {
        axios.delete(`https://localhost:5001/api/hamsters/${number}`)
            .then(() => {
                this.getHamsters();
            })
    };
    render() {
        const { error, isHamstersLoaded, hamsters } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isHamstersLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h3>Hamsters</h3>
                        <Link to={'/hamsters/create'}>Create</Link>
                    <ul>
                        {hamsters.map(hamster => (
                            <li key={hamster.id}>
                                Name: {hamster.name}, Age: {hamster.age}
                                <button onClick={() => this.onEdit(hamster.id)}>Edit</button>
                                <button onClick={() => this.onDelete(hamster.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default withRouter(Hamsters);

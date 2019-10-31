import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

export default class Hamsters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isHamstersLoaded: false,
            referrer: null,
            hamsters: []
        };
    }
    componentDidMount() {
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
    onEdit = () => {
        this.setState({referrer: '/hamsters/edit'})
    };
    render() {
        const { referrer, error, isHamstersLoaded, hamsters } = this.state;
        if (referrer) return <Redirect to={referrer} />;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isHamstersLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h3>Hamsters</h3>
                    <ul>
                        <li>
                            <Link to={'/hamsters/create'}>Create</Link>
                        </li>
                    </ul>
                    <ul>
                        {hamsters.map(hamster => (
                            <li key={hamster.id}>
                                Name: {hamster.name}, Age: {hamster.age} - <button onClick={this.onEdit}>Edit</button> <button>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

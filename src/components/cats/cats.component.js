import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom'

export default class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCatsLoaded: false,
            referrer: null,
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
    }
    onEdit = () => {
        this.setState({referrer: '/cats/edit'})
    };
    render() {
        const { referrer, error, isCatsLoaded, cats } = this.state;
        if (referrer) return <Redirect to={referrer} />;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isCatsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h3>Cats</h3>
                    <ul>
                        <li>
                            <Link to={'/cats/create'}>Create</Link>
                        </li>
                    </ul>
                    <ul>
                        {cats.map(cat => (
                            <li key={cat.id}>
                                Name: {cat.name} Type: {cat.type}, Year of birth: {cat.yearOfBirth} - <button onClick={this.onEdit}>Edit</button> <button>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

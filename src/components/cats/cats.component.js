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
    getCats() {
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
    componentDidMount() {
        this.getCats();
    }
    onEdit = (number) => {
        this.setState({referrer: `/cats/edit/${number}`})
    };
    onDelete = (number) => {
        axios.delete(`https://localhost:5001/api/cats/${number}`)
            .then(() => {
                this.getCats();
            })
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
                        <Link to={'/cats/create'}>Create</Link>
                    <ul>
                        {cats.map(cat => (
                            <li key={cat.id}>
                                Name: {cat.name} Type: {cat.type}, Year of birth: {cat.yearOfBirth}
                                <button onClick={() => this.onEdit(cat.id)}>Edit</button>
                                <button onClick={() => this.onDelete(cat.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

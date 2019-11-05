import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import withRouter from "react-router-dom/es/withRouter";

class Cats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCatsLoaded: false,
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
    onCreate = () => {
        this.props.history.push('/cats/create');
    };
    onEdit = (number) => {
        this.props.history.push(`/cats/edit/${number}`);
    };
    onDelete = (number) => {
        axios.delete(`https://localhost:5001/api/cats/${number}`)
            .then(() => {
                this.getCats();
            })
    };
    render() {
        const { error, isCatsLoaded, cats } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isCatsLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h3>Cats</h3>
                    <button onClick={() => this.onCreate()}>Create</button>
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

export default withRouter(Cats);

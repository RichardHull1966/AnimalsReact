import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import Traits from "../traits.component";

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
    onCreate = () => {
        this.props.history.push('/hamsters/create');
    };
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
                    <h3>{this.props.children}</h3>
                    <Traits positiveTraits={this.props.positiveTraits} negativeTraits={this.props.negativeTraits} />
                    <button onClick={() => this.onCreate()}>Create</button>
                    <ul>
                        {hamsters.map(hamster => (
                            <li key={hamster.id}>
                                <strong>Name:</strong> {hamster.name}, <strong>Age:</strong> {hamster.age}
                                <button className='control-button' onClick={() => this.onEdit(hamster.id)}>Edit</button>
                                <button className='control-button' onClick={() => this.onDelete(hamster.id)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    }
}

export default withRouter(Hamsters);

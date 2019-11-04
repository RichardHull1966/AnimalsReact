import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class HamsterCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            referrer: null,
            hamster: {
                id: 0,
                name: '',
                age: 0,
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({hamster: {...this.state.hamster, [event.target.name]: event.target.value}});
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post(`https://localhost:5001/api/hamsters`, this.state.hamster)
            .then(() => {
                this.setState({
                    referrer: '/'
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        const { referrer } = this.state;
        if (referrer) return <Redirect to={referrer} />;
        return (
            <div>
                <h3>Add New Hamster</h3>
                <Link to={'/'}>Back</Link>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:  </label>
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Age: </label>
                        <input type="text" name="age" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Add hamster"/>
                    </div>
                </form>
            </div>
        )
    }
}

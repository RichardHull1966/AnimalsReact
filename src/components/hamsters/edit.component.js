import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import axios from "axios";

export default class HamsterEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isHamsterLoaded: false,
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
    componentDidMount() {
        const { params } = this.props.match;
        axios.get(`https://localhost:5001/api/hamsters/${ params.id }`)
            .then((result) => {
                this.setState({
                    isHamsterLoaded: true,
                    hamster: result.data
                });
                console.log(this.state.hamster);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange(event) {
        this.setState({hamster: {...this.state.hamster, [event.target.name]: event.target.value}});
    }
    handleSubmit(event) {
    event.preventDefault();
    axios.put(`https://localhost:5001/api/hamsters/${ this.state.hamster.id }`, this.state.hamster)
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
                <Link to={'/'}>Back</Link>
                <h3>You are editing hamster: {this.state.hamster.name}</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <div>
                            <label>Name:  </label>
                            <input type="text" name="name" value={this.state.hamster.name} onChange={this.handleChange} />
                        </div>
                        <div>
                            <label>Age: </label>
                            <input type="number" name="age" value={this.state.hamster.age} onChange={this.handleChange} />
                        </div>
                        <div>
                            <input type="submit" value="Save hamster"/>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

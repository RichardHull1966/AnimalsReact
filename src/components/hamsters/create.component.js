import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";

class HamsterCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
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
                this.props.history.push(`/`);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <button onClick={this.props.history.goBack}>Back</button>
                <h3>Add New Hamster</h3>
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

export default withRouter(HamsterCreate);


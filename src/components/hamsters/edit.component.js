import React, { Component } from 'react';
import axios from "axios";
import withRouter from "react-router-dom/es/withRouter";

class HamsterEdit extends Component {
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

export default withRouter(HamsterEdit);

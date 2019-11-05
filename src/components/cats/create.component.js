import React, { Component } from 'react';
import axios from "axios";
import withRouter from "react-router-dom/es/withRouter";

class CatCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            cat: {
                id: 0,
                name: '',
                type: '',
                yearOfBirth: 0,
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({cat: {...this.state.cat, [event.target.name]: event.target.value}});
    }
    handleSubmit(event) {
        event.preventDefault();
        axios.post(`https://localhost:5001/api/cats`, this.state.cat)
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
                <h3>Add New Cat</h3>
                <button onClick={this.props.history.goBack}>Back</button>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name:  </label>
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Type: </label>
                        <input type="text" name="type" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label>Year of birth: </label>
                        <input type="text" name="yearOfBirth" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <input type="submit" value="Add cat"/>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(CatCreate);

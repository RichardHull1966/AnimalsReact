import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

export default class CatEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isCatLoaded: false,
            referrer: null,
            cat: {
                id: 0,
                name: '',
                type: '',
                yearOfBirth: '',
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
        const { params } = this.props.match;
        axios.get(`https://localhost:5001/api/cats/${ params.id }`)
            .then((result) => {
                this.setState({
                    isCatLoaded: true,
                    cat: result.data
                });
                console.log(this.state.cat);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    handleChange(event) {
        console.log('changed it', event.target.value, event.target.name);
        this.setState({cat: {...this.state.cat, [event.target.name]: event.target.value}});
    }
    handleSubmit(event) {
        console.log('this.state.cat:', this.state.cat);
        event.preventDefault();
    }
    render() {
        return (
          <div>
            <Link to={'/'}>Back</Link>
            <h3>You are editing cat: {this.state.cat.name}</h3>
              <div>
                  <form onSubmit={this.handleSubmit}>
                      <div>
                          <label>Name:  </label>
                          <input type="text" name="name" value={this.state.cat.name} onChange={this.handleChange} />
                      </div>
                      <div>
                          <label>Type: </label>
                          <input type="text" name="type" value={this.state.cat.type} onChange={this.handleChange} />
                      </div>
                      <div>
                          <label>Year of birth: </label>
                          <input type="number" name="yearOfBirth" value={this.state.cat.yearOfBirth} onChange={this.handleChange} />
                      </div>
                      <div>
                          <input type="submit" value="Save cat"/>
                      </div>
                  </form>
              </div>
          </div>
        )
    }
}

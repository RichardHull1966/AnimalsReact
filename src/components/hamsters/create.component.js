import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class HamsterCreate extends Component {
    render() {
        return (
            <div>
                <h3>Add New Hamster</h3>
                <Link to={'/'}>Back</Link>
                <form>
                    <div>
                        <label>Add Name:  </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Add Age: </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="submit" value="Add hamster"/>
                    </div>
                </form>
            </div>
        )
    }
}

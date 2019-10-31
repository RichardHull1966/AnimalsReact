import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class CatCreate extends Component {

    render() {
        return (
            <div>
                <h3>Add New Cat</h3>
                <Link to={'/'}>Back</Link>
                <form>
                    <div>
                        <label>Add Name:  </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Add Type: </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <label>Add Year of birth: </label>
                        <input type="text"/>
                    </div>
                    <div>
                        <input type="submit" value="Add cat"/>
                    </div>
                </form>
            </div>
        )
    }
}

import React, { Component } from 'react';

export default class Create extends Component {





    render() {
        return (
            <div>
                <h3>Add New Cat</h3>
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

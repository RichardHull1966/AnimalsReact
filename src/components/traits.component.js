import React, { Component } from 'react';

class Traits extends Component {
    render() {
        return (
            <div>
                <p>
                    Positive traits: ({this.props.positiveTraits})<br />
                    Negative traits: ({this.props.negativeTraits})
                </p>
            </div>
        )
    }
}

export default Traits;

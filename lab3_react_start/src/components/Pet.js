import React, { Component } from 'react'

class Pet extends Component {
    render() {
        return (
            <div>
                I am a {this.props.species}, named {this.props.name}
            </div>
        )
    }
}
export default Pet
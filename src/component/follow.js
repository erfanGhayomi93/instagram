import React, { Component } from 'react';
import Avatar from "./avatar"

export default class follow extends Component {
    render() {
        const {title} = this.props 
        return (
            <div>
                
                {title}
            </div>
        )
    }
}

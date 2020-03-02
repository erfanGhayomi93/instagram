import React, { Component } from 'react';
import Friend from "./freind";

export default class followList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            friends : []
        }
    }

    static getDerivedStateFromProps(props){
        return props
    }
    
    render() {
        if (this.props.following) {
            return (
                this.state.friends
                    .filter(friend => friend.status === "following")
                    .map(friend => <Friend
                        changeFollow={this.props.changeFollow.bind(null,friend.id)}
                        friend={friend}
                        key={friend.id} />)
            )
        } else {
            return (
                this.state.friends
                    .map(friend => <Friend
                        changeFollow={this.props.changeFollow.bind(null,friend.id)}
                        friend={friend}
                        key={friend.id}
                    />)
            )
        }
    }
}
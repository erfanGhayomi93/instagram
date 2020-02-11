import React, { Component } from 'react';
import Avatar from './avatar';
import Highlight from "./highlight";
import Gallery from "./gallery";
import Follow from './follow';
import Username from "./username"

export default class profile extends Component {
    constructor(props) {
        super(props)

        this.handleAvatar = this.handleAvatar.bind(this)

        this.state = {
            status: "posts"
        }
    }

    handleAvatar(name) {
        if (this.state.status === name)
            return

        this.setState({
            status: name
        })
    }

    render() {
        return (
            <>
                {
                    this.state.status === "posts" ?
                        <>
                            <Username />
                            <Avatar avatarProps={this.handleAvatar} />
                            <Highlight />
                            <Gallery />
                        </>

                        : this.state.status === "follower" ?
                            <Follow title="follower" avatarProps={this.handleAvatar} />

                            : this.state.status === "following" ?
                                <Follow title="following" avatarProps={this.handleAvatar} /> : ""
                }
            </>
        )
    }
}

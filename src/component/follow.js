import React, { Component } from 'react';
import Username from "./username";
import FollowList from "./followList"

export default class follow extends Component {
    constructor(props) {
        super(props)

        this.changeTitle = this.changeTitle.bind(this)

        this.state = {
            title: this.props.title
        }

    }

    changeTitle(title) {
        if (this.state.title === title)
            return

        this.setState({
            title
        })
    }

    render() {
        const { title } = this.state;
        let { numFollowers, numFollwing } = this.props

        return (
            <div>
                <Username
                    title="follow"
                    backProps={(name) => this.props.avatarProps.call(null, name)}
                />
                <div className="followPage pt-3">
                    <div className="d-flex text-center">
                        <article
                            className={`flex-grow-1 pb-1 ${title === "follower" ? "border-bootom" : ""}`}
                            onClick={() => this.changeTitle('follower')}
                        >{numFollowers} Followers</article>
                        <article
                            className={`flex-grow-1 pb-1 ${title === "following" ? "border-bootom" : ""}`}
                            onClick={() => this.changeTitle('following')}
                        >{numFollwing} Following</article>
                    </div>

                    {
                        title === "follower" ?
                            <FollowList
                                friends={this.props.friends}
                                changeFollow={(id) => this.props.changeFollow(id)}

                            />
                            : title === "following" ?
                                <FollowList
                                    following="following"
                                    changeFollow={(id) => this.props.changeFollow(id)}

                                    friends={this.props.friends}
                                />
                                : ""

                    }
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import faker from "faker/locale/fa";


export default class avatar extends Component {
    render() {
        return (
            <div className="avatar">
                <div className="row">
                    <div className="col-md-4 text-center">
                        <img className="img-avatar" src={faker.image.avatar()} alt="" />
                    </div>
                    <div className="col-md-8 pt-4">
                        <div className="row text-center count">
                            <div className="col-md-4" onClick={this.props.avatarProps.bind(null,"posts")}>
                                <p className="font-weight-bold">27</p>
                                <p>Posts</p>
                            </div>
                            <div className="col-md-4" onClick={this.props.avatarProps.bind(null,"follower")}>
                                <p className="font-weight-bold">709</p>
                                <p>Followers</p>
                            </div>
                            <div className="col-md-4" onClick={this.props.avatarProps.bind(null,"following")}>
                                <p className="font-weight-bold">760</p>
                                <p>Following</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bio">
                    <div className="mt-2 pl-1">
                        <p>erfan</p>
                        <p>Web Developer</p>
                    </div>

                    <div className="edit-profile mt-2">
                        <p>edit profile</p>
                    </div>
                </div>
            </div>
        )
    }
}

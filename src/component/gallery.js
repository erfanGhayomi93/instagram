import React, { Component } from 'react';
import faker from "faker/locale/fa";


export default class gallery extends Component {
    constructor(props) {
        super(props)

        this.clickOther = this.clickOther.bind(this);
        this.profile = this.profile.bind(this)

        this.state = {
            isProfile: true
        }
    }

    profile() {
        if (!this.state.isProfile)
            this.setState({
                isProfile: true
            })
    }

clickOther() {
    if (this.state.isProfile)
        this.setState({
            isProfile: false
        })
}
render() {
    return (
        <div className="galley">
            <div className="top-profile">
                <i
                    className={this.state.isProfile ? "fa fa-image border-bootom" : "fa fa-image"}
                    onClick={this.profile}
                ></i>
                <i
                    className={this.state.isProfile ? "fa fa-camera-retro" : "fa fa-camera-retro border-bootom"}
                    onClick={this.clickOther}
                ></i>
            </div>

            {
                this.state.isProfile ?
                    <div className="profile pb-5">
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                    </div>
                    :
                    <div className="profile pb-5">
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                        <div className="item"><img src={faker.image.avatar()} alt="" /></div>
                    </div>
            }

        </div>

    )
}
}


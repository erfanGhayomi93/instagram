import React, { Component } from 'react';
import faker from "faker/locale/fa";


export default class gallery extends Component {
    render() {
        return (
            <div className="galley">
                <div className="top-profile">
                    <i className="fa fa-image border-bootom"></i>
                    <i className="fa fa-camera-retro"></i>
                </div>
                <div className="profile pb-5">
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                    <div className="item"><img src={faker.image.avatar()} alt=""/></div>
                </div>
            </div>

        )
    }
}

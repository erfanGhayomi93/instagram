import React, { Component } from 'react';
import faker from "faker/locale/fa";



export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="icons">
                    <i className="fa fa-home"></i>
                    <i className="fa fa-search"></i>
                    <i className="fa fa-plus-square"></i>
                    <i className="fa fa-heart"></i>
                    <span className="pt-1">
                        <img src={faker.image.avatar()} alt=""/>
                    </span>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import faker from "faker/locale/fa";



export default class footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="icons">
                    <i className="fa fa-home"
                        onClick={this.props.handleMenuProps.bind(null, "home")}

                    ></i>
                    <i className="fa fa-search"
                        onClick={this.props.handleMenuProps.bind(null, "search")}

                    ></i>
                    <i className="fa fa-plus-square"
                        onClick={this.props.handleMenuProps.bind(null, "media")}
                    ></i>
                    <i className="fa fa-heart"
                        onClick={this.props.handleMenuProps.bind(null, "notification")}
                    ></i>
                    <span className="pt-1"
                        onClick={this.props.handleMenuProps.bind(null, "profile")}
                    >
                        <img src={faker.image.avatar()} alt="" />
                    </span>
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react';
import faker from "faker/locale/fa";


export default class footer extends Component {

    render() {

        const { isActive } = this.props;
        var activeHome = "", activeSearch = "", activeMedia = "", activeNotification = "",activeImg="";
        if (isActive === "home") {
            activeHome = "active"
        } else if (isActive === "search") {
            activeSearch = "active"
        } else if (isActive === "media") {
            activeMedia = "active"
        } else if (isActive === "notification") {
            activeNotification = "active"
        } else if (isActive === "profile") {
            activeImg = "active-img"
        }

        return (
            <div className="footer">
                <div className="icons">
                    <i className={`fa fa-home ${activeHome}`}
                        onClick={this.props.handleMenuProps.bind(null, "home")}

                    ></i>
                    <i className={`fa fa-search ${activeSearch}`}
                        onClick={this.props.handleMenuProps.bind(null, "search")}
                    >

                    </i>
                    <i className={`fa fa-plus-square ${activeMedia}`}
                        onClick={this.props.handleMenuProps.bind(null, "media")}
                    >
                    </i>
                    <i className={`fa fa-heart ${activeNotification}`}
                        onClick={this.props.handleMenuProps.bind(null, "notification")}
                    >
                    </i>
                    <span className="pt-1"
                        onClick={this.props.handleMenuProps.bind(null, "profile")}
                    >
                        <img className={ activeImg} src={faker.image.avatar()} alt="" />
                    </span>
                </div>
            </div>
        )
    }
}

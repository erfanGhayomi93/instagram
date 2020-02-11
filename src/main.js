import React, { Component } from 'react';
import Footer from "./component/footer";
import Profile from "./component/profile";
import Notification from "./component/notification";
import Media from "./component/media";
import Search from "./component/search";
import Home from "./component/home";


export default class main extends Component {
    constructor(props) {
        super(props);

        this.handleChangeMenu = this.handleChangeMenu.bind(this)

        this.state = {
            changeFooter: "profile"
        }
    }

    handleChangeMenu(namePage) {
        if (this.state.changeFooter === namePage)
            return

        this.setState({
            changeFooter: namePage
        })
    }
    render() {
        const { changeFooter } = this.state;
        return (
            <div className="insta pt-1">
                {
                    changeFooter === "profile" ?
                        <Profile /> : ""
                }

                {
                    changeFooter === "notification" ?
                        <Notification /> : ""
                }

                {
                    changeFooter === "media" ?
                        <Media /> : ""
                }

                {
                    changeFooter === "search" ?
                        <Search /> : ""
                }

                {
                    changeFooter === "home" ?
                        <Home /> : ""
                }

                <Footer
                    handleMenuProps={this.handleChangeMenu}
                />

            </div>
        )
    }
}


import React, { Component } from 'react';
import Footer from "./component/footer";
import Profile from "./component/profile";
import Notification from "./component/notification";
import Media from "./component/media";
import Search from "./component/search";
import Home from "./component/home";
import imgMe from "./images/me.jpeg";


export default class main extends Component {
    constructor(props) {
        super(props);

        this.handleChangeMenu = this.handleChangeMenu.bind(this)

        this.state = {
            changeFooter: "home",
            imgProfile: imgMe
        }
    }

    handleChangeMenu(namePage) {
        if (namePage === "profile")
            this.setState({
                imgProfile: imgMe
            })

        if (this.state.changeFooter === namePage)
            return

        this.setState({
            changeFooter: namePage
        })
    }

    goToProfile = (namePage, img) => {
        this.setState({
            changeFooter: namePage,
            imgProfile: img
        })
    }

    render() {
        const { changeFooter } = this.state;
        return (
            <div className="insta pt-1">
                {
                    changeFooter === "profile" ?
                        <Profile
                            imgProfile={this.state.imgProfile}
                            goToHome={this.handleChangeMenu}
                        />
                        :
                        changeFooter === "notification" ?
                            <Notification />
                            :
                            changeFooter === "media" ?
                                <Media />
                                :
                                changeFooter === "search" ?
                                    <Search />
                                    :
                                    changeFooter === "home" ?
                                        <Home
                                            clickHome={this.goToProfile}
                                        />
                                        : ""
                }

                <Footer
                    handleMenuProps={this.handleChangeMenu}
                    isActive={changeFooter}
                />

            </div>
        )
    }
}
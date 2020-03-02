import React, { Component } from 'react';

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
                        className={this.state.isProfile ? "fa fa-image border-bottom" : "fa fa-image"}
                        onClick={this.profile}
                    ></i>
                    <i
                        className={this.state.isProfile ? "fa fa-camera-retro" : "fa fa-camera-retro border-bottom"}
                        onClick={this.clickOther}
                    ></i>
                </div>

                {
                    this.state.isProfile ?
                        <div className="profile pb-5">

                            {
                                this.props.gallery.map((image,ind) => <div key ={ind}  className="item"> <img src={image} alt="" />  </div>)
                            }

                        </div>
                        :
                        <div className="profile pb-5">
                            <div className="item"><img src={this.props.gallery[Math.floor(Math.random() * 5)]} alt="" /></div>
                            <div className="item"><img src={this.props.gallery[Math.floor(Math.random() * 5)]} alt="" /></div>
                            <div className="item"><img src={this.props.gallery[Math.floor(Math.random() * 5)]} alt="" /></div>
                            <div className="item"><img src={this.props.gallery[Math.floor(Math.random() * 5)]} alt="" /></div>
                            <div className="item"><img src={this.props.gallery[Math.floor(Math.random() * 5)]} alt="" /></div>
                        </div>
                }

            </div>

        )
    }
}


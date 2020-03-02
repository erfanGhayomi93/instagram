import React, { Component } from 'react';
import faker from "faker/locale/en";
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";

export default class Post extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user_name: "",
            images: []
        }
    }

    componentDidMount() {
        this.setState({
            user_name: faker.internet.userName(),
            images: [img1, img2, img3, img4, img5, img6]
        })
    }
    render() {
        const { user_name,images } = this.state;
        const sendImg = images[Math.floor(Math.random() * 6)];
        return (
            <div className="post pt-2 pb-3">
                <div className="d-flex justify-content-between align-items-center">
                    <article onClick={this.props.clickHome.bind(null, "profile",sendImg)}>
                        <img className="profile-post" src={sendImg} alt="" />
                        <span className="pl-1 font-weight-bold">{user_name}</span>
                    </article>

                    <article className="pb-3 pt-3 pr-2">
                        <span className=""><i className="fa fa-ellipsis-h p-1"></i></span>
                    </article>
                </div>

                <div className="img-post">
                    <img src={images[Math.floor(Math.random() * 6)]} alt="" />
                </div>

                <div className="d-flex justify-content-between">
                    <div className="liked">
                        <i className="fa fa-heart"></i>
                        <i className="fa fa-comment"></i>
                        <i className="fa fa-share-square"></i>
                    </div>
                    <div className="liked">
                        <i className="fa fa-save"></i>
                    </div>
                </div>

                <div>
                    <p>
                        liked by
                        <span className="font-weight-bold"> {faker.internet.userName()} </span>
                        and
                          <span className="font-weight-bold"> {Math.floor(Math.random() * 1000)} others</span>
                    </p>
                </div>

                <div className="pt-1">
                    <p>
                        <span className="font-weight-bold">{user_name} </span>
                        <span>{faker.lorem.paragraph()}</span>
                    </p>

                    <p className="text-muted pt-1">{Math.floor(Math.random() * 24)} hours ago</p>
                </div>
            </div>
        )
    }
}

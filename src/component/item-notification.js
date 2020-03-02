import React, { Component } from 'react';
import faker from "faker/locale/en";
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";

export default class ItemNotification extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [img1, img2, img3, img4, img5, img6],
            userName: faker.internet.userName()
        }

    }

    render() {
        const { images, userName } = this.state;
        const { happening } = this.props;
        let randomDate = Math.floor(Math.random() * 10);

        return (
            <div>
                <div className="friend">
                    <div className="item">
                        <article>
                            <img src={images[Math.floor(Math.random() * 5)]} alt="alt" />
                        </article>

                        <article className="pl-1 custom-fontSize">
                            <p className="mb-0">{userName}
                                {
                                    happening === "follow" ?
                                        <span className="text-muted pl-1 pr-1">started following you .{randomDate}w</span>
                                        : happening === "like" ?
                                            <span className="text-muted pl-1 pr-1">liked your photo .{randomDate}w </span>
                                            : happening === "mention" ?
                                                <span className="text-muted pl-1 pr-1">mentioned you in a comment : @{faker.internet.userName()} .{randomDate}w </span>
                                                : ""
                                }
                            </p>

                        </article>
                    </div>

                    <div className={`text-right justify-content-end p-2 ${happening === "follow" ? "item" : ""}`}>
                        <article className="">
                            {
                                happening === "follow" ?
                                    <span className="status">following</span>
                                    : happening === "like" || happening === "mention" ?
                                        <img className="imageLiked" src={images[Math.floor(Math.random() * 5)]} alt="" /> : ""
                            }
                        </article>
                    </div>
                </div>
            </div>
        )
    }
}

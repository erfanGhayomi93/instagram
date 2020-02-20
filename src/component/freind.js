import React, { Component } from 'react';
import faker from "faker/locale/en"

export default class freind extends Component {
    constructor(props){
        super(props)

        this.state = {
            img_url :  faker.image.avatar(),
            fullName : faker.name.findName(),
            userName : faker.internet.userName()
        }
    }

    render() {
        const { friend } = this.props;
        const{img_url,fullName,userName} = this.state
        return (
            <div className="friend">
                <div className="item">
                    <article>
                        <img src={img_url} alt="alt"/>
                    </article>
                    <article className="pl-1">
                        <p>{fullName}</p>
                        <p className="text-muted">{userName}</p>
                    </article>
                </div>
                <div className="item text-right justify-content-end">
                    <article className="pr-1">
                        <span className={friend.status === "follow" ? "status btn-primary" : "status"}
                        onClick={()=>this.props.changeFollow.call(null,friend.id)}>{friend.status}</span>
                    </article>
                    <article className="p-1">...</article>
                </div>
            </div>
        )
    }
}

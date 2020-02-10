import React, { Component } from 'react';
import faker from "faker/locale/fa";


export default class highlight extends Component {
    render() {
        return (
            <div>
                <div className="highlight">
                    <div>
                        <span>+</span>
                    </div>
                    <div>
                        <img src={faker.image.avatar()} alt=""/>
                    </div>
                    <div>
                        <img src={faker.image.avatar()} alt=""/>
                    </div>
                    <div>
                        <img src={faker.image.avatar()} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

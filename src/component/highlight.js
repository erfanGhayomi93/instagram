import React, { Component } from 'react';
// import faker from "faker/locale/fa";
import SwiperCustom from "./swiperCustom";


export default class highlight extends Component {
    render() {
        return (
            <div className="">
                <div className="text-center highlight">
                    <SwiperCustom 
                        clickedStory = {(p,img)=>this.props.clickedStory(p,img)}
                    />
                </div>
            </div>
        )
    }
}

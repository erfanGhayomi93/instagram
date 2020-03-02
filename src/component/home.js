import React, { Component } from 'react';
import Image from "./../notification.png";
import Highlight from "./highlight";
import Post from "./post"

export default class home extends Component {
    render() {
        return (
            <div className = "home">

                <div className = "top_home fixed_top default-color border-bottom">
                    <span><i className="fa fa-instagram"></i></span>
                    <span>instagram</span>
                    <span><img src={Image} alt="" /></span>
                </div>

                <div className = "story border-bottom pt-2">
                    <Highlight 
                    enterHighlight ="home"
                    clickedStory = {(p,img)=>this.props.clickHome(p,img)}
                    />
                </div>

                <div className ="pb-5">
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>
                    <Post clickHome = {(p,img)=>this.props.clickHome(p,img)}/>                                       
                </div>y    
                
            </div>
        )
    }
}

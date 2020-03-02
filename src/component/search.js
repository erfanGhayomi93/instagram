import React, { Component } from 'react';
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";

export default class search extends Component {
    constructor(props){
        super(props);

        this.state = {
            images : []
        }
    }

    componentDidMount(){
        this.setState({
            images : [img1, img2, img3, img4, img5, img6]
        })
    }

    render() {
        const {images} = this.state;
        return (
            <div className="search pb-5">
                <div className="position-relative border-bottom pb-1">
                    <input className="default-color pl-4" placeholder="Search" />
                    <span className="fa fa-search form-control-feedback"></span>
                </div>

                <div className="mediaItem">
                    <div className="item1"><img src={images[1]} alt="" /></div>
                    <div className="mediaItem1">
                        <div className="item"><img src={images[2]} alt="" /></div>
                        <div className="item"><img src={images[3]} alt="" /></div>
                    </div>
                </div>

                <div className="mediaItem">
                    <div className="item"><img src={images[4]} alt="" /></div>
                    <div className="item"><img src={images[5]} alt="" /></div>
                    <div className="item"><img src={images[1]} alt="" /></div>
                </div>

                <div className="mediaItem">
                    <div className="item"><img src={images[2]} alt="" /></div>
                    <div className="item"><img src={images[3]} alt="" /></div>
                    <div className="item"><img src={images[4]} alt="" /></div>
                </div>

                <div className="mediaItem">
                    <div className="mediaItem1">
                        <div className="item"><img src={images[5]} alt="" /></div>
                        <div className="item"><img src={images[1]} alt="" /></div>
                    </div>
                    <div className="item1"><img src={images[0]} alt="" /></div>
                </div>

                <div className="mediaItem">
                    <div className="item"><img src={images[1]} alt="" /></div>
                    <div className="item"><img src={images[2]} alt="" /></div>
                    <div className="item"><img src={images[3]} alt="" /></div>
                </div>

            </div>
        )
    }
}

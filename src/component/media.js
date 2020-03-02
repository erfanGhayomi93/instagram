import React, { Component } from 'react';
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";

export default class media extends Component {

    constructor(props) {
        super(props);

        this.state = {
            images: [],
            num_img : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,32]
        }
    }

    componentDidMount() {
        this.setState({
            images: [img1, img2, img3, img4, img5, img6]
        })
    }

    render() {
        const { images,num_img } = this.state;
        const items = []

        for (const [index] of num_img.entries()) {
            items.push(<article key={index} className="item"><img src={images[Math.floor(Math.random() * 5)]} alt="" /></article>)
        }

        return (
            <div className="media d-block pb-5">
                <h5 className="fixed_top border-bottom default-color pb-1 text-center mb-1">library</h5>

                <div className="clearfix"></div>

                <div className="library pt-4">

                    {items}

                </div>
            </div>
        )
    }
}

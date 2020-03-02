import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import faker from "faker/locale/en";
import 'swiper/css/swiper.css';
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";

const ResponsiveBreakpoints = (props) => {

    const [image1] = useState(img1);
    const [image2] = useState(img2);
    const [image3] = useState(img3);
    const [image4] = useState(img4);
    const [image5] = useState(img5);
    const [image6] = useState(img6);

    const params = {
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            1024: {
                slidesPerView: 4,
                spaceBetween: 40
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            320: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    }

    return (
        <Swiper {...params}>
            <div onClick ={props.clickedStory.bind(null,"profile",image1)} >
                <img className="border-red" src={image1} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image2)}  >
                <img className="border-green" src={image2} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image3)}>
                <img className="border-red" src={image3} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image4)}>
                <img className="border-red" src={image4} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image1)}>
                <img className="border-red" src={image1} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image2)}>
                <img className="border-red" src={image2} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image5)}>
                <img className="border-green" src={image5} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image6)}>
                <img className="border-green" src={image6} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image3)}>
                <img className="border-red" src={image3} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image4)}>
                <img className="border-red" src={image4} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

            <div onClick ={props.clickedStory.bind(null,"profile",image6)}>  
                <img className="border-green" src={image6} alt="" />
                <p>{faker.internet.userName().substr(0, 10)}</p>
            </div>

        </Swiper>
    )
};

export default ResponsiveBreakpoints;

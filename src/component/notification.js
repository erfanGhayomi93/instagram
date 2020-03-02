import React, { Component } from 'react';
import ItemNotification from "./item-notification";

export default class notification extends Component {
    render() {
        const happening = ["follow","like", "mention","follow"];

        return (
            <div className="notification pb-5">
                <h5 className="fixed_top border-bottom default-color text-center pb-1">Activity</h5>

               <div className ="pt-4">
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />
                <ItemNotification happening ={happening[Math.floor(Math.random() * 4)]} />  
               </div>
            </div>
        )
    }
}

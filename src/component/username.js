import React, { Component } from 'react'

export default class username extends Component {
    render() {
        return (
            <div className="username text-right d-flex p-1" dir="rtl">
                <div>
                    <i className="fa fa-bars"></i>
                </div>

                <div className="text-center flex-grow-1 pl-2">
                    <i className="fa fa-chevron-down pl-1"></i>
                    <span>erfuun_mi</span>
                    <i className="fa fa-lock pr-1 text-center"></i>
                </div>


            </div>
        )
    }
}

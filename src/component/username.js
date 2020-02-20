import React, { Component } from 'react'

export default class username extends Component {

    render() {
        const { title } = this.props;
        if (!title) {
            return (
                <div className="username text-right d-flex p-1" dir="rtl">
                    <div>
                        <i className="fa fa-bars"></i>
                    </div>

                    <div className="text-center flex-grow-1 pl-2">
                        <i className="fa fa-chevron-down pl-1"></i>
                        <span className="font-weight-bold">erfuun_mi</span>
                        <i className="fa fa-lock pr-1 text-center"></i>
                    </div>


                </div>
            )
        } else {
            return (
                <div className="p-1 text-center">
                    <span className="font-weight-bold">erfuun_mi</span>
                    <i className="fa fa-chevron-left float-left"
                        onClick = {this.props.backProps.bind(null,"posts")}
                    ></i>
                </div>
            )
        }
    }

}

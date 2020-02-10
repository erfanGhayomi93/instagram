import React from 'react';
import Avatar from './component/avatar';
import Highlight from "./component/highlight";
import Gallery from "./component/gallery";
import Footer from "./component/footer"


export default function main() {
    return (
        <div className="insta pt-1">
            <Avatar />

            <Highlight />

            <Gallery />

            <Footer />
            
        </div>
    )
}

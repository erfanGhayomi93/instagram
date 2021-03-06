import React, { Component } from 'react';
import Avatar from './avatar';
import Highlight from "./highlight";
import Gallery from "./gallery";
import Follow from './follow';
import Username from "./username";
import img1 from "./../images/1.jpg";
import img2 from "./../images/2.jpg";
import img3 from "./../images/3.jpg";
import img4 from "./../images/4.jpg";
import img5 from "./../images/5.jpg";
import img6 from "./../images/6.jpg";


export default class profile extends Component {
    constructor(props) {
        super(props)

        this.handleAvatar = this.handleAvatar.bind(this)

        this.state = {
            status: "posts",
            friends: [
                {
                    id: 1,
                    status: "following",
                },
                {
                    id: 2,
                    status: "follow",
                },
                {
                    id: 3,
                    status: "follow",
                },
                {
                    id: 4,
                    status: "following",
                },
                {
                    id: 5,
                    status: "follow",
                },
                {
                    id: 6,
                    status: "follow",
                },
                {
                    id: 7,
                    status: "follow",
                },
                {
                    id: 8,
                    status: "follow",
                },
                {
                    id: 9,
                    status: "following",
                },
                {
                    id: 10,
                    status: "following",
                },
                {
                    id: 11,
                    status: "follow",
                }

            ],
            gallery: []
        }
    }

    componentDidMount() {
        this.setState({
            gallery: [img1, img2, img3, img4, img5, img6]
        })
    }

    handleAvatar(name) {
        if (this.state.status === name)
            return

        this.setState({
            status: name
        })
    }

    handleFollow = (id) => {
        let changeStatus = [...this.state.friends];
        changeStatus = changeStatus.map(friend => {
            if (friend.id === id) {
                if (friend.status === "follow") {
                    friend.status = "following"
                    return friend
                }
                friend.status = "follow"
                return friend
            }
            return friend
        })

        this.setState({
            friends: changeStatus
        })

    }

    render() {
        let numFollowers = this.state.friends.length;
        let numFollwing = this.state.friends.filter(friend => friend.status === "following").length;
        let numGallery = this.state.gallery.length;

        return (
            <>
                {
                    this.state.status === "posts" ?
                        <>
                            <Username
                                goToHome={(h)=>this.props.goToHome(h)} 
                            />
                            <Avatar
                                avatarProps={this.handleAvatar}
                                numFollowers={numFollowers}
                                numFollwing={numFollwing}
                                numGallery={numGallery}
                                imgProfile={this.props.imgProfile}

                            />
                            <Highlight
                                clickedStory={() => console.log('حالت بزرگ نمایی استوری فعلا وجود ندارد')}
                            />
                            <Gallery
                                gallery={this.state.gallery}
                            />
                        </>

                        : this.state.status === "follower" ?
                            <Follow
                                title="follower"
                                friends={this.state.friends}
                                avatarProps={this.handleAvatar}
                                numFollowers={numFollowers}
                                numFollwing={numFollwing}
                                changeFollow={this.handleFollow}
                            />

                            : this.state.status === "following" ?
                                <Follow
                                    title="following"
                                    friends={this.state.friends}
                                    avatarProps={this.handleAvatar}
                                    numFollowers={numFollowers}
                                    numFollwing={numFollwing}
                                    changeFollow={this.handleFollow}
                                /> : ""
                }
            </>
        )
    }
}

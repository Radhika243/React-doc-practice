import React from "react";

function Profile(props){
    const pic = props.pic
    return(
        <img 
        src={pic}
        alt="Nature image"
        width={400}
        height={300}
        />
    )
}

export default Profile;
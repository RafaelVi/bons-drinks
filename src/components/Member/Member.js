import React from 'react'

const Member = ({src,name,bio}) => {
    return (
        <div>
            <img src={src} alt="member" height="200" width="200"/><br/>
            <p>{name}</p>
            <p>{bio}</p>
        </div>
    )
}

export default Member

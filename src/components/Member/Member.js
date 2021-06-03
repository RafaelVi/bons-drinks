import React from 'react'

const Member = ({src,name,bio,className}) => {
    return (
        <div className={className}>
            <img src={src} alt="member" height="150" width="150"/><br/>
            <p>{name}</p>
            <p>{bio}</p>
        </div>
    )
}

export default Member

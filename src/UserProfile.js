import React from 'react'

const UserProfile = ({userId, title, completed}) => {
    return (
        <div>
            <div>User:{userId}</div>
            <div>{title}</div>
            <div>Completed:{completed}</div>
        </div>
    )
}

export default UserProfile

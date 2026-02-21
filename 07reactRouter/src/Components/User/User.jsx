import React from 'react'
// THis teach us to get dynamic data
import { useParams } from 'react-router-dom'// it is used to get the dynamic data from the url which we have defined in the route like "userId" in our case
function User() {
    const {userId}= useParams()
    return (
        <div className="bg-gray-800 text-white text-4xl p-4">User: {userId}</div>
    )
}

export default User
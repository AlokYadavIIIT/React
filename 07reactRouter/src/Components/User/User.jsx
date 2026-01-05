import React from 'react'
// THis teach us to get dynamic data
import { useParams } from 'react-router-dom'
function User() {
    const {userId}= useParams()
    return (
        <div className="bg-gray-800 text-white text-4xl p-4">User: {userId}</div>
    )
}

export default User
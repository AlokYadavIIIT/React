import React from 'react'
import UserContext from './Usercontext'



const UserContextProvider = ({children}) => {//Here children is just varible to call
    const [user, setUser] = React.useState(null)
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
import React from 'react'
import UserContext from './Usercontext'
// UserContextProvider is just a method
const UserContextProvider = ({children}) => {//Here children is just varible to call 
// which means anything like div,etc. which we want to pass as it is.
    const [user, setUser] = React.useState(null)
    return (// Here value is property(prop) of Provider by which we can pass data
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
import React from 'react'
//Context API = it is a tool or library of react which is helpful
//      in solving the better state management of "props" while passing the attributes inside many div's


// The components inside the "Provider" are allowed to access all the state using "Context".

const UserContext =React.createContext()// we can assume it as a global variable

export default UserContext;
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';


import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx"
import User from "./Components/User/User.jsx"
// import Github from "./Components/Github/Github.jsx"
import Github, {githubInfoLoader}from './Components/Github/Github.jsx'


// METHOD 1 : FOR CREATING ROUTER

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path:"about",// key element which connect from headers Navlink "To"
//         element:<About/>
//       },
//       {
//         path:"contact",
//         element:<Contact/>
//       }
//     ]
//   }
// ])

//METHOD 2 : 
import { createRoutesFromElements,Route } from 'react-router-dom';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route 
      //loader is property of Router of react By which we can call our api's 
      //   by only hovering or touching that element or key on which loader attach
      //      loader can call api's faster that useEffect because "useEffect" is call after pressing that button
      loader={githubInfoLoader}// it use in place of useEffect
      path='Github' 
      element={<Github />} 
      />

    </Route>
  )
)


//Since Below we have done "createRoot" inPlace of createPortal bcZ ReactDOM does not contains  "createPortal"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)//RouterProvider is wrapper(on which all is wrap) which is responsible for making the router
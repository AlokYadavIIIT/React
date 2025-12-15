import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>Custom App !</h1>
        </div>
    )
}
 // it(MyApp) is a html form of reactElement object shown below
 // 
// const reactElement = {// this is object representation of an anchor tag // this is how react see the tags after compilation
//     type: 'a',
//     props:{
//         href: 'https://google.com',
//         target:'_blank',
//     },
//     children: 'click me to visit google'
// }

// create another react element using React so that no need to convert it into Html form;

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
    anotherUser // we can also pass variable in this way
)

const anotherElement = (// know we can call it directly in render function
    <a href = "https://google.com" target='_blank'>visit google
    </a>
) 


ReactDOM.createRoot(document.getElementById('root')).
render(
    //<reactElement /> ;// incorrect way to call reactElement object
                         // because it is not a function or class 
                         // component it is object but here the 
                         // customrendr is created only to manage 
                         // or run the customrender of the form html syntax

    // anotherElement
    reactElement
    // <App />
    // MyApp(); // it is also correct form to call App.jsx(which is a function)
)

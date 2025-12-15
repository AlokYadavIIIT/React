//    A custom render function to mimic React's rendering behavior
//   This function takes a React element object and a container DOM element
//   and appends the corresponding DOM element to the container.
  //  THIS IS CALLED CUSTOM RENDER FUNCTION METHOD TO CREATE AN REACT;

function custonRender(reactElement, container){

//     const domElement = document.createElement(reactElement.type);
//     domElement.innerHTML = reactElement.children;

//     // setting attributes
//    domElement.setAttribute('href', reactElement.props.href);
//    domElement.setAttribute('target', reactElement.props.target);
//    container.appendChild(domElement);// append the created element to the container

      const domElement=document.createElement(reactElement.type);
      domElement.innerHTML = reactElement.children;
      for(const prop in reactElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
      }
      container.appendChild(domElement)
}

const reactElement = {// this is object representation of an anchor tag // this is how react see the tags after compilation
    type: 'a',
    props:{
        href: 'https://google.com',
        target:'_blank',
    },
    children: 'click me to visit google'
}

const maincontainer = document.querySelector('#root');

custonRender(reactElement, maincontainer);

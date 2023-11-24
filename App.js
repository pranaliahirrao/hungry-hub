import React from "react";
import ReactDOM from 'react-dom/client';

const heading = React.createElement('h1' , {id: 'heading'} , "Hello React....!");

//                    props =                  attributes  +     children

// console.log(heading) --> obj , this react element is nothing but Object;
const root = ReactDOM.createRoot(document.getElementById('rooot'));
root.render(heading);
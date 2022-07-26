import React from "react";
//import ReactDOM from "react-dom";
import { hydrateRoot } from 'react-dom/client';
import App from "./components/App.jsx"

const container = document.getElementById("root");
const root = hydrateRoot(container, <App/>);

console.log(root);
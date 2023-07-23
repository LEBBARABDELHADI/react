import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';


const rootElement = document.getElementById("root")

// we have to do this, otherwise TypeScript will complain
if (!rootElement) throw new Error("Failed to find the root element")

// to use the new features

const root = hydrateRoot(rootElement, < App />);


// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

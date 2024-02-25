import React from 'react'
import App from './App';
import ReactDom from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
// import reportWebVitals from './reportWebVitals';

// ReactDom.render(
//   <React.StrictMode>
//     <App />
//     </React.StrictMode>,
//     document.getElementById('root')
// );


const root=ReactDom.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// reportWebVitals();
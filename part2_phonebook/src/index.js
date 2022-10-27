import { createRoot } from 'react-dom/client';

import App from "./App";

const names = [
  {
    id: 1,
    name: 'Arto Hellas',
  },
]


createRoot(document.getElementById('root')).render(
  <App persons={names}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

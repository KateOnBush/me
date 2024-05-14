import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import {PagesProvider} from "./Pages";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <PagesProvider>
        <App/>
      </PagesProvider>
  </React.StrictMode>
);
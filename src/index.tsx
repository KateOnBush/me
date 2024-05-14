import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import './index.css';
import {PagesProvider} from "./contexts/Pages";
import {PageStackProvider} from "./contexts/PageStack";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <PagesProvider>
          <PageStackProvider>
              <App/>
          </PageStackProvider>
      </PagesProvider>
  </React.StrictMode>
);
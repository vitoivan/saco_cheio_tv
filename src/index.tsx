import React from 'react';
import ReactDOM from 'react-dom';
import "./css/global.css";
import { BrowserRouter } from "react-router-dom";
import { RouterComponent } from './router/router';
import { VideoProvider } from './providers/video-provider'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoProvider>
          <RouterComponent />
      </VideoProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
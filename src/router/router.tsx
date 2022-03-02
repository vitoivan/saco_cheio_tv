import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from '../pages/home';
import { Program } from '../pages/podcast';
import { VideoScreenPage } from '../pages/video-screen';
import { SupportPageComponent } from '../pages/support';


const SrollToTop = ({ children }) => {
  const location = useLocation();
  React.useEffect(() => window.scrollTo(0,0), [location]);
  return <>{children}</>
}

const PreventScroll = ({ children }) => {
  
  React.useEffect(() => {
    document.addEventListener('keydown', e => {

      const videoContainer = document.getElementById('videoContainer');
      const videoPlayer = document.getElementById('video-player');
      
      if (e.target === videoContainer || e.target === videoPlayer) {
        (e.code === 'Space') &&  e.preventDefault();
        (e.code === "KeyF") &&  e.preventDefault();
        (e.code === "ArrowRight") &&  e.preventDefault();
        (e.code === "ArrowLeft") &&  e.preventDefault();
        (e.code === "ArrowUp")  && e.preventDefault();
        (e.code === "ArrowDown") &&  e.preventDefault();
      }
    })
  }, [])

  return <>{children}</>
}

export const RouterComponent = () => {
  
  return (
    <PreventScroll>
      <SrollToTop>
        <Routes>
          <Route path='/support' element={<SupportPageComponent />}/>
          <Route path='/podcast/:podcastId' element={<Program />}/>
          <Route path='/episode/:episodeId' element={<VideoScreenPage />}/>
          <Route path='*' element={<Home />}/>
        </Routes>
      </SrollToTop>
    </PreventScroll>
  )
}

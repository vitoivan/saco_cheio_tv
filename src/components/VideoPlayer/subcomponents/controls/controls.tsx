import React from 'react'

import { BsFullscreen } from 'react-icons/bs';
import { 
    AiFillPlayCircle as PlayButton,
    AiFillPauseCircle as PauseButton,
    AiFillSound
} from 'react-icons/ai';
import {
    MdSkipNext as Next,
    MdSkipPrevious as Previous,
} from 'react-icons/md';
import { getVideoComponent, toggleFullScreen } from '../../helpers';
import { VideoTimer } from '../timer/timer';
import { ControlsContainer } from './controlStyle';
import { VolumeComponent } from '../volume/volume';


export interface IControlsProps {
  playing: boolean;
  volume: number;
}

export const ControlsComponent = ({ playing, volume }: IControlsProps) => {


    const playVideo = (e: React.MouseEvent<SVGAElement>) => {
        const video = getVideoComponent();
        video.paused ? video.play() : video.pause();
    }

    const skip = (number) => { 
        const video = getVideoComponent();
        video.currentTime += number; 
    }
	
    const skipInProgressBar = (e: React.MouseEvent<HTMLDivElement>) => {

        const video = getVideoComponent();
        const rect = e.currentTarget.getBoundingClientRect();

        let x: number = e.clientX - rect.left;
        if (x < 0) x = 0;
        const percentage = (x * 100) / rect.width;
        video.currentTime = (percentage * video.duration) / 100;
    }

    const fullScreen = () => {
      toggleFullScreen('videoContainer');
    }

  return (

    <ControlsContainer className='controls'>

        <div className="play-pause-container">

            <Previous className='prev'  onClick={() => skip(-15)}/>

            { !playing ?  <PlayButton className='play' onClick={playVideo}  /> : <PauseButton className='pause' onClick={playVideo} />}

            <Next className='next' onClick={() => skip(15) }/>

        </div>

        <div className="video-time">
          <VideoTimer />
        </div>

        <div className="progress-bar" id="video-pg-bar" onClick={skipInProgressBar} >
          <div className="video-path" id="video-path"></div>
        </div>

        <VolumeComponent volume={volume} />
        <BsFullscreen className='full-screen' id="full-screen" onClick={() => fullScreen()}/>

    </ControlsContainer>

  )
}

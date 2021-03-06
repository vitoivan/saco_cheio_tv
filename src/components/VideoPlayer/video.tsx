import React from 'react'
import { useLocation } from 'react-router-dom';
import { Container } from './styles';
import { getVideoComponent, logoUrl, toggleFullScreen } from './helpers';
import { ControlsComponent } from './subcomponents/controls/controls';
import { IEpisodeData } from '../../mocks/database';
import { IVideoProvider, useVideo } from '../../providers/video-provider';


interface IVideoPlayerProps {
	data: IEpisodeData
}
const StorageKeyVolume = "@sacocheio-volume";
const StorageKeyVideo = "@sacocheio-video";
const SECONDS_IN_IDLE = 4;

/*🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥       WELCOME TO THE HELL     🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥*/

export const VideoPlayer = ({ data }: IVideoPlayerProps ) => {

	const defaultVol = localStorage.getItem(StorageKeyVolume);
	const defaultOldCurrentTime = localStorage.getItem(StorageKeyVideo + `-${data.episode.id}`)
	
	const [playing, setPlaying] = React.useState<boolean>(false);
	// eslint-disable-next-line
	const [canCount, setCanCount] = React.useState<boolean>(true);
	const [videoLoading, setVideoLoading] = React.useState<boolean>(false);
	const [videoError, setVideoError] = React.useState<boolean>(false);
	const [counter, setCounter] = React.useState<number>(SECONDS_IN_IDLE);
	// eslint-disable-next-line
	const [oldCurrentTime, setOldCurrentTime] = React.useState<number>(parseInt(defaultOldCurrentTime || '0'));
	const [vol, setVol] = React.useState<number>(JSON.parse(defaultVol || "0.5"))
	
	const { setVideo }: IVideoProvider = useVideo();

	const location = useLocation();
	
	React.useEffect(() => {

		const videoHTML = getVideoComponent();
		setVideo(videoHTML);
		videoHTML.onplay = () => { setPlaying(true); setVideoLoading(false) };
		videoHTML.oncanplay = () => { setVideoLoading(false) }
		videoHTML.onpause = () => setPlaying(false);
		videoHTML.ontimeupdate = () => updateProgressBar();
		videoHTML.onerror = () => setVideoError(true);
		videoHTML.onwaiting = () => setVideoLoading(true);
		videoHTML.onvolumechange = () => {
			localStorage.setItem(StorageKeyVolume, JSON.stringify(videoHTML.volume));
			setVol(videoHTML.volume)
		};

		videoHTML.src = data.episode.episodeUrl;
		videoHTML.volume = vol;
		videoHTML.currentTime = oldCurrentTime;


		const wrapper = document.getElementById('videoContainer');
		
		wrapper && (wrapper.onclick = (e: React.MouseEvent<HTMLDivElement> | any) => {
			if (e?.target?.classList?.contains('videoContainer') || e?.target?.classList?.contains('video'))
				videoHTML.paused ? videoHTML.play() : videoHTML.pause()
		})

		wrapper?.addEventListener('dblclick', function (e: React.MouseEvent<HTMLDivElement> | any) {
			if (e?.target?.classList?.contains('videoContainer') || e?.target?.classList?.contains('video'))
				toggleFullScreen('videoContainer');
		});

		wrapper?.addEventListener('keydown', handleKeyDown);
		wrapper?.addEventListener('mouseleave', handleMouseLeave);
		wrapper?.addEventListener('mousemove', handleMouseMove);

		function handleKeyDown(e: React.KeyboardEvent | any) {

			(e.code === 'Space') && (videoHTML.paused ? videoHTML.play() : videoHTML.pause());
			(e.code === "KeyF") && toggleFullScreen('videoContainer');
			(e.code === "ArrowRight") && (videoHTML.currentTime += 15);
			(e.code === "ArrowLeft") && (videoHTML.currentTime -= 15);

			if (e.code === "ArrowUp") {
				videoHTML.volume <= 0.9 && (videoHTML.volume += 0.05);
				if (videoHTML.volume <= 1 && videoHTML.volume > 0.9)
					videoHTML.volume = 1;
			}
			if (e.code === "ArrowDown") {
				videoHTML.volume >= 0.1 && (videoHTML.volume -= 0.05);
				if (videoHTML.volume < 0.1 && videoHTML.volume >= 0)
					videoHTML.volume = 0;
			}
		}
		
		const hoverInterval = setInterval(() => {
			setCanCount(cancount => {
				setCounter(state => {
					if (state < SECONDS_IN_IDLE && cancount) {
						return state + 1;
					}
					return state; 
				});
				return cancount;
			})
		}, 1000) 

		function handleMouseMove(e: React.MouseEvent<HTMLDivElement> | any) {
			if (e.target.classList.contains('videoContainer') || e.target.classList.contains('video'))
				setCanCount(true);
			else
				setCanCount(false);
			setCounter(0);
		}

		function handleMouseLeave(e: React.MouseEvent<HTMLDivElement> | any) {
			setCounter(SECONDS_IN_IDLE);
		}
		
		return () => { clearInterval(hoverInterval) }
		// eslint-disable-next-line
	},[location])

	const updateProgressBar = () => {

		const bar = document.getElementById('video-path') || null;
		const video = getVideoComponent();

		const { currentTime, duration } = video;
		if (currentTime > 0 && currentTime < duration) {
			localStorage.setItem(StorageKeyVideo + `-${data.episode.id}`, JSON.stringify(currentTime));
		}

		if (currentTime >= duration - 1 ) {
			localStorage.removeItem(StorageKeyVideo + `-${data.episode.id}`)
		}
		const percentage = (currentTime * 100) / duration;
		bar && (bar.style.width = percentage + "%");
	}

	const isAudio = (src) => ['mp3'].includes(src.slice(-3));

	
  return (
	<Container bg={`url(${data?.podcast.banner as string || ""})`} id="player-wrapper" url={logoUrl}>
		<div className={
			`videoContainer${(counter > SECONDS_IN_IDLE - 1) ? " not-hovered" : ""}${isAudio(data?.episode.episodeUrl) ? " is-audio" : " is-video"}`
			} 
			id="videoContainer" 
			tabIndex={0} 
			>
			
			<video 
				//src={"./NLW Heat - Expanse  - Stage 01.mp4" || videoPATH} 
				controls={false}
				src={data?.episode.episodeUrl}
				id="video-player"
				className={`${isAudio(data?.episode.episodeUrl) ? "audio" : "video"}`}
			>
			</video>
		
			{videoLoading && (
				<div className='video-loading'></div>
				)}
			{ videoError &&  (<div className='video-error'>Ops, parece que ocorreu um erro com o episódio, mas não se preocupe, estamos verificando o ocorrido</div>)}
			<ControlsComponent playing={playing} volume={vol}/>
		
		</div>
	</Container>
  )
}
import React from 'react'
import styled from 'styled-components';
import { useVideo } from '../../../../providers/video-provider';
import { getVideoComponent } from '../../helpers';

const TimerStyled = styled.div`
	height: fit-content;
	span {
		font-size: .9rem;
		letter-spacing: .1rem;
	}
`;

export const VideoTimer = () => {

	const [timer, setTimer] = React.useState(0); 
	const { video } = useVideo();

		React.useEffect(() => {
		
			const interval = setInterval(() => {
			const video = getVideoComponent();
					setTimer(video.currentTime)
			}, 500)
			return () => clearInterval(interval);
		}, []);
	
		const formatVideoDuration = () => {

			const duration = video.duration
			const seconds = Math.floor(duration) % 60;
			let minutes =  Math.floor((Math.floor(duration) / 60));
			const hours = Math.floor(minutes / 60);
			minutes = minutes % 60;

			let output = "";
			output += String(hours).padStart(2,'0') + ':';
			output += String(minutes).padStart(2,'0') + ':';
			output += String(seconds).padStart(2,'0');
			return output
		}
		const duration = React.useMemo(() => formatVideoDuration() , [video.readyState]);

		const minutes =  Math.floor(Math.floor(timer) / 60) % 60;
		const seconds = Math.floor(timer) % 60;
		const hours = Math.floor((timer / 60) / 60);
			
		return (
			<TimerStyled>
					<span>
						{ !!(String(hours).padStart(2,'0')) ? String(hours).padStart(2,'0') + ":"  : "" }
					</span>

					<span>{String(minutes).padStart(2,'0') || "00"}</span>
					:
					<span>{ String(seconds).padStart(2,'0') || "00" }</span>
					&nbsp;/&nbsp;
					<span>{duration || "00:00"}</span>
			</TimerStyled>
	)
}
import React, { useState } from 'react'
import { AiFillSound } from 'react-icons/ai'
import { RiContactsBookLine, RiVolumeMuteFill } from 'react-icons/ri'
import styled from 'styled-components'
import { getVideoComponent, resize } from '../../helpers'

const Container = styled.div<IVolComponent>`
	width: fit-content;
	height: fit-content;
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;
	position: relative;
	cursor: pointer;

	&:hover .sound-on + .sound-popover {
		transform: translateX(-50%) scaleY(1);
		transition: all 300ms;
	}
	
	.sound-popover {
		position: absolute;
		transform-origin: bottom;
		border-radius: 20px;
		left: calc(50% - 2px);
		background-color: #fff;
		width: 40%;
		height: 120px;
		top: -120px;
		z-index: 2;
		transition: transform 600ms;
		transform: translateX(-50%) scaleY(0);

		&:hover {
			width: 58%;
		}

		&::after {
			content: "";
			position: absolute;
			top: 0;
			left: 50%;
			width: 300%;
			transform: translateX(-50%);
			//background-color: red;
			height: 100%;
			z-index: 1;
		}
	}

	.sound-on + .sound-popover .volume-bar {
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 100%;
		transform: translateX(-50%);
		background-color: var(--yellow);
		height: ${props => {
			return (props.volume * 100) + "%";
		}};
		z-index: 1;
		border-radius: 50px;
	}
`
interface IVolComponent {
	volume: number;
}

export const VolumeComponent = ({ volume }: IVolComponent) => {

	const video = getVideoComponent();
	const [videoMuted, setVideoMuted] = useState<boolean>(video.muted);

	React.useEffect(() => {
		
		const options = {
			bgBarID: 'sound-popover', 
			type: "volume"
		}
		resize(options, event => {

			const rect = event.currentTarget.getBoundingClientRect();
			let y: number = rect.height - (event.clientY - rect.top);
			y = y > rect.height ? rect.height : y;
			y = y < 0 ? 0 : y;
			return (y * 100 / rect.height);
		})
		
	}, [])
	
	const muteVideo = () => {
		const video = getVideoComponent();
		const volumeBar = document.getElementById('volume-bar');

		
		setVideoMuted(!video.muted);
		video.muted = !video.muted;
	}

		return (
	<Container volume={volume}>

		{
			videoMuted ? (
				<RiVolumeMuteFill className='sound-off' onClick={() => muteVideo()}/>
			) : (
				<AiFillSound className='sound-on' onClick={() => muteVideo()}/>
			)
		}
		<div className="sound-popover" id="sound-popover">
			<div className="volume-bar" id="volume-bar"></div>
		</div>
	</Container>	
	)
}

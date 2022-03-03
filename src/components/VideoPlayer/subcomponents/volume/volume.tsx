import React, { useState } from 'react'
import { AiFillSound } from 'react-icons/ai'
import { RiVolumeMuteFill } from 'react-icons/ri'
import { getVideoComponent, resize } from '../../helpers';
import { VolumeContainer } from './styles';

export interface IVolComponent {
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
		video.muted = !video.muted;
		setVideoMuted(!video.muted);
	}

		return (
	<VolumeContainer volume={volume}>
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
	</VolumeContainer>	
	)
}

import React, { useState } from 'react'
import { AiFillSound } from 'react-icons/ai'
import { RiVolumeMuteFill } from 'react-icons/ri'
import { useVideo } from '../../../../providers/video-provider';
import { getVideoComponent, resize } from '../../helpers';
import { VolumeContainer } from './styles';

export interface IVolComponent {
	volume: number;
}

export const VolumeComponent = ({ volume }: IVolComponent) => {

	const { video } = useVideo();
	const [videoMuted, setVideoMuted] = useState<boolean>(video.muted || false);

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

	React.useEffect(() => {
		video.muted = videoMuted;
	}, [videoMuted])
	
	const toggleMuteVideo = () => {
		setVideoMuted(!video.muted);
	}

	return (
		<VolumeContainer volume={volume}>
			{
				videoMuted ? (
					<RiVolumeMuteFill className='sound-off' onClick={() => toggleMuteVideo()}/>
				) : (
					<AiFillSound className='sound-on' onClick={() => toggleMuteVideo()}/>
				)
			}
			<div className="sound-popover" id="sound-popover">
				<div className="volume-bar" id="volume-bar"></div>
			</div>
		</VolumeContainer>	
	)
}

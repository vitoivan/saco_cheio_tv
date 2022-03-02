import React, { useContext, createContext } from 'react';

export interface IVideoProvider{
	video: HTMLVideoElement;
	setVideo: React.Dispatch<HTMLVideoElement>
}

export const videoCTX = createContext({} as IVideoProvider);

export const VideoProvider = ({ children }) => {

	const [video, setVideo] = React.useState<HTMLVideoElement>({} as HTMLVideoElement);

	return (
		<videoCTX.Provider value={{ setVideo, video }}>
			{children}
		</videoCTX.Provider>
	)
}

export const useVideo = () => useContext(videoCTX);
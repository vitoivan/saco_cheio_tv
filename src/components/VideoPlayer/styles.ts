import styled from 'styled-components';


interface StyledProps {
	bg: string;
	url: string;
}

export const Container = styled.div<StyledProps>`
	
	position: relative;
	video {
		display: block;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		&::-webkit-media-controls {
			display:none !important;
		}
		&.audio {
			display: none;
		}
	}

	.video-error {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 4;
		width: 100%;
		height: 100%;
		background: #000D;
		color: var(--yellow);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 1.7rem;
		text-align: center;
		letter-spacing: .2rem;
		padding: 5rem;
	}

	.videoContainer {
		width: 95%;
		height: 768px;
		background: ${props => props.bg || "#000"} #000 no-repeat;
		background-size: cover;
		background-position-x: center;
		position: relative;
		outline: none;
		user-select: none;
		display: block;

		&.is-video { background: #000; }
		
		&.is-audio::after {
			content: "Esse episódio não possui vídeo";
			opacity: 1;
			width: 100%;
			height: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: #000D;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 2rem;
			font-weight: 300;
			letter-spacing: .3rem;
			color: var(--yellow);
			font-family: 'Montserrat', sans-serif;
			z-index: 2;
		}

		
		&.not-hovered .controls{
			transition: opacity 300ms;
			pointer-events: none;
			opacity: 0;
		}		
		&.not-hovered {
			cursor: none;
		}
	}

	.video-loading {
		position: absolute;
		top: 0%;
		left: 0%;
		background: #0009;
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;

		&::before {
			content: "";
			display: block;
			min-width: 160px;
			min-height: 72px;
			animation: anim .5s infinite linear;
			background: ${props => `url(${props.url}) no-repeat`};
			background-size: cover;
		}

		@keyframes anim {
			0% { transform: scale(1.5) }
			50% { transform: scale(1.7) }
			100% { transform: scale(1.5) }
		}
	}
`;
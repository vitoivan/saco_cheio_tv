import styled from "styled-components";

export const ControlsContainer = styled.div`

	width: 95%;
	height: fit-content;
	transition: opacity 500ms;
	background-color: none;
	position: absolute;
	bottom: 2rem;
	left: 50%;
	transform: translateX(-50%);
	border-radius: .6rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 1rem;
	pointer-events: all;
	opacity: 1;
	max-width: 1350px;
	z-index: 3;
	background: var(--header-bg);
	padding: 1rem 2rem;


	svg:hover { path { filter: brightness(1.2); }}
	svg {
		margin: 0 .2rem; 
		width: 1.5rem; 
		height: 1.5rem;
		path { color: var(--yellow); } 
	}
	
	.play, .pause, .prev, .next, .sound, .full-screen {
		cursor: pointer;
		path { transition: all .3s; }
	}
	

	.play-pause-container {
		display: flex;
		align-items: center;
		
		svg:nth-child(2) {
			width: 2.5rem;
			height: 2.5rem;
		}
	}
		

	.progress-bar {
		width: 65%;
		height: 7px;
		background: white;
		transition: all 100ms;
		cursor: pointer;
		border-radius: 50px;
		
		.video-path {
			background: var(--yellow);
			width:0;
			height: 100%;
			transition: width height 100ms;
			transition: height 500ms;
			border-radius: 50px;
		}

		&:hover {
			height: 12px;
		}
	}
	
	
	@media only screen and (max-width: 768px) {


		width: 100%;
		padding: 1rem 0;
		gap: .5rem;
		bottom: 0;

		svg {
			margin: 0 .2rem; 
			width: 1rem; 
			height: 1rem;
		}
	

		.play-pause-container {
			svg:nth-child(2) {
				width: 1.5rem;
				height: 1.5rem;
			}
			svg {
				width: 1rem; 
				height: 1rem;
			}
		}

		.full-screen {
			width: 1.5rem;
			height: 1.5rem;
			margin-right: 1rem;
		}
		.video-time span, .video-time{
			font-size: .6rem;
			letter-spacing: 0;
		}
	}
`
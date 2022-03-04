import styled from 'styled-components'
import { IVolComponent } from './volume';

export const VolumeContainer = styled.div<IVolComponent>`
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

	.sound-popover.active {
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
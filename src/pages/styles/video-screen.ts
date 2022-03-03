import styled from 'styled-components';


export const Container = styled.div`

	display: flex;
	justify-content: space-between;
	gap: 2rem;

	.video-wrapper {
		max-width: 1280px;
	}

	.left-wrapper { 
		flex-grow: 2; 
		flex-shrink: 0
	}

	.all-eps {
		max-height: 200vh;
		overflow: auto;

		&::-webkit-scrollbar-track {
			background: var(--white);
			width: 2px;
		}
		&::-webkit-scrollbar {
			width: .4rem;
			background: var(--white);
			width: 2px;
		}
	}

	h2 {
		margin: 3rem 0 2rem 0;
		color: var(--yellow);
		letter-spacing: .3rem;
		font-size: 1.3rem;
		font-weight: 400;
	}

	@media only screen and (max-width: 1650px) and (min-width: 1366px) {

		.video-wrapper, .player-wrapper, video, .videoContainer {
			max-width: 1024px;
			height: 576;
		}
	}

	@media only screen and (max-width: 1450px) and (min-width: 1366px) {

		.video-wrapper, .player-wrapper, video, .videoContainer {
			max-width: 896px;
			height: 504px;
		}
	}

	@media only screen and (max-width: 1365px) {

		flex-direction: column;

		h2 {
			font-size: 1rem;
			margin: 1rem 0 2rem 2rem;
		}
}
`
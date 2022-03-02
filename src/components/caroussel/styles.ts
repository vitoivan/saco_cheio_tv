import styled from 'styled-components';

export const Container = styled.div`

	position: relative;
	margin: 0 auto;
	width: 90%;
	height: fit-content;
	max-width: 1600px;

	.carousel .slider-wrapper {
		border: 1px solid var(--white) !important;
	}
	.carousel .slide img {
		width: 100vw;
		max-width: 1600px;
		height: 700px;
		user-select: none;
	}
	.carousel { position: relative; z-index: 2; }

	.control-dots li{
		background: var(--yellow) !important;
		width: 1rem !important;
		height: 1rem !important;
	}

	.thumb img, .thumb {
		width: 80px !important;
		height: 49px !important;
	}

	.carousel:hover .podcast-data {
		opacity: 1;
		transition: opacity .3s;
	}

	.podcast-data {
		position: absolute;
		opacity: 0;
		transition: opacity .3s;
		background: #000D;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		padding: 5rem;
		h2 {
			color: var(--yellow);
			letter-spacing: .4rem;
		}

		strong {
			margin: .5rem 0;
			letter-spacing: .2rem;
		}
		
		.host {
			color: var(--yellow);
			letter-spacing: .3rem;
			font-weight: bold;
		}

		p {
			letter-spacing: .2rem;
			line-height: 1.8rem;
			text-align: left;
		}

		.watch {
			background: var(--yellow);
			padding: 1rem 2rem;
			border-radius: 12px;
			position: absolute;
			bottom: 2rem;
			right: 4rem;
			font-weight: 800;
			letter-spacing: .4rem;
			filter: brightness(1);
			transition: all .3s;

			&:hover { filter: brightness(1.2); transition: all .3s; }
		}
	}

	@media only screen and (max-width: 768px) {
		width: 100vw;
		margin: 0;
		max-height: 60vh;
		.carousel .slide img {
			max-height: 60vh;
			width: 100vw;
		}
		.carousel .slider-wrapper {
			border: none !important;
			border-top: 1px solid var(--white) !important;
			border-bottom: 1px solid var(--white) !important;
		}
	}
`; 

import styled from 'styled-components';

export const Container = styled.div`

	position: relative;
	margin: 0 auto;
	width: 90%;
	height: fit-content;
	max-width: 1280px;
	

	.carousel .slider-wrapper {
		border: 1px solid var(--yellow) !important;
		
	}
	.carousel .slide img {
		width: 100vw;
		max-width: 1280px;
		height: 700px;
		user-select: none;
	}
	.carousel { position: relative; z-index: 2;}

	.control-dots li{
		background: var(--yellow) !important;
		width: 1rem !important;
		height: 1rem !important;
	}

	.thumb img, .thumb {
		width: 80px !important;
		height: 49px !important;
		border-color: var(--yellow);

		.selected {
			border-color: var(--white) !important;
		}
	}
	.carousel .thumb.selected, .carousel .thumb:hover {
		border-color: var(--white) !important;
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
			color: #fff;
		}

		.watch {
			background: var(--yellow-btn);
			padding: 1rem 1.5rem;
			position: absolute;
			bottom: 2rem;
			font-size: 1.3rem;
			right: 4rem;
			font-weight: 400;
			letter-spacing: .4rem;
			filter: brightness(1);
			transition: all .3s;

			&:hover { filter: brightness(1.2); transition: all .3s; }
		}
	}

	@media only screen and (max-width: 1365px) {
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


		.podcast-data { 

			padding: 1rem;

			p {
				font-size: .8rem;
				line-height: normal;
			}

			.watch {
				font-size: .9rem;
				right: 2rem;
				bottom: 3rem;
				padding: .7rem 1rem;
				font-weight: bold;
				letter-spacing: .2rem;
			}

			h2 {
				letter-spacing: .2rem;
				font-size: 1.2rem;
			}

			strong {
				margin: .5rem 0;
				font-size: .9rem;
			}
			
			.host {
				font-size: 1rem;
				letter-spacing: .1rem;
				text-align: center;
				width: 100%;
			}

		}
	}
`; 

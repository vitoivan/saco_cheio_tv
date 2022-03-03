import styled from 'styled-components'

export const Container  = styled.div`

	margin: 2rem auto;
	width: 90%;
	height: 40vw;
	max-width: 1700px;
	max-height: 800px;
	position: relative;
	border: 1px dotted var(--yellow);
	
	
	img {
		width: 100%;
		height: 100%;
		user-select: none;
	}

	.podcast-description {
		opacity: 1;
		background: #000D;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		padding: 6rem;

		h2 {
			color: var(--yellow);
			letter-spacing: .4rem;
		}

		strong {
			margin: 1rem 0 0 0;
			letter-spacing: .5rem;
			line-height: 2rem;
			font-size: 1.2rem;
		}
		
		.host {
			color: var(--yellow);
			letter-spacing: .3rem;
			font-weight: bold;
			font-size: 1.7rem;
		}

		p {
			text-align: left;
			font-size: 1.3rem;
			letter-spacing: .2rem;
			line-height: 1.8rem;
		}
	}

	@media only screen and (max-width: 1365px) {


		width: 90%;
		margin: 2rem auto;
		border: 1px dotted var(--yellow);
		height: 400px;
		
		img {
			width: 100%;
			height: 100%;
			user-select: none;
		}

		.podcast-description {
			padding: .5rem;
			padding: 2rem 1rem;

			
			h2 {
				text-align: center;
				font-size: 1rem;
			}
			strong {
				font-size: .9rem;
				letter-spacing: .15rem;
				margin: 0;
				line-height: 1.5rem;
			}
			.host {
				font-size: .9rem;
			}

			p {
				font-size: .9rem;
				letter-spacing: .1rem;
				line-height: 1rem;
			}
		}
	}
`;

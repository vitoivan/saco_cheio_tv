import styled from 'styled-components';


export const OurProgramsContainer = styled.section`

	max-width: 1700px;
	width: 90%;
	margin: 0 auto;

	h2 {
		text-align: center;
		width: 100%;
		font-size: 2rem;
		letter-spacing: 1rem;
		color: var(--yellow);
		margin: 5rem 0 5rem 0;
		font-weight: 300;
	}

	.programs-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 2rem;
		width: 100%;
	}
`;



export const Card = styled.li`

		
	.img-container, .img-container img { 
		width: 300px; 
		height: 300px; 
		display: block; 
		cursor: pointer;
	}
	
	.img-container { 
		overflow: hidden; 
		position: relative;
		border-radius: 1rem 1rem 0 0;
///		border: 1px solid var(--yellow);
		border-bottom: none;

		img {
			transform: scale(1); 
			transition: all .3s; 
			user-select: none
		}

		&:hover img {
			transform: scale(1.1); 
			transition: all .3s; 
		}
		.description-screen {
			position: absolute;
			background: #000D;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			padding: 1.5rem 2rem;
			letter-spacing: .15rem;
			font-size: 1rem;
			opacity: 0; 
			transition: opacity .3s;
			line-height: 24px;
		}

		&:hover .description-screen { 
			opacity: 1; transition: opacity .3s; 
		}
	}

	label {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
		background: var(--program-label);
		height: 5rem;
		border-radius: 0 0 1rem 1rem;
		border-top: none;

		h3 {
			font-size: 1.2rem;
			font-weight: 500;
		}

		span { 
			align-self: flex-end; 
			color: var(--header-bg);
			margin: .5rem;
			font-size: 1rem;
			letter-spacing: .1rem;
			font-weight: 900;
		}
	}
`;

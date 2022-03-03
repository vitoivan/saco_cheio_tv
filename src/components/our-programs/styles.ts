import styled from 'styled-components';


export const OurProgramsContainer = styled.section`

	max-width: 1700px;
	width: 90%;
	margin: 0 auto;

	h2 {
		text-align: center;
		width: 100%;
		font-size: 2rem;
		letter-spacing: .8rem;
		font-weight: 300;
		color: var(--yellow);
		margin: 5rem 0 5rem 0;
	}

	.programs-container {
		display: flex;
		width: 100%;
		overflow-x: auto;
		padding: 2rem 0;
		scroll-behavior: auto;
		gap: 1rem;
	}


	.left-button {
		position: absolute;
		width: 60px;
		height: 85%;
		top: 49%;
		transform: translateY(-50%);
		background: linear-gradient(to right, #000, #0001);
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center	;
		font-size: 1.5rem;
		cursor: pointer;

		path {
			color: #c0c0c0;
		}
		&:hover {
			path {
				color: var(--white);
			}
		}
	}

	.right-button {
		position: absolute;
		width: 60px;
		height: 85%;
		top: 49%;
		right: 0;
		transform: translateY(-50%);
		background: linear-gradient(to left, #000, #0001);
		z-index: 2;
		display: flex;
		align-items: center;
		justify-content: center	;
		font-size: 1.5rem;
		cursor: pointer;


		path {
			color: #c0c0c0;
		}

		&:hover {
			path {
				color: var(--white);
			}
		}
	}

	.wrapper {
		position: relative;
	}

	@media only  screen and (max-width: 1365px) {

		h2 {
			margin: 0rem 0 2rem 0;
		}
	}
`;



export const Card = styled.li`

		
	border: 1px solid #fff;
	border-radius: 7px;
	display: inline-block;
	width: fit-content;

	.img-container, .img-container img { 
		width: 300px; 
		height: 350px; 
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
			color: #f0f0f0;
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
		width: 100%;

		h3 {
			font-size: 1.2rem;
			font-weight: 500;
			color: #000D;
		}
		.date {
			color: var(--our-date);
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

	@media only screen and (max-width: 1365px) {
		.img-container, .img-container img { 
			width: 200px; 
			height: 250px; 
		}

		label {
			h3 {
				font-size: 1.1rem;
			}
			.date {
				font-size: .9rem;
			}
		}
	}
`;

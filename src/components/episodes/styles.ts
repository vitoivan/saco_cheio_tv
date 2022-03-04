import styled from "styled-components";

export const Container = styled.div`
	
	margin: 1rem auto 0 auto;
	max-width: 1800px;
	width: 90%;
	position: relative;

	.header {
		width: 100%;
		display: flex;
		gap: 2em;
		padding: 1rem;
		background: var(--bg-header-episodes);
		box-shadow: 3px 7px 15px -6px #000;
		cursor: pointer;
		position: relative;
		user-select: none;
		z-index: 2;
		
		&:hover {
			filter: brightness(1.4);
		}
		
		img {
			width: 100px;
			height: 100px;
			border: 1px solid var(--white);
		}
		
		.content {
			display: flex;
			justify-content: center;
			flex-direction: column;
			gap: .2rem;
			
			h3 {
				letter-spacing: .2rem;
				font-size: 1.4rem;;
				font-weight: 300;
			}
			
			time {
				color: var(--yellow);
				letter-spacing: .25rem;
				font-size: 1rem;
				font-weight: bold;
			}
		}
		
		.arrow {
			position: absolute;
			right: 4rem;
			top: 50%;
			display: block;
			width: 2.5rem;
			height: 2.5rem;
			transform: translateY(-50%) rotate(0);
			transition: transform .3s;
		}
		
		.arrow.open {
			transform: translateY(-50%) rotate(180deg);
		}
	}

	.description {

		position: relative;
		z-index: 1;
		background: var(--bg-program-desc);
		width: 100%;
		box-shadow: 3px 9px 15px -9px #000;
		line-height: 2rem;
		font-size: 1.1rem;
		letter-spacing: .15rem;
		
		//Animation
		height: 0;
		transition: all .25s ease;
		overflow: hidden;

		p {
			width: 80%;
			margin: 1rem 0 0 2rem;
			float: left;
			font-size: 1.2rem;
			font-weight: 400;
		}
	}

	
	.watch {
		clear: both;
		margin: 1rem 2rem 2rem 0;
		float: right;
		background: var(--yellow);
		padding: .5rem 1rem;
		font-weight: 400;
		transition: all .3s;
		font-size: 1.2rem;
		filter: brightness(.9);

		&:hover {
			transition: all .3s;
			filter: brightness(1);
		}
	}

	@media only screen and (max-width: 1365px) {
		.header {
			img {
				width: 70px;
				height: 70px;
			}

			.content {
				h3 {
					font-size: .9rem;
					letter-spacing: 0rem;
				}

				time {
					font-size: .8rem;
					letter-spacing: 0;
				}
				
			}
			.arrow {
				right: 1rem;
				width: 1.5rem;
				height: 1.5rem;
			}
		}

		.description {
			
			p {
				font-size: 1rem;
				line-height: 1.7rem;
			}

			.watch {
				padding: .5rem;
				font-size: 1rem;
				font-weight: bold;	
			}
		}
	}

	@media only screen and (max-width: 768px) {

		.header .content {
			width: 95%;
		} 
		.header .content h3{
			width: calc(100% - 2rem);
		}
	}
`;

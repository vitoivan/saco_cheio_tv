import styled from "styled-components";

export const Container = styled.div`
	
	margin: 1rem auto 0 auto;
	max-width: 1700px;
	width: 80%;
	position: relative;

	.header {
		width: 100%;
		display: flex;
		gap: 2em;
		padding: 1rem;
		background: var(--bg-player);
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
		}
	}

	
	.watch {
		clear: both;
		margin: 1rem 2rem 2rem 0;
		float: right;
		background: var(--yellow);
		padding: .5rem 1rem;
		border-radius: 12px;
		font-weight: 900;
		transition: all .3s;
		font-size: 1rem;
		filter: brightness(.9);

		&:hover {
			transition: all .3s;
			filter: brightness(1);
		}
	}

`;

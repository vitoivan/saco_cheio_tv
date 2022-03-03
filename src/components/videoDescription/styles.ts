import styled from "styled-components";

export const DescriptionContainer = styled.div`

	width: 95%;
	
	h1 { 
		margin: 1.5rem 0; 
		font-weight: 500;
		color: var(--yellow);
		letter-spacing: .4rem;
		font-size: 1.7rem;
		font-weight: 400;
	}

	p {
		font-size: 1.1rem;
		letter-spacing: .3rem;
		line-height: 1.5rem;
		margin-bottom: 2rem;
		font-weight: 300;
	}

	@media only screen and (max-width: 1365px) {
		h1 {
			font-size: 1rem;
			text-align: center;
			letter-spacing: .2rem;
			margin: 1rem 0;
		}
		p {
			font-size: .8rem;
			text-align: center;
			letter-spacing: .2rem;
			line-height: 1rem;
		}
	}
`
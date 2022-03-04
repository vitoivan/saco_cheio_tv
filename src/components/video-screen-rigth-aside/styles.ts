import styled from 'styled-components';


export const RightWrapperContainer = styled.div`

    width: 30%;
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h2 {
        font-size: 1.7rem;
        color: var(--yellow);
        text-align: left;
        width: 100%;
        margin: 3rem 0 1rem 0;
    }

  	.ep {
		display: flex;
		gap: 1rem;
		margin: 1rem;
		width: fit-content;
		cursor: pointer;
		justify-content: center;
		img { 
			width: 75px; 
			height: 75px;
		}
		
		h3 {
			font-size: 1.3rem;
			font-weight: 400;
		}

		span {
			color: var(--yellow);
			font-size: 1rem;
			margin-top: .5rem;
			font-weight: 400;
			display: block;
		}

		&:hover span h3 {
			text-decoration: underline;
		}

		&:hover span img {
			border: 1px solid #fff;
		}
	}

	@media only screen and (max-width: 1365px) {
		
		width: 100%;
		margin: 0 auto;
		max-width: none;
		
		.all-eps {
			width: 100%;
		}

		h2 {
			font-size: 1.2rem;
			text-align: center;
			margin: 0rem 0 1rem 0;
		}

		.ep {
			margin: .5rem auto 0 0;

			h3 {
				font-size: 1.1rem;
			}

			span {
				font-size: .9rem;
			}
		}
	}
`
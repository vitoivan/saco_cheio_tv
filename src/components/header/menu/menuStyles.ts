import styled from 'styled-components';

export const Container = styled.div`

	position: relative;

	.hamburguer {
		width: 60px;
		height: 42px;
		cursor: pointer;

		path {
			color: var(--yellow);
			transition: all .3s;
		}
	}
	
	.hamburguer:hover {
		path {
			color: var(--white);
			transition: all .3s;
		}
	}

	nav a {
		text-transform: uppercase;
		font-weight: 400;
		font-size: .9rem;
		margin: 0 1rem;
		letter-spacing: 0;
		padding: .5rem;
		font-family: 'Montserrat', 'Roboto', sans-serif;
		transition: all .2s;
		position: relative;
	}

	nav a:hover {
		color: var(--yellow);
	}

	nav a::before {
		content: "";
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 2px;
		background: var(--yellow);
		opacity: 0;
		transition: all .3s;
	}
	
	nav a.active::before {
		opacity: 1;
	}
`;
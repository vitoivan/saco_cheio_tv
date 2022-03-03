import styled from "styled-components";

export const MenuOpennedContainer = styled.nav`
	background: var(--menu-bg);
	width: 100%;
	height: 100vh;
	position: fixed;
	z-index: 999;
	top: 0;
	right: 0;
	padding-top: 5rem;
	transition: all .5s;
	transform: translateX(110%);
	transform-origin: right;

	&.open {
		transition: all .5s;
		transform: translateX(0);
		transform-origin: right;
	}

	
`;

export const MenuOpennedHeader = styled.div`

	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	
	.contacts {
		display: flex;
		gap: 2rem;
	}

	.btn {
		
	}

	.close path { color: var(--white); transition: .3s; }
	.close { cursor: pointer; font-size: 2.5rem; }
	.close:hover path { color: var(--white); }
	
	.youtube{ font-size: 2rem; }
	.telegram{ font-size: 2rem; }

	a:hover, a path {
		transition: all .2s;
	}
	a {
		.youtube path{ color: var(--red); }
		.telegram path{ color: var(--telegram); }
	}
	a:hover path {
		color: var(--white);
	}

	@media only screen and (max-width: 1365px) { 

		padding: 0 1rem;
		
		.contacts {
			gap: 0;
			svg {
				font-size: 1.5rem;
			}
		}

	}
`;

export const MenuOpennedBody = styled.section`
	
	ul {
		margin: 0 auto;
		margin-top: 3rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul li {
		margin: 1rem auto;
		cursor: pointer;

		a {
			display: flex;
			justify-content: center;
			width: fit-content;
		}

		svg {
			font-size: 1.5rem;
		}
		
		span {
			font-size: 1.2rem;
			letter-spacing: .3rem;
			margin-left: 2rem;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		svg path { color: var(--white); transition: all .3s; }
		span { color: var(--white); transition: all .3s; }
	}

	ul li:hover{
		svg path { color: var(--yellow); transition: all .3s; }
		span { color: var(--yellow); transition: all .3s; }
	}

	@media only screen and (max-width: 1365px) {
		ul li {
			svg, span {

				font-size: 1rem;
			}
			span {
				margin-left: 0.5rem;
			}
		}
	}


	@media only screen and (max-width: 400px) {
		ul li {
			svg, span {

				font-size: .9rem;
			}
		}
	}
`;

export const MenuOpennedFooter = styled.div`

	font-size: 3rem;
	position: absolute;
	bottom: 2rem;
	right: 3rem;

	&:hover {	
		a span { color: var(--yellow); transition: all .3s; }
		a svg path { color: var(--yellow); transition: all .3s; }
	}
	
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 1rem;
		transition: all .3s;
		span { color: var(--white); transition: all .3s; }
		svg path { color: var(--white); transition: all .3s; }
	}

	span {
		font-size: 1.3rem;
		letter-spacing: .3rem;
	}
`;
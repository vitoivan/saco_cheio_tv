import React from 'react'
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa'

const Container = styled.footer`
	
	background: var(--footer-bg);
	width: 100vw;
	position: absolute;
	left: 0;
	padding: 3rem;
	height: 30vh;
	margin-top: 5rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.wrapper {
		display: flex;
		justify-content: center;
		flex-direction: column;
		width: fit-content;
	}


	.links {
		display: flex;
		width: fit-content;
		justify-content: space-between;
		flex-wrap: wrap;
		width: 100%;
		margin: 0 auto 1rem auto;

		a {
			letter-spacing: .3rem;
			transition: all .3s;
			text-decoration: underline;
		}

		a:hover { 
			color: var(--yellow); 
			transition: all .3s;
		}
	}

	p {
		text-align: center;
		letter-spacing: .2rem;
		line-height: 2rem;
	}

	@media only screen and (max-width: 1365px) {
		p {
			font-size: .8rem;
			letter-spacing: .1rem;
		}


		.links a {
			font-size: 1rem;
			letter-spacing: .1rem;
		}
	}
`;

export const FooterComponent = () => {
  return (
	<Container>

		<div className="wrapper">
			<div className="links">
				<a href={"/assets/Privacy_Policy_SacoCheioTV.pdf"} target="_blank" rel='noreferrer'>Privacidade</a>
				{/* eslint-disable-next-line */}
				<a href={"#"}>< FaChevronUp /></a>
				<a href="/assets/Use_Terms_SacoCheioTV.pdf" target="_blank">Termos</a>
			</div>
			<p>© 2019 SACO CHEIO TV - TODOS OS DIREITOS RESERVADOS</p>
		</div>
	</Container>
  )
}

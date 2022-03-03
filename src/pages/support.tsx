import React, { useRef } from 'react';
import styled from 'styled-components';
import { FooterComponent } from '../components/footer/footer';
import { HeaderComponent } from '../components/header/header';
import { memoryDB } from '../mocks/repositores/in-memory-database';
import { ProgramCardComponent } from '../components/our-programs/program-card';

const Container = styled.div`
	
	.container {
		display: flex;
		width: 95%;
		max-width: 1800px;
		gap: 3rem;

		.content {
			letter-spacing: .23rem;
			line-height: 1.8rem;
			
			h1 {
				margin: 2rem 0 3rem 0;
				color: var(--yellow);
				letter-spacing: .6rem;
				text-transform: uppercase;
				font-size: 1.6rem;
			}

			p {
				font-size: 1.1rem;
			}
		}

		img {
			width: 30%;
			min-width: 500px;
			max-height: 450px;
		}
	}
	
	h2 {
		text-transform: uppercase;
		strong { color: var(--yellow); }
		font-size: 1.5rem;
		margin: 5rem auto;
	}

	.programs {
		width: 100%;
		max-width: 100%;
		display: flex;
		gap: 5rem;
		overflow-x: auto;
		scroll-behavior: auto;

		> div {
			width: fit-content;
			margin: 0 0 2rem 0;
			border: 1px solid var(--yellow);
			border-radius: 15px;
		}
	}

	@media only screen and (max-width: 1365px) {
		.container {
			flex-direction: column;
			align-items: center;
			margin: 0 auto;
			
			img {
				width: 100%;
				min-width: auto;
				max-width: 500px;
			}
				.content {

				p {
					margin: 0 auto;
					font-size: 1rem;
					letter-spacing: .1rem;
					text-align: center;
				}

				h1 {
					text-align: center;
					font-size: 1.2rem;
					margin: 0 auto 1rem;
				}
			}
		}
		.programs {
			gap: 2rem;
		}

		h2 {
			strong { color: var(--yellow); }
			font-size: 1.2rem;
			text-align: center;
			padding: 0 1rem;
		}
	}
`;

export const SupportPageComponent = () => {

	const podcasts = memoryDB.getPodcasts();
	const ref = useRef(null);

	React.useEffect(() => {

		const comp = ref.current ? ref.current : {}  as HTMLElement;

		comp.addEventListener('wheel', (evt: React.MouseEvent | any ) => {
			evt.preventDefault();
			comp.scrollLeft += evt.deltaY ;
		})
	}, [])

  return (
	<Container className='App'>
		<HeaderComponent />
			
			<div className='container'>
				<div className="content">
					<h1>Apoie o sacocheio.tv</h1>
					<p>
						Com a plataforma SacoCheioTV nós não corremos risco de ter o nosso conteúdo excluído ou desmonetizado. Aqui temos liberdade total para criar e falar o que quisermos, sem precisar evitar determinadas palavras ou assuntos. Não temos vínculo com patrocinadores e empresas. A ligação é direta entre nós e o público, sem ninguém pra dar pitaco.
					<br /> <br />
						Sendo um assinante, você terá acesso a todos os programas completos para assistir ou ouvir no site. Se você prefere ouvir em algum aplicativo de podcasts, cada programa tem um link exclusivo de RSS FEED que você pode inserir manualmente no seu aplicativo e logar com os seus dados aqui do SacoCheioTV.
					<br /> <br />
						Com a sua ajuda queremos aumentar a nossa estrutura, ter condições de transmitir os programas ao vivo, fazer entrevistas presenciais, disponibilizar todos os programas em vídeo, aumentar a nossa grade de programação e fazer shows por mais cidades do Brasil.
					</p>
				</div>
				<img src="https://www.sacocheio.tv/static/media/sobre.3773544b.png" alt="support us" />
			</div>

			<h2>🔥 &nbsp;&nbsp; Com a assinatura no <strong>sacocheio.tv</strong> você terá acesso exclusivo a todos os nossos programas!  &nbsp;&nbsp;🔥</h2>
			<ul ref={ref} className="programs scroll" id="supportScroll">
				{ podcasts?.map((pdcast, i) => {
					return (
						<div key={i}>
							<ProgramCardComponent  podcast={pdcast}/>
						</div>
					)
				}) }
			</ul>

		<FooterComponent />
	</Container>
  )
}

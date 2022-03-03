import React from 'react'
import styled from 'styled-components'
import { IEpisodeData } from '../../mocks/database'
import { ChatComponent } from './chat'


const Container = styled.div`
	
	width: 95%;
	height: fit-content;
	max-height: 100vh;
	overflow: auto;
	padding-right: 3rem;
	overflow-x: hidden;

	.comments-empty {
		color: var(--yellow);
		letter-spacing: .3rem;
		margin: 0;
	}
	.responses li {
		width: 100%;
		transform: scale(.9);
		margin-top: 0rem;
		margin-left: 3rem;

		p {
			font-size: 1.1rem;
		}

		.date {
			font-size: .96rem;
		}
	}

	h2 {
		font-size: 1.3rem;
		letter-spacing: .3rem;
		color: var(--yellow);
	}

	@media only screen and (max-width: 1365px) {
		padding-right: 0;

		.comments-empty {
			margin: 0 0 0 2rem;
		}
	}
`


interface ChatWrapperProps {
	data: IEpisodeData
}



export const ChatWrapperComponent = ({ data }: ChatWrapperProps) => {


	return (
		<>
		<Container className='scroll'>
			<ul>
			{
				data?.episode.comments.length > 0 ? (
					data?.episode.comments.map((cmt, i) => {
						return (
							<>
								<ChatComponent comment={cmt} key={cmt.id || i} /> 
							</>
						)
					})
				) : (
					<h2 className='comments-empty'>Não há comentarios ainda</h2>
				)
			
			}
			</ul>
		</Container>
		</>
  )
}

import React from 'react'
import styled from 'styled-components'
import { IEpisodeData } from '../../mocks/database'
import { ChatComponent } from './chat'


const Container = styled.div`
	
	width: 80%;
	height: fit-content;
	max-height: 100vh;
	overflow: auto;
	padding-right: 3rem;
	margin-top: 5rem;

	.comments-empty {
		color: var(--yellow);
		letter-spacing: .3rem;
	}
	.responses li {
		width: 100%;
		transform: scale(.9);
		margin-top: 0rem;
		margin-left: 3rem;
	}`


interface ChatWrapperProps {
	data: IEpisodeData
}



export const ChatWrapperComponent = ({ data }: ChatWrapperProps) => {


	return (
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
  )
}

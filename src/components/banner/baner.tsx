import React from 'react'
import { Podcast } from '../../mocks/entities/Podcast';
import  { Container } from './style'

interface IBannerProps {
	podcast: Podcast;
}

export const BannerComponent = ({ podcast }: IBannerProps) => {

  return (
	<Container>
		<img src={podcast?.banner} alt={podcast?.title} />
		<div className="podcast-description">
		<h2>{ podcast?.title }</h2>
			<strong>Apresentado por:</strong>
			<span className='host'>{ podcast?.host }</span> <br />

			<p>{ podcast?.description }</p>
		</div>
	</Container>
  )
}

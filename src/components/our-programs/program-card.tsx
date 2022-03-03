import React from 'react';
import { Card as Container } from './styles';
import { Link } from 'react-router-dom';
import { Podcast } from '../../mocks/entities/Podcast';

export interface IProgramCardComponentProps {
	podcast: Podcast
} 
export const ProgramCardComponent = ({ 
	podcast
}: IProgramCardComponentProps ) => {
	
  return (
	<Container>
		<Link className="img-container" id='img-container' to={`/podcast/${podcast.id}`}>
			<img src={podcast.image} alt={podcast.title} />
			<div className="description-screen">
				{ podcast.apresentation }
			</div>
		</Link>
		<label htmlFor="img-container">
			<h3>{podcast.title}</h3>
			{ podcast.date ?  <span className='date'>{podcast.date}</span> : ""}
		</label>
	</Container>
  )
}

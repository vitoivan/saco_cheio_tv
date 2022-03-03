import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Episodes } from '../../mocks/entities/Episodes';
import { Podcast } from '../../mocks/entities/Podcast';
import { memoryDB } from '../../mocks/repositores/in-memory-database';
import { EpisodeComponent } from '../episodes/episodes';


interface EpisodesWrapperProps {
	podcast: Podcast
} 

const Container = styled.div`
	h1, h2 {
		text-align: start;
		max-width: 1800px;
		width: 90%;
		letter-spacing: .5rem;
		margin: 1rem auto;
		color: var(--yellow);
		font-size: 1.3rem;
		font-weight: 400;
		
	}

	h1 { margin-top: 2rem; }
	h2 { margin-top: 2rem; font-size: 1.5rem; }

	@media only screen and (max-width: 1365px) {
		h1, h2 {
			font-size: 1rem;
			text-align: center;
			margin: 1rem auto;
		}
	}
`;

export const EpisodesWrapper = ({ podcast }: EpisodesWrapperProps) => {


	const location = useLocation();
	const { podcastId } = useParams();
	
	const episodes: Episodes[] = React.useMemo(() => {
		let eps: Episodes[] = memoryDB.getPodcastEpisodes((podcastId as string));
	
		if (eps.length === 0) {
			eps = JSON.parse(sessionStorage.getItem('@saco-cheio-episodes') || "") as Episodes[];
		} 
		else {
		  sessionStorage.setItem('@saco-cheio-episodes', JSON.stringify(eps)) 
		}
		return eps;
		// eslint-disable-next-line
		}, [location])


  return (
	<Container>

		<h1>{podcast?.title}</h1>
		<h2>Programas</h2>
		{	
			episodes?.length > 0  && episodes?.map((ep, key) => {
				return  <EpisodeComponent episode={ep as Episodes} key={ep.id} podcast={ podcast } />
			})
		}

	</Container>
  )
}

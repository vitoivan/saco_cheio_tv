import { debug } from 'console';
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
		max-width: 1700px;
		width: 80%;
		letter-spacing: 1rem;
		margin: 1rem auto;
		color: var(--yellow);
		font-size: 2rem;
		font-weight: 400;
	}

	h1 { margin-top: 3rem; }
	h2 { margin-top: 4rem; font-size: 1.5rem; }
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

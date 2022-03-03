import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Container } from './styles';
import { Link } from 'react-router-dom';
import { memoryDB } from '../../mocks/repositores/in-memory-database';
import { useWindow } from '../../providers/windowProvider';


export const CarousselComponent = () => {

	const { windowWidth } = useWindow();

  return (
	<Container>
		<Carousel autoPlay	interval={3000} showArrows={false} infiniteLoop swipeable showStatus={false} showThumbs={windowWidth > 1365 ? true : false}>
			{ memoryDB.podcasts.map((podcast, i) => {
				return <React.Fragment key={i}>
					<img src={podcast.banner} key={i} alt="banner" />

					<div className="podcast-data">
						<h2>{ podcast.title }</h2>

						<strong>apresentado por</strong>
						<span className='host'>{ podcast.host }</span> <br />

						<p>{ podcast.description }</p>

						<Link to={`/podcast/${podcast.id}`} className='watch'>Assistir</Link>
					</div>
				</React.Fragment>
			} )}
		</Carousel>
	</Container>
  )
}

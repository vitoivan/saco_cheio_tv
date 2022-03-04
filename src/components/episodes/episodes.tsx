import React from 'react'
import { BsChevronDown as ArrowDown } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Episodes } from '../../mocks/entities/Episodes';
import { Podcast } from '../../mocks/entities/Podcast';
import { animateOnClick } from './helper';
import { Container } from './styles';


export interface IEpisodeProps {
	episode: Episodes;
	podcast: Podcast;
}

export const EpisodeComponent = ({ episode, podcast }: IEpisodeProps) => {

	const [open, setOpen] = React.useState<boolean>(false);
	const ref = React.useRef(null);

	React.useEffect(() => {
		animateOnClick(ref.current);
	}, [])
	return (
	<Container ref={ref}>
		<div className="header" onClick={() => setOpen(!open)}>
			<img src={podcast?.image} alt={episode?.title}/>
			<div className="content">
				<h3>{episode?.title}</h3>
				<time dateTime={episode?.date}>{episode?.date}</time>
			</div>
			<ArrowDown className={`arrow${open ? " open" : ""}`} />
		</div>
		<div className={`description${open ? " open" : ""}`}>
			<p>
				{ episode?.description }
			</p>

			<Link to={`/episode/${episode.id}`} className="watch">Assistir</Link>
		</div>
	</Container>
  )
}

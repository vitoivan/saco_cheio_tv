import React, { useRef } from 'react';
import { ProgramCardComponent } from './program-card';
import { OurProgramsContainer as Container } from './styles' ;
import { memoryDB } from '../../mocks/repositores/in-memory-database';


export const OurProgramsComponent = () => {

	const ref = useRef(null);

	React.useEffect(() => {

		const comp = ref.current ? ref.current : {}  as HTMLElement;

		comp.addEventListener('wheel', (evt: React.MouseEvent | any ) => {
			evt.preventDefault();
			comp.scrollLeft += evt.deltaY * 0.8;
		})
	}, [])

  return (
	<Container>
		<h2>Nossos Programas</h2>

		<ul className="programs-container scroll" ref={ref} >
			{ memoryDB.podcasts.map((pdcast, k) => {
				return <ProgramCardComponent podcast={pdcast} key={k} />
			}) }
		</ul>
	</Container>
  )
}

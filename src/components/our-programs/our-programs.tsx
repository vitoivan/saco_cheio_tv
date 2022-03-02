import React from 'react';
import { ProgramCardComponent } from './program-card';
import { OurProgramsContainer as Container } from './styles' ;
import { memoryDB } from '../../mocks/repositores/in-memory-database';


export const OurProgramsComponent = () => {
  return (
	<Container>
		<h2>Nossos Programas</h2>

		<ul className="programs-container">
			{ memoryDB.podcasts.map((pdcast, k) => {
				return <ProgramCardComponent podcast={pdcast} key={k} />
			}) }
		</ul>
	</Container>
  )
}

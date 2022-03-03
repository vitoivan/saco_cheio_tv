import React from 'react'
import { IEpisodeData } from '../../mocks/database'
import { DescriptionContainer } from './styles'


export interface DescriptionProps {
	data: IEpisodeData | null;
}

export const DescriptionComponent = ({ data }: DescriptionProps) => {
  return (
	<DescriptionContainer>
		<h1>{data?.episode.title}</h1>
		<p>{data?.episode.description} </p>
	</DescriptionContainer>
  )
}

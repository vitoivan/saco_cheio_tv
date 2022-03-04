import React from 'react'
import { IEpisodeData } from '../../mocks/database';
import { RightWrapperContainer } from './styles';

export interface RightAsideProps {
  data: IEpisodeData | null;
  id: string | undefined;
}

export const RightAsideComponent = ({ data, id }: RightAsideProps) => {
  return (
    <RightWrapperContainer>
        <h2>Outros episódios</h2>

        <div className="all-eps scroll">
            {
              data?.podcast.episodes?.map((ep, ind) => {
              return ep.id !== parseInt(id || '0') ? (
                <a className="ep" key={( ep.id + '-right-wrapper-', ind)} href={`/episode/${ep.id}`}>
                    <span>
                      <img src={data.podcast.image} alt="thumb" />
                    </span>

                    <div className="content-wrapper">
                        <span>  <h3>{ep.title}</h3>  </span>
                        <span>{ep.date}</span>
                    </div>
                </a>
              ) : (<></>)
              })
            }
        </div>
    </RightWrapperContainer>
  )
}

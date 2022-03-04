import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderComponent } from '../components/header/header';
import { VideoPlayer } from '../components/VideoPlayer/video';
import { IEpisodeData } from '../mocks/database';
import { memoryDB } from '../mocks/repositores/in-memory-database';
import { ChatWrapperComponent } from '../components/chat-wrapper/chat-wrapper';
import { Link } from 'react-router-dom';
import BreadCrumbComponent from '../components/breadcrumb';
import { Container } from './styles/video-screen';
import { RightAsideComponent } from '../components/video-screen-rigth-aside/rightAside';
import { DescriptionComponent } from '../components/videoDescription/description';

export const VideoScreenPage = () => {

  const { episodeId: id } = useParams();
	const data = memoryDB.getEpisode(id as string);

  return (
    <Container className="App">
        <HeaderComponent />

        <div className="left-wrapper">
            <BreadCrumbComponent>
                <Link to={`/`}>Home</Link>
                <Link to={`/podcast/${data?.podcast.id}`}>{data?.podcast.title}</Link>
                <Link to={`/episode/${data?.episode.id}`} className='bread-active'>{data?.episode.title}</Link>
            </BreadCrumbComponent> 

            <div className="video-wrapper">
              <VideoPlayer data={data as IEpisodeData} />
              <DescriptionComponent data={data} />
              <h2>Comentários</h2>
              <ChatWrapperComponent data={data as IEpisodeData}/>
            </div>
        </div>

        <RightAsideComponent data={data} id={id}/>

    </Container>
  );
}

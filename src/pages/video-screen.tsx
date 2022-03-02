import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderComponent } from '../components/header/header';
import { VideoPlayer } from '../components/VideoPlayer/video';
import { IEpisodeData } from '../mocks/database';
import { memoryDB } from '../mocks/repositores/in-memory-database';
import { ChatWrapperComponent } from '../components/chat-wrapper/chat-wrapper';
import { Link } from 'react-router-dom';
import BreadCrumbComponent from '../components/breadcrumb';
import { FooterComponent } from '../components/footer/footer';
import { Container } from './styles/video-screen';


export const VideoScreenPage = () => {

  const { episodeId: id } = useParams();
	const data = memoryDB.getEpisode(id as string);
  console.log(data)

  
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

                  <div className="video-description">
                        <h1>{data?.episode.title}</h1>

                        <p>
                          {data?.episode.description}
                        </p>
                  </div>

                  <ChatWrapperComponent data={data as IEpisodeData}/>
              </div>
        </div>

        <div className="right-wrapper">
            <h2>Outros episódios</h2>
            <div className="all-eps scroll">
                {
                  // Create an component when refactor
                  data?.podcast.episodes?.map((ep, ind) => {
                  return ep.id !== parseInt(id || '0') ? (
                    <a className="ep" key={( ep.id + 'z', ind)} href={`http://localhost:3000/episode/${ep.id}`}>
                        <span>
                          <img src={data.podcast.image} alt="thumb" />
                        </span>
                        <div className="content-wrapper">
                            <span>
                                <h3>{ep.title}</h3>
                            </span>
                            <span>{ep.date}</span>
                        </div>
                    </a>
                  ) : (<></>)
                  })
                }
            </div>
          
        </div>
    </Container>
  );
}

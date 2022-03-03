import React from 'react';
import { HeaderComponent } from '../components/header/header';
import { BannerComponent } from '../components/banner/baner';
import { memoryDB } from '../mocks/repositores/in-memory-database';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Podcast } from '../mocks/entities/Podcast';
import { FooterComponent } from '../components/footer/footer';
import { EpisodesWrapper } from '../components/EpisodesWrapper/indes';
import styled from 'styled-components';
import BreadCrumbComponent from '../components/breadcrumb';
import { useWindow } from '../providers/windowProvider';


const Container = styled.div`

  nav.MuiTypography-root.MuiTypography-body1.MuiBreadcrumbs-root.css-63vwl1-MuiTypography-root-MuiBreadcrumbs-root{
    width: 90%;
    margin: 0 auto;
    max-width: 1800px;
  }
`;

export const Program = () => {

  const { podcastId: id } = useParams();
  const { windowWidth } = useWindow();

  const location = useLocation();

  const podcast = React.useMemo(() => {
    let podcast = memoryDB.findPodcastById(id as string);
  
    if (!podcast) {
      podcast = JSON.parse(sessionStorage.getItem('@saco-cheio-podcasts') || "{}") as Podcast;
    } else {
      sessionStorage.setItem('@saco-cheio-podcasts', JSON.stringify(podcast)) 
    }
    return podcast;
    // eslint-disable-next-line
    }, [location])

  return (
    <Container className="App"> 
        <HeaderComponent />
        <BreadCrumbComponent>
            <Link to={`/`}>Home</Link>
            <Link to={`/podcast/${podcast?.id}`} className='bread-active' >{podcast?.title}</Link>
        </BreadCrumbComponent>
        {
          windowWidth > 1365  && <BannerComponent podcast={podcast as Podcast} />
        }
        <EpisodesWrapper podcast={podcast as Podcast}/>
        <FooterComponent />
    </Container>
  );
}

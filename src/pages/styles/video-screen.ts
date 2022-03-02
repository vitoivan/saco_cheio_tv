import styled from 'styled-components';


export const Container = styled.div`


  display: flex;
  justify-content: space-between;

  .video-wrapper {
    max-width: 1280px;
  }

  .video-description {
    width: 95%;
      h1 { 
        margin: 1.5rem 0; 
        font-weight: 500;
        color: var(--yellow);
        letter-spacing: .4rem;
        font-size: 1.7rem;
      }
      
      p {
        font-size: 1.1rem;
        letter-spacing: .3rem;
        line-height: 1.5rem;
        margin-bottom: 2rem;
      }
  }

  .left-wrapper { 
    flex-grow: 2; 
    flex-shrink: 0
  }


.right-wrapper {
    width: 30%;
    display: flex;
    flex-direction: column;
    max-width: 600px;

    h2 {
        font-size: 1.7rem;
        color: var(--yellow);
        text-align: left;
        width: 100%;
        margin: 3rem 0;;
    }

  .ep {
      display: flex;
      gap: 1rem;
      margin: 2rem 0 1rem 0rem;
      width: fit-content;
      cursor: pointer;

      img { 
          width: 75px; 
          height: 75px;
      }
      
      h3 {
        font-size: 1.3rem;
      }

      span {
        color: var(--yellow);
        font-size: 1rem;
        margin-top: .5rem;
        display: block;
      }

      &:hover span h3 {
        text-decoration: underline;
      }

      &:hover span img {
        border: 1px solid #fff;
      }
    }
  }

  .all-eps {
    max-height: 200vh;
    overflow: auto;

    &::-webkit-scrollbar-track {
      background: var(--white);
      width: 2px;
    }
    &::-webkit-scrollbar {
      width: .4rem;
      background: var(--white);
      width: 2px;
    }
  }
`
import styled from 'styled-components';

export const Container = styled.section`

  max-width: 1700px;
  width: 90%;
  text-align: center;
  margin: 0 auto;

  h2 {
    text-align: center;
    font-size: 2rem;
    letter-spacing: 1rem;
    color: var(--yellow);
    margin: 5rem 0 5rem 1rem;
    font-weight: 300;
  }

  .container {
    display: flex;
    justify-content: space-between;
    width: 100%;

    p { 
      width: calc(100% - 35vw);
      min-width: calc(100% - 550px);
      text-align: left;
      letter-spacing: .35rem;
      padding: 0 3rem;
      line-height: 2rem;
    }
    img { 
      width: 35vw; 
      height: 35vw;
      max-width: 500px;
      max-height: 500px;
      border: 1px solid var(--white);
      filter: brightness(.8); 
      transition: all .3s;

      &:hover { filter: brightness(1.1); transition: all .3s; }
    }
  }

  @media only screen and (max-width: 1300px) {

    .container p {
      letter-spacing: .1rem;
    }
  }
  @media only screen and (max-width: 1150px) {

    .container p {
      letter-spacing: 0rem;
    }
  }
  
  @media only screen and (max-width: 1000px) {

      h2 {
        font-size: 1.6rem;
        margin: 5rem 0 3rem 0;
      }
      .container {
        flex-direction: column;
        align-items: center;
        img {
          width: 70vw;
          height: 70vw;
        }
        p {
          width: 100%;
          margin: 0 0 3rem 0;
          letter-spacing: .05rem;
          padding: 0;
          line-height: 1.9rem;
        }
      }
  }


`;

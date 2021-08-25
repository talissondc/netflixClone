import styled from 'styled-components';

interface ContainerProps {
  img: string;
}

export const Container = styled.div<ContainerProps>`
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url('https://image.tmdb.org/t/p/original${props => props.img}');

  .vertical {
    width: inherit;
    height: inherit;
    background: linear-gradient(to top, #111 10%, transparent 90%);

    .orizontal {
      width: inherit;
      height: inherit;
      background: linear-gradient(to right, #111 30%, transparent 70%);

      display: flex;
      justify-content: center;
      flex-direction: column;
      padding-left: 30px;
      padding-bottom: 150px;

      h1 {
        font-size: 3.75rem;
      }

      p {
        margin-top: 15px;
        font-size: 20px;
        color: #999;
        max-width: 40%;
      }

      .genres {
        margin-top: 15px;
        font-size: 18px;
        color: #999;

        @media (max-width: 760px) {
          font-size: 14px;
        }
      }

      @media (max-width: 760px) {
        h1 {
          font-size: 35px;
        }

        p {
          font-size: 14px;
          max-width: 100%;
        }
      }
    }
  }

  @media (max-width: 760px) {
    height: 90vh;
  }
`;

export const MovieInfo = styled.div`
  font-size: 18px;
  font-weight: bold;

  span {
    display: inline-block;
    margin-right: 15px;
  }

  .relevance {
    color: #46d369;
  }

  @media (max-width: 760px) {
    font-size: 16px;
  }
`;

export const Buttons = styled.div`
  margin-top: 8px;

  button {
    display: inline-block;
    font-size: 20px;
    font-weight: bold;
    padding: 12px 25px;
    border-radius: 5px;
    text-decoration: none;
    margin-right: 10px;
    border: 0;
    cursor: pointer;
    opacity: 1;
    transition: all, ease, 0.2s;
  }

  .whatchButton {
    background: #fff;
    color: #000;
    &:hover {
      opacity: 0.7;
    }
  }

  .listButton {
    background: #333;
    color: #fff;
    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 760px) {
    button {
      font-size: 16px;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 30px;

  h2 {
    margin: 0 0 0 30px;
  }

  &:hover {
    div {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  overflow-x: hidden;
  padding-left: 30px;
`;

export const AnimationContainer = styled.div`
  transition: all ease 0.5s;
  div {
    display: inline-block;
    width: 150px;
    cursor: pointer;

    img {
      width: 100%;
      transform: scale(0.9);
      transition: all ease 0.2s;

      &:hover {
        transform: scale(1);
      }
    }
  }
`;

export const ArrowLeft = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all ease 0.5s;

  @media (max-width: 760px) {
    opacity: 1;
  }
`;

export const ArrowRight = styled.div`
  position: absolute;
  width: 40px;
  height: 225px;
  right: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 0;
  transition: all ease 0.5s;

  @media (max-width: 760px) {
    opacity: 1;
  }
`;

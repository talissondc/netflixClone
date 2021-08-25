import styled, { css } from 'styled-components';

interface ContainerProps {
  headerBackground: boolean;
}

export const Container = styled.header<ContainerProps>`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  background: transparent;
  transition: all ease 0.5s;

  ${props =>
    props.headerBackground &&
    css`
      background-color: #141414;
    `}
`;

export const Logo = styled.div`
  height: 30px;

  img {
    height: 100%;
  }
`;

export const UserProfileImg = styled.div`
  height: 40px;

  img {
    height: 100%;
    border-radius: 4px;
  }
`;

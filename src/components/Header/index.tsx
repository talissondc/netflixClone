import React from 'react';

import { Container, Logo, UserProfileImg } from './styles';
import logoImg from '../../assets/logo-netflix.png';
import profileImg from '../../assets/profile-img.png';

interface HeaderProps {
  background: boolean;
}

const Header: React.FC<HeaderProps> = ({ background }) => (
  <Container headerBackground={background}>
    <Logo>
      <a href="/">
        <img src={logoImg} />
      </a>
    </Logo>

    <UserProfileImg>
      <a href="/">
        <img src={profileImg} />
      </a>
    </UserProfileImg>
  </Container>
);

export default Header;

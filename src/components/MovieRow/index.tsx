import React, { useCallback, useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Container, Content, AnimationContainer, ArrowLeft, ArrowRight } from './styles';
import { MovieList } from '../../pages/Dashboard';

interface MovieRowProps {
  children: MovieList;
  title: string;
}

const MovieRow: React.FC<MovieRowProps> = ({ children, title }) => {
  const [scrollX, setScrollX] = useState(0);

  const handleLeftArrow = useCallback(() => {
    const x = scrollX + Math.round(window.innerWidth / 2);

    if (x > 0) {
      const x = 0;
      setScrollX(x);
      return;
    }

    setScrollX(x);
  }, [scrollX]);

  const handleRightArrow = useCallback(() => {
    const x = scrollX - Math.round(window.innerWidth / 2);
    const listWidth = children.results.length * 150;

    if (window.innerWidth - listWidth > x) {
      const x = window.innerWidth - listWidth - 60;
      setScrollX(x);
      return;
    }

    setScrollX(x);
  }, [scrollX, children]);

  return (
    <Container>
      <h2>{title}</h2>
      <ArrowLeft onClick={handleLeftArrow} style={{ display: scrollX === 0 ? 'none' : 'flex' }}>
        <FiChevronLeft size={50} />
      </ArrowLeft>
      <ArrowRight
        onClick={handleRightArrow}
        style={{ display: scrollX === window.innerWidth - children.results.length * 150 - 60 ? 'none' : 'flex' }}
      >
        <FiChevronRight size={50} />
      </ArrowRight>
      <Content>
        <AnimationContainer style={{ marginLeft: scrollX, width: children.results.length * 150 }}>
          {children.results.length > 0 &&
            children.results.map(movie => (
              <div key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.original_title} />
              </div>
            ))}
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default MovieRow;

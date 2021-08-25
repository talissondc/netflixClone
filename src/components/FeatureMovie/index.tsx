import React from 'react';

import { Container, MovieInfo, Buttons } from './styles';
import { MovieProps } from '../../pages/Dashboard';
import { isTemplateExpression } from 'typescript';

interface FeatureMovieProps {
  data: MovieProps;
}

const FeatureMovie: React.FC<FeatureMovieProps> = ({ data }) => {
  const date = data.first_air_date ? data.first_air_date : data.release_date;

  const duration = data.number_of_seasons
    ? `${data.number_of_seasons} temporada${data.number_of_seasons > 1 ? 's' : ''}`
    : `${data.runtime} min`;

  const genres = [];

  for (const i in data.genres) {
    genres.push(data.genres[i].name);
  }

  const relevance = data.vote_average * 10;

  const description =
    data.overview && data.overview.length > 200 ? `${data.overview.substring(0, 300)}...` : data.overview;
  return (
    <Container img={data.backdrop_path}>
      <div className="vertical">
        <div className="orizontal">
          <h1>{data.title}</h1>

          <MovieInfo>
            <span className="relevance">{`${relevance}% relevante`}</span>
            <span>{date && date.substring(4, -5)}</span>
            <span>{duration && duration}</span>
          </MovieInfo>

          <p>{description && description}</p>

          <Buttons>
            <button className="whatchButton">&#9654; Assistir</button>
            <button className="listButton">+ Minha Lista</button>
          </Buttons>

          <span className="genres">
            <strong>Gêneros:</strong> {genres.join(', ')}
          </span>
        </div>
      </div>
    </Container>
  );
};

export default FeatureMovie;

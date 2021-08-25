import React, { useCallback, useEffect, useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';
import MovieRow from '../../components/MovieRow';
import FeatureMovie from '../../components/FeatureMovie';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Loading from '../../components/Loading';

export interface MovieList {
  page: number;
  results: [MovieProps];
}

export interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [number];
  id: number;
  original_language: string;
  original_title: string;
  title: string;
  overview: string;
  poster_path: string;
  first_air_date: string;
  release_date: string;
  genres: [{ name: string }];
  runtime: number;
  vote_average: number;
  number_of_seasons: number;
}

interface Home {
  title: string;
  data: MovieList;
}

const Dashboard: React.FC = () => {
  const [movieList, setMovielist] = useState<Home[]>();
  const [featureMovieData, setFeatureMovieData] = useState<MovieProps>({} as MovieProps);
  const [headerBackground, setHeaderBackground] = useState(false);

  const getHomeList = useCallback(async () => {
    const response = [
      {
        title: 'Originais Netflix',
        data: (await api.get<MovieList>('/discover/movie?with_network=213&language=pt-BR')).data,
      },
      {
        title: 'Recomendado para Você',
        data: (await api.get<MovieList>('/trending/all/week?language=pt-BR')).data,
      },
      {
        title: 'Em Alta',
        data: (await api.get<MovieList>('/movie/top_rated?language=pt-BR')).data,
      },
      {
        title: 'Ação',
        data: (await api.get<MovieList>('/discover/movie?with_genres=28&language=pt-BR')).data,
      },
      {
        title: 'Comédia',
        data: (await api.get<MovieList>('/discover/movie?with_genres=35&language=pt-BR')).data,
      },
      {
        title: 'Terror',
        data: (await api.get<MovieList>('/discover/movie?with_genres=27&language=pt-BR')).data,
      },
      {
        title: 'Romance',
        data: (await api.get<MovieList>('/discover/movie?with_genres=10749&language=pt-BR')).data,
      },
      {
        title: 'Documentario',
        data: (await api.get<MovieList>('/discover/movie?with_genres=99&language=pt-BR')).data,
      },
    ];

    return response;
  }, []);

  const getMovieInfo = useCallback(async (movieId, type) => {
    if (movieId) {
      if (type === 'movie') {
        const info = (await api.get<MovieProps>(`/movie/${movieId}?language=pt-BR`)).data;
        return info;
      } else {
        const info = (await api.get<MovieProps>(`/tv/${movieId}?language=pt-BR`)).data;
        return info;
      }
    }

    return {} as MovieProps;
  }, []);

  useEffect(() => {
    const loadAll = async (): Promise<void> => {
      const list = await getHomeList();

      setMovielist(list);

      const feature = list.filter(i => i.title === 'Originais Netflix');
      const randomChosen = Math.floor(Math.random() * (feature[0].data.results.length - 1));
      const featureChosen = feature[0].data.results[randomChosen];

      if (featureChosen.first_air_date) {
        setFeatureMovieData(await getMovieInfo(featureChosen.id, 'tv'));
      } else if (featureChosen.release_date) {
        setFeatureMovieData(await getMovieInfo(featureChosen.id, 'movie'));
      }
    };

    loadAll();
  }, [getHomeList, getMovieInfo]);

  useEffect(() => {
    const scrollListener = (): void => {
      if (window.scrollY > 10) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <Container>
      <Header background={headerBackground} />

      {featureMovieData && <FeatureMovie data={featureMovieData} />}

      <section>
        {movieList?.map(list => (
          <MovieRow key={list.title} title={list.title}>
            {list.data}
          </MovieRow>
        ))}
      </section>

      <Footer />

      {!movieList && <Loading />}
    </Container>
  );
};
export default Dashboard;

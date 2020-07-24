import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Movie } from '..';
import {
  IAPIMovie,
  EAPIActions,
  useApi,
  EAPIMovieActions,
  IAPIMovieCredits,
} from '../../hooks';
import { useParams } from 'react-router-dom';

export const Results: React.FC = (props) => {
  /* State Hooks */
  const [movie, setMovie] = React.useState<IAPIMovie | undefined>();
  const [credits, setCredits] = React.useState<IAPIMovieCredits | undefined>();

  /* Utility Hooks */
  const movieApi = useApi(EAPIActions.movie);
  const { movie: movieId } = useParams();

  const fetchMovie = async (movieId: string = '') => {
    const fetchResults = await movieApi(movieId);
    setMovie(fetchResults);

    const fetchCredits = await movieApi(movieId, EAPIMovieActions.credits);
    setCredits(fetchCredits);
  };

  React.useEffect(() => {
    fetchMovie(movieId);
  }, [fetchMovie, movieId]);

  return movie?.title && credits ? (
    <Movie movie={movie} credits={credits} />
  ) : (
    <Typography variant="body1">
      Sorry, but I couldn&apos;t find that movie. Try searching for another one!
    </Typography>
  );
};

export default Results;

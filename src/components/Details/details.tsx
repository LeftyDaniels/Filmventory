import * as React from 'react';
import { Typography } from '@material-ui/core';
import { Movie } from '../';
import { IAPIMovie, EAPIActions, useApi } from '../../hooks';
import { useParams } from 'react-router-dom';

export const Results: React.FC = (props) => {
  const [result, setResult] = React.useState<IAPIMovie | undefined>();
  const api = useApi(EAPIActions.movie);
  const { movie } = useParams();

  const fetchMovie = async (term: string = '') => {
    const fetchResults = await api(term);
    setResult(fetchResults);
  };

  React.useEffect(() => {
    fetchMovie(movie);
  }, [movie]);

  return result && result.title ? (
    <Movie movie={result} />
  ) : (
    <Typography variant="body1">
      Sorry, but I couldn't find that movie. Try searching for another one!
    </Typography>
  );
};

export default Results;

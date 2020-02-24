import * as React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Movie } from '../';
import { IAPIMovie, APIActions, useApi } from '../../hooks';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles({
  root: {},
});

export const Results: React.FC = (props) => {
  const [result, setResult] = React.useState<IAPIMovie | undefined>();
  const styles = useStyles();
  const api = useApi();
  const { movie } = useParams();

  const fetchMovie = async (term: string = '') => {
    const fetchResults = await api<IAPIMovie>(APIActions.movie, term);
    setResult(fetchResults);
  };

  React.useEffect(() => {
    fetchMovie(movie);
  }, [movie]);

  console.log(result);

  return result && result.title ? (
    <Movie movie={result} />
  ) : (
    <Typography variant="body1">
      Sorry, but I couldn't find that movie. Try searching for another one!
    </Typography>
  );
};

export default Results;

import * as React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
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

  return (
    <Grid
      component="section"
      container
      justify="center"
      className={styles.root}
      alignContent="flex-start"
      {...props}
    >
      Details for {result?.title}
    </Grid>
  );
};

export default Results;

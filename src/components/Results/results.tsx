import * as React from 'react';
import { Movie } from '../';
import { Grid, Typography, makeStyles, Button } from '@material-ui/core';
import { useApi } from '../../hooks';
import { APIActions } from '../../hooks/useApi/useApi';

export interface IResultsProps {}

const useStyles = makeStyles({
  root: {},
  header: {},
  results: {
    listStyle: 'none',
    padding: 0,
  },
});

export const Results: React.FC<IResultsProps> = (props) => {
  const styles = useStyles();
  const api = useApi(APIActions.search, 'test');

  return (
    <Grid
      component="section"
      container
      justify="center"
      className={styles.root}
      alignContent="flex-start"
    >
      <Grid component="header" item xs={8} className={styles.header}>
        <Typography
          id="movie-lookup-search-results-header"
          component="h2"
          variant="srOnly"
        >
          Search Results
        </Typography>
      </Grid>

      <Grid
        component="ol"
        item
        xs={8}
        aria-describedby="movie-lookup-search-results-header"
        className={styles.results}
      >
        <Movie />
      </Grid>

      <Button>Test Store</Button>
    </Grid>
  );
};

export default Results;

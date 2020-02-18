import * as React from 'react';
import { Movie } from '../';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { IAPIResults } from '../../hooks';

export interface IResultsProps {
  list?: IAPIResults;
}

const useStyles = makeStyles({
  root: {},
  header: {},
  results: {
    listStyle: 'none',
    padding: 0,
  },
});

export const Results: React.FC<IResultsProps> = ({ list, ...props }) => {
  const styles = useStyles();

  return (
    <Grid
      component="section"
      container
      justify="center"
      className={styles.root}
      alignContent="flex-start"
      {...props}
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
        container
        item
        xs={8}
        aria-describedby="movie-lookup-search-results-header"
        className={styles.results}
        spacing={2}
        justify="center"
      >
        {list &&
          list.results &&
          list.results.map((movie) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Movie key={movie.id} movie={movie} />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Results;

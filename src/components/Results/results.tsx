import * as React from 'react';
import { MovieResult } from '../';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { IAPISearchResult } from '../../hooks';

export interface IResultsProps {
  movies?: IAPISearchResult[];
}

const useStyles = makeStyles({
  root: {},
  header: {},
  results: {
    listStyle: 'none',
    padding: 0,
  },
});

export const Results: React.FC<IResultsProps> = ({ movies, ...props }) => {
  /* Utility Hooks */
  const styles = useStyles();
  const history = useHistory();

  const clickHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    movieId: string,
  ) => {
    history.push(`/details/${movieId}`);
  };

  return (
    <Grid container className={styles.root} {...props}>
      <Grid component="header" item xs={12} className={styles.header}>
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
        xs={12}
        aria-describedby="movie-lookup-search-results-header"
        className={styles.results}
        spacing={2}
        justify="center"
      >
        {movies &&
          movies.map((movie) => (
            <Grid key={movie.id} item xs={12} sm={6} md={4} lg={3}>
              <MovieResult
                key={movie.id}
                movie={movie}
                onClick={clickHandler}
              />
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default Results;

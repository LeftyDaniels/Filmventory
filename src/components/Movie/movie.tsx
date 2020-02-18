import * as React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import { MoviePoster } from '../';
import { IAPIResultObject } from '../../hooks';

export interface IMovieProps {
  movie: IAPIResultObject;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: '100%',
  },
  poster: {
    margin: 0,
  },
}));

export const Movie: React.FC<IMovieProps> = ({ movie, ...props }) => {
  const styles = useStyles();

  return (
    <Paper component="li" className={styles.root} {...props}>
      <MoviePoster poster={movie.poster_path} title={movie.title} />
    </Paper>
  );
};

export default Movie;

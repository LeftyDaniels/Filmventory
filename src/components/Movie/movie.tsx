import * as React from 'react';
import { makeStyles, Paper, Grid, Typography } from '@material-ui/core';
import { MoviePoster } from '../';
import { IAPIMovie } from '../../hooks';

export interface IMovieProps {
  movie: IAPIMovie;
}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    height: '100%',
  },
  button: {
    transition: theme.transitions.create(['background-color', 'opacity'], {
      duration: theme.transitions.duration.short,
    }),
    '&:hover': {
      backgroundColor: `${theme.palette.grey[300]}`,
      opacity: '85%',
    },
  },
  poster: {
    margin: 0,
  },
}));

export const Movie: React.FC<IMovieProps> = ({ movie, ...props }) => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} {...props}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <MoviePoster poster={movie.poster_path} />
        </Grid>

        <Grid item xs={8}>
          <Grid item xs={12}>
            <Typography component="h2" variant="h3">
              {movie.title}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="body1">{movie.overview}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Movie;

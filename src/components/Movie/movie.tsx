import * as React from 'react';
import { makeStyles, Paper, ButtonBase } from '@material-ui/core';
import { MoviePoster } from '../';
import { IAPISearchResult } from '../../hooks';

export interface IMovieProps {
  movie: IAPISearchResult;
  onClick: (e: React.MouseEvent<HTMLButtonElement>, movieId: string) => void;
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

export const Movie: React.FC<IMovieProps> = ({ movie, onClick, ...props }) => {
  const styles = useStyles();

  return (
    <Paper component="li" className={styles.root} {...props}>
      <ButtonBase
        focusRipple
        className={styles.button}
        onClick={(e) => onClick(e, String(movie.id))}
      >
        <MoviePoster poster={movie.poster_path} title={movie.title} />
      </ButtonBase>
    </Paper>
  );
};

export default Movie;

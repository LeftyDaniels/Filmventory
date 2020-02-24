import * as React from 'react';
import { makeStyles, Paper, ButtonBase } from '@material-ui/core';
import { MoviePoster } from '..';
import { IAPISearchResult } from '../../hooks';

export interface IMovieResultProps {
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
}));

export const MovieResult: React.FC<IMovieResultProps> = ({
  movie,
  onClick,
  ...props
}) => {
  const styles = useStyles();

  return (
    <Paper className={styles.root} {...props}>
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

export default MovieResult;

import * as React from 'react';
import { Typography, makeStyles, Grid } from '@material-ui/core';

export interface IMoviePosterProps {
  poster: string;
  title: string;
}

const useStyles = makeStyles({
  root: {
    margin: 0,
  },
});

export const Movie: React.FC<IMoviePosterProps> = ({
  poster,
  title,
  ...props
}) => {
  const styles = useStyles();

  return (
    <Grid component="figure" container className={styles.root} {...props}>
      <Grid
        component="img"
        item
        src={
          poster ? `https://image.tmdb.org/t/p/w500${poster}` : '/no-poster.jpg'
        }
        xs={12}
      />

      <Grid component="figcaption" item xs={12}>
        <Typography component="h3" variant="h6" align="center">
          {title}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Movie;

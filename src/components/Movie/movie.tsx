import * as React from 'react';
import { Typography, makeStyles, Paper, Grid } from '@material-ui/core';

export interface IMovieProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

export const Movie: React.FC<IMovieProps> = (props) => {
  const styles = useStyles();

  return (
    <Paper component="li" className={styles.root}>
      <Grid component="article" container>
        <Grid component="header" item>
          <Typography variant="h3">Movie Result</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Movie;

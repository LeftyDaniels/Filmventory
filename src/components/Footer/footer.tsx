import * as React from 'react';
import { Typography, Link, makeStyles, Grid } from '@material-ui/core';

export interface IFooterProps {}

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

export const Footer: React.FC<IFooterProps> = (props) => {
  const styles = useStyles();

  return (
    <Grid component="footer" container className={styles.root}>
      <Grid item xs={12}>
        <Typography variant="body1" align="right">
          <Link href="https://www.themoviedb.org/">
            Created with The Movie Database API
          </Link>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;

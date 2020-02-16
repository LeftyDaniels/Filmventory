import * as React from 'react';
import { Header, Footer, Search, Results } from './components';
import { Grid, CssBaseline, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
}));

function App() {
  const styles = useStyles();

  return (
    <Grid container direction="column" className={styles.root}>
      <CssBaseline />

      <Grid item xs="auto">
        <Header />
      </Grid>

      <Grid item container xs spacing={2} direction="column">
        <Grid item container xs="auto">
          <Search />
        </Grid>

        <Grid item container xs>
          <Results />
        </Grid>
      </Grid>

      <Grid item xs="auto">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;

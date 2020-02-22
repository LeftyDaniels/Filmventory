import * as React from 'react';
import { Header, Footer, Search, Results, Details } from './components';
import { Grid, CssBaseline, makeStyles } from '@material-ui/core';
import { Route, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  results: {
    overflow: 'auto',
  },
});

function App() {
  /* Utility Hooks */
  const styles = useStyles();
  const history = useHistory();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    history.push(`/search/${e.target.value}`);
  };

  return (
    <Grid container direction="column" className={styles.root}>
      <CssBaseline />

      <Grid item xs="auto">
        <Header />
      </Grid>

      <Grid item container xs spacing={2} direction="column">
        <Grid item container xs="auto">
          <Search onSearch={changeHandler} />
        </Grid>

        <Grid item container xs className={styles.results}>
          <Route path="/search/:search">
            <Results />
          </Route>

          <Route path="/details/:movie">
            <Details />
          </Route>
        </Grid>
      </Grid>

      <Grid item xs="auto">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;

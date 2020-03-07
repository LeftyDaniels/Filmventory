import * as React from 'react';
import { Header, Footer, SearchInput, MovieDetails } from './components';
import { Grid, CssBaseline, makeStyles, Typography } from '@material-ui/core';
import { Route, Switch, useHistory } from 'react-router-dom';
import { SearchResults } from './components';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  content: {
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
        <Grid
          item
          container
          xs="auto"
          justify="center"
          alignContent="flex-start"
        >
          <Grid component="section" item container xs={10}>
            <SearchInput onSearch={changeHandler} />
          </Grid>
        </Grid>

        <Grid
          item
          container
          xs
          className={styles.content}
          justify="center"
          alignContent="flex-start"
        >
          <Grid component="section" item container xs={10}>
            <Switch>
              <Route path="/search/:search">
                <Typography variant="h2" align="center">
                  Search Results
                </Typography>

                <SearchResults />
              </Route>

              <Route path="/details/:movie">
                <MovieDetails />
              </Route>

              <Route path="/">
                <Typography variant="h2" align="center">
                  Popular Movies
                </Typography>

                <SearchResults />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs="auto">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;

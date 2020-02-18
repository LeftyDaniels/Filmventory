import * as React from 'react';
import { Header, Footer, Search, Results } from './components';
import { Grid, CssBaseline, makeStyles } from '@material-ui/core';
import { useApi, APIActions, IAPIResults } from './hooks';

const useStyles = makeStyles({
  root: {
    height: '100vh',
  },
  results: {
    overflow: 'auto',
  },
});

function App() {
  const [results, setResults] = React.useState<IAPIResults | undefined>();

  const styles = useStyles();
  const api = useApi();

  const searchHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      const searchResults = await api<IAPIResults>(
        APIActions.search,
        e.target.value,
      );

      setResults(searchResults);
    } else {
      setResults(undefined);
    }
  };

  return (
    <Grid container direction="column" className={styles.root}>
      <CssBaseline />

      <Grid item xs="auto">
        <Header />
      </Grid>

      <Grid item container xs spacing={2} direction="column">
        <Grid item container xs="auto">
          <Search onSearch={searchHandler} />
        </Grid>

        <Grid item container xs className={styles.results}>
          <Results list={results} />
        </Grid>
      </Grid>

      <Grid item xs="auto">
        <Footer />
      </Grid>
    </Grid>
  );
}

export default App;

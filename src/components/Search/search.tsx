import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';

export interface ISearchProps {}

export const Search: React.FC<ISearchProps> = (props) => {
  return (
    <Grid container justify="center">
      <Grid item xs={8}>
        <TextField
          id="movie-lookup-search-field"
          type="search"
          variant="outlined"
          label="Lookup a Movie:"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};

export default Search;

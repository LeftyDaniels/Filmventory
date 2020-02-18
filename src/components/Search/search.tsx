import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDebounce } from '../../hooks';

export interface ISearchProps {
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export const Search: React.FC<ISearchProps> = ({ onSearch, ...props }) => {
  const searchDebounce = useDebounce();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    searchDebounce(1000, () => onSearch(e));
  };

  return (
    <Grid container justify="center" {...props}>
      <Grid item xs={8}>
        <TextField
          id="movie-lookup-search-field"
          type="search"
          variant="outlined"
          label="Lookup a Movie:"
          fullWidth
          onChange={searchHandler}
        />
      </Grid>
    </Grid>
  );
};

export default Search;

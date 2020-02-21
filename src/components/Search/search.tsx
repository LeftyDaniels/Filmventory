import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDebounce } from '../../hooks';
import { useRouteMatch } from 'react-router-dom';

export interface ISearchProps {
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export const Search: React.FC<ISearchProps> = ({ onSearch, ...props }) => {
  /* Utility Hooks */
  const searchDebounce = useDebounce();

  const match = useRouteMatch<{ search: string }>('/search/:search');

  console.log(match?.params);

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
          defaultValue={match?.params?.search}
        />
      </Grid>
    </Grid>
  );
};

export default Search;

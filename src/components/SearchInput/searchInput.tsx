import * as React from 'react';
import { Grid, TextField } from '@material-ui/core';
import { useDebounce } from '../../hooks';
import { useRouteMatch } from 'react-router-dom';

export interface ISearchInputProps {
  onSearch: React.ChangeEventHandler<HTMLInputElement>;
}

export const SearchInput: React.FC<ISearchInputProps> = ({
  onSearch,
  ...props
}) => {
  /* Utility Hooks */
  const searchDebounce = useDebounce();

  const match = useRouteMatch<{ search: string }>('/search/:search');

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.persist();

    searchDebounce(1000, () => onSearch(e));
  };

  return (
    <Grid item xs={12} {...props}>
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
  );
};

export default SearchInput;

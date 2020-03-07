import * as React from 'react';
import { useParams } from 'react-router-dom';
import {
  IAPISearch,
  useApi,
  EAPIActions,
  IAPIDiscoverOptions,
} from '../../hooks';
import { Results } from '..';

export const SearchResults: React.FC = () => {
  /* State Hooks */
  const [apiResults, setApiResults] = React.useState<IAPISearch | undefined>();

  /* Utility Hooks */
  const searchApi = useApi(EAPIActions.search);
  const discoverApi = useApi(EAPIActions.discover);
  const { search, discover } = useParams();

  /* Initial Render Check */
  React.useEffect(() => {
    if (search) {
      searchHandler(search);
    } else if (discover) {
      discoverHandler(getUrlParams(discover));
    } else {
      discoverHandler({ sort_by: 'popularity.desc' });
    }
  }, [search, discover]);

  const searchHandler = async (term: string = '') => {
    const searchResults = await searchApi(term);
    setApiResults(searchResults);
  };

  const discoverHandler = async (options: IAPIDiscoverOptions) => {
    const discoverResults = await discoverApi(options);
    setApiResults(discoverResults);
  };

  return <Results movies={apiResults?.results} />;
};

export const getUrlParams = (queryString: string) => {
  const processedQuery = queryString.slice(1);
  const params: { [key: string]: string } = {};

  for (let param of processedQuery.split('&')) {
    const paramKey = param.split('=')[0];
    const paramValue = param.split('=')[1];

    params[paramKey] = paramValue;
  }

  return params;
};

export default SearchResults;

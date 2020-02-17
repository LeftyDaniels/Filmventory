const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = '7a98e86c5a5a99680912f385743ea4cc';

export enum APIActions {
  search = 'search/movie',
}

export const useApi = async (action: APIActions, term: string) => {
  let api: string;

  switch (action) {
    case APIActions.search: {
      api = `${API_BASE}${action}?api_key=${API_KEY}&query=${encodeURI(term)}`;
    }
  }

  return;
};

export default useApi;

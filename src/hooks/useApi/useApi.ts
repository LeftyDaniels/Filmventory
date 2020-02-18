const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = '7a98e86c5a5a99680912f385743ea4cc';

export enum APIActions {
  search = 'search/movie',
}

export interface IAPIResults {
  page: number;
  total_results: number;
  total_pages: number;
  results: IAPIResultObject[];
}

export interface IAPIResultObject {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: string;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export type TUseApi = () => <T>(a: APIActions, t: string) => Promise<T>;

export const useApi: TUseApi = () => async <T>(
  action: APIActions,
  term: string,
) => {
  let api: string;

  switch (action) {
    case APIActions.search: {
      api = `${API_BASE}${action}?api_key=${API_KEY}&query=${encodeURI(term)}`;
    }
  }

  const response = await fetch(api);

  return await response.json().then<T>();
};

export default useApi;

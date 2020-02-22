const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = '7a98e86c5a5a99680912f385743ea4cc';

export enum APIActions {
  search = 'search/movie',
  movie = 'movie',
}

export interface IAPISearch {
  page: number;
  total_results: number;
  total_pages: number;
  results: IAPISearchResult[];
}

export interface IAPISearchResult {
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

export interface IAPIMovie {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: IAPICollection;
  budget: number;
  genres: IAPIGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IAPIProductionCompany[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: IAPISpokenLanguage[];
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IAPICollection {
  id: number;
  name: string;
  poster_path: string;
  backdrop_path: string;
}

export interface IAPIGenre {
  id: number;
  name: string;
}

export interface IAPIProductionCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface IAPISpokenLanguage {
  iso_639_1: string;
  name: string;
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
      break;
    }

    case APIActions.movie: {
      api = `${API_BASE}${action}/${term}?api_key=${API_KEY}`;
      break;
    }
  }

  const response = await fetch(api);

  return await response.json().then<T>();
};

export default useApi;

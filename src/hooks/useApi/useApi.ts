const API_BASE = 'https://api.themoviedb.org/3/';
const API_KEY = '7a98e86c5a5a99680912f385743ea4cc';

export enum EAPIActions {
  search = 'search/movie',
  movie = 'movie',
  discover = 'discover/movie',
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

export interface IAPIDiscoverOptions {
  language?: string;
  region?: string;
  sort_by?:
    | 'popularity.asc'
    | 'popularity.desc'
    | ' release_date.asc'
    | 'release_date.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'original_title.asc'
    | 'original_title.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';
}

type TUseApiSearch = (term: string) => Promise<IAPISearch>;

type TUseApiMovie = (movie: string) => Promise<IAPIMovie>;

type TUseApiDiscover = (options: IAPIDiscoverOptions) => Promise<any>;

export type TUseApi = (
  queryType: EAPIActions,
) => TUseApiSearch | TUseApiMovie | TUseApiDiscover;

export const useApi: TUseApi = (queryType) => {
  let apiRequestCallback;

  switch (queryType) {
    case EAPIActions.search: {
      apiRequestCallback = async (term: string) => {
        const api = `${API_BASE}${
          EAPIActions.search
        }?api_key=${API_KEY}&query=${encodeURI(term)}`;

        return (await (await fetch(api)).json()) as Promise<IAPISearch>;
      };
      break;
    }

    case EAPIActions.movie: {
      apiRequestCallback = async (term: string) => {
        const api = `${API_BASE}${EAPIActions.movie}/${term}?api_key=${API_KEY}`;
        return (await (await fetch(api)).json()) as Promise<IAPIMovie>;
      };
      break;
    }

    case EAPIActions.discover: {
      apiRequestCallback = async (options: IAPIDiscoverOptions) => {
        let discoverOptions = '';
        let option: keyof IAPIDiscoverOptions;

        for (option in options) {
          discoverOptions.concat(`${option}${options[option]}&`);
        }

        const api = `${API_BASE}${EAPIActions.discover}?${discoverOptions}api_key=${API_KEY}`;
        return (await (await fetch(api)).json()) as Promise<any>;
      };
      break;
    }
  }

  return apiRequestCallback;
};

export default useApi;

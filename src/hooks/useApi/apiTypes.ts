export enum EAPIActions {
  discover = 'discover/movie',
  movie = 'movie',
  search = 'search/movie',
}
/* Discover API Types */
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

/* Movie API Types */
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

export interface IAPIMovieCredits {
  id: number;
  cast: IAPICast[];
  crew: IAPICrew[];
}

export enum EAPIMovieActions {
  credits = 'credits',
}

export interface IAPIMovieCallback {
  (movie: string): Promise<IAPIMovie>;
  (movie: string, movieQueryType: EAPIMovieActions.credits): Promise<
    IAPIMovieCredits
  >;
}

/* Search API Types */
export interface IAPISearch {
  page: number;
  results: IAPISearchResult[];
  total_results: number;
  total_pages: number;
}

export interface IAPISearchResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_count: number;
  vote_average: number;
}

/* Shared API Types */
export interface IAPICast {
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number | null;
  id: number;
  name: string;
  order: number;
  profile_path: string | null;
}

export interface IAPICollection {
  backdrop_path: string;
  id: number;
  name: string;
  poster_path: string;
}

export interface IAPICrew {
  credit_id: string;
  department: string;
  gender: number | null;
  id: number;
  job: string;
  name: string;
  profile_path: string | null;
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

declare global {
  interface MovieResult {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    media_type: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }

  interface MovieResponse {
    movie_results: MovieResult[];
    person_results: any[];
    tv_episode_results: any[];
    tv_results: any[];
    tv_season_results: any[];
  }
}

export {};

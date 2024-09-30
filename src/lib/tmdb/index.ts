import Config from 'react-native-config';

const tmdbURL = 'https://api.themoviedb.org/3';

export const getMovies = async (imdbID: string): Promise<MovieResponse> => {
  const data = fetch(`${tmdbURL}/find/${imdbID}?external_source=imdb_id`, {
    headers: {
      Authorization: `Bearer ${Config.TMBD_TOKEN}`,
    },
  });

  const response = await data;
  return response.json();
};

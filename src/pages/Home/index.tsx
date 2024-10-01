import React, {useEffect, useState} from 'react';
import {ScrollView, useColorScheme, View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import { getMovies } from '../../lib/tmdb';

function Home(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [movies, setMovies] = useState<MovieResponse>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies('tt0198781');
      setMovies(data);
    };

    fetchMovies();
  }, []);

  const movie = movies?.movie_results[0];

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {movie ? (
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <View className="flex justify-center items-center w-full h-screen">
            <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-4xl`}>Home page</Text>
            <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl`}>
              {movie.original_title}
            </Text>
            <TouchableOpacity>
              <View className="h-[52px] px-[25px] bg-white/95 rounded-[500px] justify-center items-center gap-1.5 flex-row">
                <Text className="text-center text-black text-[22px] font-['SF Pro'] leading-normal">&</Text>
                <Text className="text-center text-black text-[19px] font-['SF Pro'] leading-normal">Label</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      ) : (
        <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl`}>Loading...</Text>
      )}
    </ScrollView>
  );
}

export default Home;

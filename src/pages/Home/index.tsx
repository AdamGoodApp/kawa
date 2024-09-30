import React, {useEffect, useState} from 'react';
import {ScrollView, useColorScheme, View, Text, Button, ImageBackground} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

import { getMovies } from '../../lib/tmdb';

function Home({ navigation }: { navigation: NavigationProp<any> }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const [movies, setMovies] = useState<MovieResponse>();

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getMovies('tt0198781');
      setMovies(data);
    };

    fetchMovies();
  }, []);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      {movies ? (
        <ImageBackground
          source={{ uri: `https://image.tmdb.org/t/p/original/${movies.movie_results[0].backdrop_path}` }}
          className="w-full h-full"
          resizeMode="cover"
        >
          <View className="flex justify-center items-center w-full h-screen">
            <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-4xl`}>Home page</Text>
            <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl`}>
              {movies.movie_results[0].original_title}
            </Text>
            <Button
              title="Go to Settings"
              onPress={() =>
                navigation.navigate('Settings')
              }
            />
          </View>
        </ImageBackground>
      ) : (
        <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-2xl`}>Loading...</Text>
      )}
    </ScrollView>
  );
}

export default Home;

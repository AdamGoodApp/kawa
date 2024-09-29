/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, useColorScheme, View, Text} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="w-full h-screen flex justify-center items-center">
        <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-4xl`}>Hello world</Text>
      </View>
    </ScrollView>
  );
}

export default App;

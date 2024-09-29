/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useRef} from 'react';
import {DeviceEventEmitter} from 'react-native';
import {NavigationContainer, DefaultTheme, NavigationContainerRef} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Settings from './src/pages/Settings';

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  const navigationContainerRef = useRef<NavigationContainerRef<any> | null>(null);

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };

  // Handle messaging and navigation
  useEffect(() => {
    if (navigationContainerRef.current) {
      const subscription = DeviceEventEmitter.addListener('NavigationEvent', (event: { navigate: string }) => {
        navigationContainerRef.current?.navigate(event.navigate as never);
      });

      return () => {
        subscription.remove();
      };
    }
  }, [navigationContainerRef]);

  return (
    <NavigationContainer theme={navTheme} ref={navigationContainerRef}>
      <Stack.Navigator screenOptions={{
        headerShown: false,
      }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

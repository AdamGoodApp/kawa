import React from 'react';
import {ScrollView, useColorScheme, View, Text, Button} from 'react-native';
import { NavigationProp } from '@react-navigation/native';

function Settings({ navigation }: { navigation: NavigationProp<any> }): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="w-full h-screen flex justify-center items-center">
        <Text className={`${isDarkMode ? 'text-white' : 'text-black'} text-4xl`}>Settings page</Text>
        <Button
          title="Go to Home"
          onPress={() =>
            navigation.navigate('Home')
          }
        />
      </View>
    </ScrollView>
  );
}

export default Settings;

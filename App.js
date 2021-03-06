import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/HomeScreen'
import Astrologer from './src/screen/Astrologer'
function Home({navigation}) {
  return (
    <HomeScreen navigation={navigation}/>
  );
}
function Astro({navigation}) {
  return (
    <Astrologer navigation={navigation}/>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="HomeS">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Astro" component={Astro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
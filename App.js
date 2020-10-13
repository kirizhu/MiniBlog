import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Provider } from './src/context/BlogContext';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: 'center' }}
        initialRouteName='Index'
      >
        <Stack.Screen
          name='Index'
          component={IndexScreen}
          options={{
            title: 'Mini Blog',
          }}
        />
        <Stack.Screen
          name='Show'
          component={ShowScreen}
          options={{ title: 'Show Blog' }}
        />
        <Stack.Screen
          name='Create'
          component={CreateScreen}
          options={{ title: 'Create Blog' }}
        />
        <Stack.Screen
          name='Edit'
          component={EditScreen}
          options={{ title: 'Edit Blog' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};

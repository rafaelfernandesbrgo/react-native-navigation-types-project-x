import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types';
import { Screen1 } from '../../screens/Screen1';
import { Screen2 } from '../../screens/Screen2';
import { HomeStackScreens } from '../../enums';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={HomeStackScreens.SCREEN1} component={Screen1} />
      <Stack.Screen name={HomeStackScreens.SCREEN2} component={Screen2} />
    </Stack.Navigator>
  );
};

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabParamList } from '../../types';
import { HomeStack } from '../HomeStack';
import { Cart } from '../../screens/Cart';
import { Favourites } from '../../screens/Favourites';
import { TabIcon } from '../../components';
import { TabScreens } from '../../enums';
import { tabNavigatorOptions } from './styles';

const Tab = createBottomTabNavigator<TabParamList>();

const renderTabIcon =
  (routeName: string) =>
  ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string;
    size: number;
  }) =>
    (
      <TabIcon
        routeName={routeName}
        focused={focused}
        color={color}
        size={size}
      />
    );

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        ...tabNavigatorOptions,
        tabBarIcon: renderTabIcon(route.name),
      })}
    >
      <Tab.Screen name={TabScreens.HOME} component={HomeStack} />
      <Tab.Screen name={TabScreens.CART} component={Cart} />
      <Tab.Screen name={TabScreens.FAVOURITES} component={Favourites} />
    </Tab.Navigator>
  );
};

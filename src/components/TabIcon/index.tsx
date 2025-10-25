import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTabIcons } from '../../hooks';

interface TabIconProps {
  routeName: string;
  focused: boolean;
  color: string;
  size: number;
}

export const TabIcon = ({ routeName, focused, color, size }: TabIconProps) => {
  const { getIconName } = useTabIcons();

  return <Icon name={getIconName(routeName, focused)} size={size} color={color} />;
};

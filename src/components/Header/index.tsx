import React from 'react';
import { View, Text } from 'react-native';
import { MenuButton } from '../MenuButton';
import { styles } from './styles';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <View style={styles.container}>
      <MenuButton />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.placeholder} />
    </View>
  );
};

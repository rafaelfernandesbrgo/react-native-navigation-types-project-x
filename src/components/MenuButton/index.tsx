import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useDrawer } from '../../hooks';
import { styles } from './styles';

export const MenuButton = () => {
  const { toggleDrawer } = useDrawer();

  return (
    <TouchableOpacity onPress={toggleDrawer} style={styles.button}>
      <Text style={styles.icon}>☰</Text>
    </TouchableOpacity>
  );
};

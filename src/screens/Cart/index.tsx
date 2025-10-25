import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { Header } from '../../components';
import { useTranslation } from '../../hooks';

export const Cart = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t.drawer.start} />
      <View style={styles.container}>
        <Text style={styles.title}>{t.tabs.cart}</Text>
      </View>
    </>
  );
};

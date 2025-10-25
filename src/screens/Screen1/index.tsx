import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../types';
import { Button, Header } from '../../components';
import { useTranslation } from '../../hooks';
import { HomeStackScreens } from '../../enums';
import { styles } from './styles';

type Props = NativeStackScreenProps<
  HomeStackParamList,
  typeof HomeStackScreens.SCREEN1
>;

export const Screen1 = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t.drawer.start} />
      <View style={styles.container}>
        <Text style={styles.title}>{t.screens.screen1.title}</Text>
        <Button
          title={t.screens.screen1.button}
          onPress={() => navigation.navigate(HomeStackScreens.SCREEN2)}
        />
      </View>
    </>
  );
};

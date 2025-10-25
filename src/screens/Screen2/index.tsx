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
  typeof HomeStackScreens.SCREEN2
>;

export const Screen2 = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Header title={t.drawer.start} />
      <View style={styles.container}>
        <Text style={styles.title}>{t.screens.screen2.title}</Text>
        <Button
          title={t.screens.screen2.button}
          onPress={() => navigation.navigate(HomeStackScreens.SCREEN1)}
        />
      </View>
    </>
  );
};

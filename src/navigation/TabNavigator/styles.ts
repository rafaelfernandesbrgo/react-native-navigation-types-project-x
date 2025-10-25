import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { colors } from '../../theme/colors';

export const tabNavigatorOptions: BottomTabNavigationOptions = {
  headerShown: false,
  headerTitle: '',
  headerStyle: {
    backgroundColor: colors.backgroundDark,
  },
  tabBarShowLabel: true,
  tabBarActiveTintColor: colors.tabActive,
  tabBarInactiveTintColor: colors.tabInactive,
  tabBarLabelStyle: { fontSize: 12, fontWeight: '400' as '400' },
  tabBarIconStyle: { marginTop: 5 },
  tabBarStyle: {
    height: 80,
    paddingBottom: 10,
    paddingTop: 8,
    borderTopWidth: 0,
    elevation: 0,
    backgroundColor: colors.backgroundDark,
  },
};

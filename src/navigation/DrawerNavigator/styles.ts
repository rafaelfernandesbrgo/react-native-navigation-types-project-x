import { StyleSheet, Dimensions } from 'react-native';
import { colors } from '../../theme/colors';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');
const DRAWER_WIDTH = SCREEN_WIDTH * 0.7;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundDrawer,
  },
  drawerContent: {
    position: 'absolute',
    width: DRAWER_WIDTH,
    height: SCREEN_HEIGHT,
    backgroundColor: colors.backgroundDrawer,
    paddingTop: 20,
  },
  drawerSafeArea: {
    flex: 1,
    paddingHorizontal: 20,
  },
  drawerTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.textLight,
    marginBottom: 40,
    marginTop: 20,
  },
  drawerItem: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 8,
  },
  drawerItemActive: {
    backgroundColor: colors.drawerItemActiveBg,
  },
  drawerItemText: {
    fontSize: 18,
    fontWeight: '400',
    color: colors.drawerItemInactive,
  },
  drawerItemTextActive: {
    color: colors.drawerItemActive,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: colors.drawerSeparator,
    marginVertical: 20,
    marginHorizontal: 15,
  },
  mainContent: {
    flex: 1,
    backgroundColor: colors.background,
  },
});

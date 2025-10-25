import { TabScreens } from '../enums';

export const useTabIcons = () => {
  const iconMap: Record<TabScreens, { focused: string; unfocused: string }> = {
    [TabScreens.HOME]: { focused: 'home', unfocused: 'home-outline' },
    [TabScreens.CART]: { focused: 'cart', unfocused: 'cart-outline' },
    [TabScreens.FAVOURITES]: { focused: 'heart', unfocused: 'heart-outline' },
  };

  const getIconName = (routeName: string, focused: boolean): string => {
    const icons = iconMap[routeName as TabScreens];
    return icons ? (focused ? icons.focused : icons.unfocused) : 'help-outline';
  };

  return { getIconName };
};

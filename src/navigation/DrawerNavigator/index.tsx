import React, { useState, useCallback } from 'react';
import { View, Dimensions, Text, TouchableOpacity, Alert } from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  Extrapolation,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabNavigator } from '../TabNavigator';
import { Orders } from '../../screens/Orders';
import { DrawerContext, useTranslation } from '../../hooks';
import { DrawerScreens } from '../../enums';
import { DRAWER_ANIMATION } from '../../constants';
import { styles } from './styles';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const DRAWER_WIDTH = SCREEN_WIDTH * DRAWER_ANIMATION.WIDTH_PERCENTAGE;

export const DrawerNavigator = () => {
  const { t } = useTranslation();
  const [currentScreen, setCurrentScreen] = useState<DrawerScreens>(
    DrawerScreens.START,
  );
  const translateX = useSharedValue(0);

  // Pan gesture to open/close the drawer by dragging horizontally
  const panGesture = Gesture.Pan()
    .onUpdate(event => {
      // Allow dragging to the right (open) and clamp to drawer width
      const newValue = event.translationX;
      if (newValue >= 0) {
        translateX.value = Math.min(newValue, DRAWER_WIDTH);
      }
    })
    .onEnd(event => {
      // If passed half of the width or has high velocity, open; otherwise, close
      if (
        translateX.value > DRAWER_WIDTH / 2 ||
        event.velocityX > DRAWER_ANIMATION.VELOCITY_THRESHOLD
      ) {
        translateX.value = withTiming(DRAWER_WIDTH, {
          duration: DRAWER_ANIMATION.ANIMATION_DURATION,
        });
      } else {
        translateX.value = withTiming(0, {
          duration: DRAWER_ANIMATION.ANIMATION_DURATION,
        });
      }
    });

  // Animated style for the main content with 2D rotation
  const animatedMainStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [0, DRAWER_WIDTH],
      [DRAWER_ANIMATION.SCALE_MAX, DRAWER_ANIMATION.SCALE_MIN],
      Extrapolation.CLAMP,
    );

    // 2D rotation on the screen plane (as if pinned to the bottom-right corner)
    const rotate = interpolate(
      translateX.value,
      [0, DRAWER_WIDTH],
      [0, DRAWER_ANIMATION.ROTATION_DEGREES],
      Extrapolation.CLAMP,
    );

    const borderRadius = interpolate(
      translateX.value,
      [0, DRAWER_WIDTH],
      [0, DRAWER_ANIMATION.BORDER_RADIUS_MAX],
      Extrapolation.CLAMP,
    );

    return {
      // Move less than the drawer (parallax effect)
      transform: [
        { translateX: translateX.value * DRAWER_ANIMATION.PARALLAX_FACTOR },
        { rotate: `${rotate}deg` },
        { scale },
      ],
      borderRadius,
      overflow: 'hidden',
    };
  });

  // Navigate between screens and close the drawer
  const handleNavigate = (screen: DrawerScreens) => {
    setCurrentScreen(screen);
    translateX.value = withTiming(0, {
      duration: DRAWER_ANIMATION.ANIMATION_DURATION,
    });
  };

  // Toggle open/close drawer programmatically
  const toggleDrawer = () => {
    if (translateX.value > 0) {
      translateX.value = withTiming(0, {
        duration: DRAWER_ANIMATION.ANIMATION_DURATION,
      });
    } else {
      translateX.value = withTiming(DRAWER_WIDTH, {
        duration: DRAWER_ANIMATION.ANIMATION_DURATION,
      });
    }
  };

  const handleSignOut = useCallback(() => {
    Alert.alert(t.alerts.signOutNotImplemented);
  }, [t]);

  return (
    <DrawerContext.Provider value={{ toggleDrawer }}>
      <GestureHandlerRootView style={styles.container}>
        {/* Fixed drawer behind the main content */}
        <View style={styles.drawerContent}>
          <SafeAreaView style={styles.drawerSafeArea}>
            <Text style={styles.drawerTitle}>{t.common.appName}</Text>

            <TouchableOpacity
              style={[
                styles.drawerItem,
                currentScreen === DrawerScreens.START &&
                  styles.drawerItemActive,
              ]}
              onPress={() => handleNavigate(DrawerScreens.START)}
            >
              <Text
                style={[
                  styles.drawerItemText,
                  currentScreen === DrawerScreens.START &&
                    styles.drawerItemTextActive,
                ]}
              >
                {t.drawer.start}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.drawerItem,
                currentScreen === DrawerScreens.ORDERS &&
                  styles.drawerItemActive,
              ]}
              onPress={() => handleNavigate(DrawerScreens.ORDERS)}
            >
              <Text
                style={[
                  styles.drawerItemText,
                  currentScreen === DrawerScreens.ORDERS &&
                    styles.drawerItemTextActive,
                ]}
              >
                {t.drawer.orders}
              </Text>
            </TouchableOpacity>

            <View style={styles.separator} />

            <TouchableOpacity style={styles.drawerItem} onPress={handleSignOut}>
              <Text style={styles.drawerItemText}>{t.drawer.signOut}</Text>
            </TouchableOpacity>
          </SafeAreaView>
        </View>

        {/* Main content with 2D animation */}
        <GestureDetector gesture={panGesture}>
          <Animated.View style={[styles.mainContent, animatedMainStyle]}>
            {currentScreen === DrawerScreens.START ? (
              <TabNavigator />
            ) : (
              <Orders />
            )}
          </Animated.View>
        </GestureDetector>
      </GestureHandlerRootView>
    </DrawerContext.Provider>
  );
};

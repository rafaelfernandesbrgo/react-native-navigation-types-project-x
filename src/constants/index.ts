export const API_URL = __DEV__
  ? 'http://localhost:3000/api'
  : 'https://api.production.com';

export const APP_VERSION = '1.0.0';

export const DRAWER_ANIMATION = {
  WIDTH_PERCENTAGE: 0.7, // Drawer width as percentage of screen width
  PARALLAX_FACTOR: 0.6, // How much the main content moves (60% of drawer movement)
  ANIMATION_DURATION: 400, // Animation duration in milliseconds
  VELOCITY_THRESHOLD: 1000, // Minimum velocity to trigger drawer open
  SCALE_MIN: 0.85, // Minimum scale when drawer is open
  SCALE_MAX: 1, // Maximum scale when drawer is closed
  ROTATION_DEGREES: -8, // Rotation in degrees when drawer is open
  BORDER_RADIUS_MAX: 20, // Border radius when drawer is open
} as const;

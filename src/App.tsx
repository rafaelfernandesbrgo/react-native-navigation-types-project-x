import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DrawerNavigator } from './navigation/DrawerNavigator';
import { TranslationProvider } from './hooks';
import { ErrorBoundary } from './components';
import 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <TranslationProvider>
      <ErrorBoundary>
        <NavigationContainer>
          <DrawerNavigator />
        </NavigationContainer>
      </ErrorBoundary>
    </TranslationProvider>
  );
}

export default App;

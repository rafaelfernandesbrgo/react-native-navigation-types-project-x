import React, { Component, ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTranslation } from '../../hooks';
import { styles } from './styles';

interface ErrorBoundaryClassProps {
  children: ReactNode;
  fallback?: (error: Error, resetError: () => void) => ReactNode;
  translations: {
    title: string;
    defaultMessage: string;
    button: string;
  };
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundaryClass extends Component<ErrorBoundaryClassProps, State> {
  constructor(props: ErrorBoundaryClassProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  resetError = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError && this.state.error) {
      if (this.props.fallback) {
        return this.props.fallback(this.state.error, this.resetError);
      }

      const { translations } = this.props;

      return (
        <View style={styles.container}>
          <Text style={styles.title}>{translations.title}</Text>
          <Text style={styles.message}>
            {this.state.error.message || translations.defaultMessage}
          </Text>
          <TouchableOpacity style={styles.button} onPress={this.resetError}>
            <Text style={styles.buttonText}>{translations.button}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return this.props.children;
  }
}

// Wrapper funcional para injetar traduções
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: (error: Error, resetError: () => void) => ReactNode;
}

export const ErrorBoundary = ({ children, fallback }: ErrorBoundaryProps) => {
  const { t } = useTranslation();

  return (
    <ErrorBoundaryClass translations={t.errorBoundary} fallback={fallback}>
      {children}
    </ErrorBoundaryClass>
  );
};

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ClasesStack from './src/navigation/ClasesStack';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <ClasesStack />
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
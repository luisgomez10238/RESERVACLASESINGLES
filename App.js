import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import ClasesStack from './src/navigation/ClasesStack';

export default function App() {
  return (
  <SafeAreaProvider>
    <AppProvider>
      <NavigationContainer>
        <Tabs />
        <StatusBar style="auto" />
      </NavigationContainer>
    </AppProvider>
  </SafeAreaProvider>
  );
}
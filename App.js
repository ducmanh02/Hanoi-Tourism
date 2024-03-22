
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import PTTT1 from './screens/PTTT/PTTT1';
import PTTT2 from './screens/PTTT/PTTT2';
import PTTT3 from './screens/PTTT/PTTT3';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="PTTT1" component={PTTT1} options={{ headerShown: false }}  />
        <Stack.Screen name="PTTT2" component={PTTT2} options={{ headerShown: false }}  />
        <Stack.Screen name="PTTT3" component={PTTT3}  options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

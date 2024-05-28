import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home/Home'
import Auth from './src/screen/Auth/Auth'
import Reg from './src/screen/Reg/Reg';
import Main from './src/screen/Main/Main';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="Reg" component={Reg} />
      <Stack.Screen name="Main" component={Main} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

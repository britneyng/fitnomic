import 'react-native-gesture-handler';

// Containers
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Bottom Tab
import home    from './bottom_tab/home';
import events  from './bottom_tab/events';
import rewards from './bottom_tab/rewards';
import profile from './bottom_tab/profile';

import * as React from 'react'

import Ionicons from 'react-native-vector-icons'

//Screens
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';

// Navigator Variables
const Tab   = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const LogIn = createNativeStackNavigator();

const LogInScreen = () => {
  <LogIn.Navigator>
    <LogIn.Screen 
      name = "Sign-In"
      component={LoginScreen}
    />
  </LogIn.Navigator>
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} options={{headerShown: false}} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} options={{ headerShown: false}} />
      <Stack.Screen name='EventsScreen' component={EventsScreen} options={{ headerShown: false}} />
      <Stack.Screen name='RewardsScreen' component={RewardsScreen} options={{ headerShown: false}}/>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{ headerShown: false}} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}


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

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={home} />
      <Tab.Screen name="Events" component={events} />
      <Tab.Screen name="Rewards" component={rewards} />
      <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>
  )
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='HomeScreen' component={HomeScreen} />
      <Stack.Screen name='EventsScreen' component={EventsScreen} />
      <Stack.Screen name='RewardsScreen' component={RewardsScreen} />
      <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}

// export default function App() {
//   return (
//     <NavigationContainer>
//        <Stack.Navigator>
//         <Stack.Screen
//            name = "Login"
//            component={LoginScreen}
//            options={ {title:"Welcome!"}} 
//         />
//         <Stack.Screen
//            name = "Home"
//            component={HomeScreen}
//         />

//        </Stack.Navigator>
//     </NavigationContainer>
//   );
// }


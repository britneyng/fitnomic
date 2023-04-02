import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


import { createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// Navigator Variables
const Tab   = createMaterialBottomTabNavigator();

// Bottom Tab
import home    from '../bottom_tab/home'
import events  from '../bottom_tab/events';
import rewards from '../bottom_tab/rewards';
import profile from '../bottom_tab/profile';

export default function HomeScreen({navigation, route}) {
  let email = route.params.email;
  let password = route.params.password;
  let none = route.params.none;

  return (
    <Tab.Navigator barStyle={{ backgroundColor: '#B1AAE9' }} > 
        <Tab.Screen name="Home" component={home}
         options={{title: 'Home', 
          tabBarIcon: ({color}) => ( 
          <MaterialCommunityIcons name = "home"
          size = {26} color = {color} />
        ) 
        }}

        />
        <Tab.Screen name="Events" component={events}
        options={{title: 'Events', 
          tabBarIcon: ({color}) => ( 
          <MaterialCommunityIcons name = "calendar-check"
          size = {26} color = {color} />
        ) 
        }} />
        <Tab.Screen name="Rewards" component={rewards}
        options={{title: 'Rewards', 
          tabBarIcon: ({color}) => ( 
          <MaterialCommunityIcons name = "plus-circle-multiple-outline" 
          size = {26} color = {color} />
        ) 
        }} />
        <Tab.Screen name="Profile" component={profile} 
        options={{title: 'Profile', 
          tabBarIcon: ({color}) => ( 
          <MaterialCommunityIcons name = "account-circle-outline"
          size = {26} color = {color} />
        ) 
        }} />
    </Tab.Navigator>

  );
}
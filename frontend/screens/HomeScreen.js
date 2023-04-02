import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

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
    // <View style={styles.container}>
    //   <Text>Home Screen</Text>
    //   <StatusBar style="auto" />
    // </View>
    <Tab.Navigator>
        <Tab.Screen name="Home" component={home} />
        <Tab.Screen name="Events" component={events} />
        <Tab.Screen name="Rewards" component={rewards} />
        <Tab.Screen name="Profile" component={profile} />
    </Tab.Navigator>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#968CE1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

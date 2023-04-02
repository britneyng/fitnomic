import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function EventsScreen({navigation, route}) {
  
  return (
    <View style={styles.container}>
      <Text>Events Screen</Text>
      <StatusBar style="auto" />
    </View>
    // <Tab.Navigator>
    //     <Tab.Screen name="Home" component={home} />
    //     <Tab.Screen name="Events" component={events} />
    //     <Tab.Screen name="Rewards" component={rewards} />
    //     <Tab.Screen name="Profile" component={profile} />
    // </Tab.Navigator>
  );
}
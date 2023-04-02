import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function EventsScreen({navigation, route}) {
  
  return (
    <View style={styles.container}>
      <Text
       onPress = {() => navigation.navigate('Home')}
       > Event Screen
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
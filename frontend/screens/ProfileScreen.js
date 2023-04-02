import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function ProfileScreen({navigation, route}) {
  
  return (
    <View style={styles.container}>
      <Text
       onPress = {() => navigation.navigate('Home')}
       > Profile Screen
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
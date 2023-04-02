import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Rewards({navigation, route}) {
  
  return (
    <View style={styles.container}>
      <Text>Rewards Bottom Tab</Text>
      <StatusBar style="auto" />
    </View>
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
import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Home({navigation, route}) {
  
  return (
    <View style={styles.container}>
    <Image
        source={require('../assets/roadmap.png')}

    />
      <Text>Home Tab</Text>
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
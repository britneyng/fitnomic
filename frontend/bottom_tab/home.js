import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Home({navigation, route}) {
  
  return (
    <View style={styles.container}>
    <Image
        source={require('../assets/lock-homePage.png')}
    />
    <Image
        source={require('../assets/string-homePage.png')}
        style={{opacity:0.7}}
    /> 
    <Image
        source={require('../assets/roadmap.png')}        
    />
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
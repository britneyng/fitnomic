import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Event from '../components/Event';
import FlatButton from '../components/FlatButton';

export default function Events({navigation, route}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Upcoming Events:</Text>
      <StatusBar style="auto" />
      <Event title='Yoga Session Outside' />
      <Event title='Tennis Training (Beginner Friendly!)' />
      <Event title='Gym Session @ The Coop' />
      <Event title='Group Tandem Biking Session (10 km)' />
      <View style={styles.submit}>
      <FlatButton text="Create an Event" bgColor='#504880'/>
      </View>
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
    title: {
      fontSize: 25,
      color: 'white',
      fontWeight: 600,
    },
    submit: {
      marginTop: 30,
      width: '80%',
      alignItems: 'center',
    }
  });

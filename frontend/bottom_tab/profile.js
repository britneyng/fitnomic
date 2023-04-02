import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Image } from 'react-native';
import ProfileCard from '../components/ProfileCard';
import pfp from '../assets/zhaner.png';
import Event from '../components/Event';

export default function Profile({ navigation, route }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.cardContainer}>
        <ProfileCard name="Jane Doe" email="janedoe@gmail.com" linkedin="linkedin.com/janedoe" bgColor="#B4A2E9" image={pfp}/>
      </View>
      <Text style={styles.title}>Your Events</Text>
      <View style={styles.event}>
      <Event title='Tennis Training (Beginner Friendly!)' />
      <Event title='Group Tandem Biking Session (10 km)' />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#968CE1',
    width: '100%',
    paddingTop: 50,
  },
  cardContainer: {
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  event: {
    paddingLeft: 20,
    borderWidth: 0.15,
    borderColor: 'black',
  },
  title: {
    paddingLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  }
});

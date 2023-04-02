import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Rewards() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/jane-doe.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Jane Doe</Text>
        <View style={styles.row}>
          <Image source={require('../assets/rewards.png')} style={styles.icon} />
          <Text style={styles.description}>10,200</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#968CE1',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 50,
    flex: 1,
  },
  image: {
    backgroundColor: '#968CE1',
    width: 100,
    height: 100,
  },
  textContainer: {
    backgroundColor: '#968CE1',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    paddingLeft: 20,
  },
  title: {
    backgroundColor: '#968CE1',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 5,
    paddingLeft: 30,
    paddingTop: 20,
  },
  description: {
    fontSize: 16,
  },
});

import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#968CE1',
    flexDirection: 'row',
    alignItems: 'flex-start', // align items to top
    padding: 50,
  },
  image: {
    backgroundColor: '#968CE1',
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    backgroundColor: '#968CE1',
    flex: 1,
  },
  title: {
    backgroundColor: '#968CE1',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    backgroundColor: '#968CE1',
    fontSize: 16,
    marginTop: 10, // add margin top to separate title and description
  },
  rewardsContainer: {
    backgroundColor: '#968CE1',
    alignItems: 'center',
    justifyContent: 'flex-end', // align the rewards text to the bottom
    marginLeft: 'auto', // push rewards.png to the right
  },
  rewardsImage: {
    width: 50,
    height: 50,
    marginBottom: 10, // add margin bottom to separate rewards.png and the text
  },
});

const ImageWithText = ({ source, title, description }) => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../assets/jane-doe.png')} style={styles.image} />
        <View style={styles.rewardsContainer}>
          <Image source={require('../assets/rewards.png')} style={styles.rewardsImage} />
          <Text style={styles.description}>10,200</Text>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

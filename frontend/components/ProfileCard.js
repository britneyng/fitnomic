import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Image } from 'react-native';

export default function ProfileCard({ name, email, linkedin, bgColor = 'black', image}) {
  return (
    <TouchableOpacity disabled={true}>
      <View style={[styles.button, { backgroundColor: bgColor }]}>
      <Image source={image} style={styles.image} />
        <Text style={styles.buttonText}>{name}</Text>
        <View style={styles.contactContainer}>
          <MaterialCommunityIcons name="email" size={26} color='white'/>
          <Text style={styles.contactText}>{email}</Text>
        </View>
        <View style={styles.contactContainer}>
          <MaterialCommunityIcons name="linkedin" size={26} color='white' />
          <Text style={styles.contactText}>{linkedin}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 0.1,
    borderColor: 'black',
  },
  buttonText: {
    color: 'white',
    textTransform: 'capitalize',
    textAlign: 'center',
    fontSize: 16,
  },
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  contactText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 12,
  },
  image: {
    paddingBottom: 20,
  }
});

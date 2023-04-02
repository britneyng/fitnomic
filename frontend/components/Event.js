import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Event({ title, onPress = () => {} }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} disabled={true}>
      <Text style={styles.title}>{title}</Text>
      <MaterialCommunityIcons name="calendar" color= '#281f57' size={26} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#7D70C8',
      borderWidth: 0.1,
      borderColor: 'black',
      height: 50,
      width: width - 40,
      borderRadius: 30,
      justifyContent: 'space-between',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 20,
      paddingLeft: 25,
      paddingRight: 25,
      marginBottom: -8,
    },
    title: {
      fontSize: 14,
      color: 'white',
      fontWeight: 500,
    },
});

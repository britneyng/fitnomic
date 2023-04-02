import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text, } from 'react-native';
import { TextInput } from 'react-native';
import FlatButton from '../components/FlatButton';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey, welcome to AppName. </Text>
      <Text style={styles.subtitle}>Let's start your fitness adventure!</Text>
      <TextInput placeholder="Username" style={styles.input}></TextInput>
      <TextInput placeholder="Password" secureTextEntry={true} style = {styles.input}>Password:</TextInput>
      <FlatButton
        text="Log in" bgColor='#745EAB'
        onPress={() => navigation.navigate("HomeScreen", {none: "none"})}
      />
        <View style={styles.hrContainer}>
          <View style={styles.hr}></View>
          <Text style={styles.hrText}>OR</Text>
          <View style={styles.hr}></View>
        </View>
      <StatusBar style="auto"/>
      <FlatButton text="Create an Account" bgColor='#504880'/>
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
  input: {
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginVertical: 8,
    borderColor: "white",
    backgroundColor: "white",
    height: '8%',
    width: '85%',
    alignSelf: 'center',
  },
  navButton: {
    backgroundColor: 'white',
  },
  title: {
    fontSize: 23,
    fontFamily: 'Helvetica',
    paddingBottom: 10,
    fontWeight: 700,
    color: 'white',
  },
  subtitle: {
    paddingBottom: 20,
    color: 'white',
    fontWeight: 500,
  },
  hrContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '25%',
    paddingHorizontal: 10,
  },
  hr: {
    height: 1,
    backgroundColor: 'white',
    flex: 1,
  },
  hrText: {
    color: 'white',
    paddingHorizontal: 5,
    fontWeight: 700,
  },
});

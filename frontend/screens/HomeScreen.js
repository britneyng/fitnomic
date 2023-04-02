import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation, route}) {
  let email = route.params.email;
  let password = route.params.password;
  let none = route.params.none;

  return (
    <View style={styles.container}>
      <Text>Letss go!!!</Text>
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

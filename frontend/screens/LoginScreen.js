import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, View, Text } from 'react-native';

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Email:</Text> 
      <Text>Password:</Text>
      <Button
        title="Sign up"
        onPress={() => navigation.navigate("HomeScreen", {none: "none"})}
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

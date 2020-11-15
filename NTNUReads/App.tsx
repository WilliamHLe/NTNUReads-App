import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginForm from "./components/user/LoginForm";
import Detailed from "./pages/Detailed";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Dette funker</Text>
      <Detailed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

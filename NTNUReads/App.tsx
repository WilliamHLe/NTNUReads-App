import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Sidebar from "./components/filter/Sidebar";
import Sorting from "./components/Sorting";


export default function App() {

  return (
    <View style={styles.container}>
      <Button
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
      />
        <Sidebar />
        <Sorting />
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

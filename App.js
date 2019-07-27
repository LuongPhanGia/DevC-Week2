import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Profile from './Components/Profile';




export default function App() {
  return (
    <View style={styles.container}>
      
      <Profile/>
    </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});

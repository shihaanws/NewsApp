import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native';
import {HackerNewsScreen} from "./screens/HackerNewsScreen";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <StatusBar style="auto" />
        <HackerNewsScreen/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:20 ,
    flex: 1,
    backgroundColor: 'grey',
    margin:24,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  text:{
    fontSize:28,
    fontWeight:900,
  }
});

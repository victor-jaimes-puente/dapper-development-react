import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
     <View style={styles.main} > 
        <View style={styles.container}>
        <Text style={styles.text} >This is DapperTyrant form React</Text>
        <StatusBar style="auto" />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: 'black',
    margin: 0,
},
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'skyblue',
      fontSize: '.25em'
    },

  });
  
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Footer from './src/components/Footer.js';
import Header from './src/components/Header.js';
import Home from './src/components/Home';
export default function App() {
  return (
    <View>
     <Header/>,
     <Home/>,
     <Footer/>
    </View>
  );
}


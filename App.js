import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, } from 'react-native';

import Router from './navigation/Route'



const App=()=> {
  return (
   
      <>
     <StatusBar style="auto" />
       <Router/>
      </>
     
    
  );
}
export default App
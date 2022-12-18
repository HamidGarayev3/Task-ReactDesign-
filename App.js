import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.color}><Text>Hi Rakib</Text></View>
      <Text style={styles.bold}>Manage Your File</Text>
      </View>
      <View style={styles.purplePart}>

      </View>
      <View style={styles.uploads}>
        <View style={{flex:1}}>
          <View style={{flex:3}}><image></image></View>
          <View style={{flex:1}}><Text></Text></View>
          <View style={{flex:1}}></View>
        </View>

        <View style={{flex:1}}>
        <View style={{flex:3}}><image></image></View>
          <View style={{flex:1}}><Text></Text></View>
          <View style={{flex:1}}><Text></Text></View>
        </View>

        <View style={{flex:1}}>
        <View style={{flex:3}}><image></image></View>
          <View style={{flex:1}}><Text></Text></View>
          <View style={{flex:1}}><Text></Text></View>
        </View>

      </View>
      <View style={{flex:1,fontWeight:'bold'}}>Recents Files</View>
      <View style={styles.folders}>
        <View style={styles.folder}></View>
        <View style={styles.folder}></View>
      </View>

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
  color:{
    color:'gray'
  },
  header:{
    flex:2
  },
  purplePart:{
    flex:4,
    backgroundColor:'purple',
    borderRadius:18
  },
  bold:{
    fontWeight:'bold'
  },
  uploads:{
    flex:3,
    flexDirection:'row'
  },
  folders:{
    flex:4,
  },
  folder:{
    flex:2
  }

});

import React, { Component, useState, useEffect } from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import Country from './country';
import Clima from "./clima";
//import Cur from "./cur"
import Converter from "./exchange"
import Storage from "./storage"
const https = require('https');
export default class Gps extends React.Component {
  
  state = {
    location: null,
    latitude: null,
    longitude: null,
    passiveMode: false,
    
  };


getCoordinates = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = JSON.stringify(position.coords.location);
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
            
        this.setState({ location });
        this.setState({ latitude });
        this.setState({ longitude });
       
        var t = this.setState({ latitude });
        var t1 = this.setState({ longitude });
      },
        (error) => Alert.alert(error.message), { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };
  


  render() {
       return (
      this.getCoordinates(),
      
      <View>
        <Text style={styles.title}>Welcome</Text>
          <Text className="text1" style={styles.text}>Latitude: {this.state.latitude}</Text>
          <Text className="text2" style={styles.text}>Longitude: {this.state.longitude}</Text>
              
         <Clima/>
        
         <Converter/>
          <Storage/>
        
      </View>
        
    )
   }

}  
const styles = StyleSheet.create({
  title: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  text: {
    marginTop: 5,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'coral',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 21,
    marginTop: 5,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: 'coral',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },

});


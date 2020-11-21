import React from 'react';
import {useState}  from 'react';
import {StyleSheet, Text, View, } from 'react-native';
import location from './clima';

export default function Country(){
     
  const [city, setCity] = useState('Your city is');
  function openCage(){
    
  fetch('https://api.opencagedata.com/geocode/v1/json?q='+location.latitude+'+'+location.longitude+'&key=e7f78ea6044c4484b53dd8ebf364fa5c')
     // fetch('https://api.opencagedata.com/geocode/v1/json?q=53.333049499999994,-6.265549099999999&key=e7f78ea6044c4484b53dd8ebf364fa5c')
    
      .then((response) => response.json())
          .then((json) => {
              console.log(json);
              setCity(json.results[0].components.country);
          });
          
  }[city]
  openCage();
  
    return(
    <View>
       <Text style={styles.title}>Country: {city}</Text>
          </View>)
  
}
const styles = StyleSheet.create({
  title: {
    paddingVertical: 8,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
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
  
  
  
});

import React, { Component, useState, useEffect } from 'react';
import {StyleSheet, Text, View, } from 'react-native';
import useLocalStorageState from 'use-local-storage-state'
import location from './clima';
import Clima from "./clima";
import WeatherInfo from './WeatherInfo'
export default function Storage() {
  const [query, setQuery] = useState('')
    const [todos, setTodos] = useLocalStorageState("todos", []);
  
    useEffect(() => {
      
      setTodos([Clima.latitude, Clima.longitude, WeatherInfo.currentWeather]);
    }, []);
  
    function onClick() {
       setTodos();
  }

  return (
      <>
        
          <button  onClick={() => setTodos([Clima.latitude, Clima.longitude, WeatherInfo.currentWeather])}>Save</button>
          <Text style={styles.title}>Saved: {todos, setTodos}</Text>
         
      </>
  )
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
    },
    container: {
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
    }
  
  });
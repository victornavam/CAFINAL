import React from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity, Button, TextInput} from 'react-native';
export default function Cur() {
    let inputs = document.querySelectorAll(".valor");

    let url = 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP,JPY';
    fetch(url)
      .then(r => r.json())
      .then(data => {
        document.querySelector('#USD')
          .dataset.cambio = data.rates.USD;
           
        inputs.forEach(input => {
          input.value = input.dataset.cambio;
        });
      })
      .catch(error => console.error(error))
    
    function valorCambiado(input) {
      let factor = input.value / input.dataset.cambio;
      inputs.forEach(campo => {
        campo.value = (campo.dataset.cambio * factor).toFixed(2);
      })
    }
    return (
        <View>
           <div class="divisa">
    <div class="nombre">Euros</div> 
    <input class="valor" type="number" onChange={this.onChange} value={1} data-cambio={1} step={0.25} />
  </div>

  <div class="divisa">
    <div class="nombre">Dólares</div>
    <input class="valor" type="number" onChange={this.onChange} value={1} id={"USD"} step={0.25} />
  </div>
      
  </View>
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

});


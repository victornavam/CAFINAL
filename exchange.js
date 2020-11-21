import React, { Component } from "react";
import {Alert, StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';

 class Converter extends Component {
  state = {
    currencies: ["USD", "AUD", "SGD", "PHP", "EUR"],
    base: "USD",
    amount: "",
    convertTo: "EUR",
    result: "",
    date: ""
  };

  handleSelect = e => {
    this.setState(
      {
        [e.target.name]: e.target.value,
        result: null
      },
      this.calculate
    );
  };

  handleInput = e => {
    this.setState(
      {
        amount: e.target.value,
        result: null,
        date: null
      },
      this.calculate
    );
  };

  calculate = () => {
    const amount = this.state.amount;
    if (amount === isNaN) {
      return;
    } else {
      fetch(`https://api.exchangeratesapi.io/latest?base=${this.state.base}`)
        .then(res => res.json())
        .then(data => {
          const date = data.date;
          const result = (data.rates[this.state.convertTo] * amount).toFixed(4);
          this.setState({
            result,
            date
          });
        });
    }
  };

  handleSwap = e => {
    const base = this.state.base;
    const convertTo = this.state.convertTo;
    e.preventDefault();
    this.setState(
      {
        convertTo: base,
        base: convertTo,
        result: null
      },
      this.calculate
    );
  };
  render() {
    const { currencies, base, amount, convertTo, result, date } = this.state;
    return (
        <View style={styles.container}>
      <div className="container">
         
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card card-body">
              <h5>
                {amount} {base} is equevalent to
              </h5>
              <h2>
                {amount === ""
                  ? "0"
                  : result === null
                  ? "Calculating..."
                  : result}{" "}
                {convertTo}
              </h2>
              <p> {amount === "" ? "" : date === null ? "" : date}</p>
              <div className="row">
                <div className="col-lg-10">
                  <form className="form-inline mb-4">
                    <input
                      type="number"
                      value={amount}
                      onChange={this.handleInput}
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="base"
                      value={base}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>

                  <form className="form-inline mb-4">
                    <input
                      disabled={true}
                      value={
                        amount === ""
                          ? "0"
                          : result === null
                          ? "Calculating..."
                          : result
                      }
                      className="form-control form-control-lg mx-3"
                    />
                    <select
                      name="convertTo"
                      value={convertTo}
                      onChange={this.handleSelect}
                      className="form-control form-control-lg"
                    >
                      {currencies.map(currency => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                    </select>
                  </form>
                </div>

                <div className="col-lg-2 align-self-center">
                  <h1 onClick={this.handleSwap} className="swap">
                    &#8595;&#8593;
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </View>
    );
  }
}

export default Converter;
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
  
  

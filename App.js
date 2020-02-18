/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import Header from './src/components/header';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: '',
      input2: '',
      result: ''
    }
    this.sum = this.sum.bind(this);
    this.deduct = this.deduct.bind(this);
    this.divide = this.divide.bind(this);
    this.multiply = this.multiply.bind(this);

  }
  sum() {
    const number1 = parseFloat(this.state.input1)
    const number2 = parseFloat(this.state.input2)
    const result = number1 + number2

    this.setState({
      result: result
    })

  }

  deduct() {
    const number1 = parseFloat(this.state.input1)
    const number2 = parseFloat(this.state.input2)
    const result = number1 - number2

    this.setState({
      result: result
    })

  }

  multiply() {
    const number1 = parseFloat(this.state.input1)
    const number2 = parseFloat(this.state.input2)
    const result = number1 * number2

    this.setState({
      result: result
    })

  }

  divide() {
    const number1 = parseFloat(this.state.input1)
    const number2 = parseFloat(this.state.input2)
    const result = number1 / number2

    this.setState({
      result: result
    })

  }
  render() {
    return (
      <View style={styles.container}>
        <Header headerText = 'Simple Calculator!'/>

        <View style={styles.contentWrapper}>
          <TextInput style={styles.input}
            placeholder='İlk Sayi'

            onChangeText={text => this.setState({
              input1: text
            })}
            value={this.state.input1}>

          </TextInput>

          <View style={styles.buttonWrapper}>
            <Button
              onPress={this.sum}
              title='+'
              color='#f194ff'
            >

            </Button>
            <Button
              onPress={this.deduct}
              title='-'
              color='#f194ff'
            >

            </Button>
            <Button
              onPress={this.multiply}
              title='*'
              color='#f194ff'
            >

            </Button>
            <Button
              onPress={this.divide}
              title='/'
              color='#f194ff'
            >

            </Button>
          </View>

          <TextInput style={styles.input}
            placeholder='İkinci Sayi'

            onChangeText={text => this.setState({
              input2: text
            })}
            value={this.state.input2}>


          </TextInput>

          <Text style={styles.sampleText}>Result: {this.state.result}</Text>
        </View>
      </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'


  },
  input: {
    height: 60

  },
  sampleText: {
    
    height: 30,
    fontSize: 14,
    justifyContent:'center',
    alignContent:'center'
    

  },
  contentWrapper: {
    
    padding: 50,
    flexDirection: 'column',
    


  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'center'

  }


});

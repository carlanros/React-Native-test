import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Progress from '../Progress';
import Login from '../Login';

interface IState {
    isLoaded: boolean;
    userName: string;
    amount: number;
}

export default class App extends React.Component<{}, IState> {
constructor(props: any ) {

  super(props);
  this.state = {userName: '', isLoaded: false, amount: 0};

  }

componentDidMount() {
  Actions.push('login');
}

onTextChanged(name: string) {
  this.setState({userName: name, amount: this.state.amount + 1});
}

  render() {
    return (
      <View style={{padding: 20}}>

        <Text style={{padding: 10,  fontSize: 40}}>
        {'Welcome' + ' ' + this.state.userName}</Text>
        <TextInput
        style={{height: 40, fontSize: 40}}
        placeholder='Type name'
        onChangeText={(name) => this.onTextChanged(name)} />
        <Progress amount = {this.state.amount}></Progress>

      </View>
    );
  }
}

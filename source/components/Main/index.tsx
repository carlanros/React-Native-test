import React, { Component } from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Progress from '../Progress';
import Login from '../Login';
// import { Login } from '../Login/index';
// import { Actions } from 'react-native-router-flux';
import { connect, Dispatch} from 'react-redux';
import * as types from '../../Types';
import { FacebookLogin } from '../Login/actions';
import { bindActionCreators }from 'redux';

interface IState {
    isLoaded: boolean;
    userName: string;
    amount: number;
}

export  class Main extends React.Component<types.IProps, IState> {
constructor(props: any ) {

  super(props);
  this.state = {userName: '', isLoaded: false, amount: 0};

  }

componentDidMount() {
if (!this.props.login.isLoggedIn) {
  Actions.push('login');
  }
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
const mapStateToProps = (state: types.IApplicationState) => ({
  // route: state.route,
  login: state.login,
 });

 const mapDispatchToProps = (dispatch: Dispatch<types.IProps>) => ({
  dispatch,
  FacebookLogin: bindActionCreators(FacebookLogin, dispatch),

});

export default connect<types.IApplicationState, types.IProps>(
  mapStateToProps,
  mapDispatchToProps
  )(Main);
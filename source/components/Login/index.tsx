import React from  'react';
import { View, Text, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect, Dispatch} from 'react-redux';
import * as types from '../../Types';
import { FacebookLogin } from './actions';
import { bindActionCreators }from 'redux';
import { SocialIcon } from 'react-native-elements';
import { FacebookLogin } from './actions/index';

export class Login extends React.Component<types.IProps, {}> {
    render() {
        return (
            <View>
                <Text>Login</Text>
                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    onPress={this.facebookLogin}
                    type='facebook'
                    />
            </View>
       );
    }
facebookLogin = async () => {
    await this.props.FacebookLogin();
    if (this.props.login.isLoggedIn) {
        Actions.pop();
    }
}

onTextChanged = (text: string) => {
        this.userName = text;
        if (text && text.length > 5) { Actions.pop(); }
    }
    userName: string = 'unknown';

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
)(Login);
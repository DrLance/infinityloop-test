import React, { Component } from 'react';
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
  DatePickerAndroid,
  DatePickerIOS,
  Platform
} from 'react-native';
import { Content, Form, Label, Input, Item, Button, Header, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import MainContainer from '../components/common/MainContainer';

import * as actions from '../actions';

class RegisterScreen extends Component {
  state = {
    lblTextEmail: 'Электронная почта',
    lblTextPassword: 'Пароль',
    lblTextName: 'Имя и фамилия',
    lblTextDateBirth: 'Дата рождения',
    name: '',
    email: '',
    password: '',
    birthday: '',
    isRenderDatePicker: false,
    errorMsg: ''
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.props.auth.error && this.state.errorMsg.length === 0) {
      const { msg } = this.props.auth.error;
      return this.setState({ errorMsg: msg });
    } else if (!this.props.auth.error && this.state.errorMsg.length !== 0) {
      return this.setState({ errorMsg: '' });
    }
    if (this.props.auth.user_id) {
      this.props.navigation.navigate('login');
    }
  }

  onPressRegister = () => {
    const { email, password, name, birthday } = this.state;

    this.props.register(email, password, name, birthday);
  };

  onPressClose = () => {
    this.props.navigation.navigate('login');
  };

  onPressBirthDay = async () => {
    if (Platform.OS !== 'ios') {
      const { action, year, month, day } = await DatePickerAndroid.open({
        // Use `new Date()` for current date.
        // May 25 2020. Month 0 is January.
        date: new Date()
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        const birthday = year + '-' + month + '-' + day;
        this.setState({ birthday });
      }
    }
  };

  render() {
    return (
      <MainContainer>
        <Header noShadow style={styles.headerContainer}>
          <TouchableOpacity onPress={() => this.onPressClose()}>
            <Icon ios="ios-close" android="md-close" style={{ color: '#fff' }} />
          </TouchableOpacity>
          <Title style={{ fontFamily: 'HelveticaNeueCyr-Medium' }}>Регистрация</Title>
          <TouchableOpacity onPress={() => this.onPressRegister()}>
            <Icon ios="ios-checkmark" android="md-checkmark" style={{ color: '#fff' }} />
          </TouchableOpacity>
        </Header>
        <Content>
          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30 }}>
            <Image source={require('../../assets/img/add_ava.png')} resizeMode="cover" />
          </TouchableOpacity>
          <Form>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>{this.state.lblTextEmail}</Label>
              <Input
                onChangeText={email => this.setState({ email })}
                style={styles.input}
                onFocus={() => console.log('focus')}
              />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>{this.state.lblTextPassword}</Label>
              <Input secureTextEntry style={styles.input} onChangeText={password => this.setState({ password })} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>{this.state.lblTextName}</Label>
              <Input style={styles.input} onChangeText={name => this.setState({ name })} />
            </Item>
            <Item floatingLabel style={styles.item} onPress={() => this.onPressBirthDay()}>
              <Label style={styles.label}>{this.state.lblTextDateBirth}</Label>
              <Input disabled style={styles.input} value={this.state.birthday} />
            </Item>
            {this.state.errorMsg.length > 0 ? (
              <Item error style={styles.item}>
                <Input style={styles.input} disabled placeholder={this.state.errorMsg} />
                <Icon name="close-circle" />
              </Item>
            ) : null}
          </Form>
          {this.state.isRenderDatePicker && DatePickerIOS}
        </Content>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

const styles = {
  container: {
    backgroundColor: '#566c79'
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.3)'
  },
  input: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'HelveticaNeueCyr-Medium'
  },
  label: {
    paddingLeft: 10,
    color: 'rgba(255,255,255,0.5)',
    fontSize: 16,
    fontFamily: 'HelveticaNeueCyr-Medium'
  },
  item: { marginLeft: 0, borderColor: 'rgba(255,255,255,0.3)' },

  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20
  }
};

export default connect(mapStateToProps, actions)(RegisterScreen);

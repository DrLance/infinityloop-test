import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { Content, Form, Label, Input, Item, Button, Header, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import MainContainer from '../components/common/MainContainer';

import * as actions from '../actions';

class RegisterScreen extends Component {
  state = {
    lblTextEmail: 'Электронная почта',
    lblTextPassword: 'Пароль',
    lblTextName: 'Имя и фамилия',
    lblTextDateBirth: 'Дата рождения'
  };

  componentDidMount() {
    console.log(11);
  }

  onPressRegister = () => {
    actions.register();
  };

  onPressClose = () => {
    this.props.navigation.navigate('login');
    //actions.logOut();
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
              <Input style={styles.input} onFocus={() => console.log('focus')} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>{this.state.lblTextPassword}</Label>
              <Input secureTextEntry style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>{this.state.lblTextName}</Label>
              <Input style={styles.input} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label style={styles.label}>{this.state.lblTextDateBirth}</Label>
              <Input disabled style={styles.input} />
            </Item>
          </Form>
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

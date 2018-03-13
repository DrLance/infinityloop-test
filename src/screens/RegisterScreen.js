import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import {
  Container,
  Content,
  Form,
  Label,
  Input,
  Item,
  Body,
  Button,
  Header,
  Icon,
  Title,
  Left,
  Right
} from 'native-base';
import { connect } from 'react-redux';

import * as actions from '../actions';

class RegisterScreen extends Component {
  state = {
    lblTextEmail: 'Электронная почта',
    lblTextPassword: 'Пароль',
    lblTextName: 'Имя и фамилия',
    lblTextDateBirth: 'Дата рождения'
  };

  onPressRegister = () => {
    actions.register();
  };
  render() {
    return (
      <Container style={{ backgroundColor: '#49889e' }}>
        <ImageBackground source={require('../../assets/img/bg_layer.png')} style={{ flex: 1 }}>
          <Header
            noShadow
            style={{ alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'transparent' }}
          >
            <TouchableOpacity onPress={() => this.props.navigation.navigate('login')}>
              <Icon ios="ios-close" android="md-close" style={{ color: '#fff' }} />
            </TouchableOpacity>
            <Title>Регистрация</Title>
            <TouchableOpacity onPress={() => this.onPressRegister()}>
              <Icon ios="ios-checkmark" android="md-checkmark" style={{ color: '#fff' }} />
            </TouchableOpacity>
          </Header>
          <Content>
            <TouchableOpacity>
              <Image source={require('../../assets/img/add_ava.png')} style={styles.image} resizeMode="center" />
            </TouchableOpacity>
            <Form>
              <Item floatingLabel style={styles.item}>
                <Label style={styles.label}>{this.state.lblTextEmail}</Label>
                <Input style={styles.input} onFocus={() => console.log('focus')} />
              </Item>
              <Item floatingLabel style={styles.item}>
                <Label style={styles.label}>{this.state.lblTextPassword}</Label>
                <Input style={styles.input} />
              </Item>
              <Item floatingLabel style={styles.item}>
                <Label style={styles.label}>{this.state.lblTextName}</Label>
                <Input style={styles.input} />
              </Item>
              <Item floatingLabel style={styles.item}>
                <Label style={styles.label}>{this.state.lblTextDateBirth}</Label>
                <Input style={styles.input} />
              </Item>
            </Form>
          </Content>
        </ImageBackground>
      </Container>
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
  input: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16
  },
  label: {
    paddingLeft: 10,
    color: 'rgba(255,255,255,0.5)',
    fontSize: 14
  },
  item: { marginLeft: 0, borderColor: '#98b4c1' },
  image: { alignSelf: 'center', marginVertical: 15 },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20
  },
  button: {
    width: '95%',
    alignSelf: 'center',
    marginTop: 15
  }
};

export default connect(mapStateToProps, actions)(RegisterScreen);

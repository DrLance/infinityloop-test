import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, StatusBar } from 'react-native';
import { Container, Content, Form, Label, Input, Item, Body, Button } from 'native-base';
import MainContainer from '../components/common/MainContainer';

class LoginScreen extends Component {
  state = {
    lblTextEmail: 'Электронная почта',
    lblTextPassword: 'Пароль',
    fontSizeEmail: 16,
    fontSizePassword: 16
  };

  changeText = type => {
    if (type === 'email') {
      this.setState({ lblTextEmail: 'Электронная почта'.toUpperCase(), fontSizeEmail: 14 });
    } else {
      this.setState({ lblTextPassword: 'Пароль'.toUpperCase(), fontSizePassword: 14 });
    }
  };

  render() {
    return (
      <MainContainer>
        <Content>
          <Image source={require('../../assets/img/logo_big.png')} style={styles.image} resizeMode="center" />
          <Form>
            <Item floatingLabel style={styles.item}>
              <Label
                style={{
                  paddingLeft: 10,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'HelveticaNeueCyr-Black',
                  fontSize: this.state.fontSizeEmail
                }}
              >
                {this.state.lblTextEmail}
              </Label>
              <Input
                onEndEditing={() => this.setState({ lblTextEmail: 'Электронная почта', fontSizeEmail: 16 })}
                style={styles.input}
                onFocus={() => this.changeText('email')}
              />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Label
                style={{
                  paddingLeft: 10,
                  color: 'rgba(255,255,255,0.5)',
                  fontFamily: 'HelveticaNeueCyr-Black',
                  fontSize: this.state.fontSizePassword
                }}
              >
                {this.state.lblTextPassword}
              </Label>
              <Input
                onEndEditing={() => this.setState({ lblTextPassword: 'Пароль', fontSizePassword: 16 })}
                secureTextEntry
                style={styles.input}
                onFocus={() => this.changeText()}
              />
            </Item>
          </Form>
          <Button transparent block style={styles.button}>
            <Text style={styles.textBtn}>Войти</Text>
          </Button>
        </Content>
        <View style={styles.bottomContainer}>
          <Text onPress={() => this.props.navigation.navigate('register')} style={styles.text}>
            Забыли пароль?
          </Text>
          <Text onPress={() => this.props.navigation.navigate('register')} style={styles.text}>
            Регистрация
          </Text>
        </View>
      </MainContainer>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#566c79'
  },
  input: {
    paddingLeft: 10,
    color: '#fff',
    fontSize: 16,
    fontFamily: 'HelveticaNeueCyr-Black'
  },
  text: {
    fontFamily: 'HelveticaNeueCyr-Black',
    color: 'rgba(255,255,255,0.75)',
    fontSize: 14
  },
  textBtn: {
    fontFamily: 'HelveticaNeueCyr-Black',
    color: 'rgba(255,255,255,0.5)'
  },
  label: {
    paddingLeft: 10,
    color: 'rgba(255,255,255,0.5)',
    fontFamily: 'HelveticaNeueCyr-Black'
  },
  item: { marginLeft: 0, borderColor: 'rgba(255,255,255,0.3)' },
  image: { alignSelf: 'center', marginVertical: 70 },
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
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: 'hsla(198, 51%, 56%, 0.2)'
  }
};
export default LoginScreen;

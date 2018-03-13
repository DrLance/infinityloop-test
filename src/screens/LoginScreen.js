import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, StatusBar } from 'react-native';
import { Container, Content, Form, Label, Input, Item, Body, Button } from 'native-base';

class LoginScreen extends Component {
  state = {
    lblTextEmail: 'Электронная почта',
    lblTextPassword: 'Пароль'
  };

  changeText = () => {
    this.setState({ lblTextEmail: 'Электронная почта'.toUpperCase() });
  };
  render() {
    return (
      <Container style={{ backgroundColor: '#49889e' }}>
        <ImageBackground source={require('../../assets/img/bg_layer.png')} style={{ flex: 1 }}>
          <Content>
            <Image
              source={require('../../assets/img/logo_big.png')}
              style={{ alignSelf: 'center', marginVertical: 70 }}
              resizeMode="center"
            />
            <Form>
              <Item floatingLabel style={{ marginLeft: 0, borderColor: '#98b4c1' }}>
                <Label style={{ paddingLeft: 15, color: '#98b4c1' }}>{this.state.lblTextEmail}</Label>
                <Input style={{ paddingLeft: 15, color: '#fff' }} onFocus={() => this.changeText()} />
              </Item>
              <Item floatingLabel style={{ marginLeft: 0, borderColor: '#98b4c1' }}>
                <Label style={{ paddingLeft: 15, color: '#98b4c1' }}>{this.state.lblTextPassword}</Label>
                <Input secureTextEntry style={{ paddingLeft: 15, color: '#fff' }} />
              </Item>
            </Form>
            <Button
              transparent
              block
              style={{
                width: '92%',
                alignSelf: 'center',
                borderRadius: 15,
                marginTop: 15,
                //backgroundColor: '#457a90'
                backgroundColor: 'hsla(198, 51%, 56%, 0.2)'
              }}
            >
              <Text style={{ color: '#fff' }}>Войти</Text>
            </Button>
          </Content>

          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: 30,
              width: '100%',
              paddingHorizontal: 20
            }}
          >
            <Text onPress={() => this.props.navigation.navigate('register')} style={{ color: '#98b4c1' }}>
              Забыли пароль?
            </Text>
            <Text onPress={() => this.props.navigation.navigate('register')} style={{ color: '#98b4c1' }}>
              Регистрация
            </Text>
          </View>
        </ImageBackground>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#566c79'
  }
};

export default LoginScreen;

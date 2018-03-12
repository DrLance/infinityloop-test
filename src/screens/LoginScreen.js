import React, { Component } from 'react';
import { ImageBackground, Image, Text, View } from 'react-native';
import { Container, Content, Form, Label, Input, Item, Body, Button } from 'native-base';

class LoginScreen extends Component {
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
                <Label style={{ paddingLeft: 15, color: '#98b4c1' }}>{'Электронная почта'.toUpperCase()}</Label>
                <Input style={{ paddingLeft: 15, color: '#fff' }} onFocus={() => console.log('focus')} />
              </Item>
              <Item floatingLabel style={{ marginLeft: 0, borderColor: '#98b4c1' }}>
                <Label style={{ paddingLeft: 15, color: '#98b4c1' }}>{'Пароль'.toUpperCase()}</Label>
                <Input style={{ paddingLeft: 15, color: '#fff' }} />
              </Item>
            </Form>
            <Button
              transparent
              block
              style={{
                width: '95%',
                alignSelf: 'center',
                marginTop: 15
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
            <Text style={{ color: '#98b4c1' }}>Забыли пароль?</Text>
            <Text style={{ color: '#98b4c1' }}>Регистрация</Text>
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

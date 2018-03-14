import React, { Component } from 'react';
import { ImageBackground, Image, Text, View, TouchableOpacity } from 'react-native';
import { Content, Form, Label, Input, Item, Button, Header, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import MainContainer from '../components/common/MainContainer';

import * as actions from '../actions';

class ProfileScreen extends Component {
  state = {
    lblTextEmail: 'Электронная почта',
    lblTextPassword: 'Пароль',
    lblTextName: 'Имя и фамилия',
    lblTextDateBirth: 'Дата рождения'
  };

  onPress = () => {
    this.props.logOut();
    this.props.navigation.navigate('login');
  };

  render() {
    let fio = '',
      sex = '1',
      birthday = '';
    if (this.props.user) {
      fio = this.props.user.fio;
      sex = this.props.user.sex;
      birthday = this.props.user.birthday;
    }
    return (
      <MainContainer>
        <Header noShadow style={styles.headerContainer}>
          <Title style={{ fontFamily: 'HelveticaNeueCyr-Medium' }}>Профиль</Title>
        </Header>
        <Content>
          <TouchableOpacity style={{ alignSelf: 'center', marginTop: 30 }}>
            <Image source={require('../../assets/img/add_ava.png')} resizeMode="cover" />
          </TouchableOpacity>
          <Form>
            <Item floatingLabel style={styles.item}>
              <Input disabled style={styles.input} value={fio} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input disabled style={styles.input} value={sex === '1' ? 'Мужской' : 'Женский'} />
            </Item>
            <Item floatingLabel style={styles.item}>
              <Input disabled style={styles.input} value={birthday} />
            </Item>
          </Form>
          <Button transparent block style={styles.button} onPress={() => this.onPress()}>
            <Text style={styles.textBtn}>Выйти</Text>
          </Button>
        </Content>
      </MainContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user_info
  };
};

const styles = {
  container: {
    backgroundColor: '#566c79'
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
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
  item: {
    marginLeft: 0,
    borderColor: 'rgba(255,255,255,0.3)'
  },
  button: {
    width: '95%',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 15,
    backgroundColor: 'hsla(198, 51%, 56%, 0.2)'
  },
  textBtn: {
    fontFamily: 'HelveticaNeueCyr-Black',
    color: 'rgba(255,255,255,0.5)'
  },
  bottomContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    marginBottom: 30,
    width: '100%',
    paddingHorizontal: 20
  }
};

export default connect(mapStateToProps, actions)(ProfileScreen);

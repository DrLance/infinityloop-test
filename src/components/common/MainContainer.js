import React from 'react';
import { ImageBackground } from 'react-native';
import { Container } from 'native-base';

const MainContainer = props => {
  return (
    <Container style={{ backgroundColor: '#49889e' }}>
      <ImageBackground source={require('../../../assets/img/bg_layer.png')} style={{ flex: 1 }}>
        {props.children}
      </ImageBackground>
    </Container>
  );
};

export default MainContainer;

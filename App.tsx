import {View, Text} from 'react-native';
import React from 'react';
import HomeComponent from './HomeComponent';
import Room from './Room';

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <HomeComponent />
      <Room name={'mustafa'} age={25} surname={'hakimji'} />
    </View>
  );
};

export default App;

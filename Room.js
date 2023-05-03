import {View, Text} from 'react-native';
import React from 'react';

const Room = ({name, age, surname}) => {
  const room1 = x => {
    return x * 100 * 100;
  };
  return (
    <View>
      <Text>{name}</Text>
      <Text>{age}</Text>
      <Text>{surname}</Text>
    </View>
  );
};

export default Room;

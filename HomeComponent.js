import {Text, View} from 'react-native';
import React, {Component} from 'react';
import Room from './Room';

export class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  getData(x) {
    const sum = x * 10;
    this.setState({counter: this.state.counter + sum});
    return sum;
  }
  render() {
    return (
      <View>
        <Text>{this.state.counter}</Text>
        <Room name={'mustafa'} age={25} surname={'hakimji'} />
      </View>
    );
  }
}

export default HomeComponent;

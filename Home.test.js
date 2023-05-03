import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import HomeComponent from './HomeComponent';
import {global1, global2} from './GlobalFunctions';
import Room from './Room';

// With the help of this code we can perform Snapshot Testing.

// test('Testing the Home Components', () => {
//   const snap = renderer.create(<HomeComponent />).toJSON();
//   console.log('Snapshot test here -->', snap);
//   expect(snap).toMatchSnapshot();
// });

// With the help of this code we can perform Function Testing.

test('Function Testing --> ', () => {
  const HomeRefrence = renderer.create(<HomeComponent />).getInstance();
  // console.log('Home Component --> ', HomeRefrence);
  const output = HomeRefrence.getData(10);
  expect(HomeRefrence.getData(10)).toEqual(output);
});

// Here we are testing the state.

// here we are creating our test function which will take 2 argumenst 1st a String and the 2ns one is Function
test('State Testing ', () => {
  // here inside the function we are creating a variable in which we will store the instance of our class component and then we can use it as an Object to get access of all the function and states available insode our component, By using the getInstance() method.
  const state = renderer.create(<HomeComponent />).getInstance();

  // Now here we are calling our function first because this function is responsible to change our state, and storing its return value inside a variable so the variable will become the result of our function.
  const result = state.getData(10);

  // now here we are calling the expect method and providing the initial state value inside it and comparing it with our result varibale as the function output will become the value of our state. So with the help of this we can perform testing dynamically and have no need to provide the out value manually.
  expect(state.state.counter).toBe(result);
});

// Global Function testing.

describe('Global function testing which are present inside our global file', () => {
  test('Global functio testing', () => {
    const output = global1(100);
    expect(global1(100)).toBe(output);
  });
});

describe('Global function testing which are present inside our global file', () => {
  test('Global functio testing', () => {
    const output = global2([0]);
    expect(global2([0])).toBe(output);
  });
});

test('Trying to get function inside functional componnet', () => {
  const RoomRef = renderer
    .create(<Room name={'mustafa'} age={25} surname={'hakimji'} />)
    .toJSON();
  const [data, data2, data3] = RoomRef.children;
  const [name] = data.children;
  const [age] = data2.children;
  const [surname] = data3.children;

  console.log(name, age, surname);
  // console.log(name, age, surname);
  expect(name).toBe('mustafa');
  expect(age).toBe('25');
  expect(surname).toBe('hakimji');
});

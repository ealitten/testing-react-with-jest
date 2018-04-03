import Todo from '../app/todo';
import React from 'react';
import { mount } from 'enzyme';

test('Todo component renders the text of the todo', () => {
  const todo = { id: 1, done: false, name: 'Buy Milk' };
  const wrapper = mount(<Todo todo={todo} />)
  const p = wrapper.find('.toggle-todo');
  expect(p.text()).toBe('Buy Milk');
});
import React from 'react';
import { mount } from 'enzyme';
import NavBar from '.';

let component;

describe('<NavBar />', () => {
  beforeEach(() => {
    component = mount(<NavBar />);
  });

  it('shoud be rendered', () => {
    expect(component.exists()).toBeTruthy();
  });
});

/// <reference types="jest"/>
import React from 'react';
import {TextInput} from 'react-native';
import { shallow } from 'enzyme';

import {Login} from '../Login';

jest.unmock('react-native');

function setup() {
  const props = {
// Här kan ni mocka komponentens props om sådana finns
// typ userName: 'test'
  };

  const enzymeWrapper = shallow(<Login {...props} /> );

  return {
    props,
    enzymeWrapper,
  };
}

describe('components', () => {
  /**
   * Test component rendering. Properties of children might be tested by importing their type:
   *   import { Text } from 'react-native';
   *    const busyProps = enzymeWrapper.find(Text).props();
   *    expect(busyProps.text).toBe('test);
   */
  describe('Login', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();

      // Test Login
      const textInput2 = enzymeWrapper.find(TextInput).at(1).props();
      expect(textInput2.placeholder).toBe('Password');
    });
  });
});
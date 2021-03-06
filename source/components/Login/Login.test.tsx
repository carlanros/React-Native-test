/// <reference types="jest"/>
import React from 'react';
import {TextInput} from 'react-native';
import { shallow } from 'enzyme';

import {Login} from '../Login';
import * as types from '../../Types';

jest.unmock('react-native');

function setup() {
  const props: types.IProps = {
    login: {
      user: null,
      isLoggedIn: false,
    },

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

    });
  });
});
/// <reference types="jest"/>
import React from 'react';
import { shallow } from 'enzyme';

import { Main }from './'; // här
import * as types from '../../Types';
import  Progress  from '../Progress'; // upp 1 nivå

jest.unmock('react-native');

function setup() {
  const props: types.IProps = {
    login: {
      user: null,
      isLoggedIn: false,
    },

  };

  const enzymeWrapper = shallow(<Main {...props} /> );

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
  describe('Main', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
      // Test Progress
      const progress = enzymeWrapper.find(Progress).props();
      expect(progress.amount).toBe(0);
    });
  });
});
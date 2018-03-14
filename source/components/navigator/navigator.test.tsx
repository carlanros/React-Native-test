/// <reference types="jest"/>
import React from 'react';
import { shallow } from 'enzyme';

import Navigator from './index';
import * as types from '../../Types';

jest.unmock('react-native');

function setup() {

  const enzymeWrapper = shallow(<Navigator /> );

  return {
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
  describe('Navigator', () => {
    it('should render self and subcomponents', () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
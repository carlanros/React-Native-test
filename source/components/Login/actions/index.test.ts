import configureMockStore, { MockStore } from 'redux-mock-store';
import { Store } from '../../../store';
import { FacebookLogin } from '../actions';
import * as loginTypes from '../types';

const storeMock = configureMockStore<Store>();

describe('Facebook actions', () => {
    beforeEach(() => {
        // @ts-ignore
        storeMock.clearActions();
     });
      test('FacebookLogin returns Success when done', async () => {
          const expectedReply = {
              name: 'MockName',
              picture: {
                  data: {
                      url: 'http://mockImageUrl/',
                  },
              },
          };
          const expectedPayload = {
            name: expectedReply.name,
            picture: expectedReply.picture.data.url,
            accessToken: 'fbTokenMock',
            type: 'Facebook',
          };
          const expectedActions = [ {type: loginTypes.LoginConstants.LOGIN_SUCCESS,
          payload: expectedPayload,
            },
        ];
        // Dispatch action
        // @ts-ignore
        await storeMock.dispatch(FacebookLogin());

        // @ts-ignore
        expect(storeMock.getActions()).toMatchSnapshot();

        // @ts-ignore
     expect(storeMock.getActions()).toEqual(expectedActions);
      });

});

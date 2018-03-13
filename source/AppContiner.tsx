import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store, { configurePersistStore } from './store';
import Appnavigator from './components/navigator';

const persistor = configurePersistStore;

const AppContainer = () => (
  <Provider store={Store}>
      <PersistGate
      persistor={persistor}>
        <Appnavigator />
      </PersistGate>
  </Provider>);

export default AppContainer;
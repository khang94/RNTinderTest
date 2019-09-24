import React, {Component} from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import {store, persistor} from './store';
import AppNav from './navigation/MainNavigator';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNav />
        </PersistGate>
      </Provider>
    );
  }
}
export default App;

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import AppNavigation from './src/navigations';
import store from './src/store';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
     <AppNavigation />
      </Provider>
    );
  }
}


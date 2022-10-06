import React from 'react';
import {Provider} from 'react-redux';

import FormsField from './components/forms/forms-field';
import DisplayField from './components/display/display-field';

import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      <FormsField/>
      <DisplayField/>
    </Provider>
  );
};

export default App;
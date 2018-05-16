import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { EnthusiasmAction } from './actions/index';
import Hello from './container/Hello';
import { enthusiam } from './reducer/index';
import { IStoreState } from './types/index';


const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiam, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript'
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();

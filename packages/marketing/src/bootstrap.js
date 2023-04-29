import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function to start up the app
export default (el) => {
  ReactDOM.render(<App />, document.querySelector('#root'));
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

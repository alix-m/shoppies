import React from 'react'
import ReactDOM from 'react-dom'

import App from './App';
import { AppProvider } from './context/AppProvider'

ReactDOM.render(
  <React.StrictMode>
      <AppProvider>
        <App/>
      </AppProvider>
      </React.StrictMode>,
  document.getElementById('app')
);

module.hot.accept();
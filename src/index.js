import React from 'react'
import ReactDOM from 'react-dom'

import App from './content/App';
import { SearchProvider } from './context/SearchProvider'

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
    <App/>
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

module.hot.accept();
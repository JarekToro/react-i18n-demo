import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './i18n'; // bundle in the i18n init code

ReactDOM.render(
  <React.StrictMode >
      <Suspense fallback={<div />} >
              <App />
      </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

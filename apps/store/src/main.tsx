// import { StrictMode } from 'react';
// import * as ReactDOM from 'react-dom/client';
// import { BrowserRouter } from 'react-router-dom';
// import App from './app/app';

// import { configureStore } from '@reduxjs/toolkit';
// import { Provider } from 'react-redux';

// import { _FEATURE_KEY, Reducer } from './app/....slice';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// const store = configureStore({
//   reducer: { [_FEATURE_KEY]: Reducer },
//   // Additional middleware can be passed to this array
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
//   devTools: process.env.NODE_ENV !== 'production',
//   // Optional Redux store enhancers
//   enhancers: [],
// });

// root.render(
//   // <Provider store={store}>
//   <StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </StrictMode>
//   // </Provider>
// );

import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

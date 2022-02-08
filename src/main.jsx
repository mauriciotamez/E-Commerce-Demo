import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

// Aquí importamos el reducer creado anteriormente
import rootReducer from './redux/reducers' 

const store = createStore(
		rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> {/* Aquí sólamente encerramos a <App/> */}
      <App />                {/* En el provider */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
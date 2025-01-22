import React from 'react'
import ReactDOM from 'react-dom/client'
import "./styles/base.scss"
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from "./App.tsx"




ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
  <App/>
</Provider>
)



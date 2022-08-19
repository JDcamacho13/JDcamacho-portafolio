import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider>
    <App />
  </Provider>
)

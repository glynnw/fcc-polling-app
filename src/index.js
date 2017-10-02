import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App'
import "./app.scss"

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.querySelector('#app'))
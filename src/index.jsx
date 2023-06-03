import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import AnnimatedRoutes from './components/AnnimatedRoutes'


//import Loader from './components/Loader'

import Menu from './components/Menu'

const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <React.StrictMode>
    <Router>
      <Menu />
      <AnnimatedRoutes />
    </Router>
  </React.StrictMode>
)

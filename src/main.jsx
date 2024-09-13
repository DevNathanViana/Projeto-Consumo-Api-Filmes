import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/home/index.jsx'
import GlobalStyles from './styles/globalStyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <Home />
  </StrictMode>

)

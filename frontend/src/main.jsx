import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';/*package */
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";/*package */
import "slick-carousel/slick/slick-theme.css";/*package */

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

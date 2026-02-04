import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp3 from './components/Comp3.jsx'
createRoot(document.getElementById('root')).render(
   <Comp3></Comp3>,
)

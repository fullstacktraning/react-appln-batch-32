import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Comp1 from './components/Comp1.jsx'
import Comp3 from './components/Comp3.jsx'
import Inline from './components/Inline.jsx'
import External from './components/External.jsx'
import Global from './components/Global.jsx'
import FontAwesome from './components/FontAwesome.jsx'
import BootStrap from './components/BootStrap.jsx'
import State from './components/State.jsx'
import Parent1 from "./components/Parent1.jsx"
createRoot(document.getElementById('root')).render(
   <Parent1></Parent1>,
)

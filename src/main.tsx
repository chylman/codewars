import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {digitize} from "./katas/10.ts";


console.log(digitize(2354364364))


createRoot(document.getElementById('root')!).render(
    <App />
)

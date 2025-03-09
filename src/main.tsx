import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {century} from "./katas/07.ts";


century(1705)

createRoot(document.getElementById('root')!).render(
    <App />
)

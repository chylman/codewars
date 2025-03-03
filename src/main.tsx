import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {squareSum} from "./catas/02.ts";


console.log(squareSum([1,2,3]))

createRoot(document.getElementById('root')!).render(
    <App />
)

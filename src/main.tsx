import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {calculator} from "./katas/11.ts";


console.log(calculator(3, 2, '+'))


createRoot(document.getElementById('root')!).render(
    <App />
)

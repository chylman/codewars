import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {humanReadable} from "./katas/31.ts";

console.log(humanReadable(45296))

createRoot(document.getElementById('root')!).render(
    <App />
)

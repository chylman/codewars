import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {arrayDiff} from "./katas/25.ts";


console.log(arrayDiff([1,2,3], [1,2]))

createRoot(document.getElementById('root')!).render(
    <App />
)

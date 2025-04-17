import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {maxPossibleScore} from "./katas/21.ts";


console.log(maxPossibleScore({ 'Codewars': 10000, 'Kata': 50, 'Fun': 800 }, ['Kata', 'codewars']))

createRoot(document.getElementById('root')!).render(
    <App />
)

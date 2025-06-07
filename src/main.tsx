import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {findUniq} from "./katas/33.ts";

console.log(findUniq([ 1, 0, 0 ]))
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
console.log(findUniq([ 0, 1, 0 ]))

createRoot(document.getElementById('root')!).render(
    <App />
)
